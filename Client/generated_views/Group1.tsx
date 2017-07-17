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
import * as Item1Views from './Item1'


export function Group1_HomePage_Group1_can_create(self:Group1Context) {
  let state = self.state()
  return state.HomePage == "loading" ? false : state.HomePage.CanCreate
}
export function Group1_Group1_Item1_can_create(self:Group1Context) {
  let state = self.state()
  return state.Item1 == "loading" ? false : state.Item1.CanCreate
}
export function Group1_HomePage_Group1_can_delete(self:Group1Context) {
  let state = self.state()
  return state.HomePage == "loading" ? false : state.HomePage.CanDelete
}
export function Group1_Group1_Item1_can_delete(self:Group1Context) {
  let state = self.state()
  return state.Item1 == "loading" ? false : state.Item1.CanDelete
}
export function Group1_HomePage_Group1_page_index(self:Group1Context) {
  let state = self.state()
  return state.HomePage == "loading" ? 0 : state.HomePage.PageIndex
}
export function Group1_Group1_Item1_page_index(self:Group1Context) {
  let state = self.state()
  return state.Item1 == "loading" ? 0 : state.Item1.PageIndex
}
export function Group1_HomePage_Group1_page_size(self:Group1Context) {
  let state = self.state()
  return state.HomePage == "loading" ? 25 : state.HomePage.PageSize
}
export function Group1_Group1_Item1_page_size(self:Group1Context) {
  let state = self.state()
  return state.Item1 == "loading" ? 25 : state.Item1.PageSize
}
export function Group1_HomePage_Group1_search_query(self:Group1Context) {
  let state = self.state()
  return state.HomePage == "loading" ? null : state.HomePage.SearchQuery
}
export function Group1_Group1_Item1_search_query(self:Group1Context) {
  let state = self.state()
  return state.Item1 == "loading" ? null : state.Item1.SearchQuery
}
export function Group1_HomePage_Group1_num_pages(self:Group1Context) {
  let state = self.state()
  return state.HomePage == "loading" ? 1 : state.HomePage.NumPages
}
export function Group1_Group1_Item1_num_pages(self:Group1Context) {
  let state = self.state()
  return state.Item1 == "loading" ? 1 : state.Item1.NumPages
}

export function load_relation_Group1_HomePage_Group1(self:Group1Context, force_first_page:boolean, callback?:()=>void) {
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
      Api.get_Group1_HomePage_Group1S(self.props.entity, Group1_HomePage_Group1_page_index(self), Group1_HomePage_Group1_page_size(self), Group1_HomePage_Group1_search_query(self)).then(HomePages =>
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

export function load_relation_Group1_Group1_Item1(self:Group1Context, force_first_page:boolean, callback?:()=>void) {
  let state = self.state()
  let prelude = force_first_page && state.Item1 != "loading" ?
    (c:() => void) => state.Item1 != "loading" && self.setState({
      ...state,
      Item1: {...state.Item1, PageIndex:0 }
    }, c)
    :
    (c:() => void) => c()
  Permissions.can_view_Item1() ?
    prelude(() =>
      Api.get_Group1_Group1_Item1S(self.props.entity, Group1_Group1_Item1_page_index(self), Group1_Group1_Item1_page_size(self), Group1_Group1_Item1_search_query(self)).then(Item1S =>
        self.setState({...self.state(), update_count:self.state().update_count+1,
            Item1:Utils.raw_page_to_paginated_items<Models.Item1, Utils.EntityAndSize<Models.Item1> & { shown_relation:string }>((i, i_just_created) => {
              let state = self.state()
              return {
                element:i,
                size: state.Item1 != "loading" ?
                  (state.Item1.Items.has(i.Id) ?
                    state.Item1.Items.get(i.Id).size
                  :
                    "preview" /* i_just_created ? "large" : "preview" */)
                  :
                    "preview" /* i_just_created ? "large" : "preview" */,
                shown_relation:"all"}}, Item1S)
            }, callback)))
    :
      prelude(() => callback && callback())
}

export function load_relations_Group1(self, callback?:()=>void) {
  load_relation_Group1_Group1_Item1(self, false, 
        () => load_relation_Group1_HomePage_Group1(self, false, 
        () => callback && callback()))
}

export function set_size_Group1(self:Group1Context, new_size:Utils.EntitySize) {
  self.props.set_size(new_size, () => {
    if (new_size == "fullscreen")
      self.props.push(Group1_to_page(self.props.entity.Id))
  })
}

export function render_Group1_Letter_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Letter_minimised(self)
  else
    return !Permissions.can_view_Group1_Letter() ? <div /> :
          <div className="model__attribute letter">
  <label className="attribute-label attribute-label-letter">{i18next.t(`Group1:Letter`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Union(
          self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Letter(),
          self.props.mode,
          Immutable.List<Components.UnionCase>([{ value:"A", label:i18next.t(`Group1:Letter:A`, {context: self.props.inline ? "inline" : ""}) },{ value:"B", label:i18next.t(`Group1:Letter:B`, {context: self.props.inline ? "inline" : ""}) },{ value:"C", label:i18next.t(`Group1:Letter:C`, {context: self.props.inline ? "inline" : ""}) }]),
          () => self.props.entity.Letter,
          (v:string) => self.props.set_entity({...self.props.entity, Letter:(v as "A"|"B"|"C")})) }
  </div>
</div>
}

export function render_Group1_RichText_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_RichText_minimised(self)
  else
    return !Permissions.can_view_Group1_RichText() ? <div /> :
          <div className="model__attribute richtext">
  <label className="attribute-label attribute-label-richtext">{i18next.t(`Group1:RichText`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_RichText(),
        self.props.mode,
        () => self.props.entity.RichText,
        v => self.props.set_entity({...self.props.entity, RichText:v})) } 
  </div>
</div>
}

export function render_Group1_Pic_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Pic_minimised(self)
  else
    return !Permissions.can_view_Group1_Pic() ? <div /> :
          <div className="model__attribute pic">
  <label className="attribute-label attribute-label-pic">{i18next.t(`Group1:Pic`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Image(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Pic(),
        self.props.mode,
        () => Api.get_Group1_Pic(self.props.entity),
        (new_src:string) => Api.update_Group1_Pic(self.props.entity, new_src)) }
  </div>
</div>
}

export function render_Group1_IsRad_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_IsRad_minimised(self)
  else
    return !Permissions.can_view_Group1_IsRad() ? <div /> :
          <div className="model__attribute israd">
  <label className="attribute-label attribute-label-israd">{i18next.t(`Group1:IsRad`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Boolean(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_IsRad(),
        self.props.mode,
        () => self.props.entity.IsRad,
        v => self.props.set_entity({...self.props.entity, IsRad:v})) } 
  </div>
</div>
}

export function render_Group1_Name_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Name_minimised(self)
  else
    return !Permissions.can_view_Group1_Name() ? <div /> :
          <div className="model__attribute name">
  <div className="model__attribute-content">
    { Components.Title(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}

export function render_Group1_Time_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Time_minimised(self)
  else
    return !Permissions.can_view_Group1_Time() ? <div /> :
          <div className="model__attribute time">
  <label className="attribute-label attribute-label-time">{i18next.t(`Group1:Time`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Time(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Time(),
        self.props.mode,
        () => self.props.entity.Time,
        v => self.props.set_entity({...self.props.entity, Time:v})) } 
  </div>
</div>
}

export function render_Group1_Date_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Date_minimised(self)
  else
    return !Permissions.can_view_Group1_Date() ? <div /> :
          <div className="model__attribute date">
  <label className="attribute-label attribute-label-date">{i18next.t(`Group1:Date`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateOnly(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Date(),
        self.props.mode,
        () => self.props.entity.Date,
        v => self.props.set_entity({...self.props.entity, Date:v})) } 
  </div>
</div>
}

export function render_Group1_Url_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Url_minimised(self)
  else
    return !Permissions.can_view_Group1_Url() ? <div /> :
          <div className="model__attribute url">
  <label className="attribute-label attribute-label-url">{i18next.t(`Group1:Url`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Url(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Url(),
        self.props.mode,
        () => self.props.entity.Url,
        v => self.props.set_entity({...self.props.entity, Url:v})) } 
  </div>
</div>
}

export function render_Group1_Int_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Int_minimised(self)
  else
    return !Permissions.can_view_Group1_Int() ? <div /> :
          <div className="model__attribute int">
  <label className="attribute-label attribute-label-int">{i18next.t(`Group1:Int`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Int(),
        self.props.mode,
        () => self.props.entity.Int,
        v => self.props.set_entity({...self.props.entity, Int:v})) } 
  </div>
</div>
}

export function render_Group1_String_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_String_minimised(self)
  else
    return !Permissions.can_view_Group1_String() ? <div /> :
          <div className="model__attribute string">
  <label className="attribute-label attribute-label-string">{i18next.t(`Group1:String`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_String(),
        self.props.mode,
        () => self.props.entity.String,
        v => self.props.set_entity({...self.props.entity, String:v})) } 
  </div>
</div>
}

