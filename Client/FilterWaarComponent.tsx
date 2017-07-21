import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Immutable from "immutable";
import * as Types from "./custom_types";
import * as Manager from "./pageManager";
import * as api from "./api";

type FilterWaarComponentProps = {}
type FilterWaarComponentState = {}

export class FilterWaarComponent extends React.Component<FilterWaarComponentProps, FilterWaarComponentState>{
    constructor(props, context){
        super(props, context)
        this.state = {}
    }

    render(){
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