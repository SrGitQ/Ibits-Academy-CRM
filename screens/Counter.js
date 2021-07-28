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


const Counter = () => {
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
    const HistoryRender = () => {
        const Logs = (props) => {
            return(
                <View  style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.mainText}>{props.date}</Text>
                    <Text style={styles.mainText}>{props.amn}</Text>
                </View>
            )
        }
        return(
            <View style={{padding:20, flex:0.7}}>
                <Text style={styles.mainText}>Incomes</Text>
                <View style={{height:30}}></View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.mainText}>Fecha</Text>
                    <Text style={styles.mainText}>Importe</Text>
                </View>
                <ScrollView >
                    <Logs date="25/07/21" amn="$1,200.00"/>
                    <Logs date="25/07/21" amn="$1,200.00"/>
                    <Logs date="25/07/21" amn="$1,200.00"/>
                    <Logs date="25/07/21" amn="$1,200.00"/>
                    <Logs date="25/07/21" amn="$1,200.00"/>
                </ScrollView>

            </View>
        )
    }
    const DownloadButtonRender =() => {
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
                    <Text style={styles.mainText}>Descargar</Text>
                </TouchableOpacity>

            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            {HeaderRender()}
            {GeneralInformationRender()}
            {HistoryRender()}
            {DownloadButtonRender()}
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

export default Counter