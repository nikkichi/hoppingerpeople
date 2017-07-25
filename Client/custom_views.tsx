import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as List from './containers/list'
import * as Types from './custom_types'
import * as Manager from './pageManager'
import * as Api from './api'
import { AanbiedingenComponent } from "./Aanbiedingen";



export let HomePage = function(slug: string) : JSX.Element {
<<<<<<< HEAD
    return (<div><Manager.PageManagerComponent/></div>) }
=======
    return (<div><Manager.PageManagerComponent/> </div>) }
    /*(<div>
            {<Manager.PageManagerComponent/>}
            <filtercat.FilterCategorieComponent/>
            <filterwat.FilterWatComponent/>
            <filterwaar.FilterWaarComponent/>     
            <filtervoorwie.FilterVoorWieComponent/>   
        </div>) }*/
>>>>>>> 67d20aa5451e560cafc399fed5b71f35c78c6931
