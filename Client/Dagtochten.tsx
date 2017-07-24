import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'


let hyperlink = "lees meer"
let next_page ={ kind: "DetailDagtocht"}
type DagtochtenComponentProps = { onMovePage: (id: Manager.Page) => void , id: number}
type DagtochtenComponentState =
    | {kind: "loading" }
    | {kind: "dagtochtPagina", categories: Types.Category_Dagtocht[], dagtochten: Types.Dagtocht[]}
    | {kind: "DetailDagtocht", detailDagtocht: Types.Dagtocht} 

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
    //DONT REMOVE THE "dagtochten: []" part, it makes sure dagtochten is set so it won't crash because it's undefined
    }
loadDagtochten(){

        Api
            .get_dagtochten(this.props.id)
            .then(d => this.setState({ ...this.state, kind: "dagtochtPagina", dagtochten: d }))
        // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))

    }

    render() {
        let onclickdagtocht = (id: number, checkPage: number) => this.props.onMovePage({ kind: "DetailDagtocht" , id: id })
        console.log(this.state.kind)
        if (this.state.kind == "dagtochtPagina") {
            function FormatDagtochten(dagtochten : Types.Dagtocht[]){
                return  <div>
                            {dagtochten.map(dagtocht =>
                                dagtochtView(dagtocht))}
                        </div>
            }
            function ordenDagtochten(dagtochten : Types.Dagtocht[], categories : Types.Category_Dagtocht[]) {
                return  <div>
                            {categories.map(category =>
                                {   categoryView(category)
                                    FormatDagtochten(dagtochten.filter(dagtocht =>
                                    dagtocht.categoryID == category.id))})}
                        </div>
            }
            let categoryView = function (category: Types.Category_Dagtocht) {
                return <div>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                </div>
            }
            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div>
                    <h2> {dagtocht.name}</h2>
                    <p> {dagtocht.description}</p>
                    <button onClick={() => onclickdagtocht(dagtocht.categoryID, dagtocht.id)}>
                        {hyperlink}
                    </button>
                </div>
            }
            return ordenDagtochten(this.state.dagtochten, this.state.categories);
        }else if(this.state.kind == "DetailDagtocht"){
            let x = localStorage.getItem('favoriteDagtocht') == this.state.detailDagtocht.name
            return  <div>
                        <p>{this.state.detailDagtocht.name}</p><br></br>
                        <p>{this.state.detailDagtocht.prijs}</p><br></br>
                        <p>{this.state.detailDagtocht.description}</p><br></br>
                        <p>{this.state.detailDagtocht.text}</p><br></br>
                        <p>Deze dagtocht is {x ? "wel" : "niet"} als favoriet gekozen</p>
                        <button onClick={event =>
                            this.state.kind=="DetailDagtocht" ?
                                localStorage.setItem('favoriteDagtocht', this.state.detailDagtocht.name)
                            :   console.log("There is an error in DagtochtDetailPage")}>Maak favoriet</button>
                    </div>
        }
        else {
            return <div> Else</div>
            // return <div> Dachtochten {this.state.dagtochten.map((element,key) => <div> {key} </div>)}</div>
        }
    }
}
