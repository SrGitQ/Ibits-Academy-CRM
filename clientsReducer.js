import { combineReducers } from "redux";

import AsyncStorage from '@react-native-async-storage/async-storage'

const data = [
    {
        id:1,
        name:"Victor Uribe",
        courses:[
            {idn:"Introduction to python", total:10000},
            {idn:"Introduction to Java", total:10000},
            {idn:"Algorithms", total:10000},
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"5,000.00",
        date:"Junio 17",
        pay:false
    },
    {
        id:2,
        name:"Osiris Cámara",
        courses:[
            {
                idn:"Introduction to python",
                total:10000
            }
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"1,400.00",
        date:"Junio 20",
        pay:false
    },
    {
        id:3,
        name:"Juan Manuel",
        courses:[
            {
                idn:"Introduction to python",
                total:10000
            }
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"5,000.00",
        date:"Junio 17 Pagado",
        pay:true
    },
    {
        id:4,
        name:"Isabel Cámara",
        courses:[
            {
                idn:"Introduction to python",
                total:10000
            }
        ],
        notification:"26/06/21",
        paytype:"monthly",
        adeudo:"15,000.00",
        phone:"999-999-9999",
        data:"He is paying for 2 kids",
        income:"1,400.00",
        date:"Junio 20 Pagado",
        pay:true
    },

]


const INITIAL_STATE = {
    clients: data
}

export const clientsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CLIENT":

            var { clients } = state
            var addedClient = action.payload


            clients.push(addedClient)
            
            return {clients}
        default:
            return state
    }
}

export default combineReducers({
    clients: clientsReducer
})