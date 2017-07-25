import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Immutable from "immutable";
import * as Types from "./custom_types";
import * as Manager from "./pageManager";
import * as api from "./api";

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