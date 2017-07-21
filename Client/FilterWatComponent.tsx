import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type FilterWatComponentProps = { }
type FilterWatComponentState = { }

export class FilterTestComponent extends React.Component<FilterWatComponentProps, FilterWatComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { }
    }

   render() {
        return <div>
            Wat?<br/><br/>
            <select>
                <option selected hidden>Alle activiteiten: </option>
                <option value="cultuur">Cultuur</option>
                <option value="sport">Sport</option>
            </select>
        </div>
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
            <input name="bibliotheek" type="checkbox"/> Bibliotheek
            <br/>
            <input name="cursussen" type="checkbox"/> Cursussen
            <br/>
            <input name="dans" type="checkbox"/> Dans
            <br/>
            <input name="musea" type="checkbox"/> Musea
            <br/>
            <input name="muziek" type="checkbox"/> Muziek
            <br/>
            <input name="recreatie" type="checkbox"/> Recreatie
            <br/>
            <input name="schilderen en tekenen" type="checkbox"/> Schilderen en tekenen
            <br/>
            <input name="scouting" type="checkbox"/> Scouting
            <br/>
            <input name="speciaal voor ouderen" type="checkbox"/> Speciaal voor ouderen
            <br/>
            <input name="theater en uitgaan" type="checkbox"/> Theater en Uitgaan
            <br/>
            <input name="toneel" type="checkbox"/> Toneel
            <br/>
            <input name="yoga" type="checkbox"/> Yoga
            <br/>
            <input name="zingen" type="checkbox"/> Zingen
            {/* //nog components toevoegen met een sum van alle aanbiedingen en speciale aanbiedingen */}
        </div>
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
        return <div></div>
    }
}