import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

let checkdagtocht = true
let hyperlink = "Klik hier voor de dagtochten"
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
                    <a onClick={(id) => onclickdagtocht(category.categoryID)}>  <h2> {category.title}</h2></a>
                    <img src={category.image} ></img>
                    <p>{category.description}</p>
                    <button onClick={(id) => onclickdagtocht(category.categoryID)}>
                        {hyperlink}
                    </button>

                </div>
            }
            return <div className="box box--fourth">
                {this.state.categories.map(category => categoryView(category))}
                  </div>
        }


        else {
            return <div> Else</div>

        }
    }
}