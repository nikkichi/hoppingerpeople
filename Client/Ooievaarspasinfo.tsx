import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'




// This is the GrandParent I think
type OoievaarsPasComponentProps = { id: number ,onMovePage: (id: number) => void}
type OoievaarsPasComponentState = { name: string, description: string,  id: number}
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
                                    description: "De Ooievaarspas biedt korting op allerlei activiteiten op het gebied van sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk met een laag inkomen. Dit en meer informatie over de Ooievaarspas kunt u onderstaand vinden.",
                                    id: 2})   

        case 2:
            return Promise.resolve({name: "njumnjum",
                                    description: "hey you",
                                    id: 2})   

        case 3:
            return Promise.resolve({name: "blub",
                                    description: "badoo",
                                    id: 3})

        case 4:
            return Promise.resolve({name: "miep",
                                    description: "okiido",
                                    id:4})
        case 5:
            return Promise.resolve({name: "uhm",
                                    description: "poepie",
                                    id:5})

        default:
            break

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
        
            if (this.state.current_page == 1)
                        return<div>{<OoievaarsPasComponent id={1} onMovePage={(pageid) => this.moveToPage(pageid)}/>}</div>
            else
                        return <div> Page 2 </div>}

            
    }



export class OoievaarsPasComponent extends React.Component<OoievaarsPasComponentProps, OoievaarsPasComponentState>{
    constructor(props, context) {
        super(props, context);
        this.state = { name: "Loading", description: "loading", id: 1 }

    }

    componentWillMount() {
        get_ooievaarsPas(this.props.id).then(ooievaarsPas => this.setState({ ...this.state, name: ooievaarsPas.name, description: ooievaarsPas.description , id: ooievaarsPas.id}))
        
    }


    render() {
      
            return <div>
                <h2><a onClick={(event) => this.props.onMovePage(this.state.id)}>{this.state.name}</a></h2>
                {this.state.description}



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

