import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Immutable from "immutable";
import * as List from "immutable";
import * as Types from "./custom_types";
import * as Manager from "./pageManager";
import * as Api from "./api";
import { FilterState } from "./Aanbiedingen"

type FilterCategorieComponentProps = { aanbiedingen: Types.aanbieding[], setFilterState: (newState: FilterState) => void, filterState: FilterState }

export class FilterCategorieComponent extends React.Component<FilterCategorieComponentProps, {}>{
    constructor(props: FilterCategorieComponentProps, context) {
        super(props, context)
    }

    setCategory(value) {
        this.props.setFilterState({ ...this.props.filterState, Categorie: { kind: "on", value: value } })
    }

    render() {
        // let onclickAanbieding = (id: number) => this.props.onMovePage({ kind: "DetailAanbieding", id: id, checkPage: 1})

        let stringToOption = (x: string) => <option value={x}>{x}</option>

        let categories =
            Immutable.List(this.props.aanbiedingen)
                .map((aanbieding) => aanbieding.category)
                .reduce((accumulator, value) => {
                    if (accumulator.includes(value))
                    { return accumulator }
                    else { return accumulator.push(value) }
                }, Immutable.List<string>())

        return <div>
            Categorie<br />
            <div>
                <select onChange={s => {
                    this.setCategory(s.currentTarget.value)
                    console.log(s.currentTarget.value)
                }}>
                    <option selected hidden>Maak uw keuze: </option>
                    {categories.map(category => stringToOption(category))}
                </select>
            </div>
        </div>

    }
}

//activiteit filter
type FilterWatComponentProps = { }
type FilterWatComponentState = { kind: 'loading' } | { kind: 'loaded', activityKind: string, aanbiedingen: Types.aanbieding[] } 

export class FilterWatComponent extends React.Component<FilterWatComponentProps, FilterWatComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: 'loading'}
    }
    componentWillMount(){
    }    
    load_aanbiedingen(){
        Api.get_aanbiedingen()
        .then(a => this.setState({...this.state, kind: "loaded", aanbiedingen: a}))
        .catch(_ => this.load_aanbiedingen())
    }
   render() {
        if (this.state.kind == "loaded")
        {
            let activityKind = this.state.activityKind
            let activityStrings = 
                Immutable.List(this.state.aanbiedingen)
                .map((aanbieding) => aanbieding.activity)
                .filter((activity) => activity.kind == activityKind)
                .map((activity) => activity.sub)
                .reduce((accumulator, value) => {
                    if (accumulator.includes(value)) return accumulator
                    else return accumulator.push(value)
            }, Immutable.List<string>())
                    
        return <div>
            Wat?<br/>
            <select>
                <option selected hidden>Alle activiteiten </option>
                <option value="cultuur">Cultuur</option>
                { activityStrings.map((x)=> <option value={x}>{x}</option>)}
            </select>
        </div>
        }
   }
}
type CheckboxCultuurProps = {}
type CheckboxCultuurState = {}
export class CheckboxCultuur extends React.Component<CheckboxCultuurProps, CheckboxCultuurState>{
    constructor(props, context){
        super(props, context)
        this.state = {} 
    }
    render(){
               
        return <div>
        {/*//         <input name="bibliotheek" type="checkbox"/> Bibliotheek
        //         <br/>
        //         <input name="cursussen" type="checkbox"/> Cursussen
        //         <br/>
        //         <input name="dans" type="checkbox"/> Dans
        //         <br/>
        //         <input name="musea" type="checkbox"/> Musea
        //         <br/>
        //         <input name="muziek" type="checkbox"/> Muziek
        //         <br/>
        //         <input name="recreatie" type="checkbox"/> Recreatie
        //         <br/>
        //         <input name="schilderen en tekenen" type="checkbox"/> Schilderen en tekenen
        //         <br/>
        //         <input name="scouting" type="checkbox"/> Scouting
        //         <br/>
        //         <input name="speciaal voor ouderen" type="checkbox"/> Speciaal voor ouderen
        //         <br/>
        //         <input name="theater en uitgaan" type="checkbox"/> Theater en Uitgaan
        //         <br/>
        //         <input name="toneel" type="checkbox"/> Toneel
        //         <br/>
        //         <input name="yoga" type="checkbox"/> Yoga
        //         <br/>
        //         <input name="zingen" type="checkbox"/> Zingen
        //          //nog components toevoegen met een sum van alle aanbiedingen en speciale aanbiedingen */}
        //     </div>
    }
}
type CheckboxSportProps = {}
type CheckboxSportState = {}
export class CheckboxSport extends React.Component<CheckboxSportProps, CheckboxSportState>{
    constructor(props, context){
        super(props, context)
        this.state = {} 
    }
    render(){
        return <div>
                    <input name="badminton" type="checkbox"/> Badminton
                    <br/>
                    <input name="balsport allerlei" type="checkbox"/> Balsort allerlei
                    <br/>
                    <input name="brigide" type="checkbox"/> Brigide
                    <br/>
                    <input name="denksport" type="checkbox"/> Denksport
                    <br/>
                    <input name="duursport" type="checkbox"/> Duursport
                    <br/>
                    <input name="fitness" type="checkbox"/> Fitness
                    <br/>
                    <input name="gymnastiek" type="checkbox"/> Gymnastiek
                    <br/>
                    <input name="handbal" type="checkbox"/> Handbal
                    <br/>
                    <input name="korfbal" type="checkbox"/> Korfbal
                    <br/>
                    <input name="mindervalidesport" type="checkbox"/> Mindervalidensport
                    <br/>
                    <input name="schaatsen" type="checkbox"/> Schaatsen
                    <br/>
                    <input name="speciaal voor ouderen" type="checkbox"/> Speciaal voor Ouderen
                    <br/>
                    <input name="tafeltennis" type="checkbox"/> Tafeltennis
                    <br/>
                    <input name="tennis" type="checkbox"/> Tennis
                    <br/>
                    <input name="voetbal" type="checkbox"/> Voetbal
                    <br/>
                    <input name="volleybal" type="checkbox"/> Volleybal
                    <br/>
                    <input name="zelfverdediging" type="checkbox"/> Zelfverdediging
                    <br/>
                    <input name="zwemmen" type="checkbox"/> Zwemmen
                    {/* //nog components toevoegen met een sum van alle aanbiedingen en speciale aanbiedingen */}
               </div>
    }
}

