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
         let onclickAanbieding = (id: number) => this.props.onMovePage({ kind: "DetailAanbieding", id: id, checkPage: 3})

        if (this.state.kind == "loaded") {
            let specialAanbiedingView = function (special_aanbieding: Types.SpecialAanbieding) {
                return <div className="box--fourth" key={special_aanbieding.id}>
                       <a onClick={(id) => onclickAanbieding(special_aanbieding.id)}> <h2>{special_aanbieding.title}</h2> </a>
                              <img src = {special_aanbieding.image} ></img> 
                    <br></br>
                    <p className="box--special"> {special_aanbieding.description}</p>
                    <br></br>
                    <button onClick={() => onclickAanbieding(special_aanbieding.id)}>
                        {hyperlink}
                    </button>
                </div>
            }
            return  <div>
                    <h1 className="homepage--title">Ooievaarspas</h1>
                    <h2 className="homepage--special">Speciale Aanbiedingen</h2>
                        {this.state.specialeAanbieding.map( value =>specialAanbiedingView(value))}
                    </div>
        }
        else {return <div> else </div>}
    }
}
