import {createStore} from 'redux';

const reducer=(state,action)=>{
    if(action.type==="Add_Articule"){
        return{
            ...state,
            
        }
    }
    return state;
}

export default createStore(reducer,{articuleList:[]});