//locatie filter

type FilterWaarComponentProps = {}
type FilterWaarComponentState = { kind: 'loading' } | { kind: 'loaded', aanbiedingen: Types.aanbieding[]}

export class FilterWaarComponent extends React.Component<FilterWaarComponentProps, FilterWaarComponentState>{
    constructor(props, context){
        super(props, context)
        this.state = { kind: 'loading'}
    }

    load_locations(){
        api.get_aanbiedingen()
        .then(a => this.setState({... this.state, kind: 'loaded', aanbieding: a}))
        .catch( _ => this.load_locations())
    }

    render(){

        if (this.state.kind == 'loaded'){
            let locations = Immutable.List(this.state.aanbiedingen)
                            .map((aanbieding) => aanbieding.location)
                            .reduce((accumulator, value) => {
                                    if (accumulator.includes(value))
                                        { return accumulator}
                                    else {return accumulator.push(value)}
                            }, Immutable.List<string>())

        let stringToOption = (x: string) => <option>{x}</option>        

        return <div>
            Waar?<br/>
            <select>
                <option selected hidden>Alle locaties </option>
                <optgroup label="Den Haag">
                    <option value="archipelbuurt en willemspark">Archipelbuurt en Willemspark</option>
                    <option value="zeeheldenkwartier">Zeeheldenkwartier</option>
                </optgroup>
                <optgroup label="Overige randgemeenten">
                    <option value="buiten regio">Buiten regio</option>
                </optgroup>
            </select>
        </div>
        }
    }
}

// wie filter

type FilterVoorWieComponentProps = { }
type FilterVoorWieComponentState = { kind: 'loading' } | { kind: 'loaded', aanbiedingen: Types.aanbieding[] }

export class FilterVoorWieComponent extends React.Component<FilterVoorWieComponentProps, FilterVoorWieComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { kind: 'loading' }
    }

    componentWillMount(){
        this.load_voorwie();
    }


    load_voorwie(){
        Api.get_aanbiedingen()
        .then( a => this.setState({... this.state, kind: 'loaded', aanbiedingen: a}))
        .catch( _ => this.load_voorwie())
    }

    render() {

        if (this.state.kind == 'loaded'){
            let targets = 
                        Immutable.List(this.state.aanbiedingen)
                        .map((aanbieding) => aanbieding.target)
                        .reduce((accumulator, value) => {
                            if (accumulator.includes(value)){
                                return accumulator
                            }
                            else {return accumulator.push(value)}
                        }, Immutable.List<string>())

        let stringToOption = (x: string) => <option>{x}</option>
        
            return <div>
                Wie?<br/>
                <select>
                    <option selected hidden>Voor iedereen </option>
                   {targets.map(target => stringToOption(target))}
                </select>
            </div>
            }

        else {
            return <div> {this.state.kind} </div>
            }

        }
    }