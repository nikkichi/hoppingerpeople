import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'


let hyperlink = "lees meer"
let next_page ={ kind: "dagtochtDetailPagina"}
type DagtochtenComponentProps = { onMovePage: (id: Manager.Page) => void }
type DagtochtenComponentState =
    | {kind: "loading" }
    | {kind: "dagtochtPagina", categories: Types.Category_Dagtocht[], dagtochten: Types.Dagtocht[]}
    | {kind: "dagtochtDetailPagina", detailDagtocht: Types.Dagtocht} 

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }

    componentWillMount() {
        this.loadCategories();
        this.loadDagtochten();
    }

    loadCategories() {
        Api
            .get_categories()
            .then(c => this.setState({...this.state, kind: "dagtochtPagina", categories: c, dagtochten: []}),
                e => console.log("Error: ", e))
    }//DONT REMOVE THE "dagtochten: []" part, it makes sure dagtochten is set so it won't crash because it's undefined

    loadDagtochten() {
        Api
            .get_dagtocht()
            .then(d => this.setState({...this.state, kind: "dagtochtPagina", dagtochten: d }), e => console.log("Error: ", e))
             
    }

    render() {
        if (this.state.kind == "dagtochtPagina" && this.state.dagtochten != undefined) {
            let categoryView = function (category: Types.Category_Dagtocht) {
                return  <div>
                            <h2>{category.title}</h2>
                            <p>{category.description}</p>
                        </div>
            }
            let dagtochtView = function (dagtocht: Types.Dagtocht, thisRef) {
                return  <div onClick={(event) => thisRef.setState({kind:"dagtochtDetailPagina", detailDagtocht:dagtocht})}>
                            {dagtocht.name}
                            <p>{dagtocht.description}</p>
                        </div>
            }

            return  <div>
                        <button onClick={(event) => this.props.onMovePage({kind: "infopas"})}>{hyperlink}</button>
                        {this.state.dagtochten.map(dagtocht => dagtochtView(dagtocht, this))}
                    </div>
        }else if(this.state.kind == "dagtochtDetailPagina"){
            let x = localStorage.getItem('favoriteDagtocht') == this.state.detailDagtocht.name
            return  <div>
                        <p>{this.state.detailDagtocht.name}</p><br></br>
                        <p>{this.state.detailDagtocht.prijs}</p><br></br>
                        <p>{this.state.detailDagtocht.description}</p><br></br>
                        <p>{this.state.detailDagtocht.text}</p><br></br>
                        <p>Deze dagtocht is {x ? "wel" : "niet"} als favoriet gekozen</p>
                        <button onClick={event =>
                            this.state.kind=="dagtochtDetailPagina" ?
                                localStorage.setItem('favoriteDagtocht', this.state.detailDagtocht.name)
                            :   console.log("There is an error in DagtochtDetailPage")}>Maak favoriet</button>
                    </div>
        }else{
            return <div>Else</div>
        }
    }
}
