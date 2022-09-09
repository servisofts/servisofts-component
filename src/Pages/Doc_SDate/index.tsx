import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SView, SText, SPage, SHr, SDate } from "../.."
export default class Doc_SDate extends Component {

    getFunction(name, funct) {
        if (typeof funct === 'object') {
            funct = JSON.stringify(funct)
        }
        return <>
            <SHr />
            <SHr />
            <SText bold>{name}</SText>
            <SHr />
            <SText>{funct}</SText>
        </>
    }

    render() {
        return (
            <SPage title={"SDate"}>
                <SHr />
                <SText fontSize={18} bold>SDate</SText>
                {this.getFunction(
                    `new SDate().toString()`,
                    new SDate().toString(),
                )}
                {this.getFunction(
                    'new SDate().toString("yyyy-MM-dd hh:mm")',
                    new SDate().toString("yyyy-MM-dd hh:mm"),
                )}
                {this.getFunction(
                    'new SDate().toString("yyyy-MM-dd")',
                    new SDate().toString("yyyy-MM-dd"),
                )}
                {this.getFunction(
                    'new SDate().toString("yyyy-MM-dd")',
                    new SDate().toString("hh:mm"),
                )}
                {this.getFunction(
                    'new SDate().toString("dd de MONTH de yyyy")',
                    new SDate().toString("dd de MONTH de yyyy"),
                )}
                {this.getFunction(
                    'new SDate().toString("yyyy, MON dd")',
                    new SDate().toString("yyyy, MON dd"),
                )}
                {this.getFunction(
                    'new SDate().getDay()',
                    new SDate().getDay(),
                )}
                {this.getFunction(
                    'new SDate().getMonth()',
                    new SDate().getMonth(),
                )}
                {this.getFunction(
                    'new SDate().getMonthJson()',
                    new SDate().getMonthJson(),
                )}
                {this.getFunction(
                    'new SDate().getDayOfWeek()',
                    new SDate().getDayOfWeek(),
                )}
                {this.getFunction(
                    'new SDate().getDayOfWeekJson()',
                    new SDate().getDayOfWeekJson(),
                )}
                {this.getFunction(
                    'new SDate("2020-02-29", "yyyy-MM-dd").getDayOfWeekJson()',
                    new SDate("2020-02-29", "yyyy-MM-dd").getDayOfWeekJson(),
                )}
                {this.getFunction(
                    'new SDate("2022-04-03", "yyyy-MM-dd").getDayOfWeekJson()',
                    new SDate("2022-04-03", "yyyy-MM-dd").getDayOfWeekJson(),
                )}
                {this.getFunction(
                    'new SDate().getFirstDayOfWeek()',
                    new SDate().getFirstDayOfWeek(),
                )}
                {this.getFunction(
                    'new SDate().getWeek()',
                    new SDate().getWeek(),
                )}
            </SPage>
        )
    }
}