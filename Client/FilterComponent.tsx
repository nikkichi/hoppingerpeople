import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Immutable from "immutable";
import * as List from "immutable";
import * as Types from "./custom_types";
import * as Manager from "./pageManager";
import * as Api from "./api";
import { FilterState } from "./Aanbiedingen"

let stringToOption = (x: string) => <option className="dropdown-content" value={x}>{x}</option>

type FilterCategorieComponentProps = { aanbiedingen: Types.aanbieding[], setFilterState: (newState: FilterState) => void, filterState: FilterState }

export class FilterCategorieComponent extends React.Component<FilterCategorieComponentProps, {}>{
    constructor(props: FilterCategorieComponentProps, context) {
        super(props, context)
    }

    setCategory(value) {
        this.props.setFilterState({ ...this.props.filterState, Categorie: { kind: "on", value: value } })
    }

    render() {
        let categories =
                        Immutable.List(this.props.aanbiedingen)
                        .map((aanbieding) => aanbieding.category)
                        .reduce((accumulator, value) => {
                            if (accumulator.includes(value))
                            { return accumulator }
                            else { return accumulator.push(value) }
                        }, Immutable.List<string>())

        return <div className="box--filter-category">
            Categorie<br/>
            <div className="dropdown">
                <select className= "dropbtn" name="categorie filter" id="1" onChange={s => {
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
type FilterWatComponentProps = { aanbiedingen: Types.aanbieding[], setFilterState: (newState: FilterState) => void, filterState: FilterState }

export class FilterWatComponent extends React.Component<FilterWatComponentProps>{
    constructor(props, context) {
        super(props, context)
    }

    setWat(value){
        this.props.setFilterState({... this.props.filterState, Wie: { kind: "on", value: value } })
    }

    render(){ 
        let activities =
                        Immutable.List(this.props.aanbiedingen)
                        .map((aanbieding) => aanbieding.activity)
                        .reduce((accumulator, value) => {
                            if (accumulator.includes(value))
                                { return accumulator }
                            else {return accumulator.push(value)}
                        }, Immutable.List<string>())

        return<div className="box--filter-wat">
            Wat?<br/>
            <div className="dropdown">
            <select className= "dropbtn" name="wat filter" id= "2" onChange={s => {
                this.setWat(s.currentTarget.value)
                }}>
                <option selected hidden>Alle actviteiten</option>
                {activities.map(activities => stringToOption(activities))}
            </select>
            </div>
        </div> }

}


//locatie filter
type FilterWaarComponentProps = { aanbiedingen: Types.aanbieding[], setFilterState: (newState: FilterState) => void, filterState: FilterState }


export class FilterWaarComponent extends React.Component<FilterWaarComponentProps>{
    constructor(props, context){
        super(props, context)
    }

    setWaar(value){
        this.props.setFilterState({... this.props.filterState, Waar: {kind: "on", value: value} })
    }

    render(){
        let locations = 
                        Immutable.List(this.props.aanbiedingen)
                        .map((aanbieding) => aanbieding.location)
                        .reduce((accumulator, value) => {
                                if (accumulator.includes(value))
                                    { return accumulator}
                                else {return accumulator.push(value)}
                        }, Immutable.List<string>())


        return <div className="box--filter-waar">
            Waar?<br/>
            <div className="dropdown">
            <select className= "dropbtn" name= "waar filter" id="3" onChange={s => {
                this.setWaar(s.currentTarget.value)
                }}>
                <option selected hidden>Alle locaties </option>
                {locations.map(location => stringToOption(location))}            
            </select>
            </div>
        </div>
        
    }
}


// wie filter
type FilterVoorWieComponentProps = { aanbiedingen: Types.aanbieding[], setFilterState: (newState: FilterState) => void, filterState: FilterState }

export class FilterVoorWieComponent extends React.Component<FilterVoorWieComponentProps>{
    constructor(props, context) {
        super(props, context)
    }
    
    setWie(value){
        this.props.setFilterState({ ... this.props.filterState, Wie: { kind : "on", value: value } })
    }

    render() {        
        let targets = 
                    Immutable.List(this.props.aanbiedingen)
                    .map((aanbieding) => aanbieding.target)
                    .reduce((accumulator, value) => {
                        if (accumulator.includes(value)){
                            return accumulator
                        }
                        else {return accumulator.push(value)}
                    }, Immutable.List<string>())

        return <div className="box--filter-wie">
            Wie?<br/>
            <div className="dropdown">
            <select className= "dropbtn" name="wie filter" id="4" onChange={s => {
                this.setWie(s.currentTarget.value)
                console.log(s.currentTarget.value)
                }}>
                <option selected hidden>Voor iedereen </option>
                {targets.map(target => stringToOption(target))}
            </select>
            </div>
        </div>

    }
}