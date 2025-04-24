import React from 'react';
import { View, Text } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { G, Text as SVGText } from 'react-native-svg';
import * as scale from 'd3-scale';
import { COLORS, FONT } from '@/constants';
import { tutorGeneratedMoneyChartStyles } from '@/styles/componentsStyle/sectionsStyle/home/tutorGeneratedMoneyChart';


type TutorGeneratedMoneyChartProps = {
    totalAmount?: number[];
    months?: string[];
};
const TutorGeneratedMoneyChart: React.FC<TutorGeneratedMoneyChartProps> = ({ totalAmount = [], months = [] }) => {
    const barData = totalAmount.map((value, index) => ({
        value,
        svg: {
            fill: COLORS.orange,
            rx: 10,
            onPress: () => { }, // what happens when you press the bar?
        },
    }));

    return (
        <View style={tutorGeneratedMoneyChartStyles.container}>
            <Text style={tutorGeneratedMoneyChartStyles.title}>Money Generated</Text>
            <View style={tutorGeneratedMoneyChartStyles.chartContainer}>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <BarChart
                        style={{ height: 200 }}
                        data={barData}
                        yAccessor={({ item }) => item.value}
                        spacingInner={0.3}
                        contentInset={{ top: 20, bottom: 20 }}
                        gridMin={0}
                    >
                        <Grid />
                        <Labels data={totalAmount} />
                    </BarChart>
                    <XAxis
                        style={{ marginTop: 10 }}
                        data={totalAmount}
                        scale={scale.scaleBand}
                        formatLabel={(value: any, index: number) => months[index]}
                        contentInset={{ left: 20, right: 20 }}
                        svg={{
                            fill: 'white',
                            fontSize: 16,
                            fontFamily: FONT.plusJakartaBold,
                            fontWeight: 'bold',
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

// helper function to render labels
const Labels = ({ x, y, bandwidth, data }: any) => (
    <G>
        {data.map((item: any, index: number) => {
            const value = item.value ?? item;
            return (
                <SVGText
                    key={index}
                    x={x(index) + bandwidth / 2}
                    y={y(value) - 10}
                    fontSize={14}
                    fill="white"
                    alignmentBaseline="middle"
                    textAnchor="middle"
                    fontFamily={FONT.plusJakartaBold}
                >
                    R {value}
                </SVGText>
            );
        })}
    </G>
);

export default TutorGeneratedMoneyChart;
