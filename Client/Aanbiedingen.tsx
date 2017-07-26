import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from "./api"
import * as Manager from "./pageManager"
import * as Types from './custom_types'
import {FilterCategorieComponent,FilterWatComponent, FilterVoorWieComponent, FilterWaarComponent } from './FilterComponent'


let hyperlink = "lees meer "

type AanbiedingenComponentProps = { onMovePage: (id: Manager.Page) => void }
type AanbiedingenComponentState = { kind: "loading" } |
    { kind: "loaded", aanbiedingen: Types.aanbieding[], favoriete: Types.aanbieding, filterState: FilterState }

export type FilterState =
    {
        Categorie: { kind: "off" } | { kind: "on", value: string },
        Wat: { kind : "off" } | { kind: "on", value: string },
        Waar: { kind: "off" } | { kind: "on", value: string },
        Wie: { kind: "off" } | { kind: "on", value: string }    
    }

let EmptyFilterState = { 
                        Categorie: { kind: "off" }, 
                        Wat: { kind: "off" },
                        Waar: { kind: "off" },                          
                        Wie: { kind: "off" } }

//main component voor aanbiedingen pagina
export class AanbiedingenComponent extends React.Component<AanbiedingenComponentProps, AanbiedingenComponentState>
{
    constructor(props: AanbiedingenComponentProps, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }

    componentWillMount() {
        if (this.state.kind == "loading"){

        }
        this.loadAanbieding()
    }

    setFilterState(newFilterState: FilterState) {
        if (this.state.kind == "loaded") {
            let newState = {...this.state, filterState: newFilterState}
            this.setState(newState)
        }
    }

    loadAanbieding() {
        Api
            .get_aanbiedingen()
            .then(c => { this.setState(
                {
                    ...this.state,
                    kind: "loaded",
                    aanbiedingen: c,
                    filterState: EmptyFilterState
                }
            )} )
            .catch( _ => this.loadAanbieding())
        }

    render() {
        let onclickAanbieding = (id: number) => this.props.onMovePage({ kind: "DetailAanbieding", id: id, checkPage: 1})
        
        console.log(this.state.kind)
        if (this.state.kind == "loaded") {

            let AanbiedingView = function (aanbieding: Types.aanbieding) {
                return <div className="box--fifth" key={aanbieding.id}>
                       <a onClick={(id) => onclickAanbieding(aanbieding.id)}>
                           <h2>{aanbieding.title}</h2>
                           </a>
                    <br></br>
                    <img src = {aanbieding.image} ></img>
            
            
                    <p className="box--special"> {aanbieding.description}</p>
                    <br></br>
                    <button onClick={() => onclickAanbieding(aanbieding.id)}>
                        {hyperlink}
                    </button>   
                </div>
            }

            let filteredAanbiedingen = this.state.aanbiedingen
                .filter((a) => {
                    if (this.state.kind == "loaded") {
                        if(this.state.filterState.Categorie.kind == "off") {
                            return true;
                        } 
                        else {
                            if (a.category == this.state.filterState.Categorie.value) { return true }
                            else { return false }
                        }
                    }
                })
                .filter((b) => { 
                    if (this.state.kind == "loaded") {
                        if (this.state.filterState.Wat.kind == "off") {
                            return true;
                        }
                        else {
                            if (b.activity == this.state.filterState.Wat.value) { return true }
                            else { return false } 
                        }
                    }
                })
                .filter((c) => {
                    if (this.state.kind == "loaded") {
                        if (this.state.filterState.Waar.kind == "off") {
                            return true;
                        }
                        else {
                            if (c.location == this.state.filterState.Waar.value) { return true }
                            else { return false } 
                        }
                    }
                })
                .filter((d) => {
                    if (this.state.kind == "loaded") {
                        if (this.state.filterState.Wie.kind == "off") {
                            return true;
                        }
                        else {
                            if (d.target == this.state.filterState.Wie.value) { return true }
                            else {return false} 
                        }
                    }
                })
                

            return <div>
            
                <h2 className="title-aanbiedingen">Alle aanbiedingen</h2>
                  {/* {this.state.aanbiedingen.map(aanbieding => AanbiedingView(aanbieding))  } */}

                 
                <FilterCategorieComponent 
                aanbiedingen={this.state.aanbiedingen}
                filterState={this.state.filterState} 
                setFilterState={this.setFilterState.bind(this)}/><br/>

                <FilterWatComponent
                aanbiedingen={this.state.aanbiedingen}
                filterState={this.state.filterState}
                setFilterState={this.setFilterState.bind(this)}/><br/>

                <FilterWaarComponent
                aanbiedingen={this.state.aanbiedingen}
                filterState={this.state.filterState}
                setFilterState={this.setFilterState.bind(this)}/><br/>

                <FilterVoorWieComponent
                aanbiedingen={this.state.aanbiedingen}
                filterState={this.state.filterState}
                setFilterState={this.setFilterState.bind(this)}/><br/>

                {filteredAanbiedingen.map(aanbieding => AanbiedingView(aanbieding))}
            </div>
        }

        else {
            return <div>Else</div>
        }
    }
    
}