export function render_Group1_Double_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Double_minimised(self)
  else
    return !Permissions.can_view_Group1_Double() ? <div /> :
          <div className="model__attribute double">
  <label className="attribute-label attribute-label-double">{i18next.t(`Group1:Double`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Double(),
        self.props.mode,
        () => self.props.entity.Double,
        v => self.props.set_entity({...self.props.entity, Double:v})) } 
  </div>
</div>
}

export function render_Group1_DateTime_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_DateTime_minimised(self)
  else
    return !Permissions.can_view_Group1_DateTime() ? <div /> :
          <div className="model__attribute datetime">
  <label className="attribute-label attribute-label-datetime">{i18next.t(`Group1:DateTime`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateTime(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_DateTime(),
        self.props.mode,
        () => self.props.entity.DateTime,
        v => self.props.set_entity({...self.props.entity, DateTime:v})) } 
  </div>
</div>
}

export function render_Group1_Tel_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Tel_minimised(self)
  else
    return !Permissions.can_view_Group1_Tel() ? <div /> :
          <div className="model__attribute tel">
  <label className="attribute-label attribute-label-tel">{i18next.t(`Group1:Tel`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Tel(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Tel(),
        self.props.mode,
        () => self.props.entity.Tel,
        v => self.props.set_entity({...self.props.entity, Tel:v})) } 
  </div>
</div>
}

export function render_Group1_File_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_File_minimised(self)
  else
    return !Permissions.can_view_Group1_File() ? <div /> :
          <div className="model__attribute file">
  <label className="attribute-label attribute-label-file">{i18next.t(`Group1:File`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.File(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_File(),
        self.props.mode,
        `/api/v1/Group1/${self.props.entity.Id}/FileDownload`,
        self.props.entity.File,
        (f:File) => Api.upload_Group1_File(self.props.entity, f).then(() => {
            self.setState({ ...self.state() },
              () => self.props.set_entity({ ...self.props.entity, File: f.name }))
          })) }
  </div>
</div>
}

export function render_Group1_Email_editable_minimised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Email_minimised(self)
  else
    return !Permissions.can_view_Group1_Email() ? <div /> :
          <div className="model__attribute email">
  <label className="attribute-label attribute-label-email">{i18next.t(`Group1:Email`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Email(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Email(),
        self.props.mode,
        () => self.props.entity.Email,
        v => self.props.set_entity({...self.props.entity, Email:v})) } 
  </div>
</div>
}


export function render_Group1_Letter_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Letter_maximised(self)
  else
    return !Permissions.can_view_Group1_Letter() ? <div /> :
          <div className="model__attribute letter">
  <label className="attribute-label attribute-label-letter">{i18next.t(`Group1:Letter`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Union(
          self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Letter(),
          self.props.mode,
          Immutable.List<Components.UnionCase>([{ value:"A", label:i18next.t(`Group1:Letter:A`, {context: self.props.inline ? "inline" : ""}) },{ value:"B", label:i18next.t(`Group1:Letter:B`, {context: self.props.inline ? "inline" : ""}) },{ value:"C", label:i18next.t(`Group1:Letter:C`, {context: self.props.inline ? "inline" : ""}) }]),
          () => self.props.entity.Letter,
          (v:string) => self.props.set_entity({...self.props.entity, Letter:(v as "A"|"B"|"C")})) }
  </div>
</div>
}

