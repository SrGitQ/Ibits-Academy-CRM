import React from "react"

import {
    StyleSheet,
    Image,
    View,
} from "react-native"

import {images} from "../constants";

const RenderLogo = (props) => {
    return(
        <View style={[styles.imageLogoBlender,{ height:props.size, width:props.size }]}>
            <Image source={images.logo} style={{ height:props.size-2, width:props.size-2, borderRadius:100 }}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    imageLogoBlender:{
        borderColor:'white',
        borderWidth:1,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default RenderLogo