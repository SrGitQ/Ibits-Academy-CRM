import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS } from '../constants';

const LineSection = () => {
	return(
		<View style={styles.LineSection}></View>
	);
}

const styles = StyleSheet.create({
	LineSection:{
		backgroundColor:COLORS.darkgray,
		height:1
	},
});

export default LineSection