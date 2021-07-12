
import Menu from './src/Menu';
import {LineDivisor, ModalExpected, ItemSection} from './src/spectral';
import Basket from './src/logic'

let cart = new Basket()


const Section = (props) =>{
	const [modalVisible, setModalVisible] = useState(false)

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
					source={require('./src/Taco.jpeg')} 
					style={{height:'90%', width:'90%', borderRadius:100}}
				>
				</Image>
			</View>
		)
	}
	let InfoRender = ({name, text}) => {
		return (
			<>
			<View>
				<Text style={{fontSize:20, fontWeight:'bold'}}>{name}</Text>
			</View>
			<View>
				<Text style={{color:'gray'}}>{text}</Text>
			</View>
			</>
		)
	}
	let ButtonOpen = (
		<View style={{backgroundColor:'black', height:30, borderRadius:100, justifyContent:'center', alignItems:'center'}}>
			<Text style={{color:'white', fontSize:17, fontWeight:'bold'}}>ORDENAR</Text>
		</View>
	)
	
	let getObjects = Menu[props.id].map( (a, i) => (
		i != 0 ?
			<ItemSection
				name={a[0]}
				text={"lorem ipsum dolor reptum"}
				price={a[1]}
				key={i}
				toCloseModal = {()=>setModalVisible(!modalVisible)}
				addToCart = {props.deal[0]}
				setToCart = {()=>cart.setElement([props.id, i, 1])}
				removeToCart = {props.deal[1]}
			></ItemSection>
		: null
	))

	let BodyLayout = (
		<View style={{flex:15}}>
			<View style={{flex:3}}>
				<Image source={require('./src/Recurso3.png')} style={{height:'100%'}}></Image>
			</View>
			<View style={{flex:5}}>
				<ScrollView>
					{getObjects}
				</ScrollView>
			</View>
		</View>
	)
	let TitleSection = (
		<Text style={{fontSize:40, fontWeight:'bold', color:'white'}}>{props.name}</Text>
	)

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
		  {TitleSection}
		</View>
	)

	return(
		<View>
			<View style={{height:90}}>
				<View style = {{height:89, paddingHorizontal: 30, flexDirection:'row'}}>
					<View style={{flex:1, justifyContent:'center'}}>
						<ImageRender></ImageRender>
					</View>
					<View style={{flex:3, paddingHorizontal:15, paddingVertical:10}}>
						<InfoRender name = {props.name} text={"lorem ipsum dolor reptum"}></InfoRender>
					</View>
					<View style={{flex:1.5, justifyContent:'center'}}>
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
								  {BodyLayout}
								</View>
							  </Modal>
							  {ButtonOpen}
							</View>
						</TouchableHighlight>
					</View>
				</View>
				<LineDivisor></LineDivisor>
			</View>
		</View>
	);
}




const ModalIO = (props) => {
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


















const MenuLayout = (props) => {
	let getSections = Menu.map((section, index) => (
		<Section
			name = {section[0]}
			key = {index}
			id = {index}
			deal = {[props.dealInUp, props.dealInDown]}
			
		></Section>
	))

	return(
		<>
			<View style={{flex:3}}>
				<Image source={require('./src/Recurso3.png')} style={{height:'100%', width:'100%'}}></Image>
			</View>
			<View style={{flex:5}}>
				<ScrollView>
					{getSections}
					{/**
				*/}
					<Button
						title={"Hola"}
						onPress={()=>{console.log(cart.getElements())}}
					></Button>
				</ScrollView>
			</View>
		</>
	);
}



const NavBar = (props) => {

	let cartN = props.deal
	let MenuNavBar = [
		(<Image source={require('./src/search-3-128.png') } style={{width:30, height:30}}/>),
		(<Text style={{fontSize:40, fontWeight:'bold', padding:10}}>Buscar</Text>)
	]

	let CartNavBar = [
		(
			<View style={{flexDirection:'row', alignItems:'flex-end'}}>
				<Text style={{color:'white', fontSize:20}}>{cartN}</Text>
				<Image source={require('./src/cart-256.png') } style={{width:30, height:30}}/>
			</View>
		),
		(<Text style={{fontSize:40, fontWeight:'bold', padding:10, flex:1.3, color:'white'}}>Your choosen</Text>),
		(
			<View style={{flex:15}}>
				<View style={{alignItems:'center', padding:5}}>
					<View style={{width:'90%', height:'60%'}}>
						<ScrollView>
							{cart.renderElements()}
						</ScrollView>
					</View>
				</View>
				<Button
					title={"Limpiar carrito"}
					color={"black"}
					onPress={()=>{
						cart.resetBasket()
					}}
				></Button>

			</View>
		)

	]
	return(
		<View style={{flexDirection:'row', height:'100%', justifyContent:'space-between', padding:15, alignItems:'center', backgroundColor:'#f6a502'}}>
			<ModalExpected
				Deploy = {MenuNavBar[0]}
				Title = {MenuNavBar[1]}
			></ModalExpected>
			<Image source={require('./src/Recurso2.png')} style={{width:100, height:40}}></Image>
			<ModalExpected
				Deploy = {CartNavBar[0]}
				Title = {CartNavBar[1]}
				Body = {CartNavBar[2]}
			></ModalExpected>
		</View>
	);
};


const Layout = () => {
	const [cartN, setCartN] = useState(0)

	return (
		<>
			<View style={{flex:1, justifyContent:'center'}}>
				<NavBar
					deal={cartN}
					items={cart.renderElements()}
					clearCart={()=>cart.resetBasket()}
				></NavBar>
			</View>
			<View style={{flex:10, backgroundColor:'whitesmoke'}}>
				<MenuLayout
					dealInUp={()=>setCartN(cartN+1)}
					dealInDown={()=>setCartN(cartN-1)}
				></MenuLayout>
			</View>
		</>
	);
};