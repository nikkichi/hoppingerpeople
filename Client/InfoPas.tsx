import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'
import * as Ooievaarspasinfo from './Ooievaarspasinfo'

type InfoPasComponentProps = {onMovePage: (id: Manager.Page) => void}
type InfoPasComponentState = { kind: "loading"} 
                            | {kind:"loaded", Uitleginformatie: Types.Uitleg_InformatiePas[]}

export class InfoPasComponent extends React.Component<InfoPasComponentProps, InfoPasComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }

    loadUitleg(){
        Api.get_uitleg()
        .then(u => this.setState({...this.state, kind: 'loaded', Uitleginformatie: u}))
        .catch(u=> console.log(u))//this.loadUitleg())
        console.log('test')
    }

    componentWillMount(){
        this.loadUitleg();
        console.log('Uitleg wordt geload')
    }

    render(){
        if(this.state.kind == 'loaded'){

            let uitleg_view = function(info: Types.Uitleg_InformatiePas){<div id={info.title}>
                        
                        <h1> {info.title}</h1>
                        <div> {info.description}</div>
                        <button>Lees meer</button>
                        </div>
                
            }
            return <div>
                {this.state.Uitleginformatie.map(info => uitleg_view(info))}
                {/* <div>{uitleg_view} </div> */}
                <button onClick={(event) => this.props.onMovePage({kind:'infopas'})}>{"Lees niet meer"}</button>
                 
                
                 </div>
                 
        }
        else{
            return <div>else</div>
        }

    }

    

}