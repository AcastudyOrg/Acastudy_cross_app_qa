declare module 'react-native-svg-charts' {
    import React from 'react';
    import { ViewStyle } from 'react-native';
    import { PathProps } from 'react-native-svg';
  
    export interface ChartProps<T> {
      data: T[];
      children?: React.ReactNode;
      style?: ViewStyle;
      svg?: Partial<PathProps>;
      yAccessor?: ({ item }: { item: T }) => number;
      contentInset?: { top?: number; bottom?: number; left?: number; right?: number };
      spacingInner?: number;
      spacingOuter?: number;
      numberOfTicks?: number;
      animate?: boolean;
      animationDuration?: number;
      gridMin?: number;
      gridMax?: number;
    }
  
    export class BarChart<T> extends React.Component<ChartProps<T>> {}
    export class LineChart<T> extends React.Component<ChartProps<T>> {}
    export class Grid extends React.Component<any> {}
    export class XAxis extends React.Component<any> {}
    export class YAxis extends React.Component<any> {}
  }
  