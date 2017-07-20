import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type InforComponentProps = { onMovePage: (id: Manager.Page) => void, }
type InforComponentState = { text: string, title: string, description: string, categoryID: number, prijs: number }

export class InforComponent extends React.Component<InforComponentProps, InforComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { text: "Loading", title: "", description: "", categoryID: null, prijs: null }
    }

    componentWillMount() {


    }


    render() {

        return <div>

            <h1>InfoComponent</h1>
            <br></br>
            <div>{this.state.text}</div>
            <br></br>
            <div>{this.state.prijs}</div>
            <button onClick={(event) => this.props.onMovePage({ kind: "about" })}> terug</button>

        </div>
    }
}

