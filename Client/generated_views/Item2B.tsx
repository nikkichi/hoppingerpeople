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
import * as Group2Views from './Group2'


export function Item2B_Group2_Item2B_can_create(self:Item2BContext) {
  let state = self.state()
  return state.Group2 == "loading" ? false : state.Group2.CanCreate
}
export function Item2B_Group2_Item2B_can_delete(self:Item2BContext) {
  let state = self.state()
  return state.Group2 == "loading" ? false : state.Group2.CanDelete
}
export function Item2B_Group2_Item2B_page_index(self:Item2BContext) {
  let state = self.state()
  return state.Group2 == "loading" ? 0 : state.Group2.PageIndex
}
export function Item2B_Group2_Item2B_page_size(self:Item2BContext) {
  let state = self.state()
  return state.Group2 == "loading" ? 25 : state.Group2.PageSize
}
export function Item2B_Group2_Item2B_search_query(self:Item2BContext) {
  let state = self.state()
  return state.Group2 == "loading" ? null : state.Group2.SearchQuery
}
export function Item2B_Group2_Item2B_num_pages(self:Item2BContext) {
  let state = self.state()
  return state.Group2 == "loading" ? 1 : state.Group2.NumPages
}

export function load_relation_Item2B_Group2_Item2B(self:Item2BContext, force_first_page:boolean, callback?:()=>void) {
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
      Api.get_Item2B_Group2_Item2BS(self.props.entity, Item2B_Group2_Item2B_page_index(self), Item2B_Group2_Item2B_page_size(self), Item2B_Group2_Item2B_search_query(self)).then(Group2S =>
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

export function load_relations_Item2B(self, callback?:()=>void) {
  load_relation_Item2B_Group2_Item2B(self, false, 
        () => callback && callback())
}

export function set_size_Item2B(self:Item2BContext, new_size:Utils.EntitySize) {
  self.props.set_size(new_size, () => {
    if (new_size == "fullscreen")
      self.props.push(Item2B_to_page(self.props.entity.Id))
  })
}

export function render_Item2B_Name_editable_minimised(self:Item2BContext) : JSX.Element {
  if (!Permissions.can_edit_Item2B()) return render_Item2B_Name_minimised(self)
  else
    return !Permissions.can_view_Item2B_Name() ? <div /> :
          <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item2B:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}

export function render_Item2B_Content_editable_minimised(self:Item2BContext) : JSX.Element {
  if (!Permissions.can_edit_Item2B()) return render_Item2B_Content_minimised(self)
  else
    return !Permissions.can_view_Item2B_Content() ? <div /> :
          <div className="model__attribute content">
  <label className="attribute-label attribute-label-content">{i18next.t(`Item2B:Content`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Content(),
        self.props.mode,
        () => self.props.entity.Content,
        v => self.props.set_entity({...self.props.entity, Content:v})) } 
  </div>
</div>
}


export function render_Item2B_Name_editable_maximised(self:Item2BContext) : JSX.Element {
  if (!Permissions.can_edit_Item2B()) return render_Item2B_Name_maximised(self)
  else
    return !Permissions.can_view_Item2B_Name() ? <div /> :
          <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item2B:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}

export function render_Item2B_Content_editable_maximised(self:Item2BContext) : JSX.Element {
  if (!Permissions.can_edit_Item2B()) return render_Item2B_Content_maximised(self)
  else
    return !Permissions.can_view_Item2B_Content() ? <div /> :
          <div className="model__attribute content">
  <label className="attribute-label attribute-label-content">{i18next.t(`Item2B:Content`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Content(),
        self.props.mode,
        () => self.props.entity.Content,
        v => self.props.set_entity({...self.props.entity, Content:v})) } 
  </div>
</div>
}


export function render_editable_attributes_minimised_Item2B(self:Item2BContext) {
  let attributes = (<div>
      {render_Item2B_Name_editable_minimised(self)}
        {render_Item2B_Content_editable_minimised(self)}
    </div>)
  return attributes
}

export function render_editable_attributes_maximised_Item2B(self:Item2BContext) {
    let state = self.state()
    let attributes = (<div>
        {render_Item2B_Name_editable_maximised(self)}
        {render_Item2B_Content_editable_maximised(self)}
        
        
        
      </div>)
    return attributes
  }

export function render_breadcrumb_Item2B(self:Item2BContext) {
  return <div className="breadcrumb-item2b">Item2B</div>
}

export function render_menu_Item2B(self:Item2BContext) {
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

export function render_local_menu_Item2B(self:Item2BContext) {
  let state = self.state()
  return <div className="local-menu">
          <div className="local_menu_entries">
            <div className={`local_menu_entry${self.props.shown_relation == "none" ? " local_menu_entry--active" : ""}`}>
              <a onClick={() =>
                  self.props.set_shown_relation("none")
              }>
                {i18next.t('About this Item2B')}
              </a>
            </div>
          
              
          </div>
        </div>
}

export function render_controls_Item2B(self:Item2BContext) {
  return <div className="control">
    {self.props.allow_maximisation && self.props.set_size ? <a className={`"item2b button button--toggle ${self.props.size != 'preview' ? 'button--toggle--open' : ''}`}
          onClick={() => {
            set_size_Item2B(self, self.props.size == "preview" ? "large" : "preview")}
          }>
      </a> : null}
    {Permissions.can_delete_Item2B() && self.props.size == "fullscreen" ? <a className="button button--delete"
      onClick={() => confirm(i18next.t('Are you sure?')) &&
        Api.delete_Item2B(self.props.entity).then(() => self.props.force_reload(() => self.props.pop()))
      }>
    </a> : null}
    {self.props.size == "fullscreen" && self.props.pages_count > 0 ? <a className="item2b button button--close"
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

export function render_content_Item2B(self:Item2BContext) {
  let actions:Array<()=>void> =
    [
      self.props.allow_maximisation && self.props.set_size && self.props.size == "preview" ?
        () => set_size_Item2B(self, self.props.size == "preview" ? "large" : "preview")
      :
        null,
    ].filter(a => a != null)
  let content =
    Permissions.can_view_Item2B() ?
      self.props.size == "preview" ?
        render_preview_Item2B(self)
      : self.props.size == "large" ?
        render_large_Item2B(self)
      : self.props.size == "fullscreen" ?
        render_large_Item2B(self)
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

export function render_Item2B_Name_minimised(self:Item2BContext) : JSX.Element {
      return !Permissions.can_view_Item2B_Name() ? null : <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item2B:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
      
}
        export function render_Item2B_Content_minimised(self:Item2BContext) : JSX.Element {
      return !Permissions.can_view_Item2B_Content() ? null : <div className="model__attribute content">
  <label className="attribute-label attribute-label-content">{i18next.t(`Item2B:Content`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Content(),
        self.props.mode,
        () => self.props.entity.Content,
        v => self.props.set_entity({...self.props.entity, Content:v})) } 
  </div>
</div>
      
}

export function render_Item2B_Name_maximised(self:Item2BContext) : JSX.Element {
        return !Permissions.can_view_Item2B_Name() ? null : <div className="model__attribute name">
  <label className="attribute-label attribute-label-name">{i18next.t(`Item2B:Name`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}
        export function render_Item2B_Content_maximised(self:Item2BContext) : JSX.Element {
        return !Permissions.can_view_Item2B_Content() ? null : <div className="model__attribute content">
  <label className="attribute-label attribute-label-content">{i18next.t(`Item2B:Content`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Item2B() && Permissions.can_edit_Item2B_Content(),
        self.props.mode,
        () => self.props.entity.Content,
        v => self.props.set_entity({...self.props.entity, Content:v})) } 
  </div>
</div>
}

export function render_preview_Item2B(self:Item2BContext) {
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Item2B())
    attributes = (<div className="model__attributes">
      { render_Item2B_Name_minimised(self) }
        { render_Item2B_Content_minimised(self) }
    </div>)
  else
    attributes = render_editable_attributes_minimised_Item2B(self)
  return (<div className="block">
      {attributes}
    </div>)
}

export function render_large_Item2B(self:Item2BContext) {
  let state = self.state()
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Item2B())
    attributes = (<div className="model__attributes">
      { render_Item2B_Name_maximised(self) }
        { render_Item2B_Content_maximised(self) }
        
    </div>)
  else
    attributes = render_editable_attributes_maximised_Item2B(self)
  return (<div className="block">
      {self.props.nesting_depth == 0 && self.props.shown_relation != "all" && self.props.shown_relation != "none" ? null : attributes}
      {render_relations_Item2B(self)}
    </div>)
}


export function render_Item2B_Group2_Item2B(self:Item2BContext, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "Group2_Item2B") || !Permissions.can_view_Group2())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("item2b_group2_item2b",
   "Item2B",
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
      Item2B_Group2_Item2B_page_index(self),
      Item2B_Group2_Item2B_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.Group2 != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            Group2: {
              ...state.Group2,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_Item2B_Group2_Item2B(self, false, ))
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
                  mode:self.props.mode == "edit" && (Permissions.can_edit_Group2_Item2B()
                        || Permissions.can_create_Group2_Item2B()
                        || Permissions.can_delete_Group2_Item2B()) ?
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
                  delete: undefined,
                  unlink: !Permissions.can_delete_Group2_Item2B() ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.unlink_Group2_Group2_Item2BS(i.element, self.props.entity).then(() =>
                      load_relation_Item2B_Group2_Item2B(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          {Permissions.can_create_Group2() && Permissions.can_create_Group2_Item2B() && Item2B_Group2_Item2B_can_create(self) ? render_new_Item2B_Group2_Item2B(self) : null}
          {Permissions.can_create_Group2_Item2B() ? render_add_existing_Item2B_Group2_Item2B(self) : null}
        </div>)
    }
    
    </div>
}



export function render_relations_Item2B(self:Item2BContext) {
  return <div className="relations">
      
      
    </div>
}

export function render_add_existing_Item2B_Group2_Item2B(self:Item2BContext) {
    
    let state = self.state()
    return self.props.mode == "edit" ?
      <div className="button__actions">
        {
          state.add_step_Group2 != "open" ?
            <Buttons.Add 
              onClick={() =>
                self.setState({...self.state(), add_step_Group2:"open"}) }
                  target_name={"Group2"} />
          :
          React.createElement(List.AddToRelation,
            {
              relation_name:"item2b_group2_item2b",
              source_name:"Item2B",
              target_name:"Group2",
              target_plural:"Group2S",
              page_size:25,
              render_target:(i,i_id) =>
                <div key={i_id} className="group__item">
                  <a className="group__button button button--existing"
                    onClick={() =>
                        self.setState({...self.state(), add_step_Group2:"saving"}, () =>
                          Api.link_Item2B_Group2_Item2BS(self.props.entity, i).then(() =>
                            self.setState({...self.state(), add_step_Group2:"closed"}, () =>
                              load_relation_Item2B_Group2_Item2B(self, false, ))))
                      }>
                      Add existing
                  </a>
                  <div className="group__title">
                    {
                      Group2Views.Group2({
                        ...self.props,
                        entity:i,
                        nesting_depth:self.props.nesting_depth+1,
                        size:"preview",
                        mode:"view",
                        is_editable:false,
                        nested_entity_names: self.props.nested_entity_names.push("Group2"),
                        set_size:undefined,
                        toggle_button:undefined,
                        set_mode:undefined,
                        set_entity:(new_entity:Models.Group2, callback?:()=>void) => {},
                        unlink: undefined,
                        delete: undefined
                      })
                    }
                  </div>
                </div>,
              cancel:() => self.setState({...self.state(), add_step_Group2:"closed"}),
              get_items:[
                { name: "Group2", get: async(i,s) => Api.get_unlinked_Item2B_Group2_Item2BS(self.props.entity, i, s) },
              ]
            })
        }
      </div>
    :
      null
    }
  

export function render_new_Item2B_Group2_Item2B(self:Item2BContext) {
    let state = self.state()
    return  self.props.mode == "edit" ?
      <div className="button__actions">
        <div className="new-group2">
              <button 
                      className="new-group2 button button--new"
                      onClick={() =>
                          Api.create_linked_Item2B_Group2_Item2BS_Group2(self.props.entity).then(e => {
                              e.length > 0 &&
                              Api.update_Group2(
                                ({ ...e[0], Name:"" } as Models.Group2)).then(() =>
                                load_relation_Item2B_Group2_Item2B(self, true, () =>
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
  

export function render_saving_animations_Item2B(self:Item2BContext) {
  return self.state().dirty_Group2.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/>
    : <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"cornflowerblue"}} className="saved"/>
}

export type Item2BContext = {state:()=>Item2BState, props:Utils.EntityComponentProps<Models.Item2B>, setState:(new_state:Item2BState, callback?:()=>void) => void}

export type Item2BState = {
    update_count:number
    add_step_Group2:"closed"|"open"|"saving",
      dirty_Group2:Immutable.Map<number,Models.Group2>,
      Group2:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.Group2>>|"loading"
  }
export class Item2BComponent extends React.Component<Utils.EntityComponentProps<Models.Item2B>, Item2BState> {
  constructor(props:Utils.EntityComponentProps<Models.Item2B>, context:any) {
    super(props, context)
    this.state = { update_count:0,add_step_Group2:"closed", dirty_Group2:Immutable.Map<number,Models.Group2>(), Group2:"loading" }
  }

  get_self() {
    return {state:() => this.state, props:this.props, setState:(ns,c)=>this.setState(ns,c)}
  }

  componentWillReceiveProps(new_props:Utils.EntityComponentProps<Models.Item2B>) {
    if (new_props.size == "breadcrumb") return
    let current_logged_in_entity =  null
    let new_logged_in_entity =  null
    if (new_props.mode != this.props.mode || (new_props.size != this.props.size && (new_props.size == "large" || new_props.size == "fullscreen")) ||
        new_props.logic_frame != this.props.logic_frame ||
        (current_logged_in_entity && !new_logged_in_entity) ||
        (!current_logged_in_entity && new_logged_in_entity) ||
        (current_logged_in_entity && new_logged_in_entity && current_logged_in_entity.Id != new_logged_in_entity.Id)) {
      load_relations_Item2B(this.get_self(),  )
    }
  }

  thread:number = null
  componentWillMount() {
    if (this.props.size == "breadcrumb") return
    if (this.props.size != "preview") {
      
      load_relations_Item2B(this.get_self(), )
    }

    this.thread = setInterval(() => {
      if (this.state.dirty_Group2.count() > 0) {
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
      return Permissions.can_view_Item2B() ?
              render_breadcrumb_Item2B(this.get_self())
              : null
    }

    return <div id={`Item2B_${this.props.entity.Id.toString()}_${this.state.update_count}`} className={`model item2b`}>
      { render_saving_animations_Item2B(this.get_self()) }
      { this.props.nesting_depth == 0 ? render_menu_Item2B(this.get_self()) : null }
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
        { this.props.nesting_depth == 0 ? render_local_menu_Item2B(this.get_self()) : null }
        { render_controls_Item2B(this.get_self()) }
        { render_content_Item2B(this.get_self()) }
      </div>
    </div>
  }
}

export let Item2B = (props:Utils.EntityComponentProps<Models.Item2B>) : JSX.Element =>
  <Item2BComponent {...props} />

export let Item2B_to_page = (id:number) => {
  let can_edit = Utils.any_of([Permissions.can_edit_Item2B, Permissions.can_edit_Group2_Item2B, Permissions.can_edit_Group2])
  return Utils.scene_to_page<Models.Item2B>(can_edit, Item2B, Api.get_Item2B(id), Api.update_Item2B, "Item2B", "Item2B", `/Item2BS/${id}`)
}

export let Item2B_to = (id:number, slug:string, target_element_id:string, ) => {
  Utils.render_page_manager(slug, target_element_id,
    Item2B_to_page(id),
    
  )
  
}
