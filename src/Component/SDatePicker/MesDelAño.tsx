import React from "react";
import { SDate, SHr, SText, SThread, SView } from "../../";
import { SDatePickerPropsType } from ".";
import { FlatList } from "react-native";


const SemanasDelMes = ["Primera", "Segunda", "Tercera", "Cuarta", "Quinta", "Secta"]
const DiasDeLaSemana = ["L", "M", "M", "J", "V", "S", "D"]
const config = {
    fontScale: 10,
    height: 800,
}
const Colors = {
    border: "#66666666",
    text: "#fff",
    textGray: "#666",
}
const Dia = ({ y, x, date, mes, onSelect }: { y: any, x: any, mes: any, date: SDate, onSelect: any }) => {
    const isCurMonth = date.getMonth() == mes;
    const isToday = date.isCurDate()
    return <SView flex style={{
        borderColor: Colors.border,
        // borderWidth: 1,
        // alignItems: "flex-end",
        // justifyContent: "center",
    }} onPress={!onSelect ? null : onSelect.bind(this, date)} center>
        {!isCurMonth ? null :
            <SView style={{
                width: config.fontScale * 2,
                height: config.fontScale * 2,
                backgroundColor: isToday ? "#f00" : "",
                borderRadius: config.fontScale * 2
            }} center>
                <SText fontSize={config.fontScale} color={isCurMonth ? Colors.text : Colors.textGray} >{`${date.getDay()}`}</SText>
            </SView>
        }
    </SView>
}
const Semana = ({ y, firstDayOfWeek, mes, onSelect }) => {
    const date = firstDayOfWeek.clone();
    date.addDay(-1)
    return <SView col={"xs-12"} row flex >
        {DiasDeLaSemana.map((a, i) => {
            date.addDay(1);
            return <Dia y={y} x={i} mes={mes} date={date.clone()} onSelect={onSelect} />
        })}
    </SView>
}
const Header = ({ }) => {
    return <SView col={"xs-12"} row  >
        {DiasDeLaSemana.map((a, i) => <SView flex style={{
            padding: 4
        }} center>
            <SText fontSize={config.fontScale}>{a}</SText>
        </SView>)}
    </SView>
}


const RenderMes = ({ mes, ano, onSelect }) => {
    let date = new SDate("1999-01-01", "yyyy-MM-dd");
    date.setYear(ano);
    date.addMonth(mes - 1);
    let curdate = date.clone();
    date = date.getFirstDayOfWeek()
    date.addDay(-7)
    return <SView col={"xs-4 sm-3"} center>
        <SView col={"xs-11"} height={180}>
            <SText fontSize={config.fontScale * 1.7} bold>{curdate.toString("MON.")}</SText>
            <SHr h={4} />
            <Header />
            {SemanasDelMes.map((a, i) => {
                date.addDay(7)
                return <Semana mes={mes} y={i} firstDayOfWeek={date.getFirstDayOfWeek().clone()} onSelect={onSelect} />
            })}
        </SView>
    </SView>
}
const renderAno = (item, onSelect) => {
    return < SView width={"100%"} row height={config.height}>
        <SText fontSize={20}>{item}</SText>
        <SHr />
        <RenderMes mes={1} ano={item} onSelect={onSelect} />
        <RenderMes mes={2} ano={item} onSelect={onSelect} />
        <RenderMes mes={3} ano={item} onSelect={onSelect} />
        <RenderMes mes={4} ano={item} onSelect={onSelect} />
        <RenderMes mes={5} ano={item} onSelect={onSelect} />
        <RenderMes mes={6} ano={item} onSelect={onSelect} />
        <RenderMes mes={7} ano={item} onSelect={onSelect} />
        <RenderMes mes={8} ano={item} onSelect={onSelect} />
        <RenderMes mes={9} ano={item} onSelect={onSelect} />
        <RenderMes mes={10} ano={item} onSelect={onSelect} />
        <RenderMes mes={11} ano={item} onSelect={onSelect} />
        <RenderMes mes={12} ano={item} onSelect={onSelect} />

    </SView >
}

export default class MesesDelAño extends React.Component<SDatePickerPropsType> {
    list: FlatList;

    shouldComponentUpdate(nextProps: Readonly<SDatePickerPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        return false;
    }

    componentDidMount(): void {
        if (this.list) {
            new SThread(100, "asdasd", false).start(() => {
                this.list.scrollToIndex({
                    animated: false,
                    index: this.startIndex
                })
            })

        }
    }
    startIndex = 0;
    render() {
        // this.list.
        const currentYear = new SDate().getYear();
        console.log(currentYear)
        const yearToStart = 1950;
        const years = Array.from({ length: 100 }, (_, index) => yearToStart + index);
        this.startIndex = years.findIndex(year => year == currentYear);

        return <SView col={"xs-12"} height>
            <FlatList
                ref={ref => this.list = ref}
                data={years}
                initialScrollIndex={this.startIndex}
                keyExtractor={item => item.toString()}
                renderItem={({ item }) => renderAno(item, this.props.onSelect)}
                scrollEnabled
                // maxToRenderPerBatch={10}
                // initialNumToRender={3}
                // windowSize={3}
                getItemLayout={(data, index) => (
                    { length: config.height, offset: index * config.height, index: index }
                )}
            />
        </SView>

    }
}