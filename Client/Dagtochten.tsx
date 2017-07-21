import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'


let hyperlink = "lees meer "

type DagtochtenComponentProps = { onMovePage: (id: Manager.Page) => void }
type DagtochtenComponentState = { kind: "dagtocht" } | { kind: "DagtochtPagina", categories: Types.Category_Dagtocht[], dagtochten: Types.Dagtocht[] }

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: "dagtocht" }
    }

    componentWillMount() {
        console.log('component will mount')
        this.loadCategories();
        this.loadDagtochten();
    }

    loadCategories() {
        Api
            .get_categories()
            .then(c => this.setState({ ...this.state, kind: "DagtochtPagina", categories: c }))
            //.catch(_ => this.loadCategories())
    }

    loadDagtochten() {
        Api
            .get_dagtocht()
             .then(d => this.setState({ ...this.state, kind: "DagtochtPagina", dagtochten: d }))
            // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))
             
    }

    render() {
        if (this.state.kind == "DagtochtPagina") {
            let categoryView = function (category: Types.Category_Dagtocht) {
                return<div>
                     {console.log('hi',category.title)}
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                    <button onClick={(event) => this.props.onMovePage(this.state.kind)}>{hyperlink}</button>
                </div>

            }

            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div>
                    {dagtocht.name}
                    {console.log('Haaai',dagtocht.name)}
                        <p> {dagtocht.description}</p>
                        <div> {dagtocht.text}</div>
                        <div>  {dagtocht.prijs}</div>
                </div>
            }


            return <div> 
                {categoryView(this.state.categories[0])             
                }
                {dagtochtView(this.state.dagtochten[0])}
                {/*{console.log('return ',this.state.kind)}*/}
                       </div>
        }
        else {
            return <div> Else</div>
           // return <div> Dachtochten {this.state.dagtochten.map((element,key) => <div> {key} </div>)}</div>
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

