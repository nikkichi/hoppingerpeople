import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

let checkdagtocht = true
let hyperlink = "lees meer"
let next_page = { kind: "DetailDagtocht" }
type DagtochtenComponentProps = { onMovePage: (id: Manager.Page) => void, id: number }
type DagtochtenComponentState =
    | { kind: "loading" }
    | { kind: "dagtochtPagina", categories: Types.Category_Dagtocht[], dagtochten: Types.Dagtocht[], detailDagtocht: Types.Dagtocht, detailcat: Types.Category_Dagtocht }
    | { kind: "DetailDagtocht", detailDagtocht: Types.Dagtocht, dagtochten: Types.Dagtocht[] }

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }

    componentWillMount() {

        this.loadCategories();
    }

    loadCategories() {
        Api
            .get_categories()
            .then(c => this.setState({
                ...this.state,
                kind: "dagtochtPagina",
                categories: c,
                dagtochten: []
            }),
            e => console.log("Error: ", e))
    }

    // .catch(_ => console.log('get dachtocht rejected ') 
    //         || setTimeout( this.loadDagtochten ,5000))



    render() {

        let onclickdagtocht = (id: number) => this.props.onMovePage({ kind: "category_dagtocht", id: id })
        console.log(this.state.kind)
        if (this.state.kind == "dagtochtPagina") {

            let categoryView = function (category: Types.Category_Dagtocht) {
                return <div key={category.title}>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                         <button onClick={(id) => onclickdagtocht(category.categoryID)}>
                        {hyperlink}
                    </button>

                </div>
            }

            let dag = this.state.detailDagtocht
            let id = this.state.detailcat
            return <div>
                {this.state.categories.map(category => categoryView(category))}}
               </div>
        }

        else if (this.state.kind == "DetailDagtocht") {
            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div key={dagtocht.name}>
                    <a onClick={(id) => onclickdagtocht(dagtocht.id)}> {dagtocht.name}</a>
                    +
                                <p> {dagtocht.description}</p>
                    <button onClick={(id) => onclickdagtocht(dagtocht.id)}>
                        {hyperlink}
                    </button>
                </div>

            }

            // let x = localStorage.getItem('favoriteDagtocht') == this.state.detailDagtocht.name
            // // return <div>
            //     <p>{this.state.detailDagtocht.name}</p><br></br>
            //     <p>{this.state.detailDagtocht.prijs}</p><br></br>
            //     <p>{this.state.detailDagtocht.description}</p><br></br>
            //     <p>{this.state.detailDagtocht.text}</p><br></br>
            //     <p>Deze dagtocht is {x ? "wel" : "niet"} als favoriet gekozen</p>
            //     <button onClick={event =>
            //         this.state.kind == "DetailDagtocht" ?
            //             localStorage.setItem('favoriteDagtocht', this.state.detailDagtocht.name)
            //             : console.log("There is an error in DagtochtDetailPage")}>Maak favoriet</button>
            // </div>


        }

        else {
            return <div> Else</div>

        }
    }
}