import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type InforComponentProps = { }
type InforComponentState = { kind: "dagtochtPagina" } | { kind: "dagtochtDetailPagina", dagtochten: Types.Dagtocht[] }

export class InforComponent extends React.Component<InforComponentProps, InforComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = {kind: "dagtochtPagina" }
    }
    loadDagtochten() {
        Api
            .get_dagtocht()
             .then(d => this.setState({ ...this.state, kind: "dagtochtDetailPagina", dagtochten: d }))
            // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))
             
    }

   componentWillMount() {
        console.log('component will mount')
        this.loadDagtochten();
    }


    render() {

     if (this.state.kind == "dagtochtDetailPagina") {

            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div>
                    {dagtocht.name}
                    {console.log('Haaai',dagtocht.name)}
                        <p> {dagtocht.description}</p>
              
                  
                </div>
            }


            return <div> 
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