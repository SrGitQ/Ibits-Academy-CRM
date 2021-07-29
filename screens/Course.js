import React from "react"

import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { BackButton, InputTextBox } from "../components";

const windowHeight = Dimensions.get('window').height;


// <View style={{alignItems:'center', flexDirection:'row'}}>
// <BackButton size={40} back={() => navigation.goBack()}/>
// <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white, flex:2}}>Cliente</Text>
// </View>
const Course = ({ navigation }) => {

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center', flexDirection:'row'}}>
                <BackButton size={40} back={() => navigation.goBack()}></BackButton>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white, flex:5}}>Nuevo Curso</Text>
            </View>
        );        
    }

    const FormRender = () => {
        return (
            <View style={{paddingVertical:30}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <InputTextBox placeholder="Introduction to Java" title = "Curso"></InputTextBox>
                    <InputTextBox placeholder="$ 10,000.00" title = "Total"></InputTextBox>
                    <InputTextBox placeholder="Montly" title = "Tipo de pago"></InputTextBox>
                    <InputTextBox placeholder="5" title = "Numero de pagos"></InputTextBox>

                </ScrollView>

                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.alternBlue,
                        height:40,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Text style={styles.mainText}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        );        
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.diBox}>
                {TitleRender()}
                {FormRender()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainText:{
        color:COLORS.mainwhite,
        fontWeight:'bold',
        fontSize:17
    },
    diBox:{
        margin:15,
        padding:10,
        borderColor:COLORS.alternBlue,
        borderWidth:1
    },
    container:{
        flex:1,
        backgroundColor:COLORS.mainblue,
        padding:10,
        justifyContent:'center'
    }

})

export default Course