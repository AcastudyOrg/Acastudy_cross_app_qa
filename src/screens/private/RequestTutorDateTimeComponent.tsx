import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { DropDownComponent } from '../../components/common/Form/DropDownComponent';
import CustomCalendar from '../../components/common/CustomCalendar';
import { requestTutorStyles } from '../../styles/screensStyle/privateStyle/requestTutorStyle';
import availableTime from '../../../assets/data/subjects/availableTime.json';
import { tutorData } from '../../../mockData/TutorData';
import { STRING } from '../../constants/strings';
import { isNotDesktop } from '../../../utils/config';
import useScreenWidth from '../../hooks/useScreenWidth';

const RequestTutorDateTimeComponent = () => {
    const [time, setTime] = useState("");
    const screenWidth = useScreenWidth();
    const notDesktop = isNotDesktop(screenWidth);

    const timeDropdownData = availableTime.map((time) => ({
        value: time,
        label: time,
    }));

    return (
        <View style={[
            requestTutorStyles.dropDownContainer,
            {
                flexDirection: notDesktop ? 'column' : 'row',
                justifyContent: 'center',
            }]}>
            <View style={requestTutorStyles.input}>
                <Text style={requestTutorStyles.availabilityLabel}>{STRING.selectDate}</Text>
                <View style={requestTutorStyles.availabilityCalendar}>
                    <CustomCalendar selectedDates={tutorData.bookedDays} isClickable={true} />
                </View>
            </View>
        </View>
    );
};

export default RequestTutorDateTimeComponent;
