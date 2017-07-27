import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'
type InformatieDetailComponentProps = {onMovePage: (id: Manager.Page) => void, title: string}
type InformatieDetailComponentState = { kind: "loading"} 
                                     | {kind:"loaded", Uitleginformatie: Types.Detail_Uitleg[], Extrainformatie: Types.Extra_Informatie[]}
export class InformatieDetailComponent extends React.Component<InformatieDetailComponentProps, InformatieDetailComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }
    loadDetailinfo(){
        Api.get_InformatieDetail(this.props.title)
        .then(u => this.setState({...this.state, kind: 'loaded', Uitleginformatie: u}))
        .catch(u=> console.log("error"))//this.loadUitleg())
     
    }
    loadExtraInfo(){
        Api.get_ExtraInformatie()
        .then(ex => this.setState({...this.state, kind:'loaded', Extrainformatie: ex}))
        //.catch(ex => console.log('error'))
      
    }
    componentWillMount(){
        this.loadDetailinfo();
        this.loadExtraInfo() 
    }
    render(){
        let onClickInformatiebutton = (title: string) => this.props.onMovePage({kind: "ExtraInformatie", title: title})
        if (this.state.kind == 'loaded'){
            let detail_view = function(details: Types.Detail_Uitleg){
                return <div key={details.title}>
                    <h1 className="title-ooi">{details.title}</h1>
                    <div className="box-ooiDetail" >{details.text}</div>
                    <br></br>
                    <img src = {details.image} ></img>
                    </div>
            }
            let extrainfo_view = function(extrainfo: Types.Extra_Informatie){
                return <div className="box-ooi" key={extrainfo.title}>
                        <a onClick={() => onClickInformatiebutton(extrainfo.title)}>
                            <h2>{extrainfo.title}</h2>
                        </a>
                        <div>{extrainfo.description}</div>
                        <button className="regular-button" onClick={() => onClickInformatiebutton(extrainfo.title) }>lees meer</button>
                    
                         </div>    
            }
                return<div>
                    {this.state.Uitleginformatie.map(details => detail_view(details))}
                    {this.state.Extrainformatie.map(extrainfo => extrainfo_view(extrainfo))}
                </div>
        }
        else{
            return <div>Else</div>
        }
    }
}