export function render_Group1_RichText_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_RichText_maximised(self)
  else
    return !Permissions.can_view_Group1_RichText() ? <div /> :
          <div className="model__attribute richtext">
  <label className="attribute-label attribute-label-richtext">{i18next.t(`Group1:RichText`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_RichText(),
        self.props.mode,
        () => self.props.entity.RichText,
        v => self.props.set_entity({...self.props.entity, RichText:v})) } 
  </div>
</div>
}

export function render_Group1_Pic_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Pic_maximised(self)
  else
    return !Permissions.can_view_Group1_Pic() ? <div /> :
          <div className="model__attribute pic">
  <label className="attribute-label attribute-label-pic">{i18next.t(`Group1:Pic`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Image(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Pic(),
        self.props.mode,
        () => Api.get_Group1_Pic(self.props.entity),
        (new_src:string) => Api.update_Group1_Pic(self.props.entity, new_src)) }
  </div>
</div>
}

export function render_Group1_IsRad_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_IsRad_maximised(self)
  else
    return !Permissions.can_view_Group1_IsRad() ? <div /> :
          <div className="model__attribute israd">
  <label className="attribute-label attribute-label-israd">{i18next.t(`Group1:IsRad`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Boolean(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_IsRad(),
        self.props.mode,
        () => self.props.entity.IsRad,
        v => self.props.set_entity({...self.props.entity, IsRad:v})) } 
  </div>
</div>
}

export function render_Group1_Name_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Name_maximised(self)
  else
    return !Permissions.can_view_Group1_Name() ? <div /> :
          <div className="model__attribute name">
  <div className="model__attribute-content">
    { Components.Title(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}

export function render_Group1_Time_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Time_maximised(self)
  else
    return !Permissions.can_view_Group1_Time() ? <div /> :
          <div className="model__attribute time">
  <label className="attribute-label attribute-label-time">{i18next.t(`Group1:Time`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Time(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Time(),
        self.props.mode,
        () => self.props.entity.Time,
        v => self.props.set_entity({...self.props.entity, Time:v})) } 
  </div>
</div>
}

export function render_Group1_Date_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Date_maximised(self)
  else
    return !Permissions.can_view_Group1_Date() ? <div /> :
          <div className="model__attribute date">
  <label className="attribute-label attribute-label-date">{i18next.t(`Group1:Date`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateOnly(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Date(),
        self.props.mode,
        () => self.props.entity.Date,
        v => self.props.set_entity({...self.props.entity, Date:v})) } 
  </div>
</div>
}

export function render_Group1_Url_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Url_maximised(self)
  else
    return !Permissions.can_view_Group1_Url() ? <div /> :
          <div className="model__attribute url">
  <label className="attribute-label attribute-label-url">{i18next.t(`Group1:Url`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Url(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Url(),
        self.props.mode,
        () => self.props.entity.Url,
        v => self.props.set_entity({...self.props.entity, Url:v})) } 
  </div>
</div>
}

export function render_Group1_Int_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Int_maximised(self)
  else
    return !Permissions.can_view_Group1_Int() ? <div /> :
          <div className="model__attribute int">
  <label className="attribute-label attribute-label-int">{i18next.t(`Group1:Int`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Int(),
        self.props.mode,
        () => self.props.entity.Int,
        v => self.props.set_entity({...self.props.entity, Int:v})) } 
  </div>
</div>
}

export function render_Group1_String_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_String_maximised(self)
  else
    return !Permissions.can_view_Group1_String() ? <div /> :
          <div className="model__attribute string">
  <label className="attribute-label attribute-label-string">{i18next.t(`Group1:String`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_String(),
        self.props.mode,
        () => self.props.entity.String,
        v => self.props.set_entity({...self.props.entity, String:v})) } 
  </div>
</div>
}

export function render_Group1_Double_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Double_maximised(self)
  else
    return !Permissions.can_view_Group1_Double() ? <div /> :
          <div className="model__attribute double">
  <label className="attribute-label attribute-label-double">{i18next.t(`Group1:Double`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Double(),
        self.props.mode,
        () => self.props.entity.Double,
        v => self.props.set_entity({...self.props.entity, Double:v})) } 
  </div>
</div>
}

export function render_Group1_DateTime_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_DateTime_maximised(self)
  else
    return !Permissions.can_view_Group1_DateTime() ? <div /> :
          <div className="model__attribute datetime">
  <label className="attribute-label attribute-label-datetime">{i18next.t(`Group1:DateTime`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateTime(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_DateTime(),
        self.props.mode,
        () => self.props.entity.DateTime,
        v => self.props.set_entity({...self.props.entity, DateTime:v})) } 
  </div>
</div>
}

export function render_Group1_Tel_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Tel_maximised(self)
  else
    return !Permissions.can_view_Group1_Tel() ? <div /> :
          <div className="model__attribute tel">
  <label className="attribute-label attribute-label-tel">{i18next.t(`Group1:Tel`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Tel(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Tel(),
        self.props.mode,
        () => self.props.entity.Tel,
        v => self.props.set_entity({...self.props.entity, Tel:v})) } 
  </div>
</div>
}

export function render_Group1_File_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_File_maximised(self)
  else
    return !Permissions.can_view_Group1_File() ? <div /> :
          <div className="model__attribute file">
  <label className="attribute-label attribute-label-file">{i18next.t(`Group1:File`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.File(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_File(),
        self.props.mode,
        `/api/v1/Group1/${self.props.entity.Id}/FileDownload`,
        self.props.entity.File,
        (f:File) => Api.upload_Group1_File(self.props.entity, f).then(() => {
            self.setState({ ...self.state() },
              () => self.props.set_entity({ ...self.props.entity, File: f.name }))
          })) }
  </div>
</div>
}

