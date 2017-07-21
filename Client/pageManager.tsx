import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Dagtochten from './Dagtochten'
import * as detailPagina from './InfoComponent'
import * as Ooievaarspasinfo from './Ooievaarspasinfo'

//type dagtocht = [page1: "/Dagtochten", page2: "/Dagtochten/detailPagina"]

type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: Page }

//export type Page = { kind:"dagtocht" , id:number } | { kind:"DagtochtPagina" } | { kind:"contact us", person:string }
export type Page = { kind:"dagtocht" , id:number } | { kind:"DagtochtPagina" } | { kind:"contact us", person:string} | {kind: "ooievaarspas", id:number} 

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{
 
    constructor(props, context) {
        super(props, context);
        this.state = { current_page: { kind:"ooievaarspas", id: 3 } }}

    render() {

    switch (this.state.current_page.kind) {
        case "dagtocht":
            return <div><Dagtochten.DagtochtenComponent onMovePage={(next_page) => this.moveToPage(next_page)}  />     </div>
        case "DagtochtPagina":
            return <div><detailPagina.InforComponent onMovePage={(next_page) => this.moveToPage(next_page)} /> </div>
        case "ooievaarspas":
            return <div><Ooievaarspasinfo.OoievaarsPasComponent onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
        case "contact us": 
                return<div>Contact Us</div>   
    }}

    moveToPage(next_page: Page) {
        console.log("move to page")
        this.setState({ ...this.state, current_page: next_page })
    }
}