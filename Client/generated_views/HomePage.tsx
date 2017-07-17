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
import * as Group1Views from './Group1'
import * as Group2Views from './Group2'


export function HomePage_HomePage_Group1_can_create(self:HomePageContext) {
  let state = self.state()
  return state.Group1 == "loading" ? false : state.Group1.CanCreate
}
export function HomePage_HomePage_Group2_can_create(self:HomePageContext) {
  let state = self.state()
  return state.Group2 == "loading" ? false : state.Group2.CanCreate
}
export function HomePage_HomePage_Group1_can_delete(self:HomePageContext) {
  let state = self.state()
  return state.Group1 == "loading" ? false : state.Group1.CanDelete
}
export function HomePage_HomePage_Group2_can_delete(self:HomePageContext) {
  let state = self.state()
  return state.Group2 == "loading" ? false : state.Group2.CanDelete
}
export function HomePage_HomePage_Group1_page_index(self:HomePageContext) {
  let state = self.state()
  return state.Group1 == "loading" ? 0 : state.Group1.PageIndex
}
export function HomePage_HomePage_Group2_page_index(self:HomePageContext) {
  let state = self.state()
  return state.Group2 == "loading" ? 0 : state.Group2.PageIndex
}
export function HomePage_HomePage_Group1_page_size(self:HomePageContext) {
  let state = self.state()
  return state.Group1 == "loading" ? 25 : state.Group1.PageSize
}
export function HomePage_HomePage_Group2_page_size(self:HomePageContext) {
  let state = self.state()
  return state.Group2 == "loading" ? 25 : state.Group2.PageSize
}
export function HomePage_HomePage_Group1_search_query(self:HomePageContext) {
  let state = self.state()
  return state.Group1 == "loading" ? null : state.Group1.SearchQuery
}
export function HomePage_HomePage_Group2_search_query(self:HomePageContext) {
  let state = self.state()
  return state.Group2 == "loading" ? null : state.Group2.SearchQuery
}
export function HomePage_HomePage_Group1_num_pages(self:HomePageContext) {
  let state = self.state()
  return state.Group1 == "loading" ? 1 : state.Group1.NumPages
}
export function HomePage_HomePage_Group2_num_pages(self:HomePageContext) {
  let state = self.state()
  return state.Group2 == "loading" ? 1 : state.Group2.NumPages
}

export function load_relation_HomePage_HomePage_Group1(self:HomePageContext, force_first_page:boolean, callback?:()=>void) {
  let state = self.state()
  let prelude = force_first_page && state.Group1 != "loading" ?
    (c:() => void) => state.Group1 != "loading" && self.setState({
      ...state,
      Group1: {...state.Group1, PageIndex:0 }
    }, c)
    :
    (c:() => void) => c()
  Permissions.can_view_Group1() ?
    prelude(() =>
      Api.get_HomePage_HomePage_Group1S(self.props.entity, HomePage_HomePage_Group1_page_index(self), HomePage_HomePage_Group1_page_size(self), HomePage_HomePage_Group1_search_query(self)).then(Group1S =>
        self.setState({...self.state(), update_count:self.state().update_count+1,
            Group1:Utils.raw_page_to_paginated_items<Models.Group1, Utils.EntityAndSize<Models.Group1> & { shown_relation:string }>((i, i_just_created) => {
              let state = self.state()
              return {
                element:i,
                size: state.Group1 != "loading" ?
                  (state.Group1.Items.has(i.Id) ?
                    state.Group1.Items.get(i.Id).size
                  :
                    "preview" /* i_just_created ? "large" : "preview" */)
                  :
                    "preview" /* i_just_created ? "large" : "preview" */,
                shown_relation:"all"}}, Group1S)
            }, callback)))
    :
      prelude(() => callback && callback())
}

export function load_relation_HomePage_HomePage_Group2(self:HomePageContext, force_first_page:boolean, callback?:()=>void) {
  let state = self.state()
  let prelude = force_first_page && state.Group2 != "loading" ?
    (c:() => void) => state.Group2 != "loading" && self.setState({
      ...state,
      Group2: {...state.Group2, PageIndex:0 }
    }, c)
    :
    (c:() => void) => c()
  Permissions.can_view_Group2() ?
    prelude(() =>
      Api.get_HomePage_HomePage_Group2S(self.props.entity, HomePage_HomePage_Group2_page_index(self), HomePage_HomePage_Group2_page_size(self), HomePage_HomePage_Group2_search_query(self)).then(Group2S =>
        self.setState({...self.state(), update_count:self.state().update_count+1,
            Group2:Utils.raw_page_to_paginated_items<Models.Group2, Utils.EntityAndSize<Models.Group2> & { shown_relation:string }>((i, i_just_created) => {
              let state = self.state()
              return {
                element:i,
                size: state.Group2 != "loading" ?
                  (state.Group2.Items.has(i.Id) ?
                    state.Group2.Items.get(i.Id).size
                  :
                    "preview" /* i_just_created ? "large" : "preview" */)
                  :
                    "preview" /* i_just_created ? "large" : "preview" */,
                shown_relation:"all"}}, Group2S)
            }, callback)))
    :
      prelude(() => callback && callback())
}

