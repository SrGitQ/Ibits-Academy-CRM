import React, {useState} from "react"

import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Button
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { InputTextBox, BackButton } from "../components";

const windowHeight = Dimensions.get('window').height;


const CourseBoxRender = (props) => {
    const sampleRender = () => {
        return(
            <View style={{paddingVertical:15, paddingHorizontal:5}}>
                <Text style={{color:COLORS.white}}>{props.course}</Text>
            </View>
        )
    }
    const addCourse = () => {
        return(
            <TouchableOpacity
                style={CourseBoxStyles.addButton}
                onPress={props.nav}
            >
                <Text style={styles.mainText}>+</Text>
            </TouchableOpacity>
        )
    }

    const rmvCourse = () => {
        return(
            <TouchableOpacity
                style={CourseBoxStyles.rmvButton}
                onPress={()=>console.log("remove")}
            >
                <Image source={icons.trash} style={{width:17, height:17}}></Image>
            </TouchableOpacity>
        )
    }
    return(
        <View>
            <View style={CourseBoxStyles.box}>
                {sampleRender()}
                {!props.sample ? addCourse(): rmvCourse()}
            </View>
        </View>
    )
}



const Edit = ({ route, navigation }) => {
    
    const [date, setDate] = useState(new Date())
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false); 
    const showDatePicker = () => { setDatePickerVisibility(true);}; 
    const hideDatePicker = () => { setDatePickerVisibility(false);};
    const handleConfirm = (date) => { hideDatePicker(); setDate(date); console.log(date) };

    const [payMethod, setPayMethod] = useState()

    let {client} = route.params

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center', flexDirection:'row'}}>
                <BackButton size={40} back={() => navigation.goBack()}/>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white, flex:2}}>Cliente</Text>
            </View>
        );        
    }


    const FormRender = () => {
        return (
            <View style={{flex:1, paddingVertical:30}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <InputTextBox value={client.name} title = "Nombre"></InputTextBox>


                    {/* here will be a list of the courses */}
                    <View style={{paddingVertical:20}}>
                        <Text style={styles.mainText}>Cursos</Text>
                        <CourseBoxRender course = {client.course} sample={false} nav={()=>navigation.navigate("Course")}></CourseBoxRender>
                    </View>

                    <Text style={styles.mainText}>Tipo de pago</Text>
                    <View style={{ borderColor:COLORS.alternBlue, borderWidth:1 }}>
                        <Picker
                            selectedValue={payMethod}
                            onValueChange={ (itemValue, itemIndex) => setPayMethod(itemValue)}
                        >
                            <Picker.Item label="Semanal" color='white' value="weekly"/>
                            <Picker.Item label="Quincenal" color='white' value="fortnightly"/>
                            <Picker.Item label="Mensual" color='white' value="Monthly"/>
                        </Picker>
                    </View>

                    <View style={{paddingVertical:10}}></View>
                    <Text style={styles.mainText}>Fecha de notificación</Text>
                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={{ borderColor:COLORS.alternBlue, borderWidth:1,paddingVertical:15, paddingHorizontal:5}}
                    >
                        <Text style={{color:'white'}}>{date.toString().split(' ')[2]}/{date.getMonth()}/{date.getFullYear()}</Text>
                    </TouchableOpacity>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                    <InputTextBox value={client.income} title = "Total por exhibición"></InputTextBox>
                    <InputTextBox value={client.adeudo} title = "Adeudo Total"></InputTextBox>
                    <InputTextBox value={client.phone} title = "Numero de telefono"></InputTextBox>
                    <InputTextBox value={client.data} title = "Notas"></InputTextBox>

                </ScrollView>

                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.alternBlue,
                        height:40,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    onPress={ () => navigation.goBack()}
                >
                    <Text style={styles.mainText}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        );        
    }
    return(
        <SafeAreaView style={styles.container}>
            {TitleRender()}
            {FormRender()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageLogoBlender:{
        borderColor:'white',
        borderWidth:1,
        borderRadius:100,
        height:120,
        width:120,
        justifyContent:'center',
        alignItems:'center',

    },
    mainText:{
        color:COLORS.mainwhite,
        fontWeight:'bold',
        fontSize:17
    },
    container:{
        height:windowHeight,
        backgroundColor:COLORS.mainblue,
        padding:20,
        justifyContent:'center'
    }

})

const CourseBoxStyles = StyleSheet.create({
    box:{
        borderColor:COLORS.alternBlue,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rmvButton:{
        justifyContent:'center',
        alignItems:'center',
        width:40,
        borderLeftWidth:1,
        borderLeftColor:COLORS.alternBlue
    },
    addButton:{
        justifyContent:'center',
        alignItems:'center',
        width:40,
        borderLeftWidth:1,
        borderLeftColor:COLORS.alternBlue
    }
})

export default Edit