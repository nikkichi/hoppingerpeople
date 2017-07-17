import * as Models from './generated_models'
import * as Immutable from 'immutable'
import * as Moment from 'moment'
import 'whatwg-fetch'

export type ItemWithEditable<T> = {Item:T, Editable:boolean, JustCreated:boolean}

export type RawPage<T> = {
  Items:ItemWithEditable<T>[]
  PageIndex:number
  SearchQuery:string
  NumPages:number
  PageSize:number
  TotalCount:number
  CanCreate:boolean
  CanDelete:boolean
}

export let parse_date = <T>(e:any) : T&{CreatedDate:Moment.Moment} => { return { ...e, CreatedDate: Moment.utc(e.CreatedDate) }}

export let make_page = <T>(res:any, parse_other_args:(e:any) => T) : RawPage<T> => { return {
  Items: res.Items.map((i:any) => { return{ ...i, Item:parse_date(i.Item)} }).map((i:any) => { return{ ...i, Item:parse_other_args(i.Item)} }),
  PageIndex: res.PageIndex,
  SearchQuery:res.SearchQuery,
  NumPages: res.NumPages,
  PageSize: res.PageSize,
  TotalCount: res.TotalCount,
  CanCreate: res.CanCreate,
  CanDelete: res.CanDelete
}}

export async function get_HomePage_HomePage_Group1S(source:Models.HomePage, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Group1>> {
  let res = await fetch(`/api/v1/HomePage/${source.Id}/HomePage_Group1S?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group1>(json, e => { return {...e, Time: Moment.utc(e.Time), Date: Moment.utc(e.Date), DateTime: Moment.utc(e.DateTime)}})
}

export async function get_HomePage_HomePage_Group1S_Group1(source:Models.HomePage, page_index:number, page_size:number, id:number) : Promise<Models.Group1> {
  let res = await fetch(`/api/v1/HomePage/${source.Id}/HomePage_Group1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate), Time: Moment.utc(json.Time), Date: Moment.utc(json.Date), DateTime: Moment.utc(json.DateTime) } as Models.Group1
}

