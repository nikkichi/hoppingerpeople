import * as React from "react";
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
import * as Header from './Header'
import * as Manager from './pageManager'
import * as InformatieDetail from './InformatieDetail'

type Result = string //hier moet ook een hyperlink bij

export type ZoekbalkProps = { onMovePage: (id) => void}
export type ZoekbalkState =
  | {kind:"idle"}
  | {kind:"searching" , searchterm:string}
  | {kind:"searched" , searchterm:string, results:Result[]}

export class Zoekbalk extends React.Component<ZoekbalkProps, ZoekbalkState> {
  constructor(props : ZoekbalkProps, context){
    super(props, context)
    this.state = {kind:"idle"}
  }
  private AutoCorrect(searchterm:string) : string[] {
    return [searchterm] //for now just returns the term itself
  }
  private SearchFunction(searchterm:string) {
    let options = this.AutoCorrect(searchterm)
    
  }
  render() {
    if(this.state.kind == "idle"){
      return (
        <div>
          <input type="text" id="searchInput" />
          <button onClick={event => this.props.onMovePage("zoekresultatenPagina")}>Zoeken!</button>
        </div>
      )
    }else{
      return <h1>SEARCHBAR IS NOT IDLE ANYMORE</h1>
    }
  }
}
//this.SearchFunction((document.getElementById("SearchInput")).nodeValue)