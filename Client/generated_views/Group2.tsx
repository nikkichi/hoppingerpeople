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
import * as Item2AViews from './Item2A'
import * as Item2BViews from './Item2B'


export function Group2_HomePage_Group2_can_create(self:Group2Context) {
  let state = self.state()
  return state.HomePage == "loading" ? false : state.HomePage.CanCreate
}
export function Group2_Group2_Item2A_can_create(self:Group2Context) {
  let state = self.state()
  return state.Item2A == "loading" ? false : state.Item2A.CanCreate
}
export function Group2_Group2_Item2B_can_create(self:Group2Context) {
  let state = self.state()
  return state.Item2B == "loading" ? false : state.Item2B.CanCreate
}
export function Group2_HomePage_Group2_can_delete(self:Group2Context) {
  let state = self.state()
  return state.HomePage == "loading" ? false : state.HomePage.CanDelete
}
export function Group2_Group2_Item2A_can_delete(self:Group2Context) {
  let state = self.state()
  return state.Item2A == "loading" ? false : state.Item2A.CanDelete
}
export function Group2_Group2_Item2B_can_delete(self:Group2Context) {
  let state = self.state()
  return state.Item2B == "loading" ? false : state.Item2B.CanDelete
}
export function Group2_HomePage_Group2_page_index(self:Group2Context) {
  let state = self.state()
  return state.HomePage == "loading" ? 0 : state.HomePage.PageIndex
}
export function Group2_Group2_Item2A_page_index(self:Group2Context) {
  let state = self.state()
  return state.Item2A == "loading" ? 0 : state.Item2A.PageIndex
}
export function Group2_Group2_Item2B_page_index(self:Group2Context) {
  let state = self.state()
  return state.Item2B == "loading" ? 0 : state.Item2B.PageIndex
}
export function Group2_HomePage_Group2_page_size(self:Group2Context) {
  let state = self.state()
  return state.HomePage == "loading" ? 25 : state.HomePage.PageSize
}
export function Group2_Group2_Item2A_page_size(self:Group2Context) {
  let state = self.state()
  return state.Item2A == "loading" ? 25 : state.Item2A.PageSize
}
export function Group2_Group2_Item2B_page_size(self:Group2Context) {
  let state = self.state()
  return state.Item2B == "loading" ? 25 : state.Item2B.PageSize
}
export function Group2_HomePage_Group2_search_query(self:Group2Context) {
  let state = self.state()
  return state.HomePage == "loading" ? null : state.HomePage.SearchQuery
}
export function Group2_Group2_Item2A_search_query(self:Group2Context) {
  let state = self.state()
  return state.Item2A == "loading" ? null : state.Item2A.SearchQuery
}
export function Group2_Group2_Item2B_search_query(self:Group2Context) {
  let state = self.state()
  return state.Item2B == "loading" ? null : state.Item2B.SearchQuery
}
export function Group2_HomePage_Group2_num_pages(self:Group2Context) {
  let state = self.state()
  return state.HomePage == "loading" ? 1 : state.HomePage.NumPages
}
export function Group2_Group2_Item2A_num_pages(self:Group2Context) {
  let state = self.state()
  return state.Item2A == "loading" ? 1 : state.Item2A.NumPages
}
export function Group2_Group2_Item2B_num_pages(self:Group2Context) {
  let state = self.state()
  return state.Item2B == "loading" ? 1 : state.Item2B.NumPages
}

export function load_relation_Group2_HomePage_Group2(self:Group2Context, force_first_page:boolean, callback?:()=>void) {
  let state = self.state()
  let prelude = force_first_page && state.HomePage != "loading" ?
    (c:() => void) => state.HomePage != "loading" && self.setState({
      ...state,
      HomePage: {...state.HomePage, PageIndex:0 }
    }, c)
    :
    (c:() => void) => c()
  Permissions.can_view_HomePage() ?
    prelude(() =>
      Api.get_Group2_HomePage_Group2S(self.props.entity, Group2_HomePage_Group2_page_index(self), Group2_HomePage_Group2_page_size(self), Group2_HomePage_Group2_search_query(self)).then(HomePages =>
        self.setState({...self.state(), update_count:self.state().update_count+1,
            HomePage:Utils.raw_page_to_paginated_items<Models.HomePage, Utils.EntityAndSize<Models.HomePage> & { shown_relation:string }>((i, i_just_created) => {
              let state = self.state()
              return {
                element:i,
                size: state.HomePage != "loading" ?
                  (state.HomePage.Items.has(i.Id) ?
                    state.HomePage.Items.get(i.Id).size
                  :
                    "preview" /* i_just_created ? "large" : "preview" */)
                  :
                    "preview" /* i_just_created ? "large" : "preview" */,
                shown_relation:"all"}}, HomePages)
            }, callback)))
    :
      prelude(() => callback && callback())
}

