import React, {useState} from "react"

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
    Alert
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { RenderLogo } from "../components";

const windowHeight = Dimensions.get('window').height;

let Delta = {
    user : "root",
    pass : "admin"
}

const Login = ({navigation}) => {
    const [user, setUser] = useState(Delta.user)
    const [pass, setPass] = useState("")

    const LogoRender = () => {
        return (
            <View style={{alignItems:'center'}}>
                <RenderLogo size ={120}/>
            </View>
        );        
    }

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white}}>Acceso</Text>
            </View>
        );        
    }

    const FormRender = () => {
        return (
            <View style={{paddingVertical:10}}>
                <View style={{paddingVertical:20}}>
                    <Text style={styles.mainText}>Usuario</Text>
                    <TextInput 
                        style={styles.inputBox}
                        value={"root"}
                        onChangeText={(user) =>{
                            setUser(user)
                            console.log(user)
                        }}
                    />
                </View>
                <View style={{paddingVertical:20}}>
                    <Text style={styles.mainText}>Contraseña</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputBox}
                        onChangeText={(pass) =>{
                            setPass(pass)
                            console.log(pass)
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
                    onPress={() => {
                        if (user === Delta.user){
                            if (pass === Delta.pass){
                                navigation.navigate("Home")
                            }else if (pass === 'cont') {
                                navigation.navigate("Counter")
                            }
                        }else{
                            Alert.alert('','Su Usuario/Contraseña no coinciden intenta nuevamente')
                        }
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
    inputBox:{ 
        borderColor:COLORS.alternBlue,
        borderWidth:1,
        flexDirection:'row',

    },
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
        flex:1,
        backgroundColor:COLORS.mainblue,
        padding:20,
        justifyContent:'center'
    }

})

export default Login