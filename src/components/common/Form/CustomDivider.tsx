import React from 'react';
import { View } from 'react-native';
import { customDeviderStyle } from '../../../styles/componentsStyle/commonStyle/formStyle/CustomDividerStyle';

interface CustomDividerProps {
  color?: string;
  thickness?: number;
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  color = '#ccc',
  thickness = 1,
}) => {
  return <View style={[customDeviderStyle.divider, { backgroundColor: color, height: thickness }]} />;
};

export default CustomDivider;
