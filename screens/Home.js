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


const Home = () => {
    const HeaderRender = () => {
        return (
            <View style={styles.headerArea}>
                {/* {<Image source={icons.back} style={styles.backButton}></Image>} */}
            </View>
        );        
    }
    const GeneralInformationRender = () => {
        let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        let time = new Date
        let day = time.getDate()
        let year = time.getFullYear()
        let month = months[time.getMonth()] 
        return (
            <View style={styles.generalInformation}>
                <View style={styles.imageLogoBlender}>
                    <Text style={styles.mainText}>
                        LOGO
                    </Text>
                </View>
                <Text style={styles.mainText}>{month} {day}, {year}</Text>
            </View>
        )
    }
    const SearchRender = () => {
        return(
            <View style={{padding:15}}>
                <View style={styles.searchContainer}>
                    <TextInput style={{flex:0.7}}/>
                    <TouchableOpacity style={styles.searchButton}>
                        <Text style={styles.mainText}>Buscar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    const ClientsRender = () => {
        const ClientInfo = (props) => {
            return(
                <View style={{backgroundColor:COLORS.alternBlue, padding:15, paddingHorizontal:30, flexDirection:'row', margin:10, justifyContent:'space-between', height:100}}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.mainText}>{props.name}</Text>
                        <Text style={styles.mainText}>${props.income}</Text>
                        <Text style={styles.mainText}>{props.date}</Text>
                    </View>
                    <View style={{justifyContent:'space-between'}}>
                        <TouchableOpacity
                            style={{backgroundColor:COLORS.mainblue, height:30, justifyContent:'center', alignItems:'center',width:100}}
                        >
                            <Text style={styles.mainText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{backgroundColor:COLORS.mainblue, height:30, justifyContent:'center', alignItems:'center',width:100}}
                        >
                            <Text style={styles.mainText}>Add Pay</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }
        return(
            <View style={{padding:15, flex:0.7}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity
                        style={{height:30, width:100}}
                    >
                        <Text style={styles.mainText}>Por pagar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{height:30, width:100}}
                    >
                        <Text style={styles.mainTextNoAble}>Todos</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <ClientInfo name="Victor Uribe" income="5,000.00" date="Junio 17"/>
                    <ClientInfo name="Osiris Cámara" income="1,400.00" date="Junio 20"/>
                </ScrollView>

            </View>
        )
    }
    const AddButtonRender =() => {
        return (
            <View style={{padding:15}}>
                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.alternBlue,
                        height:40,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Text style={styles.mainText}>Añadir</Text>
                </TouchableOpacity>

            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            {HeaderRender()}
            {GeneralInformationRender()}
            {SearchRender()}
            {ClientsRender()}
            {AddButtonRender()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainTextNoAble:{
        color:COLORS.darkgray,
        fontWeight:'bold',
        fontSize:17
    },
    searchContainer:{
        borderColor:COLORS.alternBlue,
        borderWidth:1,
        flexDirection:'row',
    },
    searchButton:{
        borderColor:COLORS.alternBlue,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        flex:0.3
    },
    mainText:{
        color:COLORS.mainwhite,
        fontWeight:'bold',
        fontSize:17
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
    generalInformation:{
        flex:0.18,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
    },
    backButton:{
        width:50,
        height:50
    },
    headerArea:{
        flex:0.08,
    },
    container:{
        height:windowHeight,
        backgroundColor:COLORS.mainblue,
        padding:10
    }

})

export default Home