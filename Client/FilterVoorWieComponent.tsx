import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'

type FilterVoorWieComponentProps = { }
type FilterVoorWieComponentState = { }

export class FilterVoorWieComponent extends React.Component<FilterVoorWieComponentProps, FilterVoorWieComponentState>{
    constructor(props, context) {
        super(props, context)
        this.state = { }
    }

   render() {
        return <div>
            Wie?<br/>
            <select>
                <option selected hidden>Voor iedereen </option>
                <option value="cultuur">Alle leeftijden</option>
                <option value="sport">Gehandicapten</option>
                <option value="sport">Jonger dan 18 jaar</option>
                <option value="sport">Ouder dan 17 jaar</option>
                <option value="sport">Ouder dan 50 jaar</option>
                <option value="sport">Ouder dan 65 jaar</option>
            </select>
        </div>
   }
}