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
import Header from './Header'
import * as Manager from './pageManager'
import * as InformatieDetail from './InformatieDetail'
import * as category_dagtocht from './category_dagtocht'
import Footer from './footer'
import * as Zoekbalk from './Zoekbalk'

import * as ExtraInformatie from './ExtraInformatie'

//type dagtocht = [page1: "/Dagtochten", page2: "/Dagtochten/detailPagina"]
type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: Page }

//export type Page = { kind:"dagtocht" , id:number } | { kind:"DagtochtPagina" } | { kind:"contact us", person:string }
export type Page = { kind:"homepage"} |
                   { kind:"dagtochtPagina" , id: number} |
                   { kind:"loaded"} |
                   {kind: "ooievaarspasPagina"} |
                   {kind: "veelgesteldeVragenPagina"} |
                   {kind: "infopas", id:number, title:string}|
                   {kind: "DetailDagtocht", id: number, checkPage: number }|
                   {kind: "DetailAanbieding", id: number, checkPage: number} |
                   {kind: "InformatieDetail", title: string}|
                   {kind: "category_dagtocht", id: number}|
                   {kind: "ExtraInformatie", title: string} |
                   {kind: "zoekresultatenPagina", searchterm: string}

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{
 
    constructor(props: PageManagerComponentProps, context) {
        super(props, context);
        this.state = { current_page: { kind:"homepage", id:0} }
    }

    render() {


let menubar = <div> <Header onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
let footer = <div> <Footer onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
    switch (this.state.current_page.kind) {
        
        case "homepage":
            return <div>
                {menubar}<Homepage.HomepageComponent onMovePage={(next_page) => this.moveToPage(next_page)}/> <div>{footer}</div>  </div>
        case "dagtochtPagina":            
		    return <div>
                {menubar}<Dagtochten.DagtochtenComponent onMovePage={(next_page) => this.moveToPage(next_page)} id= {this.state.current_page.id}/> {footer} </div>
        case "loaded":
            return <div>
                {menubar}<Aanbieding.AanbiedingenComponent onMovePage={(next_page) => this.moveToPage(next_page)}/> {footer} </div> 
        case "veelgesteldeVragenPagina": 
            return <div>
                {menubar}< veelgesteldeVragen.veelgesteldevragenComponent onMovePage={(next_page) => this.moveToPage(next_page)}/>{footer} </div>   
        case "infopas": 
            return <div>
                {menubar}<InfoPas.InfoPasComponent onMovePage={(next_page) => this.moveToPage(next_page)} id= {this.state.current_page.id} title={this.state.current_page.title} />{footer} </div>
        case "DetailDagtocht":
            return <div>
                {menubar}<detailPagina.InforComponent id= {this.state.current_page.id} checkPage= {this.state.current_page.checkPage}/>{footer} </div>
        case "DetailAanbieding":
            return <div>
                {menubar}<detailPagina.InforComponent id={this.state.current_page.id} checkPage= {this.state.current_page.checkPage} />{footer} </div>
        case "ooievaarspasPagina":
            return <div>
                {menubar}<Ooievaarspasinfo.OoievaarsPasComponent onMovePage={(next_page) => this.moveToPage(next_page)}  />{footer}  </div>  
        case "InformatieDetail": 
            return <div>
                {menubar}<InformatieDetail.InformatieDetailComponent onMovePage={(next_page) => this.moveToPage(next_page)} title= {this.state.current_page.title}/>{footer}</div>
        case "category_dagtocht": 
            return <div>
                {menubar}<category_dagtocht.category_dagtochtComponenet onMovePage={(next_page) => this.moveToPage(next_page)} id={this.state.current_page.id}/>{footer}</div>
        case "ExtraInformatie":
            return <div>
                {menubar}<ExtraInformatie.ExtrainformatieComponent onMovePage={(next_page) => this.moveToPage(next_page)} title = {this.state.current_page.title}  />{footer}</div>
        case "zoekresultatenPagina":
            return <div>{menubar}<Zoekbalk.Zoekbalk onMovePage={(next_page) => this.moveToPage(next_page)} searchTerm = {this.state.current_page.searchterm}/></div>


    }}


    moveToPage(next_page: Page) {
        this.setState({ ...this.state, current_page: next_page })
    }
}