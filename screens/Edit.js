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
import { InputTextBox, BackButton } from "../components";

const windowHeight = Dimensions.get('window').height;


const Edit = ({ route, navigation }) => {
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



                    <View style={{paddingVertical:20}}>
                        <Text style={styles.mainText}>Cursos</Text>
                        <View
                            style={{ 
                                borderColor:COLORS.alternBlue,
                                borderWidth:1,
                                flexDirection:'row',
                                justifyContent:'space-between'
                            }}
                        >
                            <TextInput 
                                value={client.course}
                                placeholder={"Introduccion ..."}
                            />
                            <TouchableOpacity
                                style={{
                                    justifyContent:'center',
                                    alignItems:'center',
                                    width:40,
                                    borderLeftWidth:1,
                                    borderLeftColor:COLORS.alternBlue
                                }}
                                onPress={()=>navigation.navigate("Course")}
                            >
                                <Text style={styles.mainText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                    <InputTextBox value={client.paytype} title = "Tipo de pago"></InputTextBox>
                    <InputTextBox value={client.notification} title = "Fecha de notificación"></InputTextBox>
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

export default Edit