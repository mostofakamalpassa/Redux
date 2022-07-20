const redux = require('redux');

const createStore = redux.createStore
const combineReducer =redux.combineReducers

// Action create
const Buy_CAKE = 'BUY_CAKE';
const BUY_ICECREAMS = 'BUY_ICECREAMS';


function buyCake(){
    return {
        type:Buy_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream(){
    return{
        type:BUY_ICECREAMS
    }
}

// Reducer create

// (PreviousState, action ) => newState


const initialState={
    numOfCakes: 10,
    numOfIceCreams:20
}

const initialCakeState = {
    numOfCakes:10
}

const initialIccreamsState ={
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action)=>{
//     switch(action.type){
//         case Buy_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1,
           
//         }
//         case BUY_ICECREAMS: return{
//             ...state,
//             numOfIceCreams: state.numOfIceCreams-1
//         }

//         default: return state
//     }
// }


const cackReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case Buy_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1,
           
        }
        

        default: return state
    }
}

const icReamsReducer = (state = initialIccreamsState, action)=>{
    switch(action.type){
       
        case BUY_ICECREAMS: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }

        default: return state
    }
}

const rootReducer = combineReducer({
    cake: cackReducer,
    iceCream:icReamsReducer
})

// const store = createStore(reducer );
const store = createStore(rootReducer );

console.log('initial State', store.getState());

const unsubscribe = store.subscribe(()=> console.log("update state", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
 unsubscribe();