export async function get_HomePage_HomePage_Group1S_Group1_by_id(source:Models.HomePage, id:number) : Promise<Models.Group1> {
  let res = await fetch(`/api/v1/HomePage/${source.Id}/HomePage_Group1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate), Time: Moment.utc(json.Time), Date: Moment.utc(json.Date), DateTime: Moment.utc(json.DateTime) } as Models.Group1
}




export async function get_HomePage_HomePage_Group2S(source:Models.HomePage, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Group2>> {
  let res = await fetch(`/api/v1/HomePage/${source.Id}/HomePage_Group2S?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group2>(json, e => { return {...e, }})
}

export async function get_HomePage_HomePage_Group2S_Group2(source:Models.HomePage, page_index:number, page_size:number, id:number) : Promise<Models.Group2> {
  let res = await fetch(`/api/v1/HomePage/${source.Id}/HomePage_Group2S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Group2
}

export async function get_HomePage_HomePage_Group2S_Group2_by_id(source:Models.HomePage, id:number) : Promise<Models.Group2> {
  let res = await fetch(`/api/v1/HomePage/${source.Id}/HomePage_Group2S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Group2
}




export async function create_HomePage() : Promise<Models.HomePage> {
  let res = await fetch(`/api/v1/HomePage/`,
    { method: 'post', credentials: 'include', headers:{'content-type': 'application/json',
      'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.HomePage
}

export async function update_HomePage(item:Models.HomePage) : Promise<void> {
  let res = await fetch(`/api/v1/HomePage/`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined, }), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function update_HomePage_with_pictures(item:Models.HomePage) : Promise<void> {
  let res = await fetch(`/api/v1/HomePage/WithPictures`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined}), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function delete_HomePage(source:Models.HomePage) : Promise<void> {
  let res = await fetch(`/api/v1/HomePage/${source.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function get_HomePage(id:number) : Promise<ItemWithEditable<Models.HomePage>> {
  let res = await fetch(`/api/v1/HomePage/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.HomePage,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_HomePage_with_pictures(id:number) : Promise<ItemWithEditable<Models.HomePage>> {
  let res = await fetch(`/api/v1/HomePage/${id}/WithPictures`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.HomePage,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_HomePages(page_index:number, page_size:number, search_query:string = null) : Promise<RawPage<Models.HomePage>> {
  let res = await fetch(`/api/v1/HomePage?page_index=${page_index}&page_size=${page_size}${(search_query != null ? "&page_size=" + search_query : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })

  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.HomePage>(json, e => { return {...e, }})
}







  
  
export async function get_Group1_HomePage_Group1S(source:Models.Group1, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.HomePage>> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/HomePage_Group1S?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.HomePage>(json, e => { return {...e, }})
}

export async function get_Group1_HomePage_Group1S_HomePage(source:Models.Group1, page_index:number, page_size:number, id:number) : Promise<Models.HomePage> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/HomePage_Group1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.HomePage
}

export async function get_Group1_HomePage_Group1S_HomePage_by_id(source:Models.Group1, id:number) : Promise<Models.HomePage> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/HomePage_Group1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.HomePage
}




export async function get_Group1_Group1_Item1S(source:Models.Group1, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Item1>> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/Group1_Item1S?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item1>(json, e => { return {...e, }})
}

export async function get_Group1_Group1_Item1S_Item1(source:Models.Group1, page_index:number, page_size:number, id:number) : Promise<Models.Item1> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/Group1_Item1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item1
}

export async function get_Group1_Group1_Item1S_Item1_by_id(source:Models.Group1, id:number) : Promise<Models.Item1> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/Group1_Item1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item1
}


export async function get_unlinked_Group1_Group1_Item1S(source:Models.Group1, page_index:number, page_size:number) : Promise<RawPage<Models.Item1>> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/unlinked/Group1_Item1S?page_index=${page_index}&page_size=${page_size}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item1>(json, e => { return {...e, }})
}

    
export async function create_linked_Group1_Group1_Item1S_Item1(source:Models.Group1) : Promise<Models.Item1[]> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/Group1_Item1S_Item1`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json.map(e => { return {...e, CreatedDate: Moment.utc(e.CreatedDate),  }}) as Models.Item1[]
}

export async function link_Group1_Group1_Item1S(source:Models.Group1, target:Models.Item1) : Promise<void> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/Group1_Item1S/${target.Id}`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function unlink_Group1_Group1_Item1S(source:Models.Group1, target:Models.Item1) : Promise<void> {
  let res = await fetch(`/api/v1/Group1/${source.Id}/Group1_Item1S/${target.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}


export async function create_Group1() : Promise<Models.Group1> {
  let res = await fetch(`/api/v1/Group1/`,
    { method: 'post', credentials: 'include', headers:{'content-type': 'application/json',
      'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate), Time: Moment.utc(json.Time), Date: Moment.utc(json.Date), DateTime: Moment.utc(json.DateTime) } as Models.Group1
}

export async function update_Group1(item:Models.Group1) : Promise<void> {
  let res = await fetch(`/api/v1/Group1/`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined, Pic:""}), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function update_Group1_with_pictures(item:Models.Group1) : Promise<void> {
  let res = await fetch(`/api/v1/Group1/WithPictures`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined}), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function delete_Group1(source:Models.Group1) : Promise<void> {
  let res = await fetch(`/api/v1/Group1/${source.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function get_Group1(id:number) : Promise<ItemWithEditable<Models.Group1>> {
  let res = await fetch(`/api/v1/Group1/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate), Time: Moment.utc(json.Item.Time), Date: Moment.utc(json.Item.Date), DateTime: Moment.utc(json.Item.DateTime) } as Models.Group1,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Group1_with_pictures(id:number) : Promise<ItemWithEditable<Models.Group1>> {
  let res = await fetch(`/api/v1/Group1/${id}/WithPictures`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate), Time: Moment.utc(json.Item.Time), Date: Moment.utc(json.Item.Date), DateTime: Moment.utc(json.Item.DateTime) } as Models.Group1,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Group1S(page_index:number, page_size:number, search_query:string = null) : Promise<RawPage<Models.Group1>> {
  let res = await fetch(`/api/v1/Group1?page_index=${page_index}&page_size=${page_size}${(search_query != null ? "&page_size=" + search_query : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })

  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group1>(json, e => { return {...e, Time: Moment.utc(e.Time), Date: Moment.utc(e.Date), DateTime: Moment.utc(e.DateTime)}})
}


export async function get_Group1_Pic(item:Models.Group1) : Promise<string> {
  let res = await fetch(`/api/v1/Group1/${item.Id}/Pic`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json.Content
}

export async function update_Group1_Pic(item:Models.Group1, new_src:string) : Promise<void> {
  let res = await fetch(`/api/v1/Group1/${item.Id}/Pic`, { method: 'put', body: JSON.stringify({ Content: new_src }), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}


export async function download_Group1_File(id:number) : Promise<string> {
  let res = await fetch(`/api/v1/Group1/${id}/FileDownload`, { method: 'get', credentials: 'include', headers:{} })
  let json = await res.text()
  if (!res.ok) throw Error(res.statusText)
  return json as string
}

export async function upload_Group1_File(source:Models.Group1,file:File) : Promise<void> {
  let files_data = new FormData()
  files_data.append(file.name, file)

  let res = await fetch(`/api/v1/Group1/${source.Id}/FileUpload`,  {
    method: "POST",
    body: files_data, credentials: 'include', headers:{
      'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}


  
  
export async function get_Item1_Group1_Item1S(source:Models.Item1, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Group1>> {
  let res = await fetch(`/api/v1/Item1/${source.Id}/Group1_Item1S?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group1>(json, e => { return {...e, Time: Moment.utc(e.Time), Date: Moment.utc(e.Date), DateTime: Moment.utc(e.DateTime)}})
}

export async function get_Item1_Group1_Item1S_Group1(source:Models.Item1, page_index:number, page_size:number, id:number) : Promise<Models.Group1> {
  let res = await fetch(`/api/v1/Item1/${source.Id}/Group1_Item1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate), Time: Moment.utc(json.Time), Date: Moment.utc(json.Date), DateTime: Moment.utc(json.DateTime) } as Models.Group1
}

export async function get_Item1_Group1_Item1S_Group1_by_id(source:Models.Item1, id:number) : Promise<Models.Group1> {
  let res = await fetch(`/api/v1/Item1/${source.Id}/Group1_Item1S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate), Time: Moment.utc(json.Time), Date: Moment.utc(json.Date), DateTime: Moment.utc(json.DateTime) } as Models.Group1
}


export async function get_unlinked_Item1_Group1_Item1S(source:Models.Item1, page_index:number, page_size:number) : Promise<RawPage<Models.Group1>> {
  let res = await fetch(`/api/v1/Item1/${source.Id}/unlinked/Group1_Item1S?page_index=${page_index}&page_size=${page_size}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group1>(json, e => { return {...e, Time: Moment.utc(e.Time), Date: Moment.utc(e.Date), DateTime: Moment.utc(e.DateTime)}})
}

    
export async function create_linked_Item1_Group1_Item1S_Group1(source:Models.Item1) : Promise<Models.Group1[]> {
  let res = await fetch(`/api/v1/Item1/${source.Id}/Group1_Item1S_Group1`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json.map(e => { return {...e, CreatedDate: Moment.utc(e.CreatedDate), Time: Moment.utc(e.Time), Date: Moment.utc(e.Date), DateTime: Moment.utc(e.DateTime) }}) as Models.Group1[]
}

export async function link_Item1_Group1_Item1S(source:Models.Item1, target:Models.Group1) : Promise<void> {
  let res = await fetch(`/api/v1/Item1/${source.Id}/Group1_Item1S/${target.Id}`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function unlink_Item1_Group1_Item1S(source:Models.Item1, target:Models.Group1) : Promise<void> {
  let res = await fetch(`/api/v1/Item1/${source.Id}/Group1_Item1S/${target.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}


export async function create_Item1() : Promise<Models.Item1> {
  let res = await fetch(`/api/v1/Item1/`,
    { method: 'post', credentials: 'include', headers:{'content-type': 'application/json',
      'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item1
}

export async function update_Item1(item:Models.Item1) : Promise<void> {
  let res = await fetch(`/api/v1/Item1/`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined, }), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function update_Item1_with_pictures(item:Models.Item1) : Promise<void> {
  let res = await fetch(`/api/v1/Item1/WithPictures`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined}), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function delete_Item1(source:Models.Item1) : Promise<void> {
  let res = await fetch(`/api/v1/Item1/${source.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function get_Item1(id:number) : Promise<ItemWithEditable<Models.Item1>> {
  let res = await fetch(`/api/v1/Item1/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Item1,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Item1_with_pictures(id:number) : Promise<ItemWithEditable<Models.Item1>> {
  let res = await fetch(`/api/v1/Item1/${id}/WithPictures`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Item1,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Item1S(page_index:number, page_size:number, search_query:string = null) : Promise<RawPage<Models.Item1>> {
  let res = await fetch(`/api/v1/Item1?page_index=${page_index}&page_size=${page_size}${(search_query != null ? "&page_size=" + search_query : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })

  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item1>(json, e => { return {...e, }})
}







  
  
export async function get_Group2_HomePage_Group2S(source:Models.Group2, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.HomePage>> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/HomePage_Group2S?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.HomePage>(json, e => { return {...e, }})
}

export async function get_Group2_HomePage_Group2S_HomePage(source:Models.Group2, page_index:number, page_size:number, id:number) : Promise<Models.HomePage> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/HomePage_Group2S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.HomePage
}

export async function get_Group2_HomePage_Group2S_HomePage_by_id(source:Models.Group2, id:number) : Promise<Models.HomePage> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/HomePage_Group2S/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.HomePage
}




export async function get_Group2_Group2_Item2AS(source:Models.Group2, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Item2A>> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2AS?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item2A>(json, e => { return {...e, }})
}

export async function get_Group2_Group2_Item2AS_Item2A(source:Models.Group2, page_index:number, page_size:number, id:number) : Promise<Models.Item2A> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2AS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item2A
}

export async function get_Group2_Group2_Item2AS_Item2A_by_id(source:Models.Group2, id:number) : Promise<Models.Item2A> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2AS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item2A
}


export async function get_unlinked_Group2_Group2_Item2AS(source:Models.Group2, page_index:number, page_size:number) : Promise<RawPage<Models.Item2A>> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/unlinked/Group2_Item2AS?page_index=${page_index}&page_size=${page_size}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item2A>(json, e => { return {...e, }})
}

    
export async function create_linked_Group2_Group2_Item2AS_Item2A(source:Models.Group2) : Promise<Models.Item2A[]> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2AS_Item2A`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json.map(e => { return {...e, CreatedDate: Moment.utc(e.CreatedDate),  }}) as Models.Item2A[]
}

export async function link_Group2_Group2_Item2AS(source:Models.Group2, target:Models.Item2A) : Promise<void> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2AS/${target.Id}`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function unlink_Group2_Group2_Item2AS(source:Models.Group2, target:Models.Item2A) : Promise<void> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2AS/${target.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}


export async function get_Group2_Group2_Item2BS(source:Models.Group2, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Item2B>> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2BS?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item2B>(json, e => { return {...e, }})
}

export async function get_Group2_Group2_Item2BS_Item2B(source:Models.Group2, page_index:number, page_size:number, id:number) : Promise<Models.Item2B> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2BS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item2B
}

export async function get_Group2_Group2_Item2BS_Item2B_by_id(source:Models.Group2, id:number) : Promise<Models.Item2B> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2BS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item2B
}


export async function get_unlinked_Group2_Group2_Item2BS(source:Models.Group2, page_index:number, page_size:number) : Promise<RawPage<Models.Item2B>> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/unlinked/Group2_Item2BS?page_index=${page_index}&page_size=${page_size}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item2B>(json, e => { return {...e, }})
}

    
export async function create_linked_Group2_Group2_Item2BS_Item2B(source:Models.Group2) : Promise<Models.Item2B[]> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2BS_Item2B`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json.map(e => { return {...e, CreatedDate: Moment.utc(e.CreatedDate),  }}) as Models.Item2B[]
}

export async function link_Group2_Group2_Item2BS(source:Models.Group2, target:Models.Item2B) : Promise<void> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2BS/${target.Id}`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function unlink_Group2_Group2_Item2BS(source:Models.Group2, target:Models.Item2B) : Promise<void> {
  let res = await fetch(`/api/v1/Group2/${source.Id}/Group2_Item2BS/${target.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}


export async function create_Group2() : Promise<Models.Group2> {
  let res = await fetch(`/api/v1/Group2/`,
    { method: 'post', credentials: 'include', headers:{'content-type': 'application/json',
      'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Group2
}

export async function update_Group2(item:Models.Group2) : Promise<void> {
  let res = await fetch(`/api/v1/Group2/`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined, }), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function update_Group2_with_pictures(item:Models.Group2) : Promise<void> {
  let res = await fetch(`/api/v1/Group2/WithPictures`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined}), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function delete_Group2(source:Models.Group2) : Promise<void> {
  let res = await fetch(`/api/v1/Group2/${source.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function get_Group2(id:number) : Promise<ItemWithEditable<Models.Group2>> {
  let res = await fetch(`/api/v1/Group2/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Group2,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Group2_with_pictures(id:number) : Promise<ItemWithEditable<Models.Group2>> {
  let res = await fetch(`/api/v1/Group2/${id}/WithPictures`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Group2,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Group2S(page_index:number, page_size:number, search_query:string = null) : Promise<RawPage<Models.Group2>> {
  let res = await fetch(`/api/v1/Group2?page_index=${page_index}&page_size=${page_size}${(search_query != null ? "&page_size=" + search_query : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })

  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group2>(json, e => { return {...e, }})
}







  
  
export async function get_Item2A_Group2_Item2AS(source:Models.Item2A, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Group2>> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}/Group2_Item2AS?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group2>(json, e => { return {...e, }})
}

export async function get_Item2A_Group2_Item2AS_Group2(source:Models.Item2A, page_index:number, page_size:number, id:number) : Promise<Models.Group2> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}/Group2_Item2AS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Group2
}

export async function get_Item2A_Group2_Item2AS_Group2_by_id(source:Models.Item2A, id:number) : Promise<Models.Group2> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}/Group2_Item2AS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Group2
}


export async function get_unlinked_Item2A_Group2_Item2AS(source:Models.Item2A, page_index:number, page_size:number) : Promise<RawPage<Models.Group2>> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}/unlinked/Group2_Item2AS?page_index=${page_index}&page_size=${page_size}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group2>(json, e => { return {...e, }})
}

    
export async function create_linked_Item2A_Group2_Item2AS_Group2(source:Models.Item2A) : Promise<Models.Group2[]> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}/Group2_Item2AS_Group2`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json.map(e => { return {...e, CreatedDate: Moment.utc(e.CreatedDate),  }}) as Models.Group2[]
}

export async function link_Item2A_Group2_Item2AS(source:Models.Item2A, target:Models.Group2) : Promise<void> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}/Group2_Item2AS/${target.Id}`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function unlink_Item2A_Group2_Item2AS(source:Models.Item2A, target:Models.Group2) : Promise<void> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}/Group2_Item2AS/${target.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}


export async function create_Item2A() : Promise<Models.Item2A> {
  let res = await fetch(`/api/v1/Item2A/`,
    { method: 'post', credentials: 'include', headers:{'content-type': 'application/json',
      'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item2A
}

export async function update_Item2A(item:Models.Item2A) : Promise<void> {
  let res = await fetch(`/api/v1/Item2A/`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined, }), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function update_Item2A_with_pictures(item:Models.Item2A) : Promise<void> {
  let res = await fetch(`/api/v1/Item2A/WithPictures`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined}), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function delete_Item2A(source:Models.Item2A) : Promise<void> {
  let res = await fetch(`/api/v1/Item2A/${source.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function get_Item2A(id:number) : Promise<ItemWithEditable<Models.Item2A>> {
  let res = await fetch(`/api/v1/Item2A/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Item2A,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Item2A_with_pictures(id:number) : Promise<ItemWithEditable<Models.Item2A>> {
  let res = await fetch(`/api/v1/Item2A/${id}/WithPictures`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Item2A,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Item2AS(page_index:number, page_size:number, search_query:string = null) : Promise<RawPage<Models.Item2A>> {
  let res = await fetch(`/api/v1/Item2A?page_index=${page_index}&page_size=${page_size}${(search_query != null ? "&page_size=" + search_query : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })

  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item2A>(json, e => { return {...e, }})
}







  
  
export async function get_Item2B_Group2_Item2BS(source:Models.Item2B, page_index:number, page_size:number, query_string:string = null) : Promise<RawPage<Models.Group2>> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}/Group2_Item2BS?page_index=${page_index}&page_size=${page_size}${(query_string != null ? "&search_query=" + query_string : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group2>(json, e => { return {...e, }})
}

export async function get_Item2B_Group2_Item2BS_Group2(source:Models.Item2B, page_index:number, page_size:number, id:number) : Promise<Models.Group2> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}/Group2_Item2BS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Group2
}

export async function get_Item2B_Group2_Item2BS_Group2_by_id(source:Models.Item2B, id:number) : Promise<Models.Group2> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}/Group2_Item2BS/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Group2
}


export async function get_unlinked_Item2B_Group2_Item2BS(source:Models.Item2B, page_index:number, page_size:number) : Promise<RawPage<Models.Group2>> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}/unlinked/Group2_Item2BS?page_index=${page_index}&page_size=${page_size}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Group2>(json, e => { return {...e, }})
}

    
export async function create_linked_Item2B_Group2_Item2BS_Group2(source:Models.Item2B) : Promise<Models.Group2[]> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}/Group2_Item2BS_Group2`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json.map(e => { return {...e, CreatedDate: Moment.utc(e.CreatedDate),  }}) as Models.Group2[]
}

export async function link_Item2B_Group2_Item2BS(source:Models.Item2B, target:Models.Group2) : Promise<void> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}/Group2_Item2BS/${target.Id}`, { method: 'post', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function unlink_Item2B_Group2_Item2BS(source:Models.Item2B, target:Models.Group2) : Promise<void> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}/Group2_Item2BS/${target.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  return
}


export async function create_Item2B() : Promise<Models.Item2B> {
  let res = await fetch(`/api/v1/Item2B/`,
    { method: 'post', credentials: 'include', headers:{'content-type': 'application/json',
      'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return {...json, CreatedDate: Moment.utc(json.CreatedDate),  } as Models.Item2B
}

export async function update_Item2B(item:Models.Item2B) : Promise<void> {
  let res = await fetch(`/api/v1/Item2B/`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined, }), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function update_Item2B_with_pictures(item:Models.Item2B) : Promise<void> {
  let res = await fetch(`/api/v1/Item2B/WithPictures`, { method: 'put',
      body: JSON.stringify({...item, CreatedDate:undefined}), credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value } })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function delete_Item2B(source:Models.Item2B) : Promise<void> {
  let res = await fetch(`/api/v1/Item2B/${source.Id}`, { method: 'delete', credentials: 'include', headers:{'content-type': 'application/json', 'X-XSRF-TOKEN': (document.getElementsByName("__RequestVerificationToken")[0] as any).value} })
  if (!res.ok) throw Error(res.statusText)
  return
}

export async function get_Item2B(id:number) : Promise<ItemWithEditable<Models.Item2B>> {
  let res = await fetch(`/api/v1/Item2B/${id}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Item2B,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Item2B_with_pictures(id:number) : Promise<ItemWithEditable<Models.Item2B>> {
  let res = await fetch(`/api/v1/Item2B/${id}/WithPictures`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return { Item: {...json.Item, CreatedDate: Moment.utc(json.Item.CreatedDate),  } as Models.Item2B,
           Editable: !!json.Editable, JustCreated:false }
}

export async function get_Item2BS(page_index:number, page_size:number, search_query:string = null) : Promise<RawPage<Models.Item2B>> {
  let res = await fetch(`/api/v1/Item2B?page_index=${page_index}&page_size=${page_size}${(search_query != null ? "&page_size=" + search_query : "")}`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })

  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return make_page<Models.Item2B>(json, e => { return {...e, }})
}







  
  
  