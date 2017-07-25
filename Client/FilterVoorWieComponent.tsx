import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

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