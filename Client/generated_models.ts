import * as Immutable from 'immutable'
import * as Moment from 'moment'

export type HomePage = {
    Id : number
    CreatedDate:Moment.Moment
    
    
  }
  
export type Group1 = {
    Id : number
    CreatedDate:Moment.Moment
    Letter : "A" | "B" | "C"
  RichText : string
  Pic : string
  IsRad : boolean
  Name : string
  Time : Moment.Moment
  Date : Moment.Moment
  Url : string
  Int : number
  String : string
  Double : number
  DateTime : Moment.Moment
  Tel : string
  File : string
  Email : string
    
  }
  
export type Item1 = {
    Id : number
    CreatedDate:Moment.Moment
    Name : string
  Description : string
    
  }
  
export type Group2 = {
    Id : number
    CreatedDate:Moment.Moment
    Name : string
    
  }
  
export type Item2A = {
    Id : number
    CreatedDate:Moment.Moment
    Name : string
  Description : string
    
  }
  
export type Item2B = {
    Id : number
    CreatedDate:Moment.Moment
    Name : string
  Content : string
    
  }
  
export type HomePage_Group1 = {
    Id : number
    CreatedDate:Moment.Moment
    HomePageId : number
  Group1Id : number
    
  }
  

export type HomePage_Group2 = {
    Id : number
    CreatedDate:Moment.Moment
    HomePageId : number
  Group2Id : number
    
  }
  

export type Group1_Item1 = {
    Id : number
    CreatedDate:Moment.Moment
    Group1Id : number
  Item1Id : number
    
  }
  

export type Group2_Item2A = {
    Id : number
    CreatedDate:Moment.Moment
    Group2Id : number
  Item2AId : number
    
  }
  

export type Group2_Item2B = {
    Id : number
    CreatedDate:Moment.Moment
    Group2Id : number
  Item2BId : number
    
  }
  

