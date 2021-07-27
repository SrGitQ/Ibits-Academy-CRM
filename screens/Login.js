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

const windowHeight = Dimensions.get('window').height;


const Login = () => {

    const LogoRender = () => {
        return (
            <View style={{alignItems:'center'}}>
                <View  style={styles.imageLogoBlender}>
                    <Text style={styles.mainText}>Logo</Text>
                </View>
            </View>
        );        
    }

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white}}>Registro de pagos</Text>
            </View>
        );        
    }

    const FormRender = () => {
        return (
            <View style={{paddingVertical:100}}>
                <View style={{paddingVertical:20}}>
                    <Text style={styles.mainText}>Usuario</Text>
                    <TextInput 
                        style={{ 
                            borderColor:COLORS.alternBlue,
                            borderWidth:1,
                            flexDirection:'row',

                        }}
                    />
                </View>
                <View style={{paddingVertical:20}}>
                    <Text style={styles.mainText}>Contraseña</Text>
                    <TextInput 
                        style={{ 
                            borderColor:COLORS.alternBlue,
                            borderWidth:1,
                            flexDirection:'row',

                        }}
                    />
                </View>
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
            {LogoRender()}
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

export default Login