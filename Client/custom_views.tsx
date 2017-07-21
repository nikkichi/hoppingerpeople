import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type HomepageComponentProps = { onMovePage: (id: Manager.Page) => void}
type HomepageComponentState = { name: string, title: string, description: string, id: number}

export let HomePage = function(slug: string) : JSX.Element {
    return (<div><Manager.PageManagerComponent/> </div>) }



let hyperlink = "Lees meer"
let homepageLink = "Home"
let aanbiedingLink = "Aanbiedingen"
let dagtochtLink = "Dagtochten"
let ooievaarLink = "Ooievaarspas info"
let vragenLink = "Veelgestelde vragen"


export class HomepageComponent extends React.Component<HomepageComponentProps, HomepageComponentState> {
    constructor(props: HomepageComponentProps, context) {
        super(props, context)
        this.state = {name: "loading", title: "", description: "", id: 1}
    } 

    componentWillMount(){
        
    } 

    

    render(){
        return <div>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 1})}>{homepageLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 2})}>{aanbiedingLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 3})}>{dagtochtLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 4})}>{ooievaarLink}</button>
            <button onClick={(event) => this.props.onMovePage({ kind: "homepage", id: 5})}>{vragenLink}</button>
            <h1> Homepage</h1>
            <h2> {this.state.name}</h2>
            <div> {this.state.description}</div>

            <h2>Speciale Aanbiedingen</h2>
            <h4> {this.state.title}</h4>
        </div> 
    }
}

// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import * as Immutable from 'immutable'
// import * as ViewUtils from './generated_views/view_utils'
// import * as List from './containers/list'
// import * as Models from './generated_models'
// import * as Types from './custom_types'
// import * as Api from './api'
// import * as Manager from './pageManager'

// let button: "Lees meer"

// // This is the GrandParent I think
// type HomepageComponentProps = {   onMovePage: (id: Manager.Page) => void}
// type HomepageComponentState = { kind: "Loading"} | {kind:"Loaded", value: Types.SpecialAanbieding[]}


// function generateNumber(min:number, max:number){
//     return Math.floor(Math.random()* max - min + 1) + min
// }


// export class HomepageComponent extends React.Component<HomepageComponentProps, HomepageComponentState>{
//     constructor(props, context) {
//         super(props, context);
//         this.state = { kind: "Loading"} 

//     }

//     loadSpecialAanbieding(){
//             Api.get_specialaanbieding()
//             .then(i => this.setState({ ...this.state, kind: "Loaded", SpecialAanbieding: i}))
//             .catch (i => this.loadSpecialAanbieding )
//     }

//     componentWillMount() {
//      this.loadSpecialAanbieding();       
                
//     }    
            
   


//     render() {
//         if(this.state.kind == "Loaded"){
//             console.log("yay")
//         }
      
//             return <div></div>
   
//     }
// }
