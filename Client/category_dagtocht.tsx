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

type category_dagtochtComponentProps = {onMovePage: (id: Manager.Page) => void, id: number}
type category_dagtochtComponentState = { kind: "loading"} 
                            | {kind:"loaded", dagtochten: Types.Dagtocht[]}

export class category_dagtochtComponenet extends React.Component<category_dagtochtComponentProps, category_dagtochtComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }

    loadDagtochten() {
        Api
            .get_dagtocht(this.props.id)
            .then(d => this.setState({
                ...this.state,
                kind: "loaded",
                dagtochten: d
            }))}

    componentWillMount(){
        this.loadDagtochten();
        console.log('dagtocht wordt geload')
    }

    render(){
         let onclickdagtocht = (id: number) => this.props.onMovePage({ kind: "DetailDagtocht", id: id, checkPage: 2 })
        if(this.state.kind == 'loaded'){

           let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div key={dagtocht.name}>
                    <a onClick={(id) => onclickdagtocht(dagtocht.id)}>  <h2> {dagtocht.name}</h2></a>
                     <div> {dagtocht.description}</div>
                


                    <button
                        onClick={() => onclickdagtocht(dagtocht.id)}>
                        {hyperlink}
                    </button>
                </div>
            } 
                  return <div>

                <div> {

                    this.state.dagtochten.map(dagtocht => dagtochtView(dagtocht))}</div>
                {this.state.dagtochten.filter(dagtocht => { dagtocht.categoryID == dagtocht.categoryID })



                }</div>
                 
        }
        else{
            return <div>else</div>
        }

    }

    

}