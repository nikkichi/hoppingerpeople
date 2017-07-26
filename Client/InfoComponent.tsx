import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type InforComponentProps = { id: number, checkPage: number }
type InforComponentState = { kind: "loading" } |
    { kind: "DetailDagtocht", dagtochten: Types.Dagtocht[], favoriete: Types.Dagtocht } |
    { kind: "DetailAanbieding", aanbieding: Types.aanbieding[] } |
    { kind: "DetailSpecial", special: Types.SpecialAanbieding[] }


export class InforComponent extends React.Component<InforComponentProps, InforComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }

    loadAanbieding() {

        Api
            .get_aanbieding(this.props.id)
            .then(d => this.setState({ ...this.state, kind: "DetailAanbieding", aanbieding: d }))
        // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))

    }

    loadSpeciaal() {
 
        Api
            .get_special(this.props.id)
            .then(d => this.setState({ ...this.state, kind: "DetailSpecial", special: d }))
        // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))

    }


    loadDagtocht() {
        // console.log("id checker",this.props.id)
        Api
            .get_OneDagtocht(this.props.id)
            .then(d => this.setState({ ...this.state, kind: "DetailDagtocht", dagtochten: d }))
        // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))

    }

    componentWillMount() {


        if (this.props.checkPage == 1) {
            return this.loadAanbieding();
        }
        else if (this.props.checkPage == 2) {
            return this.loadDagtocht();
        }
        else if (this.props.checkPage == 3) {
            return this.loadSpeciaal()
        }

    }



    render() {
        if (this.state.kind == "DetailAanbieding") {
            let AanbiedingView = function (aanbieding: Types.aanbieding) {


                return <div key={aanbieding.title}>
                    <h2> {aanbieding.title}</h2>
                    <img src={aanbieding.image} ></img>
                    <br></br>
                    <h2>Omschrijving</h2>
                    <p> {aanbieding.description}</p>
                    <br></br>
                    <h2>reserveren</h2>
                    <p>{aanbieding.reserveren}</p>
                    <br></br>


                </div>
            }
            return <div>
                {this.state.aanbieding.map(aanbiedingen => AanbiedingView(aanbiedingen))
                }

            </div>
        }
        else if (this.state.kind == "DetailSpecial") {
            let SpecialView = function (special: Types.SpecialAanbieding) {
                return <div key={special.title}>
                    <h2> {special.title}</h2>
                    <img src = {special.image} ></img> 
                    <br></br>
                    <h2>Omschrijving</h2>
                    <p> {special.description}</p>
                    <br></br>
                    <h2>reserveren</h2>
                    <p>{special.reserveren}</p>
              
                    <br></br>
                </div>
            }
            return <div>
                {this.state.special.map(special => SpecialView(special))
                }

            </div>
        }
        else if (this.state.kind == "DetailDagtocht") {
            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div key={dagtocht.name}>
                    <h2> {dagtocht.name}</h2>
                    <img src={dagtocht.image} ></img>
                    <br></br>
                    <h2>Omschrijving</h2>
                    <p> {dagtocht.text}</p>
                    <br></br>
                    <h2>prijs</h2>
                    <p> €{dagtocht.prijs}</p>
                    <br></br>
                    <h2>reserveren</h2>
                    <p>{dagtocht.reserveren}</p>
                    <br></br>




                </div>
            }


            return <div>
                {this.state.dagtochten.map(dagtocht => dagtochtView(dagtocht))
                }
            </div>
        }
        else
            return <div>else</div>
    }

}