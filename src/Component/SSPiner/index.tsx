import React from "react";
import { SDate, SHr, SText, STheme, SThread, SView } from "../../";
import { Animated, FlatList } from "react-native";

export default class SSPiner extends React.Component<{ defaultValue?: string, itemHeight?: number, options?: any[], onChange?: (any) => void }> {
    list: FlatList;


    state = {
        layout: null,
        scrollOffset: 0,
        currentIndex: 0,
        value: "",
        itemHeight: 50
    }
    // shouldComponentUpdate(nextProps: Readonly<SDatePickerPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     return true;
    // }
    array;
    startIndex = 0;
    animated: Animated.Value
    constructor(props) {
        super(props);
        this.state.itemHeight = this.props.itemHeight ?? 50
        this.state.value = this.props.defaultValue ?? ""
        this.array = this.props.options ?? [];
        if (!this.state.value) {
            this.state.value = this.array[Math.round(this.array.length / 2)]
        }
        const curval = !this.state.value ? "" : this.state.value;
        this.startIndex = this.array.findIndex(val => val == curval);
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
            const offset = ((this.startIndex * this.state.itemHeight) + ((this.state.layout.height / 2)) - this.state.layout.height / 2 + this.state.itemHeight / 2);
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
            ((index - 4) * this.state.itemHeight) + (this.state.layout.height / 2), // ítem anterior
            (index * this.state.itemHeight) + (this.state.itemHeight / 2) + (this.state.layout.height / 2),       // ítem actual
            ((index + 4) * this.state.itemHeight) + (this.state.layout.height / 2)// ítem siguiente
        ];
        const scale: any = this.animated.interpolate({
            inputRange,
            outputRange: [0.4, 2.5, 0.4],
            extrapolate: 'clamp',
        })

        const color: any = this.animated.interpolate({
            inputRange,
            outputRange: [STheme.color.text + "66", STheme.color.text, STheme.color.text + "66"],
            extrapolate: 'clamp',
        })
        return <SView height={this.state.itemHeight} center onPress={() => {
            // this.startIndex = this.array.findIndex(val => val == curval);
            const offset = ((index * this.state.itemHeight) + ((this.state.layout.height / 2)) - this.state.layout.height / 2 + this.state.itemHeight / 2);
            this.list.scrollToOffset({
                animated: true,
                offset: offset > 0 ? offset : 0, // Previene valores negativos
            });
        }}>
            < SText
                clean
                animated
                fontSize={12}
                style={{
                    transform: [{ scale: scale }],
                    color: color
                }}
            >{item}</SText >
        </SView>
    }
    onChangeValue() {
        if (this.props.onChange) this.props.onChange(this.state.value)
    }
    render() {
        return <SView col={"xs-12"} {...this.props} onLayout={e => {
            this.setState({ layout: e.nativeEvent.layout })
        }} center>
            <SView
                style={{
                    width: 100,
                    height: this.state.itemHeight,
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
                data={this.array}
                initialScrollIndex={this.startIndex}
                keyExtractor={item => item.toString()}
                renderItem={this.renderAno}
                scrollEnabled
                onScroll={(event) => {
                    // return;
                    this.animated.setValue(event.nativeEvent.contentOffset.y + (this.state.layout.height / 2))

                    // this.setState({ scrollOffset: event.nativeEvent.contentOffset.y })
                    this.state.scrollOffset = event.nativeEvent.contentOffset.y;
                    const index = ((this.state.scrollOffset + (this.state.layout.height / 2)) / this.state.itemHeight) - (((this.state.layout.height + (this.state.itemHeight)) / 2) / this.state.itemHeight)
                    const closestIndex = Math.round(index);
                    // console.log(closestIndex)
                    // return;

                    if (this.state.currentIndex != closestIndex) {
                        if (!this.array[closestIndex]) return;
                        this.state.value = this.array[closestIndex];
                        this.onChangeValue();
                    }
                    this.state.currentIndex = closestIndex;
                    new SThread(300, "askdna", true).start(() => {
                        const offset = ((closestIndex - (((this.state.layout.height - (this.state.itemHeight)) / 2) / this.state.itemHeight)) * this.state.itemHeight) + (this.state.layout.height / 2);
                        this.list.scrollToOffset({ animated: true, offset: offset });
                        this.onChangeValue();
                    })
                    // setScrollOffset(event.nativeEvent.contentOffset.y);
                }}
                snapToAlignment={"start"} // Ajusta según necesites: "start", "center", "end"
                decelerationRate={"fast"}
                snapToInterval={this.state.itemHeight * 2}
                scrollEventThrottle={16}
                // maxToRenderPerBatch={100}
                // initialNumToRender={100}
                // windowSize={this.state.layout.height / height}
                ListHeaderComponent={<SView height={this.state.layout.height / 2} />}
                ListFooterComponent={<SView height={this.state.layout.height / 2} />}
                getItemLayout={(data, index) => (
                    { length: this.state.itemHeight, offset: index * this.state.itemHeight, index: index }
                )}
            />}

        </SView>

    }
}