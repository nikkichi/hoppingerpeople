import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from "./api"
import * as Manager from "./pageManager"
import * as Types from './custom_types'



type AanbiedingenComponentProps = {onMovePage: (id: Manager.Page) => void}
type AanbiedingenComponentState = {}

//main component voor aanbiedingen pagina
export class AanbiedingenComponent extends React.Component<AanbiedingenComponentProps, AanbiedingenComponentState> 
{
    constructor(props: AanbiedingenComponentProps, context)
    {
        super(props, context)
        this.state = {}
    } 

    loadCategories() {
        Api
            .get_aanbieding()
            .then(c => this.setState({ ...this.state, kind: "Aanbieding", categories: c }))
            //.catch(_ => this.loadCategories())
   
    // componentWillMount() {
    //    Api.getAanbieding().then(aanbieding => this.setState({...this.state, name:aanbieding.Name, description:aanbieding.Description}))
    // }

    // render(){

     

        
     
    }        
}
//    return <div><a onClick={() => this.toggle_button()}><h1>{this.state.name}</h1></a>
//                         <button onClick={() => this.toggle_button()}>{button_text}</button><br/><br/>
//                         {description}<br/><br/>
//                         {fav_button}</div>
