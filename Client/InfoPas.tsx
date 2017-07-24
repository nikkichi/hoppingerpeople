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

let next_page = {kind: "InformatieDetail"}
let hyperlink = 'lees meer'

type InfoPasComponentProps = {onMovePage: (id: Manager.Page) => void, id: number}
type InfoPasComponentState = { kind: "loading"} 
                            | {kind:"loaded", Uitleginformatie: Types.Uitleg_InformatiePas[]}

export class InfoPasComponent extends React.Component<InfoPasComponentProps, InfoPasComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }

    loadUitleg(){
        Api.get_OverDeOoievaarspas(this.props.id)
        .then(u => this.setState({...this.state, kind: 'loaded', Uitleginformatie: u}))
        .catch(u=> console.log("error"))//this.loadUitleg())
        console.log('test')

    }

    componentWillMount(){
        this.loadUitleg();
        console.log('Uitleg wordt geload')
    }

    render(){
        let onClickInformatieDetail = (id: number) => this.props.onMovePage({kind: "InformatieDetail", id: id})
        if(this.state.kind == 'loaded'){

            let uitleg_view = function(information: Types.Uitleg_InformatiePas){ 
                return <div key={information.title}>
                            
                            <h1> {information.title}</h1>
                            <div> {information.description}</div>
                            <button onClick={() => onClickInformatieDetail(information.id)}>{hyperlink}</button>
                            </div>
                    
                }
                return <div>
                    {this.state.Uitleginformatie.map(information => uitleg_view(information))}
                    
    
                    </div>
                 
        }
        else{
            return <div>else</div>
        }

    }

    

}