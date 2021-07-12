import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from "../constants";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../cartActions';


const ItemSection = (props) => {


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
        	    <Text style={styles.itemTitle}>{props.item.name}</Text>
        	    <Text style={styles.itemDescription}>Lorem ipsum dolor</Text>
                <Text style={styles.itemPrice}>$ {props.item.price}</Text>
        	</View>
		);
	}
    const item = {
		id:props.item.id,
		name:props.item.name,
		price:props.item.price,
		cant:1,
	}

	const renderButton = () => {
        return (
            <View style={styles.sectionButton}>
        	    <TouchableOpacity 
					onPress={ () => props.addItem(item) }
					style={styles.openItemButton}
				>{/** TODO change taco */}
                    <Text style={styles.openItemButtonText}>Agregar</Text>
				</TouchableOpacity>
        	</View>
		);
	}

    return(
    	<View style={styles.itemContainer}>
			{renderImage()}
			{renderDescription()}
			{renderButton()}
    	</View>
    );
}

const styles = StyleSheet.create({
    itemPrice:{
        color: '#ffc108',
        fontWeight:'bold',
        fontSize:17
    },
	LineSection:{
		backgroundColor:'gray',
		height:40
	},
	openItemButtonText:{
		color: COLORS.white,
		fontWeight:'bold'
	},
	openItemButton:{
		backgroundColor:COLORS.black,
		paddingHorizontal:10,
		paddingVertical:5,
		borderRadius:20
	},
	itemDescription:{
		color:COLORS.darkgray,
	},
	itemTitle:{
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
	itemContainer:{
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



const mapDispatchToProps = dispatch => (
	bindActionCreators({
		addItem,
	}, dispatch)
);


export default connect(null, mapDispatchToProps)(ItemSection)