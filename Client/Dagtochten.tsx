import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'


let hyperlink = "lees meer "
let next_page ={ kind: "dagtochtDetailPagina"}
type DagtochtenComponentProps = { onMovePage: (id: Manager.Page) => void }
type DagtochtenComponentState = { kind: "loading" } | { kind: "dagtochtPagina", categories: Types.Category_Dagtocht[], dagtochten: Types.Dagtocht[]}| {kind: "dagtochtDetailPagina",  dagtochten: Types.Dagtocht[]} 

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }

    componentWillMount() {
        console.log('component will mount')
        this.loadCategories();
        this.loadDagtochten();
    }

    loadCategories() {
        Api
            .get_categories()
            .then(c => this.setState({ ...this.state, kind: "dagtochtPagina", categories: c }))
            //.catch(_ => this.loadCategories())
    }

    loadDagtochten() {
        Api
            .get_dagtocht()
             .then(d => this.setState({ ...this.state, kind: "dagtochtPagina", dagtochten: d }))
            // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))
             
    }

    render() {
        if (this.state.kind == "dagtochtPagina") {
            let categoryView = function (category: Types.Category_Dagtocht) {
                return<div>
                     {console.log('hi',category.title)}
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                </div>

            }

            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div>
                    {dagtocht.name}
                    {console.log('Haaai',dagtocht.name)}
                        <p> {dagtocht.description}</p>

                       
                  
                </div>
            }


            return <div> 
                { this.state.categories.map( category => categoryView(category))           
                }
               {this.state.dagtochten.map(dagtocht => dagtochtView(dagtocht))}
            <button onClick={(event) => this.props.onMovePage({ kind: "dagtochtDetailPagina"})}>
                     {hyperlink}
                        </button>
                 
                
                       </div>
        }
        else {
            return <div> Else</div>
           // return <div> Dachtochten {this.state.dagtochten.map((element,key) => <div> {key} </div>)}</div>
        }
    }
}
