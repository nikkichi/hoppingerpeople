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
import * as Aanbieding from './Aanbiedingen'
import * as veelgesteldeVragen from './veelgesteldevragen'
import * as DetailPage from './InfoComponent'


type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: Page }

export type Page = { kind:"homepage"} | 
                   { kind:"dagtochtPagina" } | 
                   { kind:"aanbiedingPagina"} | 
                   {kind: "ooievaarspasPagina"} | 
                   {kind: "veelgesteldeVragenPagina"} | 
                   {kind: "infopas"}|
                   {kind: "DetailDagtocht"}|
                   {kind: "DetailAanbieding"}

                   

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{
 
    constructor(props, context) {
        super(props, context);
        this.state = { current_page: { kind:"homepage"} }
    }

    render() {
console.log('PAGEMANAGER', this.state.current_page.kind)
    switch (this.state.current_page.kind) {
        
        case "homepage":
            return <div><Homepage.HomepageComponent onMovePage={(next_page) => this.moveToPage(next_page)}  />     </div>
        case "dagtochtPagina":
            return <div><Dagtochten.DagtochtenComponent onMovePage={(next_page) => this.moveToPage(next_page)} /> </div>
        case "aanbiedingPagina":
            return <div><Aanbieding.AanbiedingenComponent onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
        case "veelgesteldeVragenPagina": 
                return<div>< veelgesteldeVragen.veelgesteldevragenComponent onMovePage={(next_page) => this.moveToPage(next_page)}/> </div>   
        case "infopas": 
                return<div><InfoPas.InfoPasComponent onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
        case "DetailDagtocht": 
                return<div><detailPagina.InforComponent/></div>
        case "DetailAanbieding":
           return<div><detailPagina.InforComponent/></div>

    }}

    moveToPage(next_page: Page) {
        console.log("move to page")
        this.setState({ ...this.state, current_page: next_page })
    }
}