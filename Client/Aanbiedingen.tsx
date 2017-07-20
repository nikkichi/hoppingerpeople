import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"

//mock api call
function getAanbieding(id:number) {
    switch (id) {
        case 1:
            return Promise.resolve({Name: "Bootexcursie Rotterdam - Kinderdijk",
                                    Description: "Ook aankomende zomer (vanaf 1 april t/m 29 oktober 2017) voeren wij de enige echte bootexcursie Rotterdam - Kinderdijk uit. Een perfecte (fiets-)verbinding tussen het woelige, drukke centrum en het rustige en romantische landschap van Kinderdijk.Vaar mee met ons sfeervol passagierschip 'Nehalennia', waar service en klantvriendelijkheid op de eerste plaats staan."})

        case 2:
            return Promise.resolve({Name: "Bewegen voor 50 plussers",
                                    Description: "Bewegen is goed voor de gezondheid, maar bovenal is bewegen leuk! U ontmoet mensen en beleeft plezier en gezelligheid met elkaar. U vindt alle sportaanbieders waar u korting krijgt met uw Ooievaarspas op deze website. Een proefles is meestal gratis en wie weet krijgt u er een nieuwe hobby bij. Op deze pagina vindt u tips en extra aanbiedingen. Bekijk het aanbod voor 50 plussers. Laatst bekeken aanbiedingen."})

        default:
            break;
    }
}

type AanbiedingenComponentProps = {view_count: number, id: number}
type AanbiedingenComponentState = {name: string, description: string, is_expanded: boolean}

//main component voor aanbiedingen pagina
export class AanbiedingenComponent extends React.Component<AanbiedingenComponentProps, AanbiedingenComponentState> 
{
    constructor(props: AanbiedingenComponentProps, context)
    {
        super(props, context)
        this.state = {name : "loading...", description: "loading...", is_expanded: false}
    } 
    //method die de state van de button en de hyperlink omzet (is_expanded veranderd)
    toggle_button(){
        if (this.state.is_expanded) { this.setState({... this.state, is_expanded: false})}
        else {this.setState({... this.state, is_expanded: true})}
    }
    //hier wordt er data uit de mock api gehaald
    componentWillMount() {
        getAanbieding(this.props.id).then(aanbieding => this.setState({...this.state, name:aanbieding.Name, description:aanbieding.Description}))
    }

    render(){

        //variabele/if statement (als de state true is: show description, false: show empty string)
        let description = (this.state.is_expanded) ? this.state.description : ""

        //veranderd de de tekst op de button als de state veranderd, dus als er op wordt geklikt
        let button_text = (this.state.is_expanded) ? "Lees minder" : "Lees meer"

        //variabele die de favoriet button weergeeft wanneer is_expanded true is, anders niks 
        let fav_button = (this.state.is_expanded) ? <div><button>Voeg toe aan uw favorieten</button></div> : ""

        //de method toggle_button wordt opgeroepen in als je op name en de button klikt, dus de state verandert en het laat de description zien
        return <div><a onClick={() => this.toggle_button()}><h1>{this.state.name}</h1></a>
                        <button onClick={() => this.toggle_button()}>{button_text}</button><br/><br/>
                        {description}<br/><br/>
                        {fav_button}</div>
    }        
}

type PageComponentProps = {}
type PageComponentState = {} 

export class PageComponent extends React.Component<PageComponentProps, PageComponentState>{
    constructor(props: PageComponentProps, context){
        super(props, context)
        this.state = {}
    }
    componentWillMount(){}

    render(){
        return <div></div>
    }
}
// maak een list van alle cases in je getAanbiedingen