import React, {useState} from "react"

import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    Button
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { InputTextBox, BackButton } from "../components";


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addClient } from "../usersActions";

const windowHeight = Dimensions.get('window').height;


const CourseBoxRender = (props) => {
    const sampleRender = () => {
        return(
            <View style={{paddingVertical:15, paddingHorizontal:5}}>
                <Text style={{color:COLORS.white}}>{props.course}</Text>
            </View>
        )
    }
    const addCourse = () => {
        return(
            <TouchableOpacity
                style={CourseBoxStyles.addButton}
                onPress={props.nav}
            >
                <Text style={styles.mainText}>+</Text>
            </TouchableOpacity>
        )
    }

    const rmvCourse = () => {
        return(
            <TouchableOpacity
                style={CourseBoxStyles.rmvButton}
                onPress={()=>console.log("remove")}
            >
                <Image source={icons.trash} style={{width:17, height:17}}></Image>
            </TouchableOpacity>
        )
    }
    return(
        <View>
            <View style={CourseBoxStyles.box}>
                {sampleRender()}
                {!props.sample ? addCourse(): rmvCourse()}
            </View>
        </View>
    )
}



const Add = (props) => {

    //client information
    const [name, setName] = useState("")
    const [courses, setCourses] = useState([])
    const [payMethod, setPayMethod] = useState()
    const [date, setDate] = useState(new Date())
    const [total, setTotal] = useState('')
    const [debit, setDebit] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')

    const addCourse = (course) => {
        setCourses(courses => [...courses, course])
        console.log(courses)
    }
    const removeCourse = (course) =>{
        setCourses(courses.filter((value) => value.name !== course.name))
        console.log(courses)
    }


    //date picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false); 
    const showDatePicker = () => { setDatePickerVisibility(true);}; 
    const hideDatePicker = () => { setDatePickerVisibility(false);};
    const handleConfirm = (date) => { hideDatePicker(); setDate(date); console.log(date) };


    

    const TitleRender = () => {
        return (
            <View style={{alignItems:'center', flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={ () => props.navigation.goBack()}>
                        <Image source={icons.back} style={styles.backButton}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:50, fontWeight:'bold', color:COLORS.white, flex:2}}>Cliente</Text>
            </View>
        );        
    }


    const client = {
        id:5,
        name:name,
        courses:[
            {idn:"Introduction to python", total:10000},
            {idn:"Introduction to Java", total:10000},
            {idn:"Algorithms", total:10000},
        ],
        notification:date,
        paytype:total,
        adeudo:debit,
        phone:phone,
        data:notes,
        income:"5,000.00",
        date:"Junio 17",
        pay:false
    }

    const FormRender = () => {
        
        
        // const courses = currentCourses.map((course, index) =>{
        //     return(
        //         <CourseBoxRender key={index} course = {course.idn} sample={(index < (client.courses.length-1))} nav={()=>navigation.navigate("Course")}></CourseBoxRender>
        //     )
        // })


        const currentCourses = () => {
            if (courses == 0){
                return(
                    <View style={{paddingVertical:20}}>
                        <Text style={styles.mainText}>Cursos</Text>
                        <View style={{
                            borderColor:COLORS.alternBlue,
                            borderWidth:1,
                            flexDirection:'row',
                            justifyContent:'space-between',
                            paddingVertical:10
                        }}>
                            <View></View>
                            <TouchableOpacity
                                style={CourseBoxStyles.addButton}
                                onPress={() => props.navigation.navigate("Course",{setCourses})}
                            >
                                <Text style={styles.mainText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        }
        return (
            <View style={{flex:1, paddingVertical:30}}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={[styles.mainText, {paddingTop:20}]}>Nombre</Text>
                    <TextInput placeholder={"nombre"} style={styles.InputBox} value={name} onChangeText={(text) => {setName(text)}}/>

                    

                    {currentCourses()}

                    {/* <Button title="Hola" onPress={() => addCourse({name:"hey"})}></Button>
                    <Button title="JAI" onPress={() => removeCourse({name:"hey"})}></Button> */}






                    <Text style={styles.mainText}>Tipo de pago</Text>
                    <View style={{ borderColor:COLORS.alternBlue, borderWidth:1 }}>
                        <Picker
                            selectedValue={payMethod}
                            onValueChange={ (itemValue, itemIndex) => setPayMethod(itemValue)}
                        >
                            <Picker.Item label="Semanal" color='white' value="weekly"/>
                            <Picker.Item label="Quincenal" color='white' value="fortnightly"/>
                            <Picker.Item label="Mensual" color='white' value="Monthly"/>
                        </Picker>
                    </View>

                    <View style={{paddingVertical:10}}></View>
                    <Text style={styles.mainText}>Fecha de notificación</Text>
                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={{ borderColor:COLORS.alternBlue, borderWidth:1,paddingVertical:15, paddingHorizontal:5}}
                    >
                        <Text style={{color:'white'}}>{date.toString().split(' ')[2]}/{date.getMonth()}/{date.getFullYear()}</Text>
                    </TouchableOpacity>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />



                    <Text style={[styles.mainText, {paddingTop:20}]}>Total por exhibición</Text>
                    <TextInput style={styles.InputBox} value={total} onChangeText={(text) => {setTotal(text)}}/>
                    <Text style={[styles.mainText, {paddingTop:20}]}>Adeudo Total</Text>
                    <TextInput style={styles.InputBox} value={debit} onChangeText={(text) => {setDebit(text)}}/>
                    <Text style={[styles.mainText, {paddingTop:20}]}>Numero de telefono</Text>
                    <TextInput style={styles.InputBox} value={phone} onChangeText={(text) => {setPhone(text)}}/>
                    <Text style={[styles.mainText, {paddingTop:20}]}>Notas</Text>
                    <TextInput style={styles.InputBox} value={notes} onChangeText={(text) => {setNotes(text)}}/>
                    

                </ScrollView>

                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.alternBlue,
                        height:40,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    onPress={ () => {
                        
                        props.navigation.goBack()
                        props.addClient(client)
                        console.log(props.clients)
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
    backButton:{
        width:40,
        height:40
    },
    container:{
        height:windowHeight,
        backgroundColor:COLORS.mainblue,
        padding:20,
        justifyContent:'center'
    },
    InputBox:{ 
        borderColor:COLORS.alternBlue,
        borderWidth:1,
        flexDirection:'row',
    }

})


const CourseBoxStyles = StyleSheet.create({
    box:{
        borderColor:COLORS.alternBlue,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rmvButton:{
        justifyContent:'center',
        alignItems:'center',
        width:40,
        borderLeftWidth:1,
        borderLeftColor:COLORS.alternBlue
    },
    addButton:{
        justifyContent:'center',
        alignItems:'center',
        width:40,
        borderLeftWidth:1,
        borderLeftColor:COLORS.alternBlue
    },
})
const mapStateToProps = (state, props) => {
    return {clients: state.clients, navigation:props.navigation}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addClient
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Add)