import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'


let hyperlink = "lees meer "

type DagtochtenComponentProps = { onMovePage: (id: Manager.Page) => void }
type DagtochtenComponentState = { name: string, title: string, description: string }

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { name: "loading", title: "", description: "" }
    }

    componentWillMount() {
        
    }

    render() {

        return <div>
            <h1>  opties dagtochten</h1>
            <h2> {this.state.name}</h2>
            <div> {this.state.description}</div>

            <h2>Dagtochen</h2>
            <h4> {this.state.title}</h4>
            <button onClick={(event) => this.props.onMovePage({ kind:"dagtocht" , id:2 })}>{hyperlink}</button>


        </div>
    }
}


