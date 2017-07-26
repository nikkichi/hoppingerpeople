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
import * as Types from './custom_types'


type Result = {aanbiedingHits: Types.aanbieding[], dagtochtHits: Types.Dagtocht[], pending: number} //hier moet ook een hyperlink bij

export type ZoekbalkProps = { onMovePage: (id) => void, searchterm:string}
export type ZoekbalkState =
  | {kind:"searching"}
  | {kind:"searched", results:Result, completed:Boolean}
  | {kind:"idle"}

export class Zoekbalk extends React.Component<ZoekbalkProps, ZoekbalkState> {
  constructor(props : ZoekbalkProps, context){
    super(props, context)
    this.state = {kind:"searching"}
    if(this.props.searchterm == ""){
      console.log("ERRORY")
    }
  }
  componentIsMounted() {
    if(this.props.searchterm == ""){
      this.setState({kind:"idle"})
    }else{
      this.LoadFunction()
    }
  }
  private LoadFunction(){
    this.setState({kind:"searching"})
    this.setState({...this.state, kind:"searched", results:{aanbiedingHits:[], dagtochtHits:[], pending:-1}, completed:false})
    this.SearchFunction(this.props.searchterm, this)
  }
  private HeuristicCompareFunc(a:string, b:string) {
    let result = 0
    let i = 1
    while(a.charAt(i) != "" && b.charAt(i) != "") {
      if(a.charAt(i) == b.charAt(i)){
        result++
      }
      i++
    }
    if(result / i > 0.05){
      return true;
    }
    return false;
  }
  
  private CollectAndFilterData(thisRef) {
    let StartPending = (collectState) => {
      collectState.pending == -1 ? collectState.pending = 0:collectState = collectState}
    return (collectState : Result, filterTerm:string) => {
    Api.get_dagtochten().then(dagtochten =>
    dagtochten.map(dagtocht =>
      { StartPending(collectState)
        collectState.pending++
        return dagtocht
        }).forEach(dagtocht =>
      { let hits = 0
        let misses = 1
        let PositiveDagtochten = []
        dagtocht.name.split(" ").forEach(word =>
          thisRef.HeuristicCompareFunc(word, filterTerm)?hits++:misses++)
        dagtocht.description.split(" ").forEach(word =>
          thisRef.HeuristicCompareFunc(word, filterTerm)?hits++:misses++)
        dagtocht.text.split(" ").forEach(word =>
          thisRef.HeuristicCompareFunc(word, filterTerm)?hits++:misses++)
        let result = hits/misses
        console.log(dagtocht.id)
        console.log("hits", hits)
        console.log("misses", misses)
        console.log("result", result)
        if(hits > 3 && result > 0.1){
          collectState.dagtochtHits.push(dagtocht)
        }
        collectState.pending--;
      }))
    Api.get_aanbiedingen().then(aanbiedingen =>
      aanbiedingen.map(aanbieding =>
      { collectState.pending++
        return aanbieding}).forEach(aanbieding =>
      { let hits = 0
        let misses = 1
        aanbieding.title.split(" ").forEach(word =>
          thisRef.HeuristicCompareFunc(word, filterTerm)?hits++:misses++)
        aanbieding.description.split(" ").forEach(word =>
          thisRef.HeuristicCompareFunc(word, filterTerm)?hits++:misses++)
        let result = hits/misses
        if(hits > 5 || result > 0.5){
          collectState.aanbiedingHits.push(aanbieding)
        }
        collectState.pending--;
      }))
    }
  }

  private SearchFunction(searchterm:string, thisRef:Zoekbalk) {
    let searchterms = searchterm.split(" ")
    async function completionFunc(collectState){
      if(collectState.pending != 0){
        await Aux.sleep(500)
        completionFunc(collectState)
      }else{
        console.log("completely done here!")
        thisRef.setState({...thisRef.state, results:collectState, completed : true})
      }
    }
    Aux.AsyncExternalFoldWithCompletion({aanbiedingHits:[], dagtochtHits:[], pending:-1}, searchterms, this.CollectAndFilterData(this), completionFunc)
  }
  render() {
    let Prettify = (dagtocht:Types.Dagtocht) => {//deze functie moet nog aangepast worden
      return  <div>
                <p>{dagtocht.name}</p>
                <p>{dagtocht.prijs}</p>
                <p>{dagtocht.text}</p>
              </div>
    }
    if(this.props.searchterm == ""){
      return  <div>
                <h1>Kan niet zoeken met lege zoekopdracht...</h1>
              </div>
    }else if(this.state.kind == "searched"){
      this.state.results.dagtochtHits.map(item => console.log(item))
      console.log("these were all the items")
      if(this.state.completed){
        console.log("completely done")
        return  <div>
                  <h1>Zoekopdracht voltooid</h1>
                  {this.state.results.dagtochtHits.length != 0 ?
                    this.state.results.dagtochtHits.map(dagtocht => Prettify(dagtocht)) :
                    <h2>Er zijn geen zoekresultaten gevonden</h2>}
                </div>
      }else{
        return  <div>
                  Aan het zoeken!
                </div>
      }
    }else{
      return <div>Er is ergens een error, gelieve te zeggen tegen de developers</div>
    }
  }
}