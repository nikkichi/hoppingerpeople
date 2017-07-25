import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from "./api"
import * as Manager from "./pageManager"
import * as Types from './custom_types'

let hyperlink = "lees meer "

type AanbiedingenComponentProps = { onMovePage: (id: Manager.Page) => void }
type AanbiedingenComponentState = { kind: "loading" } |
    { kind: "aanbiedingPagina", aanbieding: Types.aanbieding[] , favoriete: Types.aanbieding}

//main component voor aanbiedingen pagina
export class AanbiedingenComponent extends React.Component<AanbiedingenComponentProps, AanbiedingenComponentState>
{
    constructor(props: AanbiedingenComponentProps, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }

    componentWillMount() {

        console.log('component will mount')
        this.loadAanbieding();

    }

    loadAanbieding() {
        Api
            .get_aanbiedingen()
            .then(c => this.setState({ ...this.state, kind: "aanbiedingPagina", aanbieding: c }))
        //.catch(_ => this.loadCategories())
    }

    render() {
        let onclickAanbieding = (id: number) => this.props.onMovePage({ kind: "DetailAanbieding", id: id, checkPage: 1})
        
        console.log(this.state.kind)
        if (this.state.kind == "aanbiedingPagina") {

            let AanbiedingView = function (aanbieding: Types.aanbieding) {
                return <div className="box--fourth" key={aanbieding.id}>
                       <a onClick={(id) => onclickAanbieding(aanbieding.id)}> <h2>{aanbieding.title}</h2> </a>
                    <br></br>
                    <p className="box--special"> {aanbieding.description}</p>
                    <br></br>
                    <button onClick={() => onclickAanbieding(aanbieding.id)}>
                        {hyperlink}
                    </button>   
                </div>

            }
            return <div>
                <h1 className="homepage--title">Aanbiedingen</h1>
                <h2 className="box--aanbieding">Alle aanbiedingen</h2>
                {this.state.aanbieding.map(aanbieding => AanbiedingView(aanbieding))
                }

            </div>
        }

        else {
            return <div> Else</div>
            // return <div> Dachtochten {this.state.dagtochten.map((element,key) => <div> {key} </div>)}</div>
        }
    }
}

//    return <div><a onClick={() => this.toggle_button()}><h1>{this.state.name}</h1></a>
//                         <button onClick={() => this.toggle_button()}>{button_text}</button><br/><br/>
//                         {description}<br/><br/>
//                         {fav_button}</div>