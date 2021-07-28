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


const Pay = () => {

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white}}>Añadir Pago</Text>
            </View>
        );        
    }

    const FormRender = () => {
        return (
            <View style={{paddingVertical:30}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <InputTextBox placeholder="$ 7,000.00" title = "Adeudo"></InputTextBox>
                    <InputTextBox placeholder="$ " title = "A Pagar"></InputTextBox>

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
        height:windowHeight,
        backgroundColor:COLORS.mainblue,
        padding:10,
        justifyContent:'center'
    }

})

export default Pay