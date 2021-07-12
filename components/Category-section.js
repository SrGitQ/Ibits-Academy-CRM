import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from "../constants";


const CategorySection = (props) => {


	let menu = props.menu

	const renderImage = () => {
		return (
        	<View style={styles.sectionImage}>
        	    <View style={styles.backgroundImg}>
					<Image source = {images.taco} style={styles.imageRender}/>
				</View>
        	</View>
		);
	}

	const renderDescription = () => {
		return (
        	<View style={styles.sectionDescription}>
        	    <Text style={styles.menuTitle}>{menu}</Text>
        	    <Text style={styles.menuDescription}>Lorem ipsum dolor</Text>
        	</View>
		);
	}

	const renderButton = () => {
		return (
        	<View style={styles.sectionButton}>
        	    <TouchableOpacity
					onPress={() => {props.nav()}}
					style={styles.openMenuButton}
				>
					<Text style={styles.openMenuButtonText}>ORDENAR</Text>
				</TouchableOpacity>
        	</View>
		);
	}

    return(
    	<View style={styles.menuContainer}>
			{renderImage()}
			{renderDescription()}
			{renderButton()}
    	</View>
    );
}

const styles = StyleSheet.create({
	LineSection:{
		backgroundColor:'gray',
		height:40
	},
	openMenuButtonText:{
		color: COLORS.white,
		fontWeight:'bold'
	},
	openMenuButton:{
		backgroundColor:COLORS.black,
		paddingHorizontal:10,
		paddingVertical:5,
		borderRadius:20
	},
	menuDescription:{
		color:COLORS.darkgray,
	},
	menuTitle:{
		fontWeight:'bold',
		fontSize:20
	},
	imageRender:{
		width:'90%',
		height:'90%',
		justifyContent:'center',
		borderRadius:100
	},
	backgroundImg:{
		height:70,
		width:70,
		backgroundColor: COLORS.redblack,
		borderRadius:100,
		justifyContent:'center',
		alignItems:'center'
	},
	menuContainer:{
        flex:1,
        flexDirection:'row',
        height:89
	},
	sectionImage:{
        flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	sectionDescription:{
        flex:2,
		paddingVertical:10
	},
	sectionButton:{
        flex:1.3,
		alignItems:'center',
		justifyContent:'center'
	},
});

export default CategorySection