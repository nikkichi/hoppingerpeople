import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type InforComponentProps = {id: number}
type InforComponentState = { kind: "loading" } | { kind: "DetailDagtocht", dagtochten: Types.Dagtocht[] } | 
{ kind: "DetailAanbieding", aanbieding: Types.aanbieding[] }

export class InforComponent extends React.Component<InforComponentProps, InforComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }

    loadAanbieding() {
        Api
            .get_aanbieding(this.props.id)
            .then(d => this.setState({ ...this.state, kind: "DetailAanbieding", aanbieding: d }))
        // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))

    }

        loadDagtocht() {
        Api
            .get_dagtochten(1)
            .then(d => this.setState({ ...this.state, kind: "DetailDagtocht", dagtochten: d }))
        // .catch(_ => console.log('get dachtocht rejected ') || setTimeout( this.loadDagtochten ,5000))

    }

    componentWillMount() {
        console.log('component will mount')
        
    // if (this.props.checkPage == 1){
       return  this.loadAanbieding();
    // else if (this.props.checkPage == 2){
    //     return   this.loadDagtocht();
    
    // }
    }


    render() {     
console.log(this.state.kind)
        if (this.state.kind == "DetailAanbieding"){
             let AanbiedingView = function (aanbieding: Types.aanbieding) {
              
                return <div key= {aanbieding.title}>
               
                    <h2> {aanbieding.title}</h2>
                    <br></br>
                    <p> {aanbieding.description}</p>
                    <br></br>
                </div>               
        }
                return <div>
                {this.state.aanbieding.map(aanbiedingen => AanbiedingView(aanbiedingen))
                }
               
            </div>}
        else if (this.state.kind == "DetailDagtocht"){
            let dagtochtView = function (dagtocht: Types.Dagtocht) {
                return <div key= {dagtocht.name}>
                    <h2> {dagtocht.name}</h2>
                    <br></br>
                    <p> {dagtocht.text}</p>
                    <br></br>
                    <p>{dagtocht.prijs}</p>
                    <br></br>
                    <p>{dagtocht.categoryID}</p>


                </div>
            }


            return <div>
                 {this.state.dagtochten.map(dagtocht => dagtochtView(dagtocht))
                }
            </div>
    }
else 
    return <div>else</div>
}}
