/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import { Component } from 'react';

const drinks = [
    ["Bebidas"],
    ["Agua de Jamaica", 33],
    ["Agua de Horchata", 33],
    ["Agua de Piña", 34],
    ["Coca-cola", 37],
    ["Fanta", 37],
    ["Yoli", 37],
    ["Tehuacán", 37],
    ["Corona", 40],
    ["Negra Modelo", 44],
    ["Diet Coke", 37],
    ["Agua Manantial", 32],
]

const tacos = [
    ["Tacos"],
    ["Pastor",      18],
    ["Bistec",      155],
    ["Costilla",    162],
    ["Chuleta",     108],
    ["Chorizo",     89],
    ["Pollo",       99],
]

const combinaciones = [
    ["Combinaciones"],
    ["Bistec con tocino", 152],
    ["Bistec con chorizo", 145],
    ["Bistec Encebollado", 152],
    ["Bistec y chile poblano", 144],
]

const alambres = [
    ["Alambres"],
    ["Alambre de bistec", 176],
    ["Alambre de pollo", 164],
    ["Alambre de chuleta", 164],
    ["Alambre de pastor", 164],
    ["Alambre con queso", 193],
]

const quesos = [
    ["Quesos"],
    ["Queso fundido", 109],
    ["Queso con chorizo", 109],
    ["Queso con chile poblano", 109],
    ["Quesadilla", 82],
    ["Chicharron de queso", 94],
]

const volcanes = [
    ["Volcanes"],
    ["Volcan con queso", 90],
    ["Volcan con pastor", 99],
    ["Volcan con bistec", 109],
    ["Volcan con poblano", 79],
    ["Cebollitas", 79],
    ["Frijodes charros", 60],
]

const Menu = [drinks, tacos, combinaciones, alambres, quesos, volcanes]

class Basket{
	constructor(){
		this.elements = []
		this.totalAmount = 0
	}
	addElement(a, b, cant){
		this.elements.push([a, b, cant])
	}
	//60 + 90 + 3+4+7 + 6
	// 150 + 7+7+6
	// 150 +20
	showElements(setState){
		let listElements = this.elements.map( (index, a) => 
			
			<View key = {a}>
				<Text>{Menu[index[0]][index[1]][0]+"\n"} key = {a}</Text>
				<Button
					title = {"remove"}
					onPress={ () => {
						this.removeElement(a)
						setState(this.showElements(setState))
					}}
				>

				</Button>
			</View>	
		)
		return listElements
	}
	removeElement(key){
		if (this.elements.length > 0) {
			this.elements.splice(key, 1)
		}else{
			return
		}
	}
	getTotalAmount(){
		this.totalAmount = 0
		this.elements.forEach(element => {
			this.totalAmount += (element[2] * Menu[element[0]][element[1]][1])
		});
		return this.totalAmount
	}
	getMessage(){

		let message = `Hola Run Run, quiero ordenar Tacos'Tumbras.\n${this.getElements()}mi total es:${this.getTotalAmount()}`
		return message
	}
	getElements(){
		let text = ""
		let names = this.elements.map(index =>
			text += "\tx" + index[2] +" "+ Menu[index[0]][index[1]][0] + "\n"
		)
		
		return text
	}
	resetBasket(){
		if (this.elements.length > 0){
			for (let index = this.elements.length; index > 0; index--) {
				this.removeElement(index)
			}
		}
	}
}

const canasta = new Basket()

const Layout = () => {
	return (
		<>
			<View style={{flex:1, justifyContent:'center'}}>
				<NavBar></NavBar>
			</View>
			<View style={{flex:10, backgroundColor:'whitesmoke'}}>
				<MenuLayout></MenuLayout>
			</View>
			<View style={{flex:0.8, justifyContent:'flex-end', alignItems:'center'}}>
				<OnActionButton></OnActionButton>
			</View>
		</>
	);
};


