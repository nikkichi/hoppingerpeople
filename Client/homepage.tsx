import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type HomepageComponentProps = { onMovePage: (id: Manager.Page) => void}
type HomepageComponentState = { kind: "loading"} | {kind: "loaded", specialeAanbieding: Types.SpecialAanbieding[]}

let hyperlink = "Lees meer"
let homepageLink = "Home"
let aanbiedingLink = "Aanbiedingen"
let dagtochtLink = "Dagtochten"
let ooievaarLink = "Ooievaarspas info"
let vragenLink = "Veelgestelde vragen"


export class HomepageComponent extends React.Component<HomepageComponentProps, HomepageComponentState> {
    constructor(props: HomepageComponentProps, context) {
        super(props, context)
        this.state = {kind: "loading"}
    } 

    componentWillMount(){
        this.loadSpecialeAanbiedingen()
    }

    loadSpecialeAanbiedingen() {
        Api.get_specialaanbieding().then(a => this.setState({...this.state, kind: "loaded", specialeAanbieding: a}))
    }

    render(){
        let onClickDagtocht = (event) => this.props.onMovePage({ kind: "dagtochtPagina"})
        let onClickAanbieding = (event) => this.props.onMovePage({ kind: "aanbiedingPagina"})
        let onClickOoievaarsinfo = (event) => this.props.onMovePage({kind: "ooievaarspasPagina"})
        if (this.state.kind == "loaded") {
            let specialAanbiedingView = function (value: Types.SpecialAanbieding) {
                return <div>
            <h2> {value.title}</h2>
            <div> {value.description}</div>
            </div> 
            }
            return  <div>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage"})}>{homepageLink}</button>
            <button onClick={onClickAanbieding}>{aanbiedingLink}</button>
            <button onClick={onClickDagtocht}>{dagtochtLink}</button>
            <button onClick={onClickOoievaarsinfo}>{ooievaarLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "veelgesteldeVragenPagina"})}>{vragenLink}</button>
            
                    <h1>Homepage</h1>
                    <h2>Speciale Aanbiedingen</h2>
                        {this.state.specialeAanbieding.map( value =>specialAanbiedingView(value))}
                    </div>
        }
        else {return <div> else </div>}
    }
}
