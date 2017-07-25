import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Immutable from "immutable";
import * as List from "immutable";
import * as Types from "./custom_types";
import * as Manager from "./pageManager";
import * as Api from "./api";

type FilterCategorieComponentProps = { }
type FilterCategorieComponentState = { kind: 'loading' } | { kind: 'loaded', aanbiedingen: Types.aanbieding[] }

export class FilterCategorieComponent extends React.Component<FilterCategorieComponentProps, FilterCategorieComponentState>{
    constructor(props: FilterCategorieComponentProps, context){
        super(props, context)
        this.state = { kind: 'loading' }
    } 

    load_categories(){
        Api.get_aanbiedingen()
        .then( a => this.setState({... this.state, kind: 'loaded', aanbiedingen: a}))
        .catch( _ => this.load_categories())

    }
    componentWillMount() {

        this.load_categories();



    }
    render(){

        if (this.state.kind == 'loaded'){
            let categories =
                            Immutable.List(this.state.aanbiedingen)
                            .map((aanbieding) => aanbieding.category)
                            .reduce((accumulator, value) => {
                                    if (accumulator.includes(value))
                                        { return accumulator}
                                    else {return accumulator.push(value)}
                            }, Immutable.List<string>())

        let stringToOption = (x: string) => <option>{x}</option>

        return <div>
                Categorie<br/>
                <div>   
                <select name="categories" id="1">  
                    <option selected hidden>Maak uw keuze: </option> 
                     {categories.map(category => stringToOption(category))} 
                </select>
                </div>
            </div>
        }

        else 
            {return <div>else</div>}
    }
}