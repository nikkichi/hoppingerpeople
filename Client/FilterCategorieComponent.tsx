import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Immutable from "immutable";
import * as Types from "./custom_types";
import * as Manager from "./pageManager";
import * as api from "./api";

type FilterCategorieComponentProps = { }
type FilterCategorieComponentState = { }

export class FilterCategorieComponent extends React.Component<FilterCategorieComponentProps, FilterCategorieComponentState>{
    constructor(props: FilterCategorieComponentProps, context){
        super(props, context)
        this.state = { }
    } 

    render(){
        return <div>
            Categorie<br/><br/>
            <select>
                <option selected hidden>Maak uw keuze: </option> 
                <option value="Alle aanbiedingen">Alle aanbiedingen</option>
                <option value="Speciale aanbiedingen">Speciale aanbiedingen</option> {/* //nog components toevoegen met een sum van alle aanbiedingen en speciale aanbiedingen */}
                        {/*/ voeg onClick toe na de value="" */}
            </select>
        </div>
    }
}