export function load_relation_Group2_Group2_Item2A(self:Group2Context, force_first_page:boolean, callback?:()=>void) {
  let state = self.state()
  let prelude = force_first_page && state.Item2A != "loading" ?
    (c:() => void) => state.Item2A != "loading" && self.setState({
      ...state,
      Item2A: {...state.Item2A, PageIndex:0 }
    }, c)
    :
    (c:() => void) => c()
  Permissions.can_view_Item2A() ?
    prelude(() =>
      Api.get_Group2_Group2_Item2AS(self.props.entity, Group2_Group2_Item2A_page_index(self), Group2_Group2_Item2A_page_size(self), Group2_Group2_Item2A_search_query(self)).then(Item2AS =>
        self.setState({...self.state(), update_count:self.state().update_count+1,
            Item2A:Utils.raw_page_to_paginated_items<Models.Item2A, Utils.EntityAndSize<Models.Item2A> & { shown_relation:string }>((i, i_just_created) => {
              let state = self.state()
              return {
                element:i,
                size: state.Item2A != "loading" ?
                  (state.Item2A.Items.has(i.Id) ?
                    state.Item2A.Items.get(i.Id).size
                  :
                    "preview" /* i_just_created ? "large" : "preview" */)
                  :
                    "preview" /* i_just_created ? "large" : "preview" */,
                shown_relation:"all"}}, Item2AS)
            }, callback)))
    :
      prelude(() => callback && callback())
}

export function load_relation_Group2_Group2_Item2B(self:Group2Context, force_first_page:boolean, callback?:()=>void) {
  let state = self.state()
  let prelude = force_first_page && state.Item2B != "loading" ?
    (c:() => void) => state.Item2B != "loading" && self.setState({
      ...state,
      Item2B: {...state.Item2B, PageIndex:0 }
    }, c)
    :
    (c:() => void) => c()
  Permissions.can_view_Item2B() ?
    prelude(() =>
      Api.get_Group2_Group2_Item2BS(self.props.entity, Group2_Group2_Item2B_page_index(self), Group2_Group2_Item2B_page_size(self), Group2_Group2_Item2B_search_query(self)).then(Item2BS =>
        self.setState({...self.state(), update_count:self.state().update_count+1,
            Item2B:Utils.raw_page_to_paginated_items<Models.Item2B, Utils.EntityAndSize<Models.Item2B> & { shown_relation:string }>((i, i_just_created) => {
              let state = self.state()
              return {
                element:i,
                size: state.Item2B != "loading" ?
                  (state.Item2B.Items.has(i.Id) ?
                    state.Item2B.Items.get(i.Id).size
                  :
                    "preview" /* i_just_created ? "large" : "preview" */)
                  :
                    "preview" /* i_just_created ? "large" : "preview" */,
                shown_relation:"all"}}, Item2BS)
            }, callback)))
    :
      prelude(() => callback && callback())
}

export function load_relations_Group2(self, callback?:()=>void) {
  load_relation_Group2_Group2_Item2B(self, false, 
        () => load_relation_Group2_Group2_Item2A(self, false, 
        () => load_relation_Group2_HomePage_Group2(self, false, 
        () => callback && callback())))
}

export function set_size_Group2(self:Group2Context, new_size:Utils.EntitySize) {
  self.props.set_size(new_size, () => {
    if (new_size == "fullscreen")
      self.props.push(Group2_to_page(self.props.entity.Id))
  })
}

export function render_Group2_Name_editable_minimised(self:Group2Context) : JSX.Element {
  if (!Permissions.can_edit_Group2()) return render_Group2_Name_minimised(self)
  else
    return !Permissions.can_view_Group2_Name() ? <div /> :
          <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Group2:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group2() && Permissions.can_edit_Group2_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}


export function render_Group2_Name_editable_maximised(self:Group2Context) : JSX.Element {
  if (!Permissions.can_edit_Group2()) return render_Group2_Name_maximised(self)
  else
    return !Permissions.can_view_Group2_Name() ? <div /> :
          <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Group2:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group2() && Permissions.can_edit_Group2_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}


