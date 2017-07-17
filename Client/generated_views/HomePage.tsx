import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Models from '../generated_models'
import * as Api from '../generated_api'
import * as List from '../containers/list'
import * as Components from '../components/components'
import * as Buttons from '../containers/button_utils'
import * as ToggleContainer from '../containers/toggle_container'
import * as Permissions from './permissions'
import * as Utils from './view_utils'
import * as Draft from 'draft-js'
import * as i18next from 'i18next'
import * as Moment from 'moment'

import * as CustomViews from '../custom_views'









export function load_relations_HomePage(self, callback?:()=>void) {
  callback && callback()
}

export function set_size_HomePage(self:HomePageContext, new_size:Utils.EntitySize) {
  self.props.set_size(new_size, () => {
    if (new_size == "fullscreen")
      self.props.push(HomePage_to_page(self.props.entity.Id))
  })
}





export function render_editable_attributes_minimised_HomePage(self:HomePageContext) {
  let attributes = (<div>
      
    </div>)
  return attributes
}

export function render_editable_attributes_maximised_HomePage(self:HomePageContext) {
    let state = self.state()
    let attributes = (<div>
        
        
        
        
      </div>)
    return attributes
  }

export function render_breadcrumb_HomePage(self:HomePageContext) {
  return <div className="breadcrumb-homepage">HomePage</div>
}

export function render_menu_HomePage(self:HomePageContext) {
  let state = self.state()
  return <div className="menu">
        <img className="logo" src={"/images/logo.png"} alt="Logo"/>
        <div className="pages">
          {!Permissions.can_view_HomePage() ? null :
              <div className={`menu_entry page_link active-page`}>
                <a onClick={() => 
                  self.props.set_shown_relation("none")
                  
                }>
                  {i18next.t('HomePage')}
                </a>
              </div>
            }
          <div className="menu_entries">
          
            
                <div className="menu_entry menu_entry--with-sub">
                
                </div>  
          </div>
        </div>
      </div>
}

export function render_local_menu_HomePage(self:HomePageContext) {
  let state = self.state()
  return <div className="local-menu">
          <div className="local_menu_entries">
            <div className={`local_menu_entry${self.props.shown_relation == "none" ? " local_menu_entry--active" : ""}`}>
              <a onClick={() =>
                  self.props.set_shown_relation("none")
              }>
                {i18next.t('About this HomePage')}
              </a>
            </div>
          
          </div>
        </div>
}

export function render_controls_HomePage(self:HomePageContext) {
  return <div className="control">
    {self.props.allow_maximisation && self.props.set_size ? <a className={`"homepage button button--toggle ${self.props.size != 'preview' ? 'button--toggle--open' : ''}`}
          onClick={() => {
            set_size_HomePage(self, self.props.size == "preview" ? "large" : "preview")}
          }>
      </a> : null}
    {Permissions.can_delete_HomePage() && self.props.size == "fullscreen" ? <a className="button button--delete"
      onClick={() => confirm(i18next.t('Are you sure?')) &&
        Api.delete_HomePage(self.props.entity).then(() => self.props.force_reload(() => self.props.pop()))
      }>
    </a> : null}
    {self.props.unlink && self.props.mode != "view" ?
      <a className="button button--unlink"
          onClick={() => self.props.unlink()}>
      </a>
      :
      null
    }
    {self.props.delete && self.props.mode != "view" ?
      <a className="button button--delete"
          onClick={() => self.props.delete()}>
      </a>
      :
      null
    }
  </div>
}

export function render_content_HomePage(self:HomePageContext) {
  let actions:Array<()=>void> =
    [
      self.props.allow_maximisation && self.props.set_size && self.props.size == "preview" ?
        () => set_size_HomePage(self, self.props.size == "preview" ? "large" : "preview")
      :
        null,
    ].filter(a => a != null)
  let content =
    Permissions.can_view_HomePage() ?
      self.props.size == "preview" ?
        render_preview_HomePage(self)
      : self.props.size == "large" ?
        render_large_HomePage(self)
      : self.props.size == "fullscreen" ?
        render_large_HomePage(self)
      : "Error: unauthorised access to entity."
    : "Error: unauthorised access to entity."
  if (self.props.mode == "view" && actions.length == 1 && !false)
    return <a onClick={() => actions[0]()}>
      <div className={`${self.props.inline != undefined && self.props.inline ? "" : "model-content"} ${self.props.size == 'preview' ? 'model-content--preview' : ''}`}>
        {content}
      </div>
    </a>
  else
    return <div className={`${self.props.inline != undefined && self.props.inline ? "" : "model-content"} ${self.props.size == 'preview' ? 'model-content--preview' : ''}`}>
      {content}
    </div>
}





