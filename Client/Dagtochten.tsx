import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'


let hyperlink = "lees meer "

type DagtochtenComponentProps = { onMovePage: (id: Manager.Page) => void }
type DagtochtenComponentState = { kind: "dagtocht" } | { kind: "detailPagina", categories: Types.Category_Dagtocht[], dagtochten: Types.Dagtocht[] }

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: "dagtocht" }
    }

    componentWillMount() {
        this.loadCategories();
        this.loadDagtochten();
    }

    loadCategories() {
        Api
            .get_categories()
            .then(c => this.setState({ ...this.state, kind: "dagtocht", categories: c }))
            .catch(_ => this.loadCategories())
    }

    loadDagtochten() {
        Api
            .get_dagtocht(1)
             .then(d => this.setState({ ...this.state, kind: "detailPagina", dagtocht: d }))
            .catch(_ => this.loadDagtochten())
    }

    render() {
        if (this.state.kind == "dagtocht") {
            let categoryView = function (category: Types.Category_Dagtocht) {
                <div>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                    <button onClick={(event) => this.props.onMovePage(this.state.kind)}>{hyperlink}</button>
                </div>

            }

            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                <div>{dagtocht.name}
                        <p> {dagtocht.description}</p>
                        <div> {dagtocht.text}</div>
                        <div>  {dagtocht.prijs}</div>
                </div>
            }


            return <div>{categoryView              
                }</div>
        }
        else {
            <div>Loading</div>
        }
    }
}
//  this.setState(
//                         {
//                             ... this.state, dagtochten: this.state.dagtochten.map(dagtocht => {
//                                 console.log()
//                                 if (dagtochten.dagtochten.Kind != dagtocht.dagtochten.Kind) {
//                                     return dagtocht
//                                 }
//                                 else {
//    
//                                     return { ...dagtocht }
//                                 }
//                             }).toList

