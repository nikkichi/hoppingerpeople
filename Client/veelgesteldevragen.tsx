import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type veelgesteldevragenComponentProps = { onMovePage: (id: Manager.Page) => void }
type veelgesteldevragenComponentState = { kind: "loading" } | { kind: "loaded", value: Types.vragen[] }

// function generateNumber(min: number, max: number) {
//     return Math.floor(Math.random() * max - min + 1) + min
// }



export class veelgesteldevragenComponent extends React.Component<veelgesteldevragenComponentProps, veelgesteldevragenComponentState>{
    constructor(props: veelgesteldevragenComponentProps, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }
    

    componentWillMount() {
        this.loadonderwerp()

    }

    loadonderwerp() {
        Api.get_veelgesteldevragenonderwerp().then(o => this.setState({ ...this.state, kind: "loaded", value: o }))
        //.catch(o => this.loadonderwerp())
    }

    render() {
        <h1>Veelgestelde Vragen</h1>
        if (this.state.kind == "loaded") {
            let onderwerp_view = function (info: Types.vragen) {
                return <div>
                
                <h2> {info.title}</h2>
                <div>{info.vraag}</div>
                <div>{info.antwoord}</div>


            </div>

            }

          return<div> {this.state.value.map( value =>onderwerp_view(value))} 
        
          </div>




        }
        else {
            return <div>else</div>
        }
    }
}