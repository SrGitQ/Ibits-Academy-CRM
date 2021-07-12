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
import Menu from './Menu'
import { LineDivisor } from './spectral';


const ItemLayout = (props) => {
	
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
	return (
		<View style={{paddingTop:5}}>
			<View style={{height:90, backgroundColor:'white', width:'100%', borderRadius:9}}>
				<View style = {{height:89, paddingHorizontal: 30, flexDirection:'row'}}>
					<View style={{flex:1, justifyContent:'center'}}>
						<ImageRender></ImageRender>
					</View>
					<View style={{flex:3, paddingHorizontal:15, paddingVertical:10}}>
				        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
				        	<Text style={{fontSize:20, fontWeight:'bold'}}>{props.name}</Text>
						    <Text style={{fontSize:20, fontWeight:'bold', color:'orange'}}>$ {props.price}</Text>
				        </View>
				        <Text style={{fontSize:20}}>{props.cant}</Text>
					</View>
				</View>

			</View>
		</View>
	)
}

class Basket{
    constructor(){
        this.elements = []
    }
    //obtener elementos
    getElements(){
        let nameElements = ""
        this.elements.map((a) => (
            nameElements += a[2] + "x " + Menu[a[0]][a[1]][0] + "\n"
        ))
        return nameElements
    }
    //renderizar lista de elementos
    renderElements(){
        let render = this.elements.map((a, i) => (
            <ItemLayout
                name = {Menu[a[0]][a[1]][0]}
                price = {Menu[a[0]][a[1]][1]}
                cant = {a[2]}
            ></ItemLayout>
        ))
        return render
    }
    //agregar elemento
    setElement(item){
        let cond = false
        this.elements.map((a, i)=>{
            if (item[0] == a[0] && item[1] == a[1]){
                this.elements[i][2] += 1
                cond = true
            }
        });
        !cond ? this.elements.push(item) : null;
    }
    //eliminar elemento
	removeElement(key){
		if (this.elements.length > 0) {
			this.elements.splice(key, 1)
		}else{
			return
		}
	}
    //obtener amount
    getTotalAmount(){
		amount = 0
		this.elements.forEach(element => {
			amount += (element[2] * Menu[element[0]][element[1]][1])
		});
		return amount
    }
    //generar mensaje
	getMessage(){
		let message = `Hola Run Run, quiero ordenar Tacos'Tumbras.\n${this.getElements()}mi total es:${this.getTotalAmount()}`
		return message
	}
    //modificar elemento
    modifyElement(key, element){
		if (this.elements.length > 0) {
			this.elements[key] = element
		}else{
			return
		}
    }
    //reset
    resetBasket(){
        if(this.elements.length > 0){
            this.elements = []
        }
    }
}

export default Basket