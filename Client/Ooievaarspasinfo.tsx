import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'

// This is the GrandParent I think
 type OoievaarsPasComponentProps = {   onMovePage: (id: Manager.Page) => void}
 type OoievaarsPasComponentState = { kind: "loading"} | {kind:"loaded", value: Types.InformatiePas[]}
 
 
 function generateNumber(min:number, max:number){
 }
 export class OoievaarsPasComponent extends React.Component<OoievaarsPasComponentProps, OoievaarsPasComponentState>{
     constructor(props, context) {
         super(props, context);
       this.state = { kind: "loading"} 
 
     }
 
     loadInformatiePas(){
             Api.get_ooievaarsPas()
           .then(i => this.setState({ ...this.state, kind: "loaded", InformatiePas: i}))
           .catch (i => this.loadInformatiePas() )
     }
 
     componentWillMount() {
      
       console.log("will mount")
       this.loadInformatiePas();   
                 
     }    
             
 
 
     render() {

       if(this.state.kind == "loaded"){
           let ooievaarspas_View = function(info: Types.InformatiePas){ <div>
                       <h1>  Informatie over de Ooievaarspas</h1>
                       <h2> {info.title}</h2>
                       <div>{info.description
                           }</div>
                       <button> lees meer </button>
                       </div>
           }
           
            return <div>
           {this.state.value.map(info => ooievaarspas_View(info))}
           <div>{ooievaarspas_View}</div>
 
           </div>
       
       }
 
     }
 }