export function render_Group1_Email_editable_maximised(self:Group1Context) : JSX.Element {
  if (!Permissions.can_edit_Group1()) return render_Group1_Email_maximised(self)
  else
    return !Permissions.can_view_Group1_Email() ? <div /> :
          <div className="model__attribute email">
  <label className="attribute-label attribute-label-email">{i18next.t(`Group1:Email`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Email(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Email(),
        self.props.mode,
        () => self.props.entity.Email,
        v => self.props.set_entity({...self.props.entity, Email:v})) } 
  </div>
</div>
}


export function render_editable_attributes_minimised_Group1(self:Group1Context) {
  let attributes = (<div>
      {render_Group1_Letter_editable_minimised(self)}
        {render_Group1_RichText_editable_minimised(self)}
        {render_Group1_Pic_editable_minimised(self)}
        {render_Group1_IsRad_editable_minimised(self)}
        {render_Group1_Name_editable_minimised(self)}
        {render_Group1_Time_editable_minimised(self)}
        {render_Group1_Date_editable_minimised(self)}
        {render_Group1_Url_editable_minimised(self)}
        {render_Group1_Int_editable_minimised(self)}
        {render_Group1_String_editable_minimised(self)}
        {render_Group1_Double_editable_minimised(self)}
        {render_Group1_DateTime_editable_minimised(self)}
        {render_Group1_Tel_editable_minimised(self)}
        {render_Group1_File_editable_minimised(self)}
        {render_Group1_Email_editable_minimised(self)}
    </div>)
  return attributes
}

export function render_editable_attributes_maximised_Group1(self:Group1Context) {
    let state = self.state()
    let attributes = (<div>
        {render_Group1_Letter_editable_maximised(self)}
        {render_Group1_RichText_editable_maximised(self)}
        {render_Group1_Pic_editable_maximised(self)}
        {render_Group1_IsRad_editable_maximised(self)}
        {render_Group1_Name_editable_maximised(self)}
        {render_Group1_Time_editable_maximised(self)}
        {render_Group1_Date_editable_maximised(self)}
        {render_Group1_Url_editable_maximised(self)}
        {render_Group1_Int_editable_maximised(self)}
        {render_Group1_String_editable_maximised(self)}
        {render_Group1_Double_editable_maximised(self)}
        {render_Group1_DateTime_editable_maximised(self)}
        {render_Group1_Tel_editable_maximised(self)}
        {render_Group1_File_editable_maximised(self)}
        {render_Group1_Email_editable_maximised(self)}
        
        
        
      </div>)
    return attributes
  }

export function render_breadcrumb_Group1(self:Group1Context) {
  return <div className="breadcrumb-group1">Group1</div>
}

export function render_menu_Group1(self:Group1Context) {
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
                  <div className={`menu_entry active`}>
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

export function render_local_menu_Group1(self:Group1Context) {
  let state = self.state()
  return <div className="local-menu">
          <div className="local_menu_entries">
            <div className={`local_menu_entry${self.props.shown_relation == "none" ? " local_menu_entry--active" : ""}`}>
              <a onClick={() =>
                  self.props.set_shown_relation("none")
              }>
                {i18next.t('About this Group1')}
              </a>
            </div>
          
            {!Permissions.can_view_Item1() ? null :
                  <div key={"Group1_Item1"} className={`local_menu_entry${self.props.shown_relation == "Group1_Item1" ? " local_menu_entry--active" : ""}`}>
                    <a onClick={() =>
                      load_relation_Group1_Group1_Item1(self,
                        false,
                        
                        () => self.props.set_shown_relation("Group1_Item1"))
                    }>
                      {i18next.t('Group1_Item1S')}
                    </a>
                  </div>
                }  
          </div>
        </div>
}

export function render_controls_Group1(self:Group1Context) {
  return <div className="control">
    {self.props.allow_maximisation && self.props.set_size ? <a className={`"group1 button button--toggle ${self.props.size != 'preview' ? 'button--toggle--open' : ''}`}
          onClick={() => {
            set_size_Group1(self, self.props.size == "preview" ? "large" : "preview")}
          }>
      </a> : null}
    {Permissions.can_delete_Group1() && self.props.size == "fullscreen" ? <a className="button button--delete"
      onClick={() => confirm(i18next.t('Are you sure?')) &&
        Api.delete_Group1(self.props.entity).then(() => self.props.force_reload(() => self.props.pop()))
      }>
    </a> : null}
    {self.props.size == "fullscreen" && self.props.pages_count > 0 ? <a className="group1 button button--close"
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

export function render_content_Group1(self:Group1Context) {
  let actions:Array<()=>void> =
    [
      self.props.allow_maximisation && self.props.set_size && self.props.size == "preview" ?
        () => set_size_Group1(self, self.props.size == "preview" ? "large" : "preview")
      :
        null,
    ].filter(a => a != null)
  let content =
    Permissions.can_view_Group1() ?
      self.props.size == "preview" ?
        render_preview_Group1(self)
      : self.props.size == "large" ?
        render_large_Group1(self)
      : self.props.size == "fullscreen" ?
        render_large_Group1(self)
      : "Error: unauthorised access to entity."
    : "Error: unauthorised access to entity."
  if (self.props.mode == "view" && actions.length == 1 && !true)
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

export function render_Group1_Letter_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Letter() ? null : <div className="model__attribute letter">
  <label className="attribute-label attribute-label-letter">{i18next.t(`Group1:Letter`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Union(
          self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Letter(),
          self.props.mode,
          Immutable.List<Components.UnionCase>([{ value:"A", label:i18next.t(`Group1:Letter:A`, {context: self.props.inline ? "inline" : ""}) },{ value:"B", label:i18next.t(`Group1:Letter:B`, {context: self.props.inline ? "inline" : ""}) },{ value:"C", label:i18next.t(`Group1:Letter:C`, {context: self.props.inline ? "inline" : ""}) }]),
          () => self.props.entity.Letter,
          (v:string) => self.props.set_entity({...self.props.entity, Letter:(v as "A"|"B"|"C")})) }
  </div>
</div>
      
}
        export function render_Group1_RichText_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_RichText() ? null : <div className="model__attribute richtext">
  <label className="attribute-label attribute-label-richtext">{i18next.t(`Group1:RichText`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_RichText(),
        self.props.mode,
        () => self.props.entity.RichText,
        v => self.props.set_entity({...self.props.entity, RichText:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Pic_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Pic() ? null : <div className="model__attribute pic">
  <label className="attribute-label attribute-label-pic">{i18next.t(`Group1:Pic`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Image(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Pic(),
        self.props.mode,
        () => Api.get_Group1_Pic(self.props.entity),
        (new_src:string) => Api.update_Group1_Pic(self.props.entity, new_src)) }
  </div>
</div>
      
}
        export function render_Group1_IsRad_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_IsRad() ? null : <div className="model__attribute israd">
  <label className="attribute-label attribute-label-israd">{i18next.t(`Group1:IsRad`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Boolean(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_IsRad(),
        self.props.mode,
        () => self.props.entity.IsRad,
        v => self.props.set_entity({...self.props.entity, IsRad:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Name_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Name() ? null : <div className="model__attribute name">
  <div className="model__attribute-content">
    { Components.Title(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Time_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Time() ? null : <div className="model__attribute time">
  <label className="attribute-label attribute-label-time">{i18next.t(`Group1:Time`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Time(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Time(),
        self.props.mode,
        () => self.props.entity.Time,
        v => self.props.set_entity({...self.props.entity, Time:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Date_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Date() ? null : <div className="model__attribute date">
  <label className="attribute-label attribute-label-date">{i18next.t(`Group1:Date`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateOnly(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Date(),
        self.props.mode,
        () => self.props.entity.Date,
        v => self.props.set_entity({...self.props.entity, Date:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Url_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Url() ? null : <div className="model__attribute url">
  <label className="attribute-label attribute-label-url">{i18next.t(`Group1:Url`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Url(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Url(),
        self.props.mode,
        () => self.props.entity.Url,
        v => self.props.set_entity({...self.props.entity, Url:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Int_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Int() ? null : <div className="model__attribute int">
  <label className="attribute-label attribute-label-int">{i18next.t(`Group1:Int`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Int(),
        self.props.mode,
        () => self.props.entity.Int,
        v => self.props.set_entity({...self.props.entity, Int:v})) } 
  </div>
</div>
      
}
        export function render_Group1_String_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_String() ? null : <div className="model__attribute string">
  <label className="attribute-label attribute-label-string">{i18next.t(`Group1:String`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_String(),
        self.props.mode,
        () => self.props.entity.String,
        v => self.props.set_entity({...self.props.entity, String:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Double_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Double() ? null : <div className="model__attribute double">
  <label className="attribute-label attribute-label-double">{i18next.t(`Group1:Double`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Double(),
        self.props.mode,
        () => self.props.entity.Double,
        v => self.props.set_entity({...self.props.entity, Double:v})) } 
  </div>
</div>
      
}
        export function render_Group1_DateTime_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_DateTime() ? null : <div className="model__attribute datetime">
  <label className="attribute-label attribute-label-datetime">{i18next.t(`Group1:DateTime`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateTime(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_DateTime(),
        self.props.mode,
        () => self.props.entity.DateTime,
        v => self.props.set_entity({...self.props.entity, DateTime:v})) } 
  </div>
</div>
      
}
        export function render_Group1_Tel_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Tel() ? null : <div className="model__attribute tel">
  <label className="attribute-label attribute-label-tel">{i18next.t(`Group1:Tel`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Tel(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Tel(),
        self.props.mode,
        () => self.props.entity.Tel,
        v => self.props.set_entity({...self.props.entity, Tel:v})) } 
  </div>
</div>
      
}
        export function render_Group1_File_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_File() ? null : <div className="model__attribute file">
  <label className="attribute-label attribute-label-file">{i18next.t(`Group1:File`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.File(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_File(),
        self.props.mode,
        `/api/v1/Group1/${self.props.entity.Id}/FileDownload`,
        self.props.entity.File,
        (f:File) => Api.upload_Group1_File(self.props.entity, f).then(() => {
            self.setState({ ...self.state() },
              () => self.props.set_entity({ ...self.props.entity, File: f.name }))
          })) }
  </div>
</div>
      
}
        export function render_Group1_Email_minimised(self:Group1Context) : JSX.Element {
      return !Permissions.can_view_Group1_Email() ? null : <div className="model__attribute email">
  <label className="attribute-label attribute-label-email">{i18next.t(`Group1:Email`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Email(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Email(),
        self.props.mode,
        () => self.props.entity.Email,
        v => self.props.set_entity({...self.props.entity, Email:v})) } 
  </div>
</div>
      
}

export function render_Group1_Letter_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Letter() ? null : <div className="model__attribute letter">
  <label className="attribute-label attribute-label-letter">{i18next.t(`Group1:Letter`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Union(
          self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Letter(),
          self.props.mode,
          Immutable.List<Components.UnionCase>([{ value:"A", label:i18next.t(`Group1:Letter:A`, {context: self.props.inline ? "inline" : ""}) },{ value:"B", label:i18next.t(`Group1:Letter:B`, {context: self.props.inline ? "inline" : ""}) },{ value:"C", label:i18next.t(`Group1:Letter:C`, {context: self.props.inline ? "inline" : ""}) }]),
          () => self.props.entity.Letter,
          (v:string) => self.props.set_entity({...self.props.entity, Letter:(v as "A"|"B"|"C")})) }
  </div>
</div>
}
        export function render_Group1_RichText_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_RichText() ? null : <div className="model__attribute richtext">
  <label className="attribute-label attribute-label-richtext">{i18next.t(`Group1:RichText`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.RichText(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_RichText(),
        self.props.mode,
        () => self.props.entity.RichText,
        v => self.props.set_entity({...self.props.entity, RichText:v})) } 
  </div>
</div>
}
        export function render_Group1_Pic_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Pic() ? null : <div className="model__attribute pic">
  <label className="attribute-label attribute-label-pic">{i18next.t(`Group1:Pic`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Image(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Pic(),
        self.props.mode,
        () => Api.get_Group1_Pic(self.props.entity),
        (new_src:string) => Api.update_Group1_Pic(self.props.entity, new_src)) }
  </div>
</div>
}
        export function render_Group1_IsRad_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_IsRad() ? null : <div className="model__attribute israd">
  <label className="attribute-label attribute-label-israd">{i18next.t(`Group1:IsRad`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Boolean(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_IsRad(),
        self.props.mode,
        () => self.props.entity.IsRad,
        v => self.props.set_entity({...self.props.entity, IsRad:v})) } 
  </div>
</div>
}
        export function render_Group1_Name_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Name() ? null : <div className="model__attribute name">
  <div className="model__attribute-content">
    { Components.Title(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Name(),
        self.props.mode,
        () => self.props.entity.Name,
        v => self.props.set_entity({...self.props.entity, Name:v})) } 
  </div>
</div>
}
        export function render_Group1_Time_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Time() ? null : <div className="model__attribute time">
  <label className="attribute-label attribute-label-time">{i18next.t(`Group1:Time`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Time(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Time(),
        self.props.mode,
        () => self.props.entity.Time,
        v => self.props.set_entity({...self.props.entity, Time:v})) } 
  </div>
</div>
}
        export function render_Group1_Date_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Date() ? null : <div className="model__attribute date">
  <label className="attribute-label attribute-label-date">{i18next.t(`Group1:Date`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateOnly(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Date(),
        self.props.mode,
        () => self.props.entity.Date,
        v => self.props.set_entity({...self.props.entity, Date:v})) } 
  </div>
</div>
}
        export function render_Group1_Url_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Url() ? null : <div className="model__attribute url">
  <label className="attribute-label attribute-label-url">{i18next.t(`Group1:Url`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Url(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Url(),
        self.props.mode,
        () => self.props.entity.Url,
        v => self.props.set_entity({...self.props.entity, Url:v})) } 
  </div>
</div>
}
        export function render_Group1_Int_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Int() ? null : <div className="model__attribute int">
  <label className="attribute-label attribute-label-int">{i18next.t(`Group1:Int`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Int(),
        self.props.mode,
        () => self.props.entity.Int,
        v => self.props.set_entity({...self.props.entity, Int:v})) } 
  </div>
</div>
}
        export function render_Group1_String_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_String() ? null : <div className="model__attribute string">
  <label className="attribute-label attribute-label-string">{i18next.t(`Group1:String`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.String(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_String(),
        self.props.mode,
        () => self.props.entity.String,
        v => self.props.set_entity({...self.props.entity, String:v})) } 
  </div>
</div>
}
        export function render_Group1_Double_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Double() ? null : <div className="model__attribute double">
  <label className="attribute-label attribute-label-double">{i18next.t(`Group1:Double`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Number(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Double(),
        self.props.mode,
        () => self.props.entity.Double,
        v => self.props.set_entity({...self.props.entity, Double:v})) } 
  </div>
</div>
}
        export function render_Group1_DateTime_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_DateTime() ? null : <div className="model__attribute datetime">
  <label className="attribute-label attribute-label-datetime">{i18next.t(`Group1:DateTime`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.DateTime(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_DateTime(),
        self.props.mode,
        () => self.props.entity.DateTime,
        v => self.props.set_entity({...self.props.entity, DateTime:v})) } 
  </div>
</div>
}
        export function render_Group1_Tel_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Tel() ? null : <div className="model__attribute tel">
  <label className="attribute-label attribute-label-tel">{i18next.t(`Group1:Tel`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Tel(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Tel(),
        self.props.mode,
        () => self.props.entity.Tel,
        v => self.props.set_entity({...self.props.entity, Tel:v})) } 
  </div>
</div>
}
        export function render_Group1_File_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_File() ? null : <div className="model__attribute file">
  <label className="attribute-label attribute-label-file">{i18next.t(`Group1:File`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.File(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_File(),
        self.props.mode,
        `/api/v1/Group1/${self.props.entity.Id}/FileDownload`,
        self.props.entity.File,
        (f:File) => Api.upload_Group1_File(self.props.entity, f).then(() => {
            self.setState({ ...self.state() },
              () => self.props.set_entity({ ...self.props.entity, File: f.name }))
          })) }
  </div>
</div>
}
        export function render_Group1_Email_maximised(self:Group1Context) : JSX.Element {
        return !Permissions.can_view_Group1_Email() ? null : <div className="model__attribute email">
  <label className="attribute-label attribute-label-email">{i18next.t(`Group1:Email`, {context: self.props.inline ? "inline" : ""})}</label>
  <div className="model__attribute-content">
    { Components.Email(
        self.props.is_editable && Permissions.can_edit_Group1() && Permissions.can_edit_Group1_Email(),
        self.props.mode,
        () => self.props.entity.Email,
        v => self.props.set_entity({...self.props.entity, Email:v})) } 
  </div>
</div>
}

export function render_preview_Group1(self:Group1Context) {
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Group1())
    attributes = (<div className="model__attributes">
      { render_Group1_Letter_minimised(self) }
        { render_Group1_RichText_minimised(self) }
        { render_Group1_Pic_minimised(self) }
        { render_Group1_IsRad_minimised(self) }
        { render_Group1_Name_minimised(self) }
        { render_Group1_Time_minimised(self) }
        { render_Group1_Date_minimised(self) }
        { render_Group1_Url_minimised(self) }
        { render_Group1_Int_minimised(self) }
        { render_Group1_String_minimised(self) }
        { render_Group1_Double_minimised(self) }
        { render_Group1_DateTime_minimised(self) }
        { render_Group1_Tel_minimised(self) }
        { render_Group1_File_minimised(self) }
        { render_Group1_Email_minimised(self) }
    </div>)
  else
    attributes = render_editable_attributes_minimised_Group1(self)
  return (<div className="block">
      {attributes}
    </div>)
}

export function render_large_Group1(self:Group1Context) {
  let state = self.state()
  let attributes:JSX.Element = null
  if (self.props.mode == "view" || !Permissions.can_edit_Group1())
    attributes = (<div className="model__attributes">
      { render_Group1_Letter_maximised(self) }
        { render_Group1_RichText_maximised(self) }
        { render_Group1_Pic_maximised(self) }
        { render_Group1_IsRad_maximised(self) }
        { render_Group1_Name_maximised(self) }
        { render_Group1_Time_maximised(self) }
        { render_Group1_Date_maximised(self) }
        { render_Group1_Url_maximised(self) }
        { render_Group1_Int_maximised(self) }
        { render_Group1_String_maximised(self) }
        { render_Group1_Double_maximised(self) }
        { render_Group1_DateTime_maximised(self) }
        { render_Group1_Tel_maximised(self) }
        { render_Group1_File_maximised(self) }
        { render_Group1_Email_maximised(self) }
        
    </div>)
  else
    attributes = render_editable_attributes_maximised_Group1(self)
  return (<div className="block">
      {self.props.nesting_depth == 0 && self.props.shown_relation != "all" && self.props.shown_relation != "none" ? null : attributes}
      {render_relations_Group1(self)}
    </div>)
}


export function render_Group1_HomePage_Group1(self:Group1Context, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "HomePage_Group1") || !Permissions.can_view_HomePage())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("group1_homepage_group1",
   "Group1",
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
      Group1_HomePage_Group1_page_index(self),
      Group1_HomePage_Group1_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.HomePage != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            HomePage: {
              ...state.HomePage,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_Group1_HomePage_Group1(self, false, ))
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
                  mode:self.props.mode == "edit" && (Permissions.can_edit_HomePage_Group1()
                        || Permissions.can_create_HomePage_Group1()
                        || Permissions.can_delete_HomePage_Group1()) ?
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
                    delete: !Permissions.can_delete_HomePage() || !Group1_HomePage_Group1_can_delete(self) ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.delete_HomePage(i.element).then(() =>
                      load_relation_Group1_HomePage_Group1(self, false, ))
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


export function render_Group1_Group1_Item1(self:Group1Context, context:"presentation_structure"|"default") {
  if ((context == "default" && self.props.shown_relation != "all" && self.props.shown_relation != "Group1_Item1") || !Permissions.can_view_Item1())
    return null
  let state = self.state()
  return <div>
    
    { List.render_relation("group1_group1_item1",
   "Group1",
   "Item1",
   "Item1S",
   self.props.nesting_depth > 0,
   false,
   false,
   false)
  (
      state.Item1 != "loading" ?
        state.Item1.IdsInServerOrder.map(id => state.Item1 != "loading" && state.Item1.Items.get(id)):
        state.Item1,
      Group1_Group1_Item1_page_index(self),
      Group1_Group1_Item1_num_pages(self),
      new_page_index => {
          let state = self.state()
          state.Item1 != "loading" &&
          self.setState({...self.state(),
            update_count:self.state().update_count+1,
            Item1: {
              ...state.Item1,
              PageIndex:new_page_index
            }
          }, () =>  load_relation_Group1_Group1_Item1(self, false, ))
        },
      (i,_) => {
          let i_id = i.element.Id
          let state = self.state()
          return <div key={i_id}
            className={`model-nested__item ${i.size != "preview" ? "model-nested__item--open" : ""}
                        ${state.Item1 != "loading" && state.Item1.JustCreated.has(i_id) && state.Item1.JustCreated.get(i_id) ? "newly-created" : ""}` }
          
            >
            <div key={i_id}>
              {
                Item1Views.Item1({
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
                  is_editable:state.Item1 != "loading" && state.Item1.Editable.get(i_id),
                  shown_relation:i.shown_relation,
                  set_shown_relation:(new_shown_relation:string, callback) => {
                    let state = self.state()
                    state.Item1 != "loading" &&
                    self.setState({...self.state(),
                      Item1:
                        {
                          ...state.Item1,
                          Items:state.Item1.Items.set(i_id,{...state.Item1.Items.get(i_id), shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                  nested_entity_names: self.props.nested_entity_names.push("Item1"),
                  
                  set_size:(new_size:Utils.EntitySize, callback) => {
                    let new_shown_relation = new_size == "large" ? "all" : i.shown_relation
                    let state = self.state()
                    state.Item1 != "loading" &&
                    self.setState({...self.state(),
                      Item1:
                        {
                          ...state.Item1,
                          Items:state.Item1.Items.set(i_id,
                            {...state.Item1.Items.get(i_id),
                              size:new_size, shown_relation:new_shown_relation})
                        }
                    }, callback)
                  },
                    
                  toggle_button:undefined,
                  set_mode:undefined,
                  set_entity:(new_entity:Models.Item1, callback?:()=>void, force_update_count_increment?:boolean) => {
                    let state = self.state()
                    state.Item1 != "loading" &&
                    self.setState({...self.state(),
                      dirty_Item1:state.dirty_Item1.set(i_id, new_entity),
                      update_count:force_update_count_increment ? self.state().update_count+1 : state.update_count,
                      Item1:
                        {
                          ...state.Item1,
                          Items:state.Item1.Items.set(i_id,{...state.Item1.Items.get(i_id), element:new_entity})
                        }
                    }, callback)
                  },
                  unlink: undefined,
                  delete: !Permissions.can_delete_Group1_Item1() ?
                    null
                    :
                    () => confirm(i18next.t('Are you sure?')) && Api.unlink_Group1_Group1_Item1S(self.props.entity, i.element).then(() =>
                      load_relation_Group1_Group1_Item1(self, false, ))
                })
              }
            </div>
          </div>
        },
      () =>
        <div>
          {Permissions.can_create_Item1() && Permissions.can_create_Group1_Item1() && Group1_Group1_Item1_can_create(self) ? render_new_Group1_Group1_Item1(self) : null}
          {Permissions.can_create_Group1_Item1() ? render_add_existing_Group1_Group1_Item1(self) : null}
        </div>)
    }
    
    </div>
}



export function render_relations_Group1(self:Group1Context) {
  return <div className="relations">
      { render_Group1_Group1_Item1(self, "default") }
      
    </div>
}

export function render_add_existing_Group1_Group1_Item1(self:Group1Context) {
    
    let state = self.state()
    return self.props.mode == "edit" ?
      <div className="button__actions">
        {
          state.add_step_Item1 != "open" ?
            <Buttons.Add disabled={state.Item1 == "loading" ? true : state.Item1.TotalCount >= 3} 
              onClick={() =>
                self.setState({...self.state(), add_step_Item1:"open"}) }
                  target_name={"Item1"} />
          :
          React.createElement(List.AddToRelation,
            {
              relation_name:"group1_group1_item1",
              source_name:"Group1",
              target_name:"Item1",
              target_plural:"Item1S",
              page_size:25,
              render_target:(i,i_id) =>
                <div key={i_id} className="group__item">
                  <a className="group__button button button--existing"
                    onClick={() =>
                        self.setState({...self.state(), add_step_Item1:"saving"}, () =>
                          Api.link_Group1_Group1_Item1S(self.props.entity, i).then(() =>
                            self.setState({...self.state(), add_step_Item1:"closed"}, () =>
                              load_relation_Group1_Group1_Item1(self, false, ))))
                      }>
                      Add existing
                  </a>
                  <div className="group__title">
                    {
                      Item1Views.Item1({
                        ...self.props,
                        entity:i,
                        nesting_depth:self.props.nesting_depth+1,
                        size:"preview",
                        mode:"view",
                        is_editable:false,
                        nested_entity_names: self.props.nested_entity_names.push("Item1"),
                        set_size:undefined,
                        toggle_button:undefined,
                        set_mode:undefined,
                        set_entity:(new_entity:Models.Item1, callback?:()=>void) => {},
                        unlink: undefined,
                        delete: undefined
                      })
                    }
                  </div>
                </div>,
              cancel:() => self.setState({...self.state(), add_step_Item1:"closed"}),
              get_items:[
                { name: "Item1", get: async(i,s) => Api.get_unlinked_Group1_Group1_Item1S(self.props.entity, i, s) },
              ]
            })
        }
      </div>
    :
      null
    }
  

export function render_new_Group1_Group1_Item1(self:Group1Context) {
    let state = self.state()
    return  self.props.mode == "edit" ?
      <div className="button__actions">
        <div className="new-item1">
              <button disabled={state.Item1 == "loading" ? true : state.Item1.TotalCount >= 3} 
                      className="new-item1 button button--new"
                      onClick={() =>
                          Api.create_linked_Group1_Group1_Item1S_Item1(self.props.entity).then(e => {
                              e.length > 0 &&
                              Api.update_Item1(
                                ({ ...e[0], Name:"", Description:null } as Models.Item1)).then(() =>
                                load_relation_Group1_Group1_Item1(self, true, () =>
                                    self.setState({...self.state(), add_step_Item1:"closed"})
                                  )
                                )
                          })
                      }>
                  {i18next.t('Create new Item1')}
              </button>
            </div>
        </div>
      :
      null
    }
  

export function render_saving_animations_Group1(self:Group1Context) {
  return self.state().dirty_HomePage.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/> : 
    self.state().dirty_Item1.count() > 0 ?
    <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"red"}} className="saving"/>
    : <div style={{position:"fixed", zIndex:10000, top:0, left:0, width:"20px", height:"20px", backgroundColor:"cornflowerblue"}} className="saved"/>
}

export type Group1Context = {state:()=>Group1State, props:Utils.EntityComponentProps<Models.Group1>, setState:(new_state:Group1State, callback?:()=>void) => void}

export type Group1State = {
    update_count:number
    add_step_HomePage:"closed"|"open"|"saving",
      dirty_HomePage:Immutable.Map<number,Models.HomePage>,
      HomePage:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.HomePage>>|"loading"
  add_step_Item1:"closed"|"open"|"saving",
      dirty_Item1:Immutable.Map<number,Models.Item1>,
      Item1:Utils.PaginatedItems<{ shown_relation: string } & Utils.EntityAndSize<Models.Item1>>|"loading"
  }
export class Group1Component extends React.Component<Utils.EntityComponentProps<Models.Group1>, Group1State> {
  constructor(props:Utils.EntityComponentProps<Models.Group1>, context:any) {
    super(props, context)
    this.state = { update_count:0,add_step_HomePage:"closed", dirty_HomePage:Immutable.Map<number,Models.HomePage>(), HomePage:"loading", add_step_Item1:"closed", dirty_Item1:Immutable.Map<number,Models.Item1>(), Item1:"loading" }
  }

  get_self() {
    return {state:() => this.state, props:this.props, setState:(ns,c)=>this.setState(ns,c)}
  }

  componentWillReceiveProps(new_props:Utils.EntityComponentProps<Models.Group1>) {
    if (new_props.size == "breadcrumb") return
    let current_logged_in_entity =  null
    let new_logged_in_entity =  null
    if (new_props.mode != this.props.mode || (new_props.size != this.props.size && (new_props.size == "large" || new_props.size == "fullscreen")) ||
        new_props.logic_frame != this.props.logic_frame ||
        (current_logged_in_entity && !new_logged_in_entity) ||
        (!current_logged_in_entity && new_logged_in_entity) ||
        (current_logged_in_entity && new_logged_in_entity && current_logged_in_entity.Id != new_logged_in_entity.Id)) {
      load_relations_Group1(this.get_self(),  )
    }
  }

  thread:number = null
  componentWillMount() {
    if (this.props.size == "breadcrumb") return
    if (this.props.size != "preview") {
      
      load_relations_Group1(this.get_self(), )
    }

    this.thread = setInterval(() => {
      if (this.state.dirty_HomePage.count() > 0) {
         let first = this.state.dirty_HomePage.first()
         this.setState({...this.state, dirty_HomePage: this.state.dirty_HomePage.remove(first.Id)}, () =>
           Api.update_HomePage(first)
         )
       } else if (this.state.dirty_Item1.count() > 0) {
         let first = this.state.dirty_Item1.first()
         this.setState({...this.state, dirty_Item1: this.state.dirty_Item1.remove(first.Id)}, () =>
           Api.update_Item1(first)
         )
       }

    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.thread)
  }

  render() {
    if (this.props.size == "breadcrumb") {
      return Permissions.can_view_Group1() ?
              render_breadcrumb_Group1(this.get_self())
              : null
    }

    return <div id={`Group1_${this.props.entity.Id.toString()}_${this.state.update_count}`} className={`model group1`}>
      { render_saving_animations_Group1(this.get_self()) }
      { this.props.nesting_depth == 0 ? render_menu_Group1(this.get_self()) : null }
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
        { this.props.nesting_depth == 0 ? render_local_menu_Group1(this.get_self()) : null }
        { render_controls_Group1(this.get_self()) }
        { render_content_Group1(this.get_self()) }
      </div>
    </div>
  }
}

export let Group1 = (props:Utils.EntityComponentProps<Models.Group1>) : JSX.Element =>
  <Group1Component {...props} />

export let Group1_to_page = (id:number) => {
  let can_edit = Utils.any_of([Permissions.can_edit_Group1, Permissions.can_edit_HomePage_Group1, Permissions.can_edit_Group1_Item1, Permissions.can_edit_HomePage, Permissions.can_edit_Item1])
  return Utils.scene_to_page<Models.Group1>(can_edit, Group1, Api.get_Group1(id), Api.update_Group1, "Group1", "Group1", `/Group1S/${id}`)
}

export let Group1_to = (id:number, slug:string, target_element_id:string, ) => {
  Utils.render_page_manager(slug, target_element_id,
    Group1_to_page(id),
    
  )
  
}
