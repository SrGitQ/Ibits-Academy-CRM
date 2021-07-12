import React from "react"

import {
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";



const Home = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Hola compa</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }

})

export default Home