export function render_preview_HomePage(self:HomePageContext) {
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_HomePage())
    attributes = (<div className="model__attributes">
      
    </div>)
  else
    attributes = render_editable_attributes_minimised_HomePage(self)
  return (<div className="block">
      {attributes}
    </div>)
}

export function render_large_HomePage(self:HomePageContext) {
  let state = self.state()
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_HomePage())
    attributes = (<div className="model__attributes">
      
        
    </div>)
  else
    attributes = render_editable_attributes_maximised_HomePage(self)
  return (<div className="block">
      {self.props.nesting_depth == 0 && self.props.shown_relation != "all" && self.props.shown_relation != "none" ? null : attributes}
      {render_relations_HomePage(self)}
    </div>)
}




export function render_relations_HomePage(self:HomePageContext) {
  return <div className="relations">
      
      
    </div>
}





export function render_saving_animations_HomePage(self:HomePageContext) {
  return 
    
}

export type HomePageContext = {state:()=>HomePageState, props:Utils.EntityComponentProps<Models.HomePage>, setState:(new_state:HomePageState, callback?:()=>void) => void}

export type HomePageState = {
    update_count:number
    
  }
export class HomePageComponent extends React.Component<Utils.EntityComponentProps<Models.HomePage>, HomePageState> {
  constructor(props:Utils.EntityComponentProps<Models.HomePage>, context:any) {
    super(props, context)
    this.state = { update_count:0, }
  }

  get_self() {
    return {state:() => this.state, props:this.props, setState:(ns,c)=>this.setState(ns,c)}
  }

  componentWillReceiveProps(new_props:Utils.EntityComponentProps<Models.HomePage>) {
    if (new_props.size == "breadcrumb") return
    let current_logged_in_entity =  null
    let new_logged_in_entity =  null
    if (new_props.mode != this.props.mode || (new_props.size != this.props.size && (new_props.size == "large" || new_props.size == "fullscreen")) ||
        new_props.logic_frame != this.props.logic_frame ||
        (current_logged_in_entity && !new_logged_in_entity) ||
        (!current_logged_in_entity && new_logged_in_entity) ||
        (current_logged_in_entity && new_logged_in_entity && current_logged_in_entity.Id != new_logged_in_entity.Id)) {
      load_relations_HomePage(this.get_self(),  )
    }
  }

  thread:number = null
  componentWillMount() {
    if (this.props.size == "breadcrumb") return
    if (this.props.size != "preview") {
      
      load_relations_HomePage(this.get_self(), )
    }

    this.thread = setInterval(() => {
      

    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.thread)
  }

  render() {
    if (this.props.size == "breadcrumb") {
      return Permissions.can_view_HomePage() ?
              render_breadcrumb_HomePage(this.get_self())
              : null
    }

    return <div id={`HomePage_${this.props.entity.Id.toString()}_${this.state.update_count}`} className={`model homepage`}>
      { render_saving_animations_HomePage(this.get_self()) }
      { this.props.nesting_depth == 0 ? render_menu_HomePage(this.get_self()) : null }
      <div className={this.props.nesting_depth == 0 ? 'main__content' : ''}>
        {
          this.props.nesting_depth == 0 && !!this.props.toggle_button ?
          <div className="topbar">
            { this.props.breadcrumbs() }
            <div className="topbar__buttons">
              
                {this.props.toggle_button ? this.props.toggle_button() : null}
              { this.props.authentication_menu() }
            </div>
          </div>
          :
          null
        }
        
        { render_controls_HomePage(this.get_self()) }
        { render_content_HomePage(this.get_self()) }
      </div>
    </div>
  }
}

export let HomePage = (props:Utils.EntityComponentProps<Models.HomePage>) : JSX.Element =>
  <HomePageComponent {...props} />

export let HomePage_to_page = (id:number) => {
  let can_edit = Utils.any_of([Permissions.can_edit_HomePage])
  return Utils.scene_to_page<Models.HomePage>(can_edit, HomePage, Api.get_HomePage(id), Api.update_HomePage, "HomePage", "HomePage", `/HomePages/${id}`)
}

export let HomePage_to = (id:number, slug:string, target_element_id:string, ) => {
  (async() => {
    let res = await fetch(`/translations.json`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    let resources = await res.json()
    i18next.init({
      lng:  "nl",
      fallbackLng: "en",
      ns: ["common","HomePage","Course","Lecture"],
      resources: resources
    }, (err, t) => {
      ReactDOM.render(
        CustomViews.HomePage(slug),
        document.getElementById(target_element_id)
      )
    })
  })()
  
}
