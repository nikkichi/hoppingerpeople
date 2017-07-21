import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'

let button: "Lees meer"

// This is the GrandParent I think
type OoievaarsPasComponentProps = {   onMovePage: (id: Manager.Page) => void}
type OoievaarsPasComponentState = { kind: "Loading"} | {kind:"Loaded", value: Types.InformatiePas[]}


function generateNumber(min:number, max:number){
    return Math.floor(Math.random()* max - min + 1) + min
}


export class OoievaarsPasComponent extends React.Component<OoievaarsPasComponentProps, OoievaarsPasComponentState>{
    constructor(props, context) {
        super(props, context);
        this.state = { kind: "Loading"} 

    }

    loadInformatiePas(){
            Api.get_ooievaarsPas()
            .then(i => this.setState({ ...this.state, kind: "Loaded", InformatiePas: i}))
            .catch (i => this.loadInformatiePas )
    }

    componentWillMount() {
     this.loadInformatiePas();       
                
    }    
            
   


    render() {
        if(this.state.kind == "Loaded"){
            let oo
        }
      
            return <div></div>
   


    }
}




