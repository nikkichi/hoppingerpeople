import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from "./api"
import * as Manager from "./pageManager"
import * as Types from './custom_types'
import { FilterCategorieComponent } from './FilterComponent'


let hyperlink = "lees meer "

type AanbiedingenComponentProps = { onMovePage: (id: Manager.Page) => void }
type AanbiedingenComponentState = { kind: "loading" } |
    { kind: "loaded", aanbiedingen: Types.aanbieding[], favoriete: Types.aanbieding, filterState: FilterState }

export type FilterState =
    {
        Categorie: { kind: "off" } | { kind: "on", value: string }
    }

let EmptyFilterState = { Categorie: { kind: "off" } }

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
        if (newFilterState.Categorie.kind == "on"){
            console.log(newFilterState.Categorie.value)
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
        }

    render() {
        let onclickAanbieding = (id: number) => this.props.onMovePage({ kind: "DetailAanbieding", id: id, checkPage: 1})
        
        console.log(this.state.kind)
        if (this.state.kind == "loaded") {

            let AanbiedingView = function (aanbieding: Types.aanbieding) {
                return <div className="box--fourth" key={aanbieding.id}>
                       <a onClick={(id) => onclickAanbieding(aanbieding.id)}> <h2>{aanbieding.title}</h2> </a>
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
                        } else {
                            if (a.category == this.state.filterState.Categorie.value) { return true }
                            else { return false }
                        }
                    }
                })

            return <div>
                <h1 className="homepage--title">Aanbiedingen</h1>
                <h2 className="box--aanbieding">Alle aanbiedingen</h2>
                {/* {this.state.aanbiedingen.map(aanbieding => AanbiedingView(aanbieding)) */}
                }
                <FilterCategorieComponent 
                aanbiedingen={this.state.aanbiedingen}
                filterState={this.state.filterState} 
                setFilterState={this.setFilterState.bind(this)} />

                {filteredAanbiedingen.map(aanbieding => AanbiedingView(aanbieding))}
            </div>
        }

        else {
            return <div>Else</div>
        }
    }
    
}

