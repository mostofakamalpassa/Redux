const redux = require('redux');

const createStore = redux.createStore

const Buy_CAKE = 'BUY_CAKE';

function buyCake(){
    return {
        type:Buy_CAKE,
        info: 'First redux action'
    }
}


// (PreviousState, action ) => newState


const initialState={
    numOfCakes: 10
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case Buy_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer );

console.log('initial State', store.getState());

const unsubscribe = store.subscribe(()=> console.log("update state", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
 unsubscribe();