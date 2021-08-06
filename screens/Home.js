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
    ScrollView
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { RenderLogo, BackButton, DateForm } from "../components"

const windowHeight = Dimensions.get('window').height;



const data = [
    {
        id:1,
        name:"Victor Uribe",
        courses:[
            {idn:"Introduction to python", total:10000},
            {idn:"Introduction to Java", total:10000},
            {idn:"Algorithms", total:10000},
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"5,000.00",
        date:"Junio 17",
        pay:false
    },
    {
        id:2,
        name:"Osiris Cámara",
        courses:[
            {
                idn:"Introduction to python",
                total:10000
            }
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"1,400.00",
        date:"Junio 20",
        pay:false
    },
    {
        id:3,
        name:"Juan Manuel",
        courses:[
            {
                idn:"Introduction to python",
                total:10000
            }
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"5,000.00",
        date:"Junio 17 Pagado",
        pay:true
    },
    {
        id:4,
        name:"Isabel Cámara",
        courses:[
            {
                idn:"Introduction to python",
                total:10000
            }
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"1,400.00",
        date:"Junio 20 Pagado",
        pay:true
    },

]






const Home = ({navigation}) => {

    const [option, setOption] = useState(1)

    const HeaderRender = () => {
        return (
            <View style={styles.headerArea}>
                <BackButton size={40} back={()=>navigation.navigate("Login")}/>
            </View>
        );        
    }
    const GeneralInformationRender = () => {
        return (
            <View style={styles.generalInformation}>
                <RenderLogo size={120}/>
                <Text style={styles.mainText}>{DateForm}</Text>
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

    const ClientInfo = (props) => {
        let client = props.client
        return(
            <View style={{backgroundColor:COLORS.alternBlue, padding:15, paddingHorizontal:30, flexDirection:'row', margin:10, justifyContent:'space-between', height:100}}>
                <View style={{justifyContent:'center'}}>
                    <Text style={styles.mainText}>{client.name}</Text>
                    <Text style={styles.mainText}>${client.income}</Text>
                    <Text style={styles.mainText}>{client.date}</Text>
                </View>
                <View style={{justifyContent:'space-between'}}>
                    <TouchableOpacity
                        style={{backgroundColor:COLORS.mainblue, height:30, justifyContent:'center', alignItems:'center',width:100}}
                        onPress={ () => navigation.navigate("Edit", {client}) }
                    >
                        <Text style={styles.mainText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor:COLORS.mainblue, height:30, justifyContent:'center', alignItems:'center',width:100}}
                        onPress={ () => navigation.navigate("Pay") }
                    >
                        <Text style={styles.mainText}>Add Pay</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    const doubtClients = data.map( (item, i) => {
        if (item.pay != true){
            return (<ClientInfo client={item} key={i}/>)
        }
    })
    const dupClients = data.map( (item, i) => {
        return (<ClientInfo client={item} key={i}/>)
    })


    const ClientsRender = () => {

        return(
            <View style={{padding:15, flex:0.7}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity style={styles.optionalButton} onPress={() => {
                        setOption(1)
                        }}>
                        <Text 
                            style={{
                                color: (option)? COLORS.mainwhite:COLORS.darkgray,
                                fontWeight:'bold',
                                fontSize:17
                            }}
                        >
                            Por pagar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionalButton} onPress={()=>{
                        setOption(0)
                        }}>
                        <Text 
                            style={{
                                color:(option)? COLORS.darkgray:COLORS.mainwhite,
                                fontWeight:'bold',
                                fontSize:17
                            }}
                        >
                            Todos</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {(option)? doubtClients : dupClients}
                </ScrollView>

            </View>
        )
    }
    const AddButtonRender =() => {
        return (
            <View style={{padding:15}}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate("Add")}
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
    optionalButton:{
        height:30, 
        width:100
    },
    addButton:{
        backgroundColor:COLORS.alternBlue,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
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