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


const Add = ({ navigation }) => {

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center', flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={ () => navigation.goBack()}>
                        <Image source={icons.back} style={styles.backButton}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white, flex:2}}>Cliente</Text>
            </View>
        );        
    }

    const FormRender = () => {
        return (
            <View style={{flex:1, paddingVertical:30}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <InputTextBox title = "Nombre"></InputTextBox>
                    <InputTextBox title = "Cursos"></InputTextBox>
                    <InputTextBox placeholder="(One pay/ monthly, Weekly)" title = "Tipo de pago"></InputTextBox>
                    <InputTextBox title = "Fecha de notificación"></InputTextBox>
                    <InputTextBox title = "Total por exhibición"></InputTextBox>
                    <InputTextBox title = "Adeudo Total"></InputTextBox>
                    <InputTextBox title = "Numero de telefono"></InputTextBox>
                    <InputTextBox title = "Notas"></InputTextBox>

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
    backButton:{
        width:40,
        height:40
    },
    container:{
        height:windowHeight,
        backgroundColor:COLORS.mainblue,
        padding:20,
        justifyContent:'center'
    }

})

export default Add