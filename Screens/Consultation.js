import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ToastAndroid } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Consultation = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  }

  const hidePicker = () => {
    setDatePickerVisibility(false);
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date,time) => {
    hidePicker();
  };

  const showConsultationStatus = () => {
    ToastAndroid.show("Appointment Confirmed!", ToastAndroid.SHORT);
  }

  return (
    <View>
        <View>
            <Text style={styles.text}>Make a new Consultation, Christopher</Text>
        </View>
        <View style={styles.formView}>
            <TextInput style={styles.textInput} placeholder='Enter your name'/>
        </View>
        <View style={styles.formView}>
            <TextInput style={styles.textInput} placeholder='Consult regarding'/>
        </View>
        <View>
            <Text style={styles.secondaryText}>Appointment</Text>

            <View>
                <TouchableOpacity onPress={showDatePicker} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Select Date</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hidePicker}
                />
                <TouchableOpacity onPress={showTimePicker} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Select Time</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hidePicker}
                />
            </View>
        </View>

        <View>
            <TouchableOpacity onPress={showConsultationStatus} style={styles.submitButtonContainer}>
                <Text style={styles.buttonText}>Make Consultation</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize:  24,
        fontWeight: '700',
        paddingHorizontal: 15,
        paddingTop: 10,
        marginBottom: 20
    },
    secondaryText: {
        fontSize:  20,
        fontWeight: '400',
        paddingHorizontal: 15,
        paddingTop: 10,
        marginBottom: 20
    },
    textInput: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        marginBottom: 20,
        height: 52,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#3366ff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 10,
        marginHorizontal: 15
    },
    submitButtonContainer: {
        elevation: 8,
        backgroundColor: "#3366ff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 10,
        marginHorizontal: 15,
        top: 100
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default Consultation;