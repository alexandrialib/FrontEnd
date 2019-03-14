import React, {Component} from 'react';
import store from '../../Store';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';





class Articule extends Component{
    constructor(){
        super();
        this.addArticule= this.addArticule.bind(this);
        this.state={
        articule:{id:1,name:"MERGE",description: "algortimo de ordenamiento"},
        comments:[
            {userID:1,userName:"EasyBoy",description:"hola"}
            ]
        }   
    }
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center",marginTop:100}}> {this.state.articule.name}</h1>
            <h1 style={{textAlign:"center",marginTop:100}}> {this.state.articule.description}</h1>
            
            <DataTable ref={(el) => this.dt = el} value={this.state.comments} paginator={true} 
                        globalFilter={this.state.globalFilter}>
                        <Column field="userName" header="User Name" filter={true} />
                        <Column field="description" header="Description" filter={true} />
                    </DataTable>   
            </div>
        
        );
    }

    addArticule(articule){
        store.dispatch({
            type:"Add_Articule",
            articule

        })
    }
     




}
export default Articule;