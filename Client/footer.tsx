import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type FooterbarComponentProps = { onMovePage: (id: Manager.Page) => void}
type FooterbarComponentState = {}

let hyperlink = "Lees meer"
let homepageLink = "Home"
let aanbiedingLink = "Aanbiedingen"
let dagtochtLink = "Dagtochten"
let ooievaarLink = "Ooievaarspas info"
let vragenLink = "Veelgestelde vragen"


export default class Footer extends React.Component<FooterbarComponentProps, FooterbarComponentState> {
    
    render(){
        let onClickDagtocht = (event) => this.props.onMovePage({ kind: "dagtochtPagina", id: 1})
        let onClickAanbieding = (event) => this.props.onMovePage({ kind: "loaded"})
        let onClickOoievaarsinfo = (event) => this.props.onMovePage({kind: "ooievaarspasPagina"})
            return (
            
            <div className="footers">  
                <nav>
                <div>
            <div className= "footers" onClick={(event) => this.props.onMovePage({ kind: "homepage"})}>{homepageLink}</div>
            <div onClick={onClickAanbieding}>{aanbiedingLink}</div>
            <div onClick={onClickDagtocht}>{dagtochtLink}</div>
            <div onClick={onClickOoievaarsinfo}>{ooievaarLink}</div>
            <div onClick={(event) => this.props.onMovePage({ kind: "veelgesteldeVragenPagina"})}>{vragenLink}</div>
            
                
                    </div>
                    </nav>
            </div>)
        }
    }



