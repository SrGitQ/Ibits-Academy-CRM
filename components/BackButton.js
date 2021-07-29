import React from "react"

import {
    Image,
    View,
    TouchableOpacity
} from "react-native"

import {icons} from "../constants";

const BackButton = (props) => {
    return(
        <View style={{flex:1}}>
            <TouchableOpacity onPress={ () => props.back()}>
                <Image source={icons.back} style={{width:props.size, height: props.size}}></Image>
            </TouchableOpacity>
        </View>
    )
}


export default BackButton