const MenuLayout = () => {
	const [selector, setSelector] = useState(0)
	const [colour, setColour] = useState(['#e94a4b', 'white', 'white', 'white', 'white', 'white', 'white'])
	const [text, setText] = useState(['white', 'black', 'black', 'black', 'black', 'black', 'black'])


    /**
     * 
     * @returns Programacion de tarjetas
     */
	let FoodCardModal = (props) => {
		const [cant, setCant] = useState(1)
        const [modalVisible, setModalVisible] = useState(false)

		let incr = () => {
			setCant((cant < 10) ? cant+1: cant)
		}
		let decr = () => {
			setCant((cant > 1 ? cant-1 : 1))
		}

    
		let header = (
			<>
				<TouchableHighlight
					style={styles.buttonStyle} 
					underlayColor={'#dcddde'}
					onPress={() => {
						setModalVisible(!modalVisible)
                        setCant(1)
					}}
				>
					<Text style={styles.buttonText}>{"<"}</Text>
				</TouchableHighlight>
				
                <View style={{height:'50%'}}>
                    <Image
                        source={require('./src/Shrimp-Tacos.jpeg')}
                        style={{height:'100%', width:'100%'}}
                    >
                    </Image>
                </View>
			</>
		)
        let CoverButton = (
            <View style={styles.CoverButton}>
                <View style={{flex:1.5, borderTopLeftRadius:10, borderTopRightRadius:10}}>
                    <Image
                        source={require('./src/Shrimp-Tacos.jpeg')}
                        style={{width:'100%', height:'100%',  borderTopLeftRadius:10, borderTopRightRadius:10}}
                    />
                </View>
                <View style={{flex:1, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                    <Text style={{color:'black', fontSize:25,fontWeight:'bold'}}>{Menu[props.type][props.element][0]}</Text>
                    <Text style={{width:'50%', fontWeight:'bold', top:10, color:'#ffc108', fontSize:20, backgroundColor:'black', padding:2, borderRadius:10, justifyContent:'center'}}>{'$' + Menu[props.type][props.element][1]+ '.00'}</Text>
                </View>
            </View>
		)
        let Body = () => (
            <>
                <View style={{flex:1, padding:10}}>
                    <Text style={{fontSize:40, fontWeight:'bold', color:'#42454a'}}>{Menu[props.type][props.element][0]}</Text>
                    <Text style={{color:'#42454a', paddingVertical:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra mauris eu fringilla sollicitudin. Etiam euismod malesuada nisi in imperdiet. </Text>
                    <Text style={{fontSize:40, fontWeight:'bold', color:'#42454a'}}>{'$'+ Menu[props.type][props.element][1]+ '.00'}</Text>
                    <View style={{top:10,borderBottomColor: '#dcddde', borderBottomWidth: 1}}/>
                </View>
                <View style={{top:10,borderBottomColor: '#dcddde', borderBottomWidth: 1}}/>
                <View style={{backgroundColor:'white', flex:0.2, flexDirection:'row'}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <TouchableHighlight
                            style={{borderRadius:20, borderColor:'gray', borderWidth:1, width:'20%', alignItems:'center'}}
                            onPress={() => {incr()}}
                        >
                            <Text style={[styles.title]}>+</Text>
                        </TouchableHighlight>
                        <Text style={[styles.title, {paddingHorizontal:8}]}>{cant}</Text>
                        <TouchableHighlight
                            style={{borderRadius:20, borderColor:'gray', borderWidth:1, width:'20%', alignItems:'center'}}
                            onPress={() => {decr()}}
                        >
                            <Text style={[styles.title]}>-</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity
                            style={{backgroundColor:'#4ebc7a', padding:5, paddingHorizontal:40, borderRadius:10}}
                            onPress={() => {
                                setCant(1)
                                setModalVisible(!modalVisible)
                                canasta.addElement(props.type, props.element, cant)
                            }}
                        >
                            <Text style={[styles.title,{color:'white'}]}>Agregar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
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
						<View style={styles.modalComponent}>
							{header}
							<View style={styles.modalComponent}>
                                <Body></Body>
                            </View>
						</View>
					</Modal>
	
	
					
					{CoverButton}
				</View>
			</TouchableHighlight>
		);
	}

    /**
     * 
     * @returns Secciones
     */
	let Popular = () => (
		<>
			<FoodCardModal type={0} element={1}></FoodCardModal>
			<FoodCardModal type={0} element={2}></FoodCardModal>
            <FoodCardModal type={0} element={3}></FoodCardModal>
		</>
	)
        //const Menu = [drinks, tacos, combinaciones, alambres, quesos, volcanes]
	let Drinks = () => (<>{Menu[0].map((e, i) =>(i!=0?<FoodCardModal type={0} element={i} key={i}></FoodCardModal>:null))}</>);
	let Tacos = () => (<>{Menu[1].map((e, i) =>(i!=0?<FoodCardModal type={1} element={i} key={i}></FoodCardModal>:null))}</>);
	let Combinaciones = () => (<>{Menu[2].map((e, i) =>(i!=0?<FoodCardModal type={2} element={i} key={i}></FoodCardModal>:null))}</>);
	let Alambres = () => (<>{Menu[3].map((e, i) =>(i!=0?<FoodCardModal type={3} element={i} key={i}></FoodCardModal>:null))}</>);
	let Quesos = () => (<>{Menu[4].map((e, i) =>(i!=0?<FoodCardModal type={4} element={i} key={i}></FoodCardModal>:null))}</>);
	let Volcanes = () => (<>{Menu[5].map((e, i) =>(i!=0?<FoodCardModal type={5} element={i} key={i}></FoodCardModal>:null))}</>);

        
	const [screen, setScreen] = useState(Popular())

	let TagChoose = (props) => (
		<TouchableOpacity style={{paddingHorizontal:15, paddingVertical:5, backgroundColor:colour[props.id], height:'50%', borderRadius:17, borderColor:'gray', borderWidth:1, margin:5}}
			onPress={()=>{
				if (selector != props.id){
					setSelector(props.id)
					setColour(colour.map((a, i) => ((i == props.id) ? '#e94a4b':'white')))
					setText(text.map((a, i) => ((i == props.id) ? 'white': 'black')))
					setScreen(props.screen)
				}
			}}
		>
			<Text style={{color:text[props.id], fontSize:15, fontWeight:'bold'}}>{props.tag}</Text>
		</TouchableOpacity>
	);


    

    
    /**
     * 
     * @returns Screen completo del menu
     */
	return (
		<View style={{flex:12}}>
			<View style={{flex:0.8, backgroundColor:'white'}}>
				<ScrollView horizontal={true}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<TagChoose id={0} tag={'Popular'} screen={Popular()}></TagChoose>
						<TagChoose id={1} tag={'Tacos'} screen={Tacos()}></TagChoose>
						<TagChoose id={2} tag={'Combinaciones'} screen={Combinaciones()}></TagChoose>
						<TagChoose id={3} tag={'Alambres'} screen={Alambres()}></TagChoose>
						<TagChoose id={4} tag={'Quesos'} screen={Quesos()}></TagChoose>
						<TagChoose id={5} tag={'Volcanes'} screen={Volcanes()}></TagChoose>
						<TagChoose id={6} tag={'Bebidas'} screen={Drinks()}></TagChoose>
					</View>
				</ScrollView>
			</View>
			<View style={{flex:8}}>
				<ScrollView>
                    {/*Container*/}
					<View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'center'}}>
						{screen}
					</View>
				</ScrollView>

			</View>
		</View>
	);
};

const OnActionButton = () =>{
	const [clip, setClip] = useState(false)
	const [colour, setColour] = useState('black')
	const [text, setText] = useState('Buscar')
	return(
		<TouchableOpacity
			style={{backgroundColor:'#4ebc7a', width:'90%', height:'70%', borderTopLeftRadius:10, borderTopRightRadius:10, alignItems:'center'}}	
			onPress={()=>{

				setColour(clip ? '#4ebc7a' : 'black');
				setText(clip ? 'Hacer Pedido': 'Buscar');
                Linking.openURL('whatsapp://send?text='+ canasta.getMessage() +'&phone=+52 1 998 143 9939')

			}}
		>
			<Text style={{color:'white', fontWeight:'bold', fontSize:25, top:'15%'}}>Hacer pedido</Text>
			

		</TouchableOpacity>
	);
};


const NavBar = () => {
	return(
		<View style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center'}}>
			<Image source={require('./src/menu-icon.png') } style={{width:20, height:20}}/>
			<Image source={require('./src/tacostumbras-logo.jpeg')} style={{width:100, height:40}}></Image>
			<Image source={require('./src/search-icon.jpeg') } style={{width:30, height:30}}/>
		</View>
	);
};






const App = () => {

  return (
	  <>
	  	<View style={styles.globalContainer}>
			  <Layout></Layout>
	  	</View>
	  </>
  );
};

const styles = StyleSheet.create({
	globalContainer:{
		backgroundColor:'white',
		flex:1,
	},
	title:{
		fontSize:30,
		fontWeight:'bold'
	},
	menuOption:{
		paddingHorizontal:15, 
		paddingVertical:5, 
		backgroundColor:'white', 
		height:'50%', 
		borderRadius:15, 
		borderColor:'gray', 
		borderWidth:1, 
		margin:5,
	},
	menuOptionText:{
		fontSize:15,
		fontWeight:'bold'
	},
	cardContainer:{
		backgroundColor:'white', 
		width:'45%', 
		margin:'2%', 
		borderRadius:10, 
		height:250,
		padding:5
	},
	CoverButton:{
		height:250,
	},
    centeredView: {
	    flex: 1,
	    justifyContent: "center",
	    alignItems: "center",
	},
	modalComponent: {
        flex: 1,
        height:'100%',
        width:'100%',
	    backgroundColor: '#e9ebf4',
	    elevation: 5,
	},
    buttonText:{
        marginHorizontal:'30%',
        fontSize:30,
        color:'black',
    },
    buttonStyle:{
        width: '10%',
        borderRadius: 10,
        position:'absolute',
        left:'5%',
        top:'1%',
        zIndex:1,
        backgroundColor:'white'
    },
});


export default App;
