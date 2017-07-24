import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'

type InformatieDetailComponentProps = {onMovePage: (id: Manager.Page) => void, id: number}
type InformatieDetailComponentState = { kind: "loading"} 
                                     | {kind:"loaded", Uitleginformatie: Types.Uitleg_InformatiePas[]}

export class InformatieDetailComponent extends React.Component<InformatieDetailComponentProps, InformatieDetailComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }

    loadDetailinfo(){
        Api.get_OverDeOoievaarspas(this.props.id)
        .then(u => this.setState({...this.state, kind: 'loaded', Uitleginformatie: u}))
        .catch(u=> console.log("error"))//this.loadUitleg())
        console.log('test')
    }

    componentWillMount(){
        this.loadDetailinfo();
        console.log('Details worden geload')
    }

    render(){
        if (this.state.kind == 'loaded'){
            let detail_view = function(details: Types.Uitleg_InformatiePas){
                return <div key={details.title}>
                    <h1>{details.title}</h1>
                    <div>{details.text}</div>
                    <div>{details.id}</div>
                    </div>
            }
                return<div>
                    {this.state.Uitleginformatie.map(details => detail_view(details))}
                </div>
        }
        else{
            return <div>Else</div>
        }
    }


}