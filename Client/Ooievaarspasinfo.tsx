import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'


let next_page = {kind: "infopas"}
let hyperlink = 'lees meer'
 type OoievaarsPasComponentProps = {   onMovePage: (id: Manager.Page) => void}
 type OoievaarsPasComponentState = { kind: "loading"} 
                                  | {kind:"loaded", value: Types.InformatiePas[]}
 
 
 export class OoievaarsPasComponent extends React.Component<OoievaarsPasComponentProps, OoievaarsPasComponentState>{
     constructor(props, context) {
         super(props, context);
       this.state = { kind: "loading"} 
 
     }
 
     loadInformatiePas(){
             Api.get_ooievaarsPas()
           .then(i => this.setState({ ...this.state, kind: "loaded", value: i }),
           e => console.log('Error: ', e)) 
      
     }
 
     componentWillMount() {
       this.loadInformatiePas();  
    
                 
     }    
             
 
 
     render()
     {
       let onClickInfoPas = (id: number) => this.props.onMovePage({kind: "infopas", id: id, title: "ja"})

       if(this.state.kind == "loaded" )
        {
           let ooievaarspas_View = function(info: Types.InformatiePas){ 
           return   <div className="box-ooi" key={info.title}>
                       <a onClick={(id) => onClickInfoPas(info.id)}>  <h2> {info.title}</h2></a>
                       <div>{info.description }</div>
                       <button className="regular-button" onClick={() => onClickInfoPas(info.id)}>{hyperlink}</button>
                    </div>
                 
          }
           
            return <div>
                      <h1 className="title-ooi">  Informatie over de Ooievaarspas</h1>
                      {this.state.value.map(info => ooievaarspas_View(info))}
                  </div>
           
       
      }

      else{
            return<div> else </div>
          }
 
     }
 }