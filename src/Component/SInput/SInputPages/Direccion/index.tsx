import React, { Component } from 'react';
import { SMapView, SPage, SView } from '../../../..';
import SIcon from '../../../SIcon';
import SNavigation from '../../../SNavigation';
import ListaDireccion from './ListaDireccion';

class Direccion extends Component {
    direccion;
    latitude;
    longitude;
    constructor(props) {
        super(props);
        this.state = {
        };
        this.direccion = SNavigation.getParam('direccion',"");
        this.latitude = SNavigation.getParam('lat',-17.779167);
        this.longitude = SNavigation.getParam('lng', -63.1775);
    }
    getIcon() {
        return <SView style={{
            position: 'absolute',
            width: 30,
            height: 30,
            transform: [{ translateY: -10 }],
        }} >
            <SIcon name={"Marker"} />
        </SView>
    }
    render() {
        return (
            <SPage title={"Direccion"} disableScroll>
                <SView col={"xs-12"} center flex>
                    <SView col={"xs-12"} height center>
                        <SMapView initialRegion={{
                            latitude: this.latitude,
                            longitude: this.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        
                        onRegionChangeComplete={(region)=>{
                            console.log(region)
                        }}/>
                        {this.getIcon()}
                    </SView>
                    <ListaDireccion direccion={this.direccion} />
                </SView>

            </SPage>
        );
    }
}
export default Direccion;