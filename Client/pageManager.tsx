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

//type dagtocht = [page1: "/Dagtochten", page2: "/Dagtochten/detailPagina"]
type PageManagerComponentProps = {}
type PageManagerComponentState = { current_page: Page }

//export type Page = { kind:"dagtocht" , id:number } | { kind:"DagtochtPagina" } | { kind:"contact us", person:string }
export type Page =
    | {kind:"dagtocht" , id:number }
    | {kind:"DagtochtPagina" }
    | {kind:"contact us", person:string}
    | {kind: "ooievaarspas", id:number}
    | {kind: "homepage", id: number}
    | {kind: "infopas"}

export class PageManagerComponent extends React.Component<PageManagerComponentProps, PageManagerComponentState>{
 
    constructor(props: PageManagerComponentProps, context) {
        super(props, context);
        this.state = { current_page: { kind:"homepage", id:0} }
    }

    render() {

console.log('PAGEMANAGER', this.state.current_page.kind);
let menubar = <div> <Header onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
    switch (this.state.current_page.kind) {
        
        case "homepage":
            return <div>{menubar}<Homepage.HomepageComponent onMovePage={(next_page) => this.moveToPage(next_page)}  />  </div>
        case "dagtochtPagina":
            return <div>{menubar}<Dagtochten.DagtochtenComponent onMovePage={(next_page) => this.moveToPage(next_page)} /> </div> 
        case "aanbiedingPagina":
            return <div>{menubar}<Aanbieding.AanbiedingenComponent onMovePage={(next_page) => this.moveToPage(next_page)}/> </div> 
        case "veelgesteldeVragenPagina": 
                return<div>{menubar}< veelgesteldeVragen.veelgesteldevragenComponent onMovePage={(next_page) => this.moveToPage(next_page)}/></div>   
        case "infopas": 
                return<div>{menubar}<InfoPas.InfoPasComponent onMovePage={(next_page) => this.moveToPage(next_page)}/></div>
        case "DetailDagtocht": 
                return<div>{menubar}<detailPagina.InforComponent/></div>
        case "DetailAanbieding":
           return<div>{menubar}<detailPagina.InforComponent/></div>
        case "ooievaarspasPagina":
            return <div>{menubar}<Ooievaarspasinfo.OoievaarsPasComponent onMovePage={(next_page) => this.moveToPage(next_page)}  /> </div>  

    }}
        function Footer(){
            return  <footer>
                        <button onClick={event => location.reload()}>Ga naar Homepagina</button>
                    </footer>
        }
        return  <div>
                    {PageContent(this)}
                    {Footer()}
                </div>
    }

    moveToPage(next_page: Page) {
        console.log("move to page")
        this.setState({ ...this.state, current_page: next_page })
    }
}