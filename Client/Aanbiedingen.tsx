import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from "./api"
import * as Manager from "./pageManager"
import * as Types from './custom_types'

let hyperlink = "lees meer "

type AanbiedingenComponentProps = {onMovePage: (id: Manager.Page) => void}
type AanbiedingenComponentState = { kind: "loading" } |
    { kind: "aanbiedingPagina", aanbieding: Types.aanbieding[] }

//main component voor aanbiedingen pagina
export class AanbiedingenComponent extends React.Component<AanbiedingenComponentProps, AanbiedingenComponentState> 
{
    constructor(props: AanbiedingenComponentProps, context)
    {
        super(props, context)
        this.state = {kind: "loading"}
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
        let onclickAanbieding= (event) => this.props.onMovePage({ kind: "DetailAanbieding" })
        console.log(this.state.kind)
        if (this.state.kind == "aanbiedingPagina") {
   
            
    let AanbiedingView = function (aanbieding: Types.aanbieding) {
                return <div>
                    <h2> {aanbieding.title}</h2>
                    <br></br>
                    <p> {aanbieding.description}</p>
                    <br></br>
                      <button onClick={onclickAanbieding}>
                        {hyperlink}
                    </button>

   </div>   
            
        }
                return <div>
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
