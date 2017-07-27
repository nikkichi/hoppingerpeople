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
let zoekLink = "Zoeken"

export default class Menu extends React.Component<MenubarComponentProps, MenubarComponentState> {
    
    componentDidMount(){
        this.setState({searchterm:""})
    }

    render(){
        function onClickZoeken(thisRef) { return (event) => {
            if(thisRef.state.searchterm == ""){
                alert("U moet wel een zoekterm invullen om te zoeken")
            }else{
                thisRef.props.onMovePage({kind:"zoekresultatenPagina", searchterm:thisRef.state.searchterm})
            }
        }}
        let onClickDagtocht = (event) => this.props.onMovePage({ kind: "dagtochtPagina", id: 1})
        let onClickAanbieding = (event) => this.props.onMovePage({ kind: "loaded"})
        let onClickOoievaarsinfo = (event) => this.props.onMovePage({kind: "ooievaarspasPagina"})
            return (
            
            <header className="header__inner">
                <nav>
                <div>
                     <h1 className="homepage--title">Ooievaarspas</h1>
            <img height="150px" width="230" src="https://www.denhaag.nl/static/denhaagrestylepresentation/images/DH-NL-Rgb-CS6.svg" alt="logo" />
            <button className= "enjoy-css" onClick={(event) => this.props.onMovePage({ kind: "homepage"})}>{homepageLink}</button>
            <button className= "enjoy-css" onClick={onClickAanbieding}>{aanbiedingLink}</button>
            <button className= "enjoy-css" onClick={onClickDagtocht}>{dagtochtLink}</button>
            <button className= "enjoy-css" onClick={onClickOoievaarsinfo}>{ooievaarLink}</button>
            <button className= "enjoy-css" onClick={(event) => this.props.onMovePage({ kind: "veelgesteldeVragenPagina"})}>{vragenLink}</button>
            <input className="box--search " id="zoekinput" onChange={input => this.setState(
                input.target.value != null ?
                {searchterm:input.target.value}:
                {searchterm:""})}></input>
            <button className="enjoy-css" onClick={onClickZoeken(this)}>
                {zoekLink}
            </button>
                    </div>
                    </nav>
            </header>)
        }
    }



