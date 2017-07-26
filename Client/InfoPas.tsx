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

              
let hyperlink = 'lees meer'

type InfoPasComponentProps = {onMovePage: (id: Manager.Page) => void, id: number, title: string}
type InfoPasComponentState = { kind: "loading"} 
                            | {kind:"loaded", Uitleginformatie: Types.Uitleg_InformatiePas[], Extrainformatie: Types.Extra_Informatie[]}
                           

export class InfoPasComponent extends React.Component<InfoPasComponentProps, InfoPasComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }

    loadUitleg(){
        Api.get_OverDeOoievaarspas(this.props.id)
        .then(u => this.setState({...this.state, kind: 'loaded', Uitleginformatie: u}))
      //  .catch(u=> console.log("error"))//this.loadUitleg())
        console.log('test')

    }

    loadExtraInfo(){
        Api.get_ExtraInformatie()
        .then(ex => this.setState({...this.state, kind:'loaded', Extrainformatie: ex}))
        //.catch(ex => console.log('error'))
        console.log('extra info wordt geload')
    }

    componentWillMount(){
         this.loadUitleg();
        console.log('Uitleg wordt geload')
        this.loadExtraInfo();
        
    }

    render(){
        let onClickInformatieDetail = (title: string) => this.props.onMovePage({kind: "InformatieDetail", title: title})
        let onClickInformatiebutton = (title: string) => this.props.onMovePage({kind: "ExtraInformatie", title: title})
        if(this.state.kind == 'loaded'){

            let uitleg_view = function(information: Types.Uitleg_InformatiePas){ 
                return <div key={information.title}>
                            
                           <a onClick={(id) => onClickInformatieDetail(information.title)}>  <h2> {information.title}</h2></a>
                            <div> {information.description}</div>
                            <button onClick={() => onClickInformatieDetail(information.title)}>{hyperlink}</button>
                            
                 </div>
                    
                }
            let extrainfo_view = function(extrainfo: Types.Extra_Informatie){
                return <div key={extrainfo.title}>
                        <a onClick={() => onClickInformatiebutton(extrainfo.title)}>
                            <h2>{extrainfo.title}</h2>
                        </a>
                        <div>{extrainfo.description}</div>
                        <button onClick={() => onClickInformatiebutton(extrainfo.title) }>{hyperlink}</button>
                    
               </div>            
                }
        
                return <div>
                     {this.state.Uitleginformatie.map(information => uitleg_view(information))} 
                    {this.state.Extrainformatie.map(extrainfo => extrainfo_view(extrainfo))}
              
                </div>
                 
        }
        else{
            return <div>else</div>
        }

        

    }

    

}