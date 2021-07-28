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
import InputTextBox from "../components/InputTextBox"

const windowHeight = Dimensions.get('window').height;


const Edit = () => {

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white}}>Cliente</Text>
            </View>
        );        
    }

    const FormRender = () => {
        return (
            <View style={{flex:1, paddingVertical:30}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <InputTextBox placeholder="Victor Rodrigo Uribe" title = "Nombre"></InputTextBox>
                    <InputTextBox placeholder="Introduction to python" title = "Cursos"></InputTextBox>
                    <InputTextBox placeholder="(One pay/ monthly, Weekly)" title = "Tipo de pago"></InputTextBox>
                    <InputTextBox placeholder="26/06/21" title = "Fecha de notificación"></InputTextBox>
                    <InputTextBox placeholder="$ 5,000.00" title = "Total por exhibición"></InputTextBox>
                    <InputTextBox placeholder="$ 15,000.00" title = "Adeudo Total"></InputTextBox>
                    <InputTextBox placeholder="999-999-9999" title = "Numero de telefono"></InputTextBox>
                    <InputTextBox placeholder="He is paying for 2 kids" title = "Notas"></InputTextBox>

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

export default Edit