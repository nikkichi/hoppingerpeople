import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Manager from './Dagtochten'

type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: string }

type DagtochtenComponentProps = { onMovePage: (id: string) => void}
type DagtochtenComponentState = { name: string, title: string, description: string, id: string }


type InforComponentProps = { onMovePage: (id: string) => void, }
type InforComponentState = { text: string, title: string, description: string, categoryID: number, prijs: number }

let hyperlink = "lees meer "

function get_category(id: string) {
    switch (id) {
        case "/dagtocht1":
            return Promise.resolve({
                title: "Zomerdagtochten voor gezinnen",
                description: "Iedere zomer wordt een dagtocht georganiseerd voor gezinnen. Er is altijd keus uit een wisselend aanbod aan bestemmingen waaronder het bezoek aan een pretpark, museum of show. Voor €10,- per persoon kun je al met de bus mee naar een topbestemming.De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen.",
                id: "/dagtochtPagina/Detail1"
            })

        case "/dagtocht2":
            return Promise.resolve({
                title: "Zomerdagtochten voor senioren",
                description: "Iedere zomer wordt een dagtocht georganiseerd voor senioren van 50 jaar of ouder. Met uw Ooievaarspas kunt u voor € 10 deelnemen aan een fantastische dagtocht. De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen.",
                id: "/dagtochtPagina/Detail2"
            })
        case "/dagtocht3":
            return Promise.resolve({
                title: "Zomerdagtochten voor personen met begeleidingsbehoefte",
                description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! Deze zomerdagtochten zijn bedoeld voor senioren met een begeleidingsbehoefte",
                id: "/dagtochtPagina/Detail3"
            })

        default:
            break;
    }
}

function get_dagtocht(id: string): Promise<{ name: string, description: string, prijs: number, categoryID: number, text: string }> {
    switch (id) {
        case "/dagtochtPagina/Detail1":
            return new Promise((resolve, reject) => resolve({
                name: "Dagtocht met Brouwer Travel naar de Efteling",
                description: "Zin om er deze zomer een dagje op uit te gaan? Met uw Ooievaarspas kunt u deelnemen aan een...",
                prijs: 25,
                categoryID: 2,
                text: "Ga mee naar het meest geliefde pretpark van Nederland: de Efteling. U gaat toch ook mee naar het meest geliefde pretpark van Nederland? De Efteling is een themapark geschikt voor alle leeftijden. U zult u hier absoluut niet vervelen; jong, oud, man of vrouw - voor iedereen is er entertainment."
            }))

        case "/dagtochtPagina/Detail2":
            return new Promise((resolve, reject) => resolve({
                name: "Dagtocht voor senioren met Brouwer Travel: Op stap in ",
                description: "Bent u 50 jaar of ouder en heeft u zin om er deze zomer een dagje op uit te gaan? Met uw...",
                prijs: 25,
                categoryID: 3,
                text: ""
            }))

        case "/dagtochtPagina/Detail3":
            return new Promise((resolve, reject) => resolve({
                name: "Dagtocht met BBD voor senioren tocht ",
                description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! De activiteit is...",
                prijs: 25,
                categoryID: 4,
                text: ""
            }))

        default:

            return new Promise((resolve, reject) => reject({ id: 2 }))
    }
}

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { name: "loading", title: "", description: "", id: "/dagtochtPagina" }
    }

    componentWillMount() {
        get_category("/dagtocht1").then(name => this.setState({
            ...this.state,
            name: name.title,
            description: name.description,
            id: name.id
        }))

        get_dagtocht("/dagtochtPagina/Detail1").then(x => this.setState({
            ...this.state,
            name: x.name,
            description: x.description
        }))
    } 

    render() {

        return <div>
            <h1>  opties dagtochten</h1>
            <h2> {this.state.name}</h2>
            <div> {this.state.description}</div>

            <h2>Dagtochen</h2>
            <h4> {this.state.title}</h4>
            <button onClick={(event) => this.props.onMovePage(this.state.id)}>{hyperlink}</button>


        </div>
    }
}

export class InforComponent extends React.Component<InforComponentProps, InforComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { text: "Loading", title: "", description: "", categoryID: null, prijs: null }
    }

    componentWillMount() {


        get_dagtocht("/dagtochtPagina/Detail1").then(x => this.setState({
            ...this.state,
            title: x.name,
            description: x.description,
            text: x.text,
            prijs: x.prijs
        }))

    }


    render() {

        return <div>

            <h1>{this.state.title}</h1>
            <br></br>
            <div>{this.state.text}</div>
            <br></br>
            <div>{this.state.prijs}</div>
            <button onClick={(event) => this.props.onMovePage("/dagtochtPagina")}> terug</button>




        </div>
    }
}


