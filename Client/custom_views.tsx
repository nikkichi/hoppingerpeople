import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type HomepageComponentProps = { onMovePage: (id: Manager.Page) => void}
type HomepageComponentState = { name: string, title: string, description: string, id: number}

export let HomePage = function(slug: string) : JSX.Element {
    return (<div><Manager.PageManagerComponent/> </div>) }

let hyperlink = "Lees meer"
let homepageLink = "Home"
let aanbiedingLink = "Aanbiedingen"
let dagtochtLink = "Dagtochten"
let ooievaarLink = "Ooievaarspas info"
let vragenLink = "Veelgestelde vragen"

export class HomepageComponent extends React.Component<HomepageComponentProps, HomepageComponentState> {
    constructor(props: HomepageComponentProps, context) {
        super(props, context)
        this.state = {name: "loading", title: "", description: "", id: 1}
    } 

    componentWillMount(){
        
    }

    render(){
        return <div>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 1})}>{homepageLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 2})}>{aanbiedingLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "DagtochtPagina", id: 3})}>{dagtochtLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 4})}>{ooievaarLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 5})}>{vragenLink}</button>
            <h1> Homepage</h1>
            <h2> {this.state.name}</h2>
            <div> {this.state.description}</div>

            <h2>Speciale Aanbiedingen</h2>
            <h4> {this.state.title}</h4>
        </div> 
    }
}