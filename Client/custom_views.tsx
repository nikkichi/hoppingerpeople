import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Api from './generated_api'
import * as Ooievaarspasinfo from './OoievaarsPasInfo'

export let HomePage = function(slug: string) : JSX.Element {
    return (<div><Ooievaarspasinfo.PageManagerComponent/></div>)
}