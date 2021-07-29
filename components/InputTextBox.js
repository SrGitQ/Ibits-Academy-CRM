
import React from "react"

import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from "react-native"

import { COLORS } from "../constants";

const InputTextBox = (props) => {
    return(
        <View style={{paddingVertical:20}}>
            <Text style={styles.mainText}>{props.title}</Text>
            <TextInput 
                value={props.value}
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