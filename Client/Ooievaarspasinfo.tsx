import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'


let current_page = 1

// This is the GrandParent I think
type OoievaarsPasComponentProps = { id: number }
type OoievaarsPasComponentState = { name: string, description: string}
type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: number }
type PasInfoComponentProps = {}
type PasInfoComponentState = {}
type AanbiedersInfoComponentProps = {}
type RegelingenInfoComponentProps = {}
type ActueleInfoComponentProps = {}
type ActueleInfoComponentState = {}
type NieuwsComponentProps = {}
type NieuwsComponentState = {}
type BlockWithLinkComponentProps = { hyperlink: string, id: number, onMovePage: (id: number) => void }
type BlockWithLinkComponentState = { name: string, description: string, hyperlink: string, id: number }


function get_ooievaarsPas(id: number) {
    switch (id) {
        case 1:
            return Promise.resolve({name: "Over de Ooievaarspas",
                                    description: "De Ooievaarspas biedt korting op allerlei activiteiten op het gebied van sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk met een laag inkomen. Dit en meer informatie over de Ooievaarspas kunt u onderstaand vinden."})   

        case 2:
            return Promise.resolve({name: "njumnjum",
                                    description: "hey you"})   

        case 3:
            return Promise.resolve({name: "blub",
                                    description: "badoo"})

        case 4:
            return Promise.resolve({name: "miep",
                                    description: "okiido"})
        case 5:
            return Promise.resolve({name: "uhm",
                                    description: "poepie"})

        default:
            break

    }


}

export class BlockWithLinkComponent extends React.Component<BlockWithLinkComponentProps, BlockWithLinkComponentState>{
    constructor(props, context) {
        super(props, context);
        this.state = { name: "Loading", description: "oki", hyperlink: "button", id: this.props.id }
    }
    componentWillMount() {
        get_ooievaarsPas(this.props.id).then(ooievaarsPas => this.setState({ ...this.state, name: ooievaarsPas.name, description: ooievaarsPas.description }))
    }
    

    render() {
        return <div>

            <h2>{this.state.name}</h2>
            <body>{this.state.description}</body>
            <button> {this.state.hyperlink} </button>
        </div>

    }
}


export class OoievaarsPasComponent extends React.Component<OoievaarsPasComponentProps, OoievaarsPasComponentState>{
    constructor(props, context) {
        super(props, context);
        this.state = { name: "Loading", description: "loading" }

    }

    componentWillMount() {
        get_ooievaarsPas(this.props.id).then(ooievaarsPas => this.setState({ ...this.state, name: ooievaarsPas.name, description: ooievaarsPas.description }))
        
    }


    render() {
        if (current_page == 1)
            return <div>
                {this.state.name}
                {this.state.description}
                



                {/* <div > */}
                {/* <BlockWithLinkComponent title= {""} description= {""} hyperlink= {"Lees meer"}/>   */}
                {/* <BlockWithLinkComponent 
                    title= {"Over de Ooievaarspas"} 
                    description= {"De Ooievaarspas biedt korting op allerlei activiteiten op het gebied van sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk met een laag inkomen. Dit en meer informatie over de Ooievaarspas kunt u onderstaand vinden."} 
                    hyperlink= {"Lees meer"} />
                 <BlockWithLinkComponent 
                    title= {"Informatie voor aanbieders"} 
                    description= {"Bent u een nieuwe aanbieder van de Ooievaarspas en nog niet helemaal thuis in het verzilveren van kortingen met de Ooievaarspas?"} 
                    hyperlink= {"Lees meer"}/>
                 <BlockWithLinkComponent 
                    title= {"Informatie over Ooievaarsregelingen"} 
                    description= {"Bent u al bekend met de Ooievaarsregelingen? Of weet u niet precies hoe u er gebruik van kan maken? Dit en meer leest u hier.v"} 
                    hyperlink= {"Lees meer"}/>
                 <BlockWithLinkComponent 
                    title= {"Actuele Informatie"} 
                    description= {"Op zoek naar contactinformatie of de laatste informatie? Zoals nieuwsberichten, onze interessante Ooievaarsnieuwsbrief of andere leuke nieuwtjes? Lees het hier."} 
                    hyperlink= {"Lees meer"}/> */}


                {/* </div> */}
            </div>
        else
            return <div><PasInfoComponent /></div>


    }
}



export class PasInfoComponent extends React.Component<PasInfoComponentProps, PasInfoComponentState>{
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            <BlockWithLinkComponent
                hyperlink={"Lees meer"}
                onMovePage={(id => {
                })}
                id={2}

