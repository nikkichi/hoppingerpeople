import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'


type InfoPasComponentProps = {onMovePage: (id: Manager.Page) => void}
type InfoPasComponentState = { kind: "loading"} | {kind:"loaded", value: Types.Uitleg_InformatiePas[]}

// function generateNumber(min:number, max:number){
//     return Math.floor(Math.random()* max - min  1)  min
// }

export class InfoPasComponent extends React.Component<InfoPasComponentProps, InfoPasComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }

    loadUitleg(){
        Api.get_uitleg('Over Ooievaarspas')
        .then(u => this.setState({...this.state, kind: 'loaded', Uitleginformatie: u}))
        .catch(u=> this.loadUitleg())
    }

    componentWillMount(){
        console.log('Will mount')
        this.loadUitleg();
    }

    render(){
        if(this.state.kind == 'loaded'){
            let uitleg_view = function(info: Types.Uitleg_InformatiePas){<div>
                      
                        <h1> {info.title}</h1>
                        <div> {info.description}</div>
                        <button> lees meer </button>
                        </div>
                
            }
            return <div> {uitleg_view(this.state.value[0])} </div>
        }
        else{
            return <div>else</div>
        }

    }

    

}