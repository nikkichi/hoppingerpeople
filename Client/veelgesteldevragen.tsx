import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type veelgesteldevragenComponentProps = { onMovePage: (id: Manager.Page) => void }
type veelgesteldevragenComponentState =
    { kind: "loading" }
    | { kind: "loaded", cat1: Types.cat1vragen[], cat2: Types.cat2vragen[], cat3: Types.cat3vragen[], antwoorden: boolean[] }

let homepageLink = "Home"


export class veelgesteldevragenComponent extends React.Component<veelgesteldevragenComponentProps, veelgesteldevragenComponentState>{
    constructor(props: veelgesteldevragenComponentProps, context) {
        super(props, context)
        this.state = { kind: "loading" }
    }


    componentWillMount() {
        this.loadonderwerp()
        //dit is om de vrgen te initialiseren
        this.setState({
            ...this.state, antwoorden: [true, false, true, true, false, true, true, false, true, true]

        })
    }

    loadonderwerp() {
        Api.get_cat1vragen().then((cat1 => this.setState({ ...this.state, kind: "loaded", cat1: cat1 })), (e => console.log("Error", e)))
        Api.get_cat2vragen().then((cat2 => this.setState({ ...this.state, kind: "loaded", cat2: cat2 })), (e => console.log("Error", e)))
        Api.get_cat3vragen().then((cat3 => this.setState({ ...this.state, kind: "loaded", cat3: cat3 })), (e => console.log("Error", e)))
    }

    render() {
        if (this.state.kind == "loaded" && this.state.cat1 != undefined && this.state.cat2 != undefined && this.state.cat3 != undefined) {
            function antwoordToggler(thisRef, antwoordNummer) {
                thisRef.state.antwoorden[antwoordNummer] = !thisRef.state.antwoorden[antwoordNummer]
                thisRef.forceUpdate()
            }
            function antwoordAlles(thisRef, antwoordNummer) {
                thisRef.state.idcat[antwoordNummer] == thisRef.state.antwoorden[antwoordNummer]
                thisRef.forceUpdate()
            }

            // let titelprinten = function(infow: Types.cat1vragen, thisRef){
            // return <div>
            //         <h1>{infow.pagina}</h1>

            //         </div> }
            let onderwerp_view1 = function (info1: Types.cat1vragen, thisRef) {
                return <div  >
                    <h1 >{info1.categorie}</h1>
                    <br></br>
                    <h4 className="box--vragen"  onClick={(event) => antwoordToggler(thisRef, info1.id)}>{info1.vraag}</h4>
                    <h3 className="box--antwoord"  >{!thisRef.state.antwoorden[info1.id] ? info1.antwoord : ""}</h3>
                    <br></br>
                    <button  className= "vraag-button"  onClick={(event) => antwoordToggler(thisRef, info1.id)}>Geef antwoord weer</button>


                </div>


            }
            // info1.id refereert naar de vraag zelf, dus die moet getoggled en gecheckt worden
            let onderwerp_view2 = function (info2: Types.cat2vragen, thisRef) {
                return <div>
                    <h1>{info2.categorie}</h1>
                    <br></br>
                    <h4 className="box--vragen" onClick={(event) => antwoordToggler(thisRef, info2.id)}>{info2.vraag}</h4>
                    <br></br>
                   <h3 className="box--antwoord"> {!thisRef.state.antwoorden[info2.id] ? info2.antwoord : ""}</h3>
                    <button  className= "vraag-button" onClick={(event) => antwoordToggler(thisRef, info2.id)}>Geef antwoord weer</button>


                </div>
            }
            let onderwerp_view3 = function (info3: Types.cat2vragen, thisRef) {
                return <div>
                    <h1 >{info3.categorie}</h1>
                    <h4 className="box--vragen" onClick={(event) => antwoordToggler(thisRef, info3.id)}>{info3.vraag}</h4>
                    <h3 className="box--antwoord">{!thisRef.state.antwoorden[info3.id] ? info3.antwoord : ""}</h3>
                    <button className= "vraag-button" onClick={(event) => antwoordToggler(thisRef, info3.id)}>Geef antwoord weer</button>

                </div>
            }


            let antwoorden = this.state.antwoorden
            return <div >
                <h1  className="homepage--special" >Veelgestelde Vragen</h1>
                <div className="box-VraagBorder">{this.state.cat1.map(value => onderwerp_view1(value, this))}</div>

                <div className="box-VraagBorder">{this.state.cat2.map(value => onderwerp_view2(value, this))}</div>

                <div className="box-VraagBorder">{this.state.cat3.map(value => onderwerp_view3(value, this))}</div>


            </div>







        }
        else {
            return <div>else</div>
        }
    }
}


