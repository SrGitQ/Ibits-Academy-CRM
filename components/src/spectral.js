import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Button,
  Linking,
} from 'react-native';

const LineDivisor = () => {
	return(
		<View style={styles.lineDivisor}></View>
	);
}




const ModalExpected = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  let header = (
  <View style={{backgroundColor:'orange', flex:1.3, flexDirection:'row', alignItems:'center'}}>
    <TouchableHighlight
      style={{width:30, height:30, alignItems:'center', justifyContent:'center', borderColor:'white', borderRadius:100, borderWidth:1, margin:10}}
      underlayColor={'black'}
      onPress={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <Text style={{color:'white'}}>X</Text>
    </TouchableHighlight>
    {props.Title}
  </View>
  )

  return (
    <TouchableHighlight
        style={styles.cardContainer}
        underlayColor={'none'}
        onPress={() => {setModalVisible(true)}}
    >
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={{backgroundColor:'whitesmoke', flex:1}}>
            {header}
            {props.Body}
          </View>
        </Modal>
        {props.Deploy}
      </View>
    </TouchableHighlight>
  );
}




const ItemSection = (props) => {
	
	let ImageRender = () => {
		return (
			<View style ={{
				backgroundColor:'#ca1431', 
				height:60, 
				borderRadius:100, 
				justifyContent:'center', 
				alignItems:'center'
			}}>
				<Image 
				source={require('./Taco.jpeg')} 
				style={{height:'90%', width:'90%', borderRadius:100}}
				>
				</Image>
			</View>
		)
	}
	let InfoRender = () => {
		return (
			<>
				<View>
					<Text style={{fontSize:20, fontWeight:'bold'}}>{props.name}</Text>
				</View>
				<View>
					<Text style={{color:'gray'}}>{props.text}</Text>
				</View>
			</>
		)
	}
	return (
		<View>
			<View style={{height:90}}>
				<View style = {{height:89, paddingHorizontal: 30, flexDirection:'row'}}>
					<View style={{flex:1, justifyContent:'center'}}>
						<ImageRender></ImageRender>
					</View>
					<View style={{flex:3, paddingHorizontal:15, paddingVertical:10}}>
						<InfoRender
							name={props.name}
							text={props.text}
						></InfoRender>
						<Text style={{fontSize:20, fontWeight:'bold', color:'orange'}}>$ {props.price}</Text>
					</View>
					<View style={{flex:1.5, justifyContent:'center'}}>
						
						<TouchableHighlight 
            				  style={{backgroundColor:'black', height:30, borderRadius:100, justifyContent:'center', alignItems:'center'}}
            				  onPress={() => {
									props.toCloseModal()
									props.addToCart()
									props.setToCart()
								}}
            				>
							<Text style={{color:'white', fontSize:17, fontWeight:'bold'}}>Añadir</Text>
						</TouchableHighlight>
					</View>
				</View>
				<LineDivisor></LineDivisor>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	lineDivisor:{
		backgroundColor:'gray',
		height:1
	},
});


export {LineDivisor, ModalExpected, ItemSection}