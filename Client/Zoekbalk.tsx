import * as React from "react";
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './api'
import * as Dagtochten from './Dagtochten'
import * as detailPagina from './InfoComponent'
import * as Ooievaarspasinfo from './Ooievaarspasinfo'
import * as Homepage from './homepage'
import * as InfoPas from './InfoPas'
import * as Aanbieding from './Aanbiedingen'
import * as veelgesteldeVragen from './veelgesteldevragen'
import * as DetailPage from './InfoComponent'
import * as Header from './Header'
import * as Manager from './pageManager'
import * as InformatieDetail from './InformatieDetail'
import * as Aux from './Auxiliary_functions'


type Result = string & number //hier moet ook een hyperlink bij

export type ZoekbalkProps = { onMovePage: (id) => void, searchterm:string}
export type ZoekbalkState =
  | {kind:"searching"}
  | {kind:"searched", results:Result[]}

export class Zoekbalk extends React.Component<ZoekbalkProps, ZoekbalkState> {
  constructor(props : ZoekbalkProps, context){
    super(props, context)
    this.state = {kind:"searching"}
  }
  private AutoCorrect(searchterm:string) : string[] {
    return [searchterm] //for now just returns the term itself
  }
  private HeuristicCompareFunc(a:string, b:string) {
    let result = 0
    for (var i = 0; a.charAt(i) != "" && b.charAt(i) != "" ; i++) {
      
    }//dont shoot me giuseppe
  }

  private CollectAndFilterData(collectState, filterTerm:string){
    let CompareFunc = item => true ? item : item //hier komt de daadwerkelijke term voor term vergelijk functie
    let positiveHits = []
    let dagtochten = await Api.get_dagtochten().then(results =>
        results)
    dagtochten.forEach(dagtocht =>
      for(let prop in dagtocht){
        if(dagtocht.hasOwnProperty(prop)){
          
        }
      })
  }

  private SearchFunction(searchterm:string) {
    let options = this.AutoCorrect(searchterm)
    let data = Aux.externalFold({}, options, this.CollectAndFilterData)
    let results = []
  }
  render() {
    console.log("term2:", this.props.searchterm)
    if(this.state.kind == "searching"){
      return  <div>
              </div>
    }else{
      return <h1>SEARCHBAR IS NOT IDLE ANYMORE</h1>
    }
  }
}
//                {this.SearchFunction(this.props.searchterm)}
//this.SearchFunction((document.getElementById("SearchInput")).nodeValue)