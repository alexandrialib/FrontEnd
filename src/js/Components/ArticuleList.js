import React,{Component} from 'react';
import store from '../../Store';


export default class ArticuleList extends Component{
    constructor(){
        super();
        this.state= {
            articuleList:[]
        }
        store.subscribe(()=>{
            comment:store.getState().articuleList;

        });
    }

    render(){
        return;
    }

}
