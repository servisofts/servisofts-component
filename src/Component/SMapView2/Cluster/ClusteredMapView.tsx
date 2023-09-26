'use-strict'

// base libs
import PropTypes from 'prop-types'
import React, { Component, PureComponent } from 'react'
import {
  Platform,
  Dimensions,
  LayoutAnimation
} from 'react-native'
// map-related libs
// import MapView from 'react-native-maps'
import SMapView from '..'
import SuperCluster from 'supercluster'
import GeoViewport from '@mapbox/geo-viewport'
// components / views
import ClusterMarker from './ClusterMarker'
// libs / utils
import {
  regionToBoundingBox,
  itemToGeoJSONFeature,
  getCoordinatesFromItem,
} from './util'


type ClusteredMapViewProps = {
  // ...MapView.propTypes,
  // number
  radius: number,
  width: number,
  height: number,
  extent: number,
  minZoom: number,
  maxZoom: number,
  clusterPressMaxChildren: number,
  // array
  data: any[],
  // func
  onExplode: any,
  onImplode: any,
  onClusterPress: any,
  renderMarker: any,
  renderCluster: any,
  // bool
  animateClusters: boolean,
  clusteringEnabled: boolean,
  preserveClusterPressBehavior: boolean,
  // object
  layoutAnimationConf: object,
  edgePadding: object,
  // string
  // mutiple
  accessor: any
}

export default class ClusteredMapView extends Component<ClusteredMapViewProps> {

  static defaultProps = {
    minZoom: 0,
    maxZoom: 30,
    extent: 512,
    accessor: 'location',
    animateClusters: false,
    clusteringEnabled: true,
    clusterPressMaxChildren: 100,
    preserveClusterPressBehavior: true,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    layoutAnimationConf: LayoutAnimation.Presets.spring,
    edgePadding: { top: 10, left: 10, right: 10, bottom: 10 }
  }

  isAndroid;
  dimensions;
  mapview;
  index;
  state;
  props;
  constructor(props) {
    super(props)

    this.state = {
      data: [], // helds renderable clusters and markers
      region: props.region || props.initialRegion, // helds current map region
    }

    this.isAndroid = Platform.OS === 'android'
    this.dimensions = [props.width, props.height]

    this.mapRef = this.mapRef.bind(this)
    this.onClusterPress = this.onClusterPress.bind(this)
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this)
  }

  componentDidMount() {
    this.clusterize(this.props.data)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data)
      this.clusterize(nextProps.data)
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.isAndroid && this.props.animateClusters && this.clustersChanged(nextState))
      LayoutAnimation.configureNext(this.props.layoutAnimationConf)
  }

  fitToCoordinates(points: { latitude: number; longitude: number; }[], options: { edgePadding?: { top: number; right: number; bottom: number; left: number; }; animated?: boolean; }) {
    this.mapview.fitToCoordinates(points, options)
  }
  mapRef(ref) {
    this.mapview = ref
  }

  getMapRef() {
    return this.mapview
  }

  getClusteringEngine() {
    return this.index
  }

  clusterize(dataset) {
    this.index = new SuperCluster({ // eslint-disable-line new-cap
      extent: this.props.extent,
      minZoom: this.props.minZoom,
      maxZoom: this.props.maxZoom,
      radius: this.props.radius || (this.dimensions[0] * .045), // 4.5% of screen width
    })

    // get formatted GeoPoints for cluster
    const rawData = dataset.map(item => itemToGeoJSONFeature(item, this.props.accessor))

    // load geopoints into SuperCluster
    this.index.load(rawData)

    const data = this.getClusters(this.state.region)
    this.setState({ data })
  }

  clustersChanged(nextState) {
    return this.state.data.length !== nextState.data.length
  }

  onRegionChangeComplete(region) {
    let data = this.getClusters(region)
    this.setState({ region, data }, () => {
      this.props.onRegionChangeComplete && this.props.onRegionChangeComplete(region, data)
    })
  }

  getClusters(region) {
    const bbox = regionToBoundingBox(region),
      viewport = (region.longitudeDelta) >= 40 ? { zoom: this.props.minZoom } : GeoViewport.viewport(bbox, this.dimensions)

    return this.index.getClusters(bbox, viewport.zoom)
  }

  onClusterPress(cluster) {

    // cluster press behavior might be extremely custom.
    if (!this.props.preserveClusterPressBehavior) {
      this.props.onClusterPress && this.props.onClusterPress(cluster.properties.cluster_id)
      return
    }

    // //////////////////////////////////////////////////////////////////////////////////
    // NEW IMPLEMENTATION (with fitToCoordinates)
    // //////////////////////////////////////////////////////////////////////////////////
    // get cluster children
    const children = this.index.getLeaves(cluster.properties.cluster_id, this.props.clusterPressMaxChildren)
    const markers = children.map(c => c.properties.item)

    const coordinates = markers.map(item => getCoordinatesFromItem(item, this.props.accessor, false))

    // fit right around them, considering edge padding
    this.mapview.fitToCoordinates(coordinates, { edgePadding: this.props.edgePadding })

    this.props.onClusterPress && this.props.onClusterPress(cluster.properties.cluster_id, markers)
  }

  render() {
    const { style, ...props } = this.props

    return (
      <SMapView
        {...props}
        style={style}
        ref={this.mapRef}
        onRegionChangeComplete={this.onRegionChangeComplete}>
        {
          this.props.clusteringEnabled && this.state.data.map((d) => {
            if (d.properties.point_count === 0)
              return this.props.renderMarker({ ...d.properties.item, count: 1 })
            const { properties, geometry } = d;
            const latitude = geometry.coordinates[1],
              longitude = geometry.coordinates[0]

            const cluster = {
              count: properties.point_count,
              location: { latitude, longitude },
              id: properties.cluster_id,
            }
            return this.props.renderCluster(cluster, this.onClusterPress.bind(this, d));
            return (
              <ClusterMarker
                {...d}
                onPress={this.onClusterPress}
                renderCluster={this.props.renderCluster}
                key={`cluster-${d.properties.cluster_id}`} />
            )
          })
        }
        {
          !this.props.clusteringEnabled && this.props.data.map(d => this.props.renderMarker(d))
        }
        {this.props.children}
      </SMapView>
    )
  }
}
