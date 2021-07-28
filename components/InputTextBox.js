
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

const InputTextBox = (props) => {
    return(
        <View style={{paddingVertical:20}}>
            <Text style={styles.mainText}>{props.title}</Text>
            <TextInput 
                placeholder={props.placeholder}
                style={{ 
                    borderColor:COLORS.alternBlue,
                    borderWidth:1,
                    flexDirection:'row',
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainText:{
        color:COLORS.mainwhite,
        fontWeight:'bold',
        fontSize:17
    },

})

export default InputTextBox