export function load_relations_HomePage(self, callback?:()=>void) {
  load_relation_HomePage_HomePage_Group2(self, false, 
        () => load_relation_HomePage_HomePage_Group1(self, false, 
        () => callback && callback()))
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
          
            {!Permissions.can_view_Group1() ? null :
                  <div className={`menu_entry${self.props.shown_relation == "HomePage_Group1" ? " active" : ""}`}>
                    <a onClick={() =>
                        {self.props.set_shown_relation("HomePage_Group1")
                        }
                      }>
                      {i18next.t('HomePage_Group1S')}
                    </a>
                  </div>
                }
        {!Permissions.can_view_Group2() ? null :
                  <div className={`menu_entry${self.props.shown_relation == "HomePage_Group2" ? " active" : ""}`}>
                    <a onClick={() =>
                        {self.props.set_shown_relation("HomePage_Group2")
                        }
                      }>
                      {i18next.t('HomePage_Group2S')}
                    </a>
                  </div>
                }
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


export function render_HomePage_HomePage_Group1(self:HomePageContext, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "HomePage_Group1") || !Permissions.can_view_Group1())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("homepage_homepage_group1",
   "HomePage",
   "Group1",
   "Group1S",
   self.props.nesting_depth > 0,
   false,
   false,
   false)
  (
      state.Group1 != "loading" ?
        state.Group1.IdsInServerOrder.map(id => state.Group1 != "loading" && state.Group1.Items.get(id)):
        state.Group1,
      HomePage_HomePage_Group1_page_index(self),
      HomePage_HomePage_Group1_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.Group1 != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            Group1: {
              ...state.Group1,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_HomePage_HomePage_Group1(self, false, ))
        },
      (i,_) => {
          let i_id = i.element.Id
          let state = self.state()
          return <div key={i_id}
            className={`model-nested__item ${i.size != "preview" ? "model-nested__item--open" : ""}
                        ${state.Group1 != "loading" && state.Group1.JustCreated.has(i_id) && state.Group1.JustCreated.get(i_id) ? "newly-created" : ""}` }
          
            >
            <div key={i_id}>
              {
                Group1Views.Group1({
                  ...self.props,
                  entity:i.element,
                  inline:false,
                  nesting_depth:self.props.nesting_depth+1,
                  size: i.size,
                  allow_maximisation:true,
                  allow_fullscreen:true,
                  mode:self.props.mode == "edit" && (Permissions.can_edit_HomePage_Group1()
                        || Permissions.can_create_HomePage_Group1()
                        || Permissions.can_delete_HomePage_Group1()) ?
                    self.props.mode : "view",
                  is_editable:state.Group1 != "loading" && state.Group1.Editable.get(i_id),
                  shown_relation:i.shown_relation,
                  set_shown_relation:(new_shown_relation:string, callback) => {
                    let state = self.state()
                    state.Group1 != "loading" &&
                    self.setState({...self.state(),
                      Group1:
                        {
                          ...state.Group1,
                          Items:state.Group1.Items.set(i_id,{...state.Group1.Items.get(i_id), shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                  nested_entity_names: self.props.nested_entity_names.push("Group1"),
                  
                  set_size:(new_size:Utils.EntitySize, callback) => {
                    let new_shown_relation = new_size == "large" ? "all" : i.shown_relation
                    let state = self.state()
                    state.Group1 != "loading" &&
                    self.setState({...self.state(),
                      Group1:
                        {
                          ...state.Group1,
                          Items:state.Group1.Items.set(i_id,
                            {...state.Group1.Items.get(i_id),
                              size:new_size, shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                    
                  toggle_button:undefined,
                  set_mode:undefined,
                  set_entity:(new_entity:Models.Group1, callback?:()=>void, force_update_count_increment?:boolean) => {
                    let state = self.state()
                    state.Group1 != "loading" &&
                    self.setState({...self.state(),
                      dirty_Group1:state.dirty_Group1.set(i_id, new_entity),
                      update_count:force_update_count_increment ? self.state().update_count+1 : state.update_count,
                      Group1:
                        {
                          ...state.Group1,
                          Items:state.Group1.Items.set(i_id,{...state.Group1.Items.get(i_id), element:new_entity})
                        }
                    }, callback)
                  },
                  unlink: undefined,
                    delete: !Permissions.can_delete_Group1() || !HomePage_HomePage_Group1_can_delete(self) ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.delete_Group1(i.element).then(() =>
                      load_relation_HomePage_HomePage_Group1(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          {Permissions.can_create_Group1() && Permissions.can_create_HomePage_Group1() && HomePage_HomePage_Group1_can_create(self) ? render_new_HomePage_HomePage_Group1(self) : null}
          
        </div>)
    }
    
    </div>
}


export function render_HomePage_HomePage_Group2(self:HomePageContext, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "HomePage_Group2") || !Permissions.can_view_Group2())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("homepage_homepage_group2",
   "HomePage",
   "Group2",
   "Group2S",
   self.props.nesting_depth > 0,
   false,
   false,
   false)
  (
      state.Group2 != "loading" ?
        state.Group2.IdsInServerOrder.map(id => state.Group2 != "loading" && state.Group2.Items.get(id)):
        state.Group2,
      HomePage_HomePage_Group2_page_index(self),
      HomePage_HomePage_Group2_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.Group2 != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            Group2: {
              ...state.Group2,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_HomePage_HomePage_Group2(self, false, ))
        },
      (i,_) => {
          let i_id = i.element.Id
          let state = self.state()
          return <div key={i_id}
            className={`model-nested__item ${i.size != "preview" ? "model-nested__item--open" : ""}
                        ${state.Group2 != "loading" && state.Group2.JustCreated.has(i_id) && state.Group2.JustCreated.get(i_id) ? "newly-created" : ""}` }
          
            >
            <div key={i_id}>
              {
                Group2Views.Group2({
                  ...self.props,
                  entity:i.element,
                  inline:false,
                  nesting_depth:self.props.nesting_depth+1,
                  size: i.size,
                  allow_maximisation:true,
                  allow_fullscreen:true,
                  mode:self.props.mode == "edit" && (Permissions.can_edit_HomePage_Group2()
                        || Permissions.can_create_HomePage_Group2()
                        || Permissions.can_delete_HomePage_Group2()) ?
                    self.props.mode : "view",
                  is_editable:state.Group2 != "loading" && state.Group2.Editable.get(i_id),
                  shown_relation:i.shown_relation,
                  set_shown_relation:(new_shown_relation:string, callback) => {
                    let state = self.state()
                    state.Group2 != "loading" &&
                    self.setState({...self.state(),
                      Group2:
                        {
                          ...state.Group2,
                          Items:state.Group2.Items.set(i_id,{...state.Group2.Items.get(i_id), shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                  nested_entity_names: self.props.nested_entity_names.push("Group2"),
                  
                  set_size:(new_size:Utils.EntitySize, callback) => {
                    let new_shown_relation = new_size == "large" ? "all" : i.shown_relation
                    let state = self.state()
                    state.Group2 != "loading" &&
                    self.setState({...self.state(),
                      Group2:
                        {
                          ...state.Group2,
                          Items:state.Group2.Items.set(i_id,
                            {...state.Group2.Items.get(i_id),
                              size:new_size, shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                    
                  toggle_button:undefined,
                  set_mode:undefined,
                  set_entity:(new_entity:Models.Group2, callback?:()=>void, force_update_count_increment?:boolean) => {
                    let state = self.state()
                    state.Group2 != "loading" &&
                    self.setState({...self.state(),
                      dirty_Group2:state.dirty_Group2.set(i_id, new_entity),
                      update_count:force_update_count_increment ? self.state().update_count+1 : state.update_count,
                      Group2:
                        {
                          ...state.Group2,
                          Items:state.Group2.Items.set(i_id,{...state.Group2.Items.get(i_id), element:new_entity})
                        }
                    }, callback)
                  },
                  unlink: undefined,
                    delete: !Permissions.can_delete_Group2() || !HomePage_HomePage_Group2_can_delete(self) ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.delete_Group2(i.element).then(() =>
                      load_relation_HomePage_HomePage_Group2(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          {Permissions.can_create_Group2() && Permissions.can_create_HomePage_Group2() && HomePage_HomePage_Group2_can_create(self) ? render_new_HomePage_HomePage_Group2(self) : null}
          
        </div>)
    }
    
    </div>
}



export function render_relations_HomePage(self:HomePageContext) {
  return <div className="relations">
      { render_HomePage_HomePage_Group1(self, "default") }
      { render_HomePage_HomePage_Group2(self, "default") }
      
    </div>
}



export function render_new_HomePage_HomePage_Group1(self:HomePageContext) {
    let state = self.state()
    return  self.props.mode == "edit" ?
      <div className="button__actions">
        <div className="new-group1">
              <button 
                      className="new-group1 button button--new"
                      onClick={() =>
                          Api.create_Group1().then(e => {
                              Api.update_Group1(
                                ({ ...e, Letter:"A", RichText:null, Pic:"", IsRad:false, Name:"", Time:Moment(), Date:Moment(), Url:"", Int:0, String:"", Double:0.0, DateTime:Moment(), Tel:"", File:"", Email:"" } as Models.Group1)).then(() =>
                                load_relation_HomePage_HomePage_Group1(self, true, () =>
                                    self.setState({...self.state(), add_step_Group1:"closed"})
                                  )
                                )
                          })
                      }>
                  {i18next.t('Create new Group1')}
              </button>
            </div>
        </div>
      :
      null
    }
  
export function render_new_HomePage_HomePage_Group2(self:HomePageContext) {
    let state = self.state()
    return  self.props.mode == "edit" ?
      <div className="button__actions">
        <div className="new-group2">
              <button 
                      className="new-group2 button button--new"
                      onClick={() =>
                          Api.create_Group2().then(e => {
                              Api.update_Group2(
                                ({ ...e, Name:"" } as Models.Group2)).then(() =>
                                load_relation_HomePage_HomePage_Group2(self, true, () =>
                                    self.setState({...self.state(), add_step_Group2:"closed"})
                                  )
                                )
                          })
                      }>
                  {i18next.t('Create new Group2')}
              </button>
            </div>
        </div>
      :
      null
    }
  

export function render_saving_animations_HomePage(self:HomePageContext) {
  return self.state().dirty_Group1.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/> : 
    self.state().dirty_Group2.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/>
    : <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"cornflowerblue"}} className="saved"/>
}

export type HomePageContext = {state:()=>HomePageState, props:Utils.EntityComponentProps<Models.HomePage>, setState:(new_state:HomePageState, callback?:()=>void) => void}

export type HomePageState = {
    update_count:number
    add_step_Group1:"closed"|"open"|"saving",
      dirty_Group1:Immutable.Map<number,Models.Group1>,
      Group1:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.Group1>>|"loading"
  add_step_Group2:"closed"|"open"|"saving",
      dirty_Group2:Immutable.Map<number,Models.Group2>,
      Group2:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.Group2>>|"loading"
  }
export class HomePageComponent extends React.Component<Utils.EntityComponentProps<Models.HomePage>, HomePageState> {
  constructor(props:Utils.EntityComponentProps<Models.HomePage>, context:any) {
    super(props, context)
    this.state = { update_count:0,add_step_Group1:"closed", dirty_Group1:Immutable.Map<number,Models.Group1>(), Group1:"loading", add_step_Group2:"closed", dirty_Group2:Immutable.Map<number,Models.Group2>(), Group2:"loading" }
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
      if (this.state.dirty_Group1.count() > 0) {
         let first = this.state.dirty_Group1.first()
         this.setState({...this.state, dirty_Group1: this.state.dirty_Group1.remove(first.Id)}, () =>
           Api.update_Group1(first)
         )
       } else if (this.state.dirty_Group2.count() > 0) {
         let first = this.state.dirty_Group2.first()
         this.setState({...this.state, dirty_Group2: this.state.dirty_Group2.remove(first.Id)}, () =>
           Api.update_Group2(first)
         )
       }

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
  let can_edit = Utils.any_of([Permissions.can_edit_HomePage, Permissions.can_edit_HomePage_Group1, Permissions.can_edit_HomePage_Group2, Permissions.can_edit_Group1, Permissions.can_edit_Group2])
  return Utils.scene_to_page<Models.HomePage>(can_edit, HomePage, Api.get_HomePage(id), Api.update_HomePage, "HomePage", "HomePage", `/HomePages/${id}`)
}

export let HomePage_to = (id:number, slug:string, target_element_id:string, ) => {
  Utils.render_page_manager(slug, target_element_id,
    HomePage_to_page(id),
    
  )
  
}
