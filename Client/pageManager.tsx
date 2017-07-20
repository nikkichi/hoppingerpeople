import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Dagtochten from './Dagtochten'

//type dagtocht = [page1: "/Dagtochten", page2: "/Dagtochten/detailPagina"]

type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: string }

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{

    constructor(props, context) {
        super(props, context);
        this.state = { current_page: "/dagtochtPagina"}
    }


    render() {

    switch (this.state.current_page) {
        case "/dagtochtPagina" :
            return <div><Dagtochten.DagtochtenComponent onMovePage={(next_page) => this.moveToPage(next_page)}  />     </div>
        case "/dagtochtPagina/Detail1":
            return <div><Dagtochten.InforComponent onMovePage={(next_page) => this.moveToPage(next_page)} /> </div>
        
        case "/": 
                return<div>page 3</div>  
                
    }}

    moveToPage(next_page: string) {
        console.log("move to page")
        this.setState({ ...this.state, current_page: next_page })
    }
}