import React from "react";
import { SDate, SHr, SText, STheme, SThread, SView } from "../../";
import { SDatePickerPropsType } from ".";
import { Animated, FlatList } from "react-native";

const height = 50
export default class Anos extends React.Component<SDatePickerPropsType> {
    list: FlatList;


    state = {
        layout: null,
        scrollOffset: 0,
        currentIndex: 0,
        value: "",
    }
    // shouldComponentUpdate(nextProps: Readonly<SDatePickerPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     return true;
    // }
    years;
    startIndex = 0;
    animated: Animated.Value
    constructor(props) {
        super(props);
        this.state.value = (this.props.defaultValue ?? "") + "";
        const currentYear = !this.state.value ? new SDate().getYear() : this.state.value;
        const yearToStart = 1950;
        this.years = Array.from({ length: 100 }, (_, index) => yearToStart + index);
        this.startIndex = this.years.findIndex(year => year == currentYear);
        this.animated = new Animated.Value(0);
    }

    componentDidMount(): void {
        new SThread(200, "asdasd", false).start(() => {
            // this.list.scrollToIndex({
            //     animated: false,
            //     index: this.startIndex,
            // })
            // console.log(this.startIndex)
            // console.log(this.startIndex)
            const offset = ((this.startIndex * height) + ((this.state.layout.height / 2)) - this.state.layout.height / 2 + height / 2);
            this.list.scrollToOffset({
                animated: false,
                offset: offset > 0 ? offset : 0, // Previene valores negativos
            });
        })
    }

    renderAno = ({ item, index }) => {
        // const itemCenterPosition = (index * height) + height / 2;
        // const distanceFromCenter = Math.abs(this.state.scrollOffset + this.state.layout.height / 2 - itemCenterPosition);

        // const scale = Math.max(1.7 - distanceFromCenter / (this.state.layout.height / 2), 0.5); // Asegura un mínimo de escala

        // Ajusta la escala basada en la distancia al centro
        const inputRange = [
            ((index - 5) * height) + (this.state.layout.height / 2), // ítem anterior
            (index * height) + (height / 2) + (this.state.layout.height / 2),       // ítem actual
            ((index + 5) * height) + (this.state.layout.height / 2)// ítem siguiente
        ];
        const scale: any = this.animated.interpolate({
            inputRange,
            outputRange: [0.7, 2.5, 0.7],
            extrapolate: 'identity',
        })

        const color: any = this.animated.interpolate({
            inputRange,
            outputRange: [STheme.color.text + "66", STheme.color.text, STheme.color.text + "66"],
            extrapolate: 'clamp',
        })
        return < SText animated height={height} center fontSize={12} style={{ transform: [{ scale: scale }], color: color }
        }>{item}</SText >
    }
    onChangeValue() {
    }
    render() {
        return <SView col={"xs-12"} height onLayout={e => {
            this.setState({ layout: e.nativeEvent.layout })
        }} center>
            <SView
                style={{
                    width: 100,
                    height: height,
                    position: "absolute",
                    // backgroundColor: STheme.color.card,
                    // opacity: 0.2,
                    borderColor: STheme.color.accent,
                    borderBottomWidth: 2,
                    borderTopWidth: 2
                }}
            />
            {!this.state.layout ? null : <FlatList
                style={{
                    width: "100%"
                }}

                ref={ref => this.list = ref}
                data={this.years}
                initialScrollIndex={this.startIndex}
                keyExtractor={item => item.toString()}
                renderItem={this.renderAno}
                scrollEnabled
                onScroll={(event) => {
                    // return;
                    this.animated.setValue(event.nativeEvent.contentOffset.y + (this.state.layout.height / 2))

                    // this.setState({ scrollOffset: event.nativeEvent.contentOffset.y })
                    this.state.scrollOffset = event.nativeEvent.contentOffset.y;
                    const index = ((this.state.scrollOffset + (this.state.layout.height / 2)) / height) - (((this.state.layout.height + (height)) / 2) / height)
                    const closestIndex = Math.round(index);
                    // console.log(closestIndex)
                    // return;

                    if (this.state.currentIndex != closestIndex) {
                        if (!this.years[closestIndex]) return;
                        this.state.value = this.years[closestIndex];
                        this.onChangeValue();
                    }
                    this.state.currentIndex = closestIndex;
                    new SThread(300, "askdna", true).start(() => {
                        const offset = ((closestIndex - (((this.state.layout.height - (height)) / 2) / height)) * height) + (this.state.layout.height / 2);
                        this.list.scrollToOffset({ animated: true, offset: offset });
                        this.onChangeValue();
                    })
                    // setScrollOffset(event.nativeEvent.contentOffset.y);
                }}
                snapToAlignment={"start"} // Ajusta según necesites: "start", "center", "end"
                decelerationRate={"fast"}
                snapToInterval={height * 2}
                scrollEventThrottle={16}
                // maxToRenderPerBatch={100}
                // initialNumToRender={100}
                // windowSize={this.state.layout.height / height}
                ListHeaderComponent={<SView height={this.state.layout.height / 2} />}
                ListFooterComponent={<SView height={this.state.layout.height / 2} />}
                getItemLayout={(data, index) => (
                    { length: height, offset: index * height, index: index }
                )}
            />}

        </SView>

    }
}