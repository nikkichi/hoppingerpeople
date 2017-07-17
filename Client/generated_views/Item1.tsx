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
import * as HomePageViews from './HomePage'
import * as Group1Views from './Group1'


export function Item1_Group1_Item1_can_create(self:Item1Context) {
  let state = self.state()
  return state.Group1 == "loading" ? false : state.Group1.CanCreate
}
export function Item1_Group1_Item1_can_delete(self:Item1Context) {
  let state = self.state()
  return state.Group1 == "loading" ? false : state.Group1.CanDelete
}
export function Item1_Group1_Item1_page_index(self:Item1Context) {
  let state = self.state()
  return state.Group1 == "loading" ? 0 : state.Group1.PageIndex
}
export function Item1_Group1_Item1_page_size(self:Item1Context) {
  let state = self.state()
  return state.Group1 == "loading" ? 25 : state.Group1.PageSize
}
export function Item1_Group1_Item1_search_query(self:Item1Context) {
  let state = self.state()
  return state.Group1 == "loading" ? null : state.Group1.SearchQuery
}
export function Item1_Group1_Item1_num_pages(self:Item1Context) {
  let state = self.state()
  return state.Group1 == "loading" ? 1 : state.Group1.NumPages
}

export function load_relation_Item1_Group1_Item1(self:Item1Context, force_first_page:boolean, callback?:()=>void) {
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
      Api.get_Item1_Group1_Item1S(self.props.entity, Item1_Group1_Item1_page_index(self), Item1_Group1_Item1_page_size(self), Item1_Group1_Item1_search_query(self)).then(Group1S =>
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

export function load_relations_Item1(self, callback?:()=>void) {
  load_relation_Item1_Group1_Item1(self, false, 
        () => callback && callback())
}

export function set_size_Item1(self:Item1Context, new_size:Utils.EntitySize) {
  self.props.set_size(new_size, () => {
    if (new_size == "fullscreen")
      self.props.push(Item1_to_page(self.props.entity.Id))
  })
}

export function render_Item1_Name_editable_minimised(self:Item1Context) : JSX.Element {
  if (!Permissions.can_edit_Item1()) return render_Item1_Name_minimised(self)
  else
    return !Permissions.can_view_Item1_Name() ? <div /> :
          <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item1:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item1() && Permissions.can_edit_Item1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}

export function render_Item1_Description_editable_minimised(self:Item1Context) : JSX.Element {
  if (!Permissions.can_edit_Item1()) return render_Item1_Description_minimised(self)
  else
    return !Permissions.can_view_Item1_Description() ? <div /> :
          null
}


export function render_Item1_Name_editable_maximised(self:Item1Context) : JSX.Element {
  if (!Permissions.can_edit_Item1()) return render_Item1_Name_maximised(self)
  else
    return !Permissions.can_view_Item1_Name() ? <div /> :
          <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item1:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item1() && Permissions.can_edit_Item1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}

export function render_Item1_Description_editable_maximised(self:Item1Context) : JSX.Element {
  if (!Permissions.can_edit_Item1()) return render_Item1_Description_maximised(self)
  else
    return !Permissions.can_view_Item1_Description() ? <div /> :
          <div className="model__attribute description">
  <label className="attribute-label attribute-label-description">{i18next.t(`Item1:Description`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Item1() && Permissions.can_edit_Item1_Description(),
        self.props.mode,
        () => self.props.entity.Description,
        v => self.props.set_entity({...self.props.entity, Description:v})) } 
  </div>
</div>
}


export function render_editable_attributes_minimised_Item1(self:Item1Context) {
  let attributes = (<div>
      {render_Item1_Name_editable_minimised(self)}
    </div>)
  return attributes
}

export function render_editable_attributes_maximised_Item1(self:Item1Context) {
    let state = self.state()
    let attributes = (<div>
        {render_Item1_Name_editable_maximised(self)}
        {render_Item1_Description_editable_maximised(self)}
        
        
        
      </div>)
    return attributes
  }

export function render_breadcrumb_Item1(self:Item1Context) {
  return <div className="breadcrumb-item1">Item1</div>
}

export function render_menu_Item1(self:Item1Context) {
  let state = self.state()
  return <div className="menu">
        <img className="logo" src={"/images/logo.png"} alt="Logo"/>
        <div className="pages">
          {!Permissions.can_view_HomePage() ? null :
              <div className={`menu_entry page_link`}>
                <a onClick={() => 
                  Api.get_HomePages(0, 1).then(e =>
                    e.Items.length > 0 && self.props.set_page(HomePageViews.HomePage_to_page(e.Items[0].Item.Id))
                  )
                }>
                  {i18next.t('HomePage')}
                </a>
              </div>
            }
          <div className="menu_entries">
          
            {!Permissions.can_view_Group1() ? null :
                  <div className={`menu_entry${self.props.shown_relation == "HomePage_Group1" ? " active" : ""}`}>
                    <a onClick={() =>
                        {
                            Api.get_HomePages(0, 1).then(e =>
                              e.Items.length > 0 && self.props.set_page(HomePageViews.HomePage_to_page(e.Items[0].Item.Id),
                                () => self.props.set_shown_relation("HomePage_Group1"))
                            )
                        }
                      }>
                      {i18next.t('HomePage_Group1S')}
                    </a>
                  </div>
                }
        {!Permissions.can_view_Group2() ? null :
                  <div className={`menu_entry${self.props.shown_relation == "HomePage_Group2" ? " active" : ""}`}>
                    <a onClick={() =>
                        {
                            Api.get_HomePages(0, 1).then(e =>
                              e.Items.length > 0 && self.props.set_page(HomePageViews.HomePage_to_page(e.Items[0].Item.Id),
                                () => self.props.set_shown_relation("HomePage_Group2"))
                            )
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

export function render_local_menu_Item1(self:Item1Context) {
  let state = self.state()
  return <div className="local-menu">
          <div className="local_menu_entries">
            <div className={`local_menu_entry${self.props.shown_relation == "none" ? " local_menu_entry--active" : ""}`}>
              <a onClick={() =>
                  self.props.set_shown_relation("none")
              }>
                {i18next.t('About this Item1')}
              </a>
            </div>
          
            {!Permissions.can_view_Group1() ? null :
                  <div key={"Group1_Item1"} className={`local_menu_entry${self.props.shown_relation == "Group1_Item1" ? " local_menu_entry--active" : ""}`}>
                    <a onClick={() =>
                      load_relation_Item1_Group1_Item1(self,
                        false,
                        
                        () => self.props.set_shown_relation("Group1_Item1"))
                    }>
                      {i18next.t('Group1_Item1S_inverted')}
                    </a>
                  </div>
                }  
          </div>
        </div>
}

export function render_controls_Item1(self:Item1Context) {
  return <div className="control">
    {self.props.allow_maximisation && self.props.set_size ? <a className={`"item1 button button--toggle ${self.props.size != 'preview' ? 'button--toggle--open' : ''}`}
          onClick={() => {
            set_size_Item1(self, self.props.size == "preview" ? "large" : "preview")}
          }>
      </a> : null}
    {Permissions.can_delete_Item1() && self.props.size == "fullscreen" ? <a className="button button--delete"
      onClick={() => confirm(i18next.t('Are you sure?')) &&
        Api.delete_Item1(self.props.entity).then(() => self.props.force_reload(() => self.props.pop()))
      }>
    </a> : null}
    {self.props.size == "fullscreen" && self.props.pages_count > 0 ? <a className="item1 button button--close"
        onClick={() => self.props.pop()}>
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

export function render_content_Item1(self:Item1Context) {
  let actions:Array<()=>void> =
    [
      self.props.allow_maximisation && self.props.set_size && self.props.size == "preview" ?
        () => set_size_Item1(self, self.props.size == "preview" ? "large" : "preview")
      :
        null,
    ].filter(a => a != null)
  let content =
    Permissions.can_view_Item1() ?
      self.props.size == "preview" ?
        render_preview_Item1(self)
      : self.props.size == "large" ?
        render_large_Item1(self)
      : self.props.size == "fullscreen" ?
        render_large_Item1(self)
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

export function render_Item1_Name_minimised(self:Item1Context) : JSX.Element {
      return !Permissions.can_view_Item1_Name() ? null : <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item1:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item1() && Permissions.can_edit_Item1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
      
}
        export function render_Item1_Description_minimised(self:Item1Context) : JSX.Element {
      return null
}

export function render_Item1_Name_maximised(self:Item1Context) : JSX.Element {
        return !Permissions.can_view_Item1_Name() ? null : <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item1:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item1() && Permissions.can_edit_Item1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}
        export function render_Item1_Description_maximised(self:Item1Context) : JSX.Element {
        return !Permissions.can_view_Item1_Description() ? null : <div className="model__attribute description">
  <label className="attribute-label attribute-label-description">{i18next.t(`Item1:Description`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Item1() && Permissions.can_edit_Item1_Description(),
        self.props.mode,
        () => self.props.entity.Description,
        v => self.props.set_entity({...self.props.entity, Description:v})) } 
  </div>
</div>
}

export function render_preview_Item1(self:Item1Context) {
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Item1())
    attributes = (<div className="model__attributes">
      { render_Item1_Name_minimised(self) }
        { render_Item1_Description_minimised(self) }
    </div>)
  else
    attributes = render_editable_attributes_minimised_Item1(self)
  return (<div className="block">
      {attributes}
    </div>)
}

export function render_large_Item1(self:Item1Context) {
  let state = self.state()
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Item1())
    attributes = (<div className="model__attributes">
      { render_Item1_Name_maximised(self) }
        { render_Item1_Description_maximised(self) }
        
    </div>)
  else
    attributes = render_editable_attributes_maximised_Item1(self)
  return (<div className="block">
      {self.props.nesting_depth == 0 && self.props.shown_relation != "all" && self.props.shown_relation != "none" ? null : attributes}
      {render_relations_Item1(self)}
    </div>)
}


export function render_Item1_Group1_Item1(self:Item1Context, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "Group1_Item1") || !Permissions.can_view_Group1())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("item1_group1_item1",
   "Item1",
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
      Item1_Group1_Item1_page_index(self),
      Item1_Group1_Item1_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.Group1 != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            Group1: {
              ...state.Group1,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_Item1_Group1_Item1(self, false, ))
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
                  mode:self.props.mode == "edit" && (Permissions.can_edit_Group1_Item1()
                        || Permissions.can_create_Group1_Item1()
                        || Permissions.can_delete_Group1_Item1()) ?
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
                  delete: undefined,
                  unlink: !Permissions.can_delete_Group1_Item1() ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.unlink_Group1_Group1_Item1S(i.element, self.props.entity).then(() =>
                      load_relation_Item1_Group1_Item1(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          {Permissions.can_create_Group1() && Permissions.can_create_Group1_Item1() && Item1_Group1_Item1_can_create(self) ? render_new_Item1_Group1_Item1(self) : null}
          {Permissions.can_create_Group1_Item1() ? render_add_existing_Item1_Group1_Item1(self) : null}
        </div>)
    }
    
    </div>
}



export function render_relations_Item1(self:Item1Context) {
  return <div className="relations">
      { render_Item1_Group1_Item1(self, "default") }
      
    </div>
}

export function render_add_existing_Item1_Group1_Item1(self:Item1Context) {
    
    let state = self.state()
    return self.props.mode == "edit" ?
      <div className="button__actions">
        {
          state.add_step_Group1 != "open" ?
            <Buttons.Add disabled={state.Group1 == "loading" ? true : state.Group1.TotalCount >= 1} 
              onClick={() =>
                self.setState({...self.state(), add_step_Group1:"open"}) }
                  target_name={"Group1"} />
          :
          React.createElement(List.AddToRelation,
            {
              relation_name:"item1_group1_item1",
              source_name:"Item1",
              target_name:"Group1",
              target_plural:"Group1S",
              page_size:25,
              render_target:(i,i_id) =>
                <div key={i_id} className="group__item">
                  <a className="group__button button button--existing"
                    onClick={() =>
                        self.setState({...self.state(), add_step_Group1:"saving"}, () =>
                          Api.link_Item1_Group1_Item1S(self.props.entity, i).then(() =>
                            self.setState({...self.state(), add_step_Group1:"closed"}, () =>
                              load_relation_Item1_Group1_Item1(self, false, ))))
                      }>
                      Add existing
                  </a>
                  <div className="group__title">
                    {
                      Group1Views.Group1({
                        ...self.props,
                        entity:i,
                        nesting_depth:self.props.nesting_depth+1,
                        size:"preview",
                        mode:"view",
                        is_editable:false,
                        nested_entity_names: self.props.nested_entity_names.push("Group1"),
                        set_size:undefined,
                        toggle_button:undefined,
                        set_mode:undefined,
                        set_entity:(new_entity:Models.Group1, callback?:()=>void) => {},
                        unlink: undefined,
                        delete: undefined
                      })
                    }
                  </div>
                </div>,
              cancel:() => self.setState({...self.state(), add_step_Group1:"closed"}),
              get_items:[
                { name: "Group1", get: async(i,s) => Api.get_unlinked_Item1_Group1_Item1S(self.props.entity, i, s) },
              ]
            })
        }
      </div>
    :
      null
    }
  

export function render_new_Item1_Group1_Item1(self:Item1Context) {
    let state = self.state()
    return  self.props.mode == "edit" ?
      <div className="button__actions">
        <div className="new-group1">
              <button disabled={state.Group1 == "loading" ? true : state.Group1.TotalCount >= 1} 
                      className="new-group1 button button--new"
                      onClick={() =>
                          Api.create_linked_Item1_Group1_Item1S_Group1(self.props.entity).then(e => {
                              e.length > 0 &&
                              Api.update_Group1(
                                ({ ...e[0], Letter:"A", RichText:null, Pic:"", IsRad:false, Name:"", Time:Moment(), Date:Moment(), Url:"", Int:0, String:"", Double:0.0, DateTime:Moment(), Tel:"", File:"", Email:"" } as Models.Group1)).then(() =>
                                load_relation_Item1_Group1_Item1(self, true, () =>
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
  

export function render_saving_animations_Item1(self:Item1Context) {
  return self.state().dirty_Group1.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/>
    : <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"cornflowerblue"}} className="saved"/>
}

export type Item1Context = {state:()=>Item1State, props:Utils.EntityComponentProps<Models.Item1>, setState:(new_state:Item1State, callback?:()=>void) => void}

export type Item1State = {
    update_count:number
    add_step_Group1:"closed"|"open"|"saving",
      dirty_Group1:Immutable.Map<number,Models.Group1>,
      Group1:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.Group1>>|"loading"
  }
export class Item1Component extends React.Component<Utils.EntityComponentProps<Models.Item1>, Item1State> {
  constructor(props:Utils.EntityComponentProps<Models.Item1>, context:any) {
    super(props, context)
    this.state = { update_count:0,add_step_Group1:"closed", dirty_Group1:Immutable.Map<number,Models.Group1>(), Group1:"loading" }
  }

  get_self() {
    return {state:() => this.state, props:this.props, setState:(ns,c)=>this.setState(ns,c)}
  }

  componentWillReceiveProps(new_props:Utils.EntityComponentProps<Models.Item1>) {
    if (new_props.size == "breadcrumb") return
    let current_logged_in_entity =  null
    let new_logged_in_entity =  null
    if (new_props.mode != this.props.mode || (new_props.size != this.props.size && (new_props.size == "large" || new_props.size == "fullscreen")) ||
        new_props.logic_frame != this.props.logic_frame ||
        (current_logged_in_entity && !new_logged_in_entity) ||
        (!current_logged_in_entity && new_logged_in_entity) ||
        (current_logged_in_entity && new_logged_in_entity && current_logged_in_entity.Id != new_logged_in_entity.Id)) {
      load_relations_Item1(this.get_self(),  )
    }
  }

  thread:number = null
  componentWillMount() {
    if (this.props.size == "breadcrumb") return
    if (this.props.size != "preview") {
      
      load_relations_Item1(this.get_self(), )
    }

    this.thread = setInterval(() => {
      if (this.state.dirty_Group1.count() > 0) {
         let first = this.state.dirty_Group1.first()
         this.setState({...this.state, dirty_Group1: this.state.dirty_Group1.remove(first.Id)}, () =>
           Api.update_Group1(first)
         )
       }

    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.thread)
  }

  render() {
    if (this.props.size == "breadcrumb") {
      return Permissions.can_view_Item1() ?
              render_breadcrumb_Item1(this.get_self())
              : null
    }

    return <div id={`Item1_${this.props.entity.Id.toString()}_${this.state.update_count}`} className={`model item1`}>
      { render_saving_animations_Item1(this.get_self()) }
      { this.props.nesting_depth == 0 ? render_menu_Item1(this.get_self()) : null }
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
        { this.props.nesting_depth == 0 ? render_local_menu_Item1(this.get_self()) : null }
        { render_controls_Item1(this.get_self()) }
        { render_content_Item1(this.get_self()) }
      </div>
    </div>
  }
}

export let Item1 = (props:Utils.EntityComponentProps<Models.Item1>) : JSX.Element =>
  <Item1Component {...props} />

export let Item1_to_page = (id:number) => {
  let can_edit = Utils.any_of([Permissions.can_edit_Item1, Permissions.can_edit_Group1_Item1, Permissions.can_edit_Group1])
  return Utils.scene_to_page<Models.Item1>(can_edit, Item1, Api.get_Item1(id), Api.update_Item1, "Item1", "Item1", `/Item1S/${id}`)
}

export let Item1_to = (id:number, slug:string, target_element_id:string, ) => {
  Utils.render_page_manager(slug, target_element_id,
    Item1_to_page(id),
    
  )
  
}
