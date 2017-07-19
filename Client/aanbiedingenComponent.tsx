import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
// import * as List from './containers/list'
// import * as Models from './generated_models'
// import * as Api from './generated_api'
// import * as ViewUtils from './generated_views/view_utils'

function getName(id:number) {
    switch (id) {
        case 1:
            return Promise.resolve("Bootexcursie Rotterdam - Kinderdijk")

        case 2:
            return Promise.resolve("Bewegen voor 50 plussers")

        default:
            break;
    }
}

function getAanbieding(id:number){
    switch (id) {
        case 1:
            return Promise.resolve("Ook aankomende zomer (vanaf 1 april t/m 29 oktober 2017) voeren wij de enige echte bootexcursie Rotterdam - Kinderdijk uit. Een perfecte (fiets-)verbinding tussen het woelige, drukke centrum en het rustige en romantische landschap van Kinderdijk.Vaar mee met ons sfeervol passagierschip 'Nehalennia', waar service en klantvriendelijkheid op de eerste plaats staan. ")

        case 2:
            return Promise.resolve("Bewegen is goed voor de gezondheid, maar bovenal is bewegen leuk! U ontmoet mensen en beleeft plezier en gezelligheid met elkaar. U vindt alle sportaanbieders waar u korting krijgt met uw Ooievaarspas op deze website. Een proefles is meestal gratis en wie weet krijgt u er een nieuwe hobby bij. Op deze pagina vindt u tips en extra aanbiedingen. Bekijk het aanbod voor 50 plussers. Laatst bekeken aanbiedingen")

        default:
            break;
    }
}

type AanbiedingenComponentProps = {view_count: number, id: number}
type AanbiedingenComponentState = {name: string}

type ToonAanbiedingenProps = {id: number}
type ToonAanbiedingenState = {description: string}


export class AanbiedingenComponent extends React.Component<AanbiedingenComponentProps, AanbiedingenComponentState> 
{
    constructor(props: AanbiedingenComponentProps, context)
    {
        super(props, context)
        this.state = {name : "loading"}
    } 

    componentWillMount() {
        console.log('een aanbieding is aan het laden')
        // get_aanbieding komt van een functie die een json returned en met de custom controller te maken heeft
        getName(this.props.id).then(name => this.setState({...this.state,name:name}))
    }

    render(){
        return <div>{this.state.name}

                {/*<div><button>Lees meer</button></div>*/}
               </div>
    }        
}

export class ToonAanbiedingen extends React.Component<ToonAanbiedingenProps, ToonAanbiedingenState>
{
    constructor(props: ToonAanbiedingenProps, context)
    {
        super(props, context)
        this.state = {description: "loading..."}
    } 

    componentWillMount(){
        getAanbieding(this.props.id).then(description => this.setState({... this.state, description:description}))
    }

        render(){
            return <div>{this.state.description}
                    <div><button>Lees meer</button></div></div>
    
        }     
}

