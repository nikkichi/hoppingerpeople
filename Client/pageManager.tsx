import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Dagtochten from './Dagtochten'

//type dagtocht = [page1: "/Dagtochten", page2: "/Dagtochten/detailPagina"]

type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: Page }

export type Page = { kind:"dagtocht" , id:number } | { kind:"about" } | { kind:"contact us", person:string }

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{

    constructor(props, context) {
        super(props, context);
        this.state = { current_page: { kind:"about" } }}

    render() {

    switch (this.state.current_page.kind) {
        case "contact us":
            return <div><Dagtochten.DagtochtenComponent onMovePage={(next_page) => this.moveToPage(next_page)}  />     </div>
        case "about":
            return <div><Dagtochten.InforComponent onMovePage={(next_page) => this.moveToPage(next_page)} /> </div>
        
        case "contact us": 
                return<div>page 3</div>  
                
    }}

    moveToPage(next_page: Page) {
        console.log("move to page")
        this.setState({ ...this.state, current_page: next_page })
    }
}