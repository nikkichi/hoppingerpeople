import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'
import * as filtercat from './FilterCategorieComponent'
import * as filtervoorwie from './FilterVoorWieComponent'
import * as filterwat from './FilterWatComponent'
import * as filterwaar from './FilterWaarComponent'



export let HomePage = function(slug: string) : JSX.Element {
    return (<div><Manager.PageManagerComponent/> </div>) }
    /*(<div>
            {<Manager.PageManagerComponent/>}
            <filtercat.FilterCategorieComponent/>
            <filterwat.FilterWatComponent/>
            <filterwaar.FilterWaarComponent/>     
            <filtervoorwie.FilterVoorWieComponent/>   
        </div>) }*/