import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type MenubarComponentProps = { onMovePage: (id: Manager.Page) => void}
type MenubarComponentState = {}

let hyperlink = "Lees meer"
let homepageLink = "Home"
let aanbiedingLink = "Aanbiedingen"
let dagtochtLink = "Dagtochten"
let ooievaarLink = "Ooievaarspas info"
let vragenLink = "Veelgestelde vragen"


export default class Menu extends React.Component<MenubarComponentProps, MenubarComponentState> {
    
    render(){
                let onClickDagtocht = (event) => this.props.onMovePage({ kind: "dagtochtPagina", id: 1})
        let onClickAanbieding = (event) => this.props.onMovePage({ kind: "aanbiedingPagina"})
        let onClickOoievaarsinfo = (event) => this.props.onMovePage({kind: "ooievaarspasPagina"})
            return (
            <header>  
                <nav>
                <div>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage"})}>{homepageLink}</button>
            <button onClick={onClickAanbieding}>{aanbiedingLink}</button>
            <button onClick={onClickDagtocht}>{dagtochtLink}</button>
            <button onClick={onClickOoievaarsinfo}>{ooievaarLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "veelgesteldeVragenPagina"})}>{vragenLink}</button>
                
                    </div>
                    </nav>
            </header>)
        }
    }



