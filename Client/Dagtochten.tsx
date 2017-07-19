import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Manager from './Dagtochten'

let current_page = 2
type PageManagerComponentProps = { methode: string}
type PageManagerComponentState = {current_page: number}

type DagtochtenComponentProps = {}
type DagtochtenComponentState = {}

type BlockWithLinkComponentProps = { title:string ,description:string , hyperlink:string, id: number ,onMovePage:(id:number)=>void}
type BlockWithLinkComponentState = {}

type InforComponentProps = {id: number}
type InforComponentState = {name : string}

function get_dagtocht(id:number) {
    switch (id) {
        case 1:
            return Promise.resolve("Gezin")

       case 2:
            return Promise.resolve("Senior")

        case 3:
            return Promise.resolve("Begleiding")
    
       default:
            break;
    }
}

export class BlockWithLinkComponent extends React.Component<BlockWithLinkComponentProps, BlockWithLinkComponentState>{
    constructor(props,context){
        super(props,context);
    }
    render(){ 
        return<div>
                                    
                    <h3>{this.props.title}</h3>
                    <header>{this.props.description}</header>
                    <button>{this.props.hyperlink}</button>
                    
              </div>
    }
}


export class PageManagerComponent extends React.Component<PageManagerComponentProps,PageManagerComponentState>{

   constructor(props,context){
        super(props,context);
        this.state = {current_page: 0}
    }
 
    render(){
        
             if (current_page == 1)
                return<div><DagtochtenComponent />     </div>
            else 
                return <div> {<InforComponent id = {1}/>} </div>}


        //  {/*<BlockWithLinkComponent title= {"Zomerdagtochten voor gezinnen"} 
        //                                                         description= {"Iedere zomer wordt een dagtocht georganiseerd voor gezinnen. Er is altijd keus uit een wisselend aanbod aan bestemmingen waaronder het bezoek aan een pretpark, museum of show. Voor €10,- per persoon kun je al met de bus mee naar een topbestemming.De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen."} 
        //                                                         hyperlink= {"lees meer "}
        //                                                         id = {1}
        //                                                         onClick={(event) => this.moveToPage(1)}
        //                                                         />*/}
       
       async MoveToPage(page_id:number){
        this.setState({...this.state,current_page: page_id})
    }
}

export class DagtochtenComponent extends React.Component<DagtochtenComponentProps, DagtochtenComponentState>{
    constructor(props, context) {
        super(props, context)
    }
    //private move: PageManagerComponent = new PageManagerComponent(this.prop)
    componentwilMount(){
    
    }     

    render(){
       
                            return<div>
                             
                                <h1>  opties dagtochten</h1>
                                        <BlockWithLinkComponent title= {"Zomerdagtochten voor gezinnen"} 
                                                                description= {"Iedere zomer wordt een dagtocht georganiseerd voor gezinnen. Er is altijd keus uit een wisselend aanbod aan bestemmingen waaronder het bezoek aan een pretpark, museum of show. Voor €10,- per persoon kun je al met de bus mee naar een topbestemming.De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen."} 
                                                                hyperlink= {"lees meer "}
                                                                id = {1}
                                                               onMovePage = {(event) => this.MoveToPage(id)}/>

                                                                              
                                                               
                                    </div>
    }                            
                                     
                                                                {/*//moveToPage(id)>}*/}
{/*                                            
                                        <BlockWithLinkComponent title= {"Zomerdagtochten voor senioren"} 
                                                                description= {"Iedere zomer wordt een dagtocht georganiseerd voor senioren van 50 jaar of ouder. Met uw Ooievaarspas kunt u voor € 10 deelnemen aan een fantastische dagtocht. De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen."} 
                                                                hyperlink= {"Lees meer"}
                                                                id = {2}/>
                                        <BlockWithLinkComponent title= {"Zomerdagtochten voor personen met begeleidingsbehoefte"} 
                                                                description= {"Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! Deze zomerdagtochten zijn bedoeld voor senioren met een begeleidingsbehoefte."} 
                                                                hyperlink= {"Lees meer"}
                                                                id = {3}/>*/}
                                   
                                                        
                                    
 

export class InforComponent extends React.Component<InforComponentProps, InforComponentState>{
    constructor(props, context) {
        super(props,context)   
        this.state = {name: "Loading"   }
    }

    componentWillMount() {    
       
        get_dagtocht(1).then(name => this.setState({...this.state, name:name}))
    }
    
     
    render(){

        return <div>{this.state.name}</div>
  }
}
   

