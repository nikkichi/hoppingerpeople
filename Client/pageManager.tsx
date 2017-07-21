import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Dagtochten from './Dagtochten'
import * as detailPagina from './InfoComponent'
import * as Ooievaarspasinfo from './Ooievaarspasinfo'
import * as Homepage from './homepage'
import * as InfoPas from './InfoPas'



//type dagtocht = [page1: "/Dagtochten", page2: "/Dagtochten/detailPagina"]

type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: Page }

//export type Page = { kind:"dagtocht" , id:number } | { kind:"DagtochtPagina" } | { kind:"contact us", person:string }
export type Page = { kind:"dagtocht" , id:number } | { kind:"DagtochtPagina" } | { kind:"contact us", person:string} | {kind: "ooievaarspas", id:number} | {kind: "homepage", id: number} | {kind: "infopas"}

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{
 
    constructor(props, context) {
        super(props, context);
        this.state = { current_page: { kind:"infopas"} }
    }

    render() {

    switch (this.state.current_page.kind) {
        case "homepage":
            return <div><Homepage.HomepageComponent onMovePage={(next_page) => this.moveToPage(next_page)}  />     </div>
        case "DagtochtPagina":
            return <div><Dagtochten.DagtochtenComponent onMovePage={(next_page) => this.moveToPage(next_page)} /> </div>
        case "ooievaarspas":
            return <div><Ooievaarspasinfo.OoievaarsPasComponent onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
        case "contact us": 
                return<div>Contact Us</div>   
        case "infopas": 
                return<div><InfoPas.InfoPasComponent onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
    }}

    moveToPage(next_page: Page) {
        console.log("move to page")
        this.setState({ ...this.state, current_page: next_page })
    }
}