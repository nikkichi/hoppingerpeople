import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Aanbiedingen from './Aanbiedingen'

export let HomePage = function(slug: string) : JSX.Element {
    return (<div><Aanbiedingen.AanbiedingenComponent view_count={2} id={1}/>
                <Aanbiedingen.AanbiedingenComponent view_count={6} id={2}/></div>)
}