            />
            {/* <BlockWithLinkComponent 
                title= {"Aanvragen Ooievaarspas"} 
                description= {"Woont u in Den Haag, Leidschendam-Voorburg of Rijswijk en heeft u een laag inkomen? Dan biedt de Ooievaarspas heel veel voordelen. Vraag daarom de Ooievaarspas aan."} 
                hyperlink= {"Lees meer"}/>
                <BlockWithLinkComponent 
                title= {"Verloop na aanvraag Ooievaarspas"} 
                description= {"Nadat u een aanvraag heeft gedaan ontvangt u schriftelijk een ontvangstbevestiging. De gemeente bekijkt binnen 8 weken of u voldoet aan de voorwaarden en stelt vast of u recht heeft op de Ooievaarspas."} hyperlink= {"Lees meer"}/>
                <BlockWithLinkComponent 
                title= {"Spelregels Ooievaarspas"} 
                description= {"Met minimaal 50% korting sporten, muziek maken of creatief bezig zijn? Met de Ooievaarspas kan dat! Lees verder over wat u met de Ooievaarspas kunt en aan welke voorwaarden u moet voldoen."} hyperlink= {"Lees meer"}/>
                <BlockWithLinkComponent 
                title= {"Regeling Kinderen Doen Mee (KDM)"} 
                description= {"Ieder kind verdient een kans om talenten te ontdekken en te ontwikkelen. En om sociale vaardigheden te leren. Niet alleen op school, maar ook daarbuiten. Voldoende beweging is noodzakelijk voor de gezondheid van een kind. Stimuleer uw kind bijvoorbeeld om te gaan voetballen, dansen, schilderen of muziek maken. En neem eens een kijkje bij 1 van de vele sport­ en cultuurorganisaties die aangesloten zijn bij de Ooievaarspas."} 
                hyperlink= {"Lees meer"}/> 
                <BlockWithLinkComponent 
                title= {"Ooievaarspas en studenten"} 
                description= {"Volgt u een BOL-opleiding op het MBO? Dan komt u mogelijk in aanmerking voor de Ooievaarspas. U moet wel aan bepaalde voorwaarden voldoen."} 
                hyperlink= {"Lees meer"}/>        
                <BlockWithLinkComponent 
                title= {"Automatische verlenging Ooievaarspas 2017"} 
                description= {"Als u eenmaal een Ooievaarspas heeft, moet u in principe voor elk jaar opnieuw een aanvraag indienen. Voor een aantal groepen mensen wordt de Ooievaarspas automatisch verlengd."} 
                hyperlink= {"Lees meer"}/>
                <BlockWithLinkComponent 
                title= {"Ooievaarspas kwijt?"} 
                description= {"Als u uw Ooievaarspas kwijt bent, neem dan contact op met de Klantenservice SZW."} 
                hyperlink= {"Lees meer"}/>
                <BlockWithLinkComponent 
                title= {"50% korting voor meerdere activiteiten"} 
                description= {"Je kunt met de Ooievaarspas gebruik maken van de regeling Kinderen Doen Mee. Dit betekent dat je met 100% korting aan 1 sport + 1 creatieve activiteit kan meedoen. "}
                 hyperlink= {"Lees meer"}/> */}

        </div>

    }
}

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{
    constructor(props, context) {
        super(props, context);
        this.state = { current_page: 1 }
    }

    public moveToPage(page_id: number) {
        this.setState({ ...this.state, current_page: page_id })
    }

    render() {
        return <div>
            if (current_page == 1)
                        return<div>{<OoievaarsPasComponent id={1} />}</div>
            else
                        return <div> {<PasInfoComponent />} </div>}

                </div>
    }
}


export class AanbiedersInfoComponent extends React.Component<AanbiedersInfoComponentProps, any>{
    constructor() {
        super();
    }

    render() {
        return <div>
        </div>

    }
}



export class RegelingenInfoComponent extends React.Component<RegelingenInfoComponentProps, any>{
    constructor() {
        super();
    }

    render() {
        return <div>
        </div>

    }
}



export class ActueleInfoComponent extends React.Component<ActueleInfoComponentProps, any>{
    constructor() {
        super();
    }

    render() {
        return <div>
        </div>

    }
}



export class NieuwsComponent extends React.Component<NieuwsComponentProps, any>{
    constructor() {
        super();
    }

    render() {
        return <div>
        </div>

    }
}