export function render_editable_attributes_minimised_Group2(self:Group2Context) {
  let attributes = (<div>
      {render_Group2_Name_editable_minimised(self)}
    </div>)
  return attributes
}

export function render_editable_attributes_maximised_Group2(self:Group2Context) {
    let state = self.state()
    let attributes = (<div>
        {render_Group2_Name_editable_maximised(self)}
        
        
        
      </div>)
    return attributes
  }

export function render_breadcrumb_Group2(self:Group2Context) {
  return <div className="breadcrumb-group2">Group2</div>
}

export function render_menu_Group2(self:Group2Context) {
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
                  <div className={`menu_entry active`}>
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

export function render_local_menu_Group2(self:Group2Context) {
  let state = self.state()
  return <div className="local-menu">
          <div className="local_menu_entries">
            <div className={`local_menu_entry${self.props.shown_relation == "none" ? " local_menu_entry--active" : ""}`}>
              <a onClick={() =>
                  self.props.set_shown_relation("none")
              }>
                {i18next.t('About this Group2')}
              </a>
            </div>
          
            {!Permissions.can_view_Item2A() ? null :
                  <div key={"Group2_Item2A"} className={`local_menu_entry${self.props.shown_relation == "Group2_Item2A" ? " local_menu_entry--active" : ""}`}>
                    <a onClick={() =>
                      load_relation_Group2_Group2_Item2A(self,
                        false,
                        
                        () => self.props.set_shown_relation("Group2_Item2A"))
                    }>
                      {i18next.t('Group2_Item2AS')}
                    </a>
                  </div>
                }
        {!Permissions.can_view_Item2B() ? null :
                  <div key={"Group2_Item2B"} className={`local_menu_entry${self.props.shown_relation == "Group2_Item2B" ? " local_menu_entry--active" : ""}`}>
                    <a onClick={() =>
                      load_relation_Group2_Group2_Item2B(self,
                        false,
                        
                        () => self.props.set_shown_relation("Group2_Item2B"))
                    }>
                      {i18next.t('Group2_Item2BS')}
                    </a>
                  </div>
                }  
          </div>
        </div>
}

export function render_controls_Group2(self:Group2Context) {
  return <div className="control">
    {self.props.allow_maximisation && self.props.set_size ? <a className={`"group2 button button--toggle ${self.props.size != 'preview' ? 'button--toggle--open' : ''}`}
          onClick={() => {
            set_size_Group2(self, self.props.size == "preview" ? "large" : "preview")}
          }>
      </a> : null}
    {Permissions.can_delete_Group2() && self.props.size == "fullscreen" ? <a className="button button--delete"
      onClick={() => confirm(i18next.t('Are you sure?')) &&
        Api.delete_Group2(self.props.entity).then(() => self.props.force_reload(() => self.props.pop()))
      }>
    </a> : null}
    {self.props.size == "fullscreen" && self.props.pages_count > 0 ? <a className="group2 button button--close"
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

export function render_content_Group2(self:Group2Context) {
  let actions:Array<()=>void> =
    [
      self.props.allow_maximisation && self.props.set_size && self.props.size == "preview" ?
        () => set_size_Group2(self, self.props.size == "preview" ? "large" : "preview")
      :
        null,
    ].filter(a => a != null)
  let content =
    Permissions.can_view_Group2() ?
      self.props.size == "preview" ?
        render_preview_Group2(self)
      : self.props.size == "large" ?
        render_large_Group2(self)
      : self.props.size == "fullscreen" ?
        render_large_Group2(self)
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

export function render_Group2_Name_minimised(self:Group2Context) : JSX.Element {
      return !Permissions.can_view_Group2_Name() ? null : <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Group2:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group2() && Permissions.can_edit_Group2_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
      
}

export function render_Group2_Name_maximised(self:Group2Context) : JSX.Element {
        return !Permissions.can_view_Group2_Name() ? null : <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Group2:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group2() && Permissions.can_edit_Group2_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}

export function render_preview_Group2(self:Group2Context) {
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Group2())
    attributes = (<div className="model__attributes">
      { render_Group2_Name_minimised(self) }
    </div>)
  else
    attributes = render_editable_attributes_minimised_Group2(self)
  return (<div className="block">
      {attributes}
    </div>)
}

export function render_large_Group2(self:Group2Context) {
  let state = self.state()
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Group2())
    attributes = (<div className="model__attributes">
      { render_Group2_Name_maximised(self) }
        
    </div>)
  else
    attributes = render_editable_attributes_maximised_Group2(self)
  return (<div className="block">
      {self.props.nesting_depth == 0 && self.props.shown_relation != "all" && self.props.shown_relation != "none" ? null : attributes}
      {render_relations_Group2(self)}
    </div>)
}


export function render_Group2_HomePage_Group2(self:Group2Context, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "HomePage_Group2") || !Permissions.can_view_HomePage())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("group2_homepage_group2",
   "Group2",
   "HomePage",
   "HomePages",
   self.props.nesting_depth > 0,
   false,
   false,
   false)
  (
      state.HomePage != "loading" ?
        state.HomePage.IdsInServerOrder.map(id => state.HomePage != "loading" && state.HomePage.Items.get(id)):
        state.HomePage,
      Group2_HomePage_Group2_page_index(self),
      Group2_HomePage_Group2_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.HomePage != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            HomePage: {
              ...state.HomePage,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_Group2_HomePage_Group2(self, false, ))
        },
      (i,_) => {
          let i_id = i.element.Id
          let state = self.state()
          return <div key={i_id}
            className={`model-nested__item ${i.size != "preview" ? "model-nested__item--open" : ""}
                        ${state.HomePage != "loading" && state.HomePage.JustCreated.has(i_id) && state.HomePage.JustCreated.get(i_id) ? "newly-created" : ""}` }
          
            >
            <div key={i_id}>
              {
                HomePageViews.HomePage({
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
                  is_editable:state.HomePage != "loading" && state.HomePage.Editable.get(i_id),
                  shown_relation:i.shown_relation,
                  set_shown_relation:(new_shown_relation:string, callback) => {
                    let state = self.state()
                    state.HomePage != "loading" &&
                    self.setState({...self.state(),
                      HomePage:
                        {
                          ...state.HomePage,
                          Items:state.HomePage.Items.set(i_id,{...state.HomePage.Items.get(i_id), shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                  nested_entity_names: self.props.nested_entity_names.push("HomePage"),
                  
                  set_size:(new_size:Utils.EntitySize, callback) => {
                    let new_shown_relation = new_size == "large" ? "all" : i.shown_relation
                    let state = self.state()
                    state.HomePage != "loading" &&
                    self.setState({...self.state(),
                      HomePage:
                        {
                          ...state.HomePage,
                          Items:state.HomePage.Items.set(i_id,
                            {...state.HomePage.Items.get(i_id),
                              size:new_size, shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                    
                  toggle_button:undefined,
                  set_mode:undefined,
                  set_entity:(new_entity:Models.HomePage, callback?:()=>void, force_update_count_increment?:boolean) => {
                    let state = self.state()
                    state.HomePage != "loading" &&
                    self.setState({...self.state(),
                      dirty_HomePage:state.dirty_HomePage.set(i_id, new_entity),
                      update_count:force_update_count_increment ? self.state().update_count+1 : state.update_count,
                      HomePage:
                        {
                          ...state.HomePage,
                          Items:state.HomePage.Items.set(i_id,{...state.HomePage.Items.get(i_id), element:new_entity})
                        }
                    }, callback)
                  },
                  unlink: undefined,
                    delete: !Permissions.can_delete_HomePage() || !Group2_HomePage_Group2_can_delete(self) ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.delete_HomePage(i.element).then(() =>
                      load_relation_Group2_HomePage_Group2(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          
          
        </div>)
    }
    
    </div>
}


export function render_Group2_Group2_Item2A(self:Group2Context, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "Group2_Item2A") || !Permissions.can_view_Item2A())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("group2_group2_item2a",
   "Group2",
   "Item2A",
   "Item2AS",
   self.props.nesting_depth > 0,
   false,
   false,
   false)
  (
      state.Item2A != "loading" ?
        state.Item2A.IdsInServerOrder.map(id => state.Item2A != "loading" && state.Item2A.Items.get(id)):
        state.Item2A,
      Group2_Group2_Item2A_page_index(self),
      Group2_Group2_Item2A_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.Item2A != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            Item2A: {
              ...state.Item2A,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_Group2_Group2_Item2A(self, false, ))
        },
      (i,_) => {
          let i_id = i.element.Id
          let state = self.state()
          return <div key={i_id}
            className={`model-nested__item ${i.size != "preview" ? "model-nested__item--open" : ""}
                        ${state.Item2A != "loading" && state.Item2A.JustCreated.has(i_id) && state.Item2A.JustCreated.get(i_id) ? "newly-created" : ""}` }
          
            >
            <div key={i_id}>
              {
                Item2AViews.Item2A({
                  ...self.props,
                  entity:i.element,
                  inline:false,
                  nesting_depth:self.props.nesting_depth+1,
                  size: i.size,
                  allow_maximisation:true,
                  allow_fullscreen:true,
                  mode:self.props.mode == "edit" && (Permissions.can_edit_Group2_Item2A()
                        || Permissions.can_create_Group2_Item2A()
                        || Permissions.can_delete_Group2_Item2A()) ?
                    self.props.mode : "view",
                  is_editable:state.Item2A != "loading" && state.Item2A.Editable.get(i_id),
                  shown_relation:i.shown_relation,
                  set_shown_relation:(new_shown_relation:string, callback) => {
                    let state = self.state()
                    state.Item2A != "loading" &&
                    self.setState({...self.state(),
                      Item2A:
                        {
                          ...state.Item2A,
                          Items:state.Item2A.Items.set(i_id,{...state.Item2A.Items.get(i_id), shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                  nested_entity_names: self.props.nested_entity_names.push("Item2A"),
                  
                  set_size:(new_size:Utils.EntitySize, callback) => {
                    let new_shown_relation = new_size == "large" ? "all" : i.shown_relation
                    let state = self.state()
                    state.Item2A != "loading" &&
                    self.setState({...self.state(),
                      Item2A:
                        {
                          ...state.Item2A,
                          Items:state.Item2A.Items.set(i_id,
                            {...state.Item2A.Items.get(i_id),
                              size:new_size, shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                    
                  toggle_button:undefined,
                  set_mode:undefined,
                  set_entity:(new_entity:Models.Item2A, callback?:()=>void, force_update_count_increment?:boolean) => {
                    let state = self.state()
                    state.Item2A != "loading" &&
                    self.setState({...self.state(),
                      dirty_Item2A:state.dirty_Item2A.set(i_id, new_entity),
                      update_count:force_update_count_increment ? self.state().update_count+1 : state.update_count,
                      Item2A:
                        {
                          ...state.Item2A,
                          Items:state.Item2A.Items.set(i_id,{...state.Item2A.Items.get(i_id), element:new_entity})
                        }
                    }, callback)
                  },
                  delete: undefined,
                  unlink: !Permissions.can_delete_Group2_Item2A() ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.unlink_Group2_Group2_Item2AS(self.props.entity, i.element).then(() =>
                      load_relation_Group2_Group2_Item2A(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          {Permissions.can_create_Item2A() && Permissions.can_create_Group2_Item2A() && Group2_Group2_Item2A_can_create(self) ? render_new_Group2_Group2_Item2A(self) : null}
          {Permissions.can_create_Group2_Item2A() ? render_add_existing_Group2_Group2_Item2A(self) : null}
        </div>)
    }
    
    </div>
}


export function render_Group2_Group2_Item2B(self:Group2Context, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "Group2_Item2B") || !Permissions.can_view_Item2B())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("group2_group2_item2b",
   "Group2",
   "Item2B",
   "Item2BS",
   self.props.nesting_depth > 0,
   false,
   false,
   false)
  (
      state.Item2B != "loading" ?
        state.Item2B.IdsInServerOrder.map(id => state.Item2B != "loading" && state.Item2B.Items.get(id)):
        state.Item2B,
      Group2_Group2_Item2B_page_index(self),
      Group2_Group2_Item2B_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.Item2B != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            Item2B: {
              ...state.Item2B,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_Group2_Group2_Item2B(self, false, ))
        },
      (i,_) => {
          let i_id = i.element.Id
          let state = self.state()
          return <div key={i_id}
            className={`model-nested__item ${i.size != "preview" ? "model-nested__item--open" : ""}
                        ${state.Item2B != "loading" && state.Item2B.JustCreated.has(i_id) && state.Item2B.JustCreated.get(i_id) ? "newly-created" : ""}` }
          
            >
            <div key={i_id}>
              {
                Item2BViews.Item2B({
                  ...self.props,
                  entity:i.element,
                  inline:false,
                  nesting_depth:self.props.nesting_depth+1,
                  size: i.size,
                  allow_maximisation:true,
                  allow_fullscreen:true,
                  mode:self.props.mode == "edit" && (Permissions.can_edit_Group2_Item2B()
                        || Permissions.can_create_Group2_Item2B()
                        || Permissions.can_delete_Group2_Item2B()) ?
                    self.props.mode : "view",
                  is_editable:state.Item2B != "loading" && state.Item2B.Editable.get(i_id),
                  shown_relation:i.shown_relation,
                  set_shown_relation:(new_shown_relation:string, callback) => {
                    let state = self.state()
                    state.Item2B != "loading" &&
                    self.setState({...self.state(),
                      Item2B:
                        {
                          ...state.Item2B,
                          Items:state.Item2B.Items.set(i_id,{...state.Item2B.Items.get(i_id), shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                  nested_entity_names: self.props.nested_entity_names.push("Item2B"),
                  
                  set_size:(new_size:Utils.EntitySize, callback) => {
                    let new_shown_relation = new_size == "large" ? "all" : i.shown_relation
                    let state = self.state()
                    state.Item2B != "loading" &&
                    self.setState({...self.state(),
                      Item2B:
                        {
                          ...state.Item2B,
                          Items:state.Item2B.Items.set(i_id,
                            {...state.Item2B.Items.get(i_id),
                              size:new_size, shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                    
                  toggle_button:undefined,
                  set_mode:undefined,
                  set_entity:(new_entity:Models.Item2B, callback?:()=>void, force_update_count_increment?:boolean) => {
                    let state = self.state()
                    state.Item2B != "loading" &&
                    self.setState({...self.state(),
                      dirty_Item2B:state.dirty_Item2B.set(i_id, new_entity),
                      update_count:force_update_count_increment ? self.state().update_count+1 : state.update_count,
                      Item2B:
                        {
                          ...state.Item2B,
                          Items:state.Item2B.Items.set(i_id,{...state.Item2B.Items.get(i_id), element:new_entity})
                        }
                    }, callback)
                  },
                  delete: undefined,
                  unlink: !Permissions.can_delete_Group2_Item2B() ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.unlink_Group2_Group2_Item2BS(self.props.entity, i.element).then(() =>
                      load_relation_Group2_Group2_Item2B(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          {Permissions.can_create_Item2B() && Permissions.can_create_Group2_Item2B() && Group2_Group2_Item2B_can_create(self) ? render_new_Group2_Group2_Item2B(self) : null}
          {Permissions.can_create_Group2_Item2B() ? render_add_existing_Group2_Group2_Item2B(self) : null}
        </div>)
    }
    
    </div>
}



export function render_relations_Group2(self:Group2Context) {
  return <div className="relations">
      { render_Group2_Group2_Item2A(self, "default") }
      { render_Group2_Group2_Item2B(self, "default") }
      
    </div>
}

export function render_add_existing_Group2_Group2_Item2A(self:Group2Context) {
    
    let state = self.state()
    return self.props.mode == "edit" ?
      <div className="button__actions">
        {
          state.add_step_Item2A != "open" ?
            <Buttons.Add 
              onClick={() =>
                self.setState({...self.state(), add_step_Item2A:"open"}) }
                  target_name={"Item2A"} />
          :
          React.createElement(List.AddToRelation,
            {
              relation_name:"group2_group2_item2a",
              source_name:"Group2",
              target_name:"Item2A",
              target_plural:"Item2AS",
              page_size:25,
              render_target:(i,i_id) =>
                <div key={i_id} className="group__item">
                  <a className="group__button button button--existing"
                    onClick={() =>
                        self.setState({...self.state(), add_step_Item2A:"saving"}, () =>
                          Api.link_Group2_Group2_Item2AS(self.props.entity, i).then(() =>
                            self.setState({...self.state(), add_step_Item2A:"closed"}, () =>
                              load_relation_Group2_Group2_Item2A(self, false, ))))
                      }>
                      Add existing
                  </a>
                  <div className="group__title">
                    {
                      Item2AViews.Item2A({
                        ...self.props,
                        entity:i,
                        nesting_depth:self.props.nesting_depth+1,
                        size:"preview",
                        mode:"view",
                        is_editable:false,
                        nested_entity_names: self.props.nested_entity_names.push("Item2A"),
                        set_size:undefined,
                        toggle_button:undefined,
                        set_mode:undefined,
                        set_entity:(new_entity:Models.Item2A, callback?:()=>void) => {},
                        unlink: undefined,
                        delete: undefined
                      })
                    }
                  </div>
                </div>,
              cancel:() => self.setState({...self.state(), add_step_Item2A:"closed"}),
              get_items:[
                { name: "Item2A", get: async(i,s) => Api.get_unlinked_Group2_Group2_Item2AS(self.props.entity, i, s) },
              ]
            })
        }
      </div>
    :
      null
    }
  
export function render_add_existing_Group2_Group2_Item2B(self:Group2Context) {
    
    let state = self.state()
    return self.props.mode == "edit" ?
      <div className="button__actions">
        {
          state.add_step_Item2B != "open" ?
            <Buttons.Add 
              onClick={() =>
                self.setState({...self.state(), add_step_Item2B:"open"}) }
                  target_name={"Item2B"} />
          :
          React.createElement(List.AddToRelation,
            {
              relation_name:"group2_group2_item2b",
              source_name:"Group2",
              target_name:"Item2B",
              target_plural:"Item2BS",
              page_size:25,
              render_target:(i,i_id) =>
                <div key={i_id} className="group__item">
                  <a className="group__button button button--existing"
                    onClick={() =>
                        self.setState({...self.state(), add_step_Item2B:"saving"}, () =>
                          Api.link_Group2_Group2_Item2BS(self.props.entity, i).then(() =>
                            self.setState({...self.state(), add_step_Item2B:"closed"}, () =>
                              load_relation_Group2_Group2_Item2B(self, false, ))))
                      }>
                      Add existing
                  </a>
                  <div className="group__title">
                    {
                      Item2BViews.Item2B({
                        ...self.props,
                        entity:i,
                        nesting_depth:self.props.nesting_depth+1,
                        size:"preview",
                        mode:"view",
                        is_editable:false,
                        nested_entity_names: self.props.nested_entity_names.push("Item2B"),
                        set_size:undefined,
                        toggle_button:undefined,
                        set_mode:undefined,
                        set_entity:(new_entity:Models.Item2B, callback?:()=>void) => {},
                        unlink: undefined,
                        delete: undefined
                      })
                    }
                  </div>
                </div>,
              cancel:() => self.setState({...self.state(), add_step_Item2B:"closed"}),
              get_items:[
                { name: "Item2B", get: async(i,s) => Api.get_unlinked_Group2_Group2_Item2BS(self.props.entity, i, s) },
              ]
            })
        }
      </div>
    :
      null
    }
  

export function render_new_Group2_Group2_Item2A(self:Group2Context) {
    let state = self.state()
    return  self.props.mode == "edit" ?
      <div className="button__actions">
        <div className="new-item2a">
              <button 
                      className="new-item2a button button--new"
                      onClick={() =>
                          Api.create_linked_Group2_Group2_Item2AS_Item2A(self.props.entity).then(e => {
                              e.length > 0 &&
                              Api.update_Item2A(
                                ({ ...e[0], Name:"", Description:"" } as Models.Item2A)).then(() =>
                                load_relation_Group2_Group2_Item2A(self, true, () =>
                                    self.setState({...self.state(), add_step_Item2A:"closed"})
                                  )
                                )
                          })
                      }>
                  {i18next.t('Create new Item2A')}
              </button>
            </div>
        </div>
      :
      null
    }
  
export function render_new_Group2_Group2_Item2B(self:Group2Context) {
    let state = self.state()
    return  self.props.mode == "edit" ?
      <div className="button__actions">
        <div className="new-item2b">
              <button 
                      className="new-item2b button button--new"
                      onClick={() =>
                          Api.create_linked_Group2_Group2_Item2BS_Item2B(self.props.entity).then(e => {
                              e.length > 0 &&
                              Api.update_Item2B(
                                ({ ...e[0], Name:"", Content:null } as Models.Item2B)).then(() =>
                                load_relation_Group2_Group2_Item2B(self, true, () =>
                                    self.setState({...self.state(), add_step_Item2B:"closed"})
                                  )
                                )
                          })
                      }>
                  {i18next.t('Create new Item2B')}
              </button>
            </div>
        </div>
      :
      null
    }
  

export function render_saving_animations_Group2(self:Group2Context) {
  return self.state().dirty_HomePage.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/> : 
    self.state().dirty_Item2A.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/> : 
    self.state().dirty_Item2B.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/>
    : <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"cornflowerblue"}} className="saved"/>
}

export type Group2Context = {state:()=>Group2State, props:Utils.EntityComponentProps<Models.Group2>, setState:(new_state:Group2State, callback?:()=>void) => void}

export type Group2State = {
    update_count:number
    add_step_HomePage:"closed"|"open"|"saving",
      dirty_HomePage:Immutable.Map<number,Models.HomePage>,
      HomePage:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.HomePage>>|"loading"
  add_step_Item2A:"closed"|"open"|"saving",
      dirty_Item2A:Immutable.Map<number,Models.Item2A>,
      Item2A:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.Item2A>>|"loading"
  add_step_Item2B:"closed"|"open"|"saving",
      dirty_Item2B:Immutable.Map<number,Models.Item2B>,
      Item2B:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.Item2B>>|"loading"
  }
export class Group2Component extends React.Component<Utils.EntityComponentProps<Models.Group2>, Group2State> {
  constructor(props:Utils.EntityComponentProps<Models.Group2>, context:any) {
    super(props, context)
    this.state = { update_count:0,add_step_HomePage:"closed", dirty_HomePage:Immutable.Map<number,Models.HomePage>(), HomePage:"loading", add_step_Item2A:"closed", dirty_Item2A:Immutable.Map<number,Models.Item2A>(), Item2A:"loading", add_step_Item2B:"closed", dirty_Item2B:Immutable.Map<number,Models.Item2B>(), Item2B:"loading" }
  }

  get_self() {
    return {state:() => this.state, props:this.props, setState:(ns,c)=>this.setState(ns,c)}
  }

  componentWillReceiveProps(new_props:Utils.EntityComponentProps<Models.Group2>) {
    if (new_props.size == "breadcrumb") return
    let current_logged_in_entity =  null
    let new_logged_in_entity =  null
    if (new_props.mode != this.props.mode || (new_props.size != this.props.size && (new_props.size == "large" || new_props.size == "fullscreen")) ||
        new_props.logic_frame != this.props.logic_frame ||
        (current_logged_in_entity && !new_logged_in_entity) ||
        (!current_logged_in_entity && new_logged_in_entity) ||
        (current_logged_in_entity && new_logged_in_entity && current_logged_in_entity.Id != new_logged_in_entity.Id)) {
      load_relations_Group2(this.get_self(),  )
    }
  }

  thread:number = null
  componentWillMount() {
    if (this.props.size == "breadcrumb") return
    if (this.props.size != "preview") {
      
      load_relations_Group2(this.get_self(), )
    }

    this.thread = setInterval(() => {
      if (this.state.dirty_HomePage.count() > 0) {
         let first = this.state.dirty_HomePage.first()
         this.setState({...this.state, dirty_HomePage: this.state.dirty_HomePage.remove(first.Id)}, () =>
           Api.update_HomePage(first)
         )
       } else if (this.state.dirty_Item2A.count() > 0) {
         let first = this.state.dirty_Item2A.first()
         this.setState({...this.state, dirty_Item2A: this.state.dirty_Item2A.remove(first.Id)}, () =>
           Api.update_Item2A(first)
         )
       } else if (this.state.dirty_Item2B.count() > 0) {
         let first = this.state.dirty_Item2B.first()
         this.setState({...this.state, dirty_Item2B: this.state.dirty_Item2B.remove(first.Id)}, () =>
           Api.update_Item2B(first)
         )
       }

    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.thread)
  }

  render() {
    if (this.props.size == "breadcrumb") {
      return Permissions.can_view_Group2() ?
              render_breadcrumb_Group2(this.get_self())
              : null
    }

    return <div id={`Group2_${this.props.entity.Id.toString()}_${this.state.update_count}`} className={`model group2`}>
      { render_saving_animations_Group2(this.get_self()) }
      { this.props.nesting_depth == 0 ? render_menu_Group2(this.get_self()) : null }
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
        { this.props.nesting_depth == 0 ? render_local_menu_Group2(this.get_self()) : null }
        { render_controls_Group2(this.get_self()) }
        { render_content_Group2(this.get_self()) }
      </div>
    </div>
  }
}

export let Group2 = (props:Utils.EntityComponentProps<Models.Group2>) : JSX.Element =>
  <Group2Component {...props} />

export let Group2_to_page = (id:number) => {
  let can_edit = Utils.any_of([Permissions.can_edit_Group2, Permissions.can_edit_HomePage_Group2, Permissions.can_edit_Group2_Item2A, Permissions.can_edit_Group2_Item2B, Permissions.can_edit_HomePage, Permissions.can_edit_Item2A, Permissions.can_edit_Item2B])
  return Utils.scene_to_page<Models.Group2>(can_edit, Group2, Api.get_Group2(id), Api.update_Group2, "Group2", "Group2", `/Group2S/${id}`)
}

export let Group2_to = (id:number, slug:string, target_element_id:string, ) => {
  Utils.render_page_manager(slug, target_element_id,
    Group2_to_page(id),
    
  )
  
}
