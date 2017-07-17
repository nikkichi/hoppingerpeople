using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using SimpleModelsAndRelations;
using SimpleModelsAndRelations.Models;
using SimpleModelsAndRelations.Filters;


namespace SimpleModelsAndRelations.Models
{
  public static class Permissions {
    static public bool can_view_HomePage() { return true; }

    static public bool can_create_HomePage() { return false; }

    static public bool can_edit_HomePage() { return true; }

    static public bool can_delete_HomePage() { return false; }
      
  

    
static public bool can_view_Group1() { return true; }

    static public bool can_create_Group1() { return true; }

    static public bool can_edit_Group1() { return true; }

    static public bool can_delete_Group1() { return true; }
      
    static public bool can_view_Group1_Letter() { return true; }

    static public bool can_edit_Group1_Letter() { return true; }
    
  static public bool can_view_Group1_RichText() { return true; }

    static public bool can_edit_Group1_RichText() { return true; }
    
  static public bool can_view_Group1_Pic() { return true; }

    static public bool can_edit_Group1_Pic() { return true; }
    
  static public bool can_view_Group1_IsRad() { return true; }

    static public bool can_edit_Group1_IsRad() { return true; }
    
  static public bool can_view_Group1_Name() { return true; }

    static public bool can_edit_Group1_Name() { return true; }
    
  static public bool can_view_Group1_Time() { return true; }

    static public bool can_edit_Group1_Time() { return true; }
    
  static public bool can_view_Group1_Date() { return true; }

    static public bool can_edit_Group1_Date() { return true; }
    
  static public bool can_view_Group1_Url() { return true; }

    static public bool can_edit_Group1_Url() { return true; }
    
  static public bool can_view_Group1_Int() { return true; }

    static public bool can_edit_Group1_Int() { return true; }
    
  static public bool can_view_Group1_String() { return true; }

    static public bool can_edit_Group1_String() { return true; }
    
  static public bool can_view_Group1_Double() { return true; }

    static public bool can_edit_Group1_Double() { return true; }
    
  static public bool can_view_Group1_DateTime() { return true; }

    static public bool can_edit_Group1_DateTime() { return true; }
    
  static public bool can_view_Group1_Tel() { return true; }

    static public bool can_edit_Group1_Tel() { return true; }
    
  static public bool can_view_Group1_File() { return true; }

    static public bool can_edit_Group1_File() { return true; }
    
  static public bool can_view_Group1_Email() { return true; }

    static public bool can_edit_Group1_Email() { return true; }
    

    
static public bool can_view_Item1() { return true; }

    static public bool can_create_Item1() { return true; }

    static public bool can_edit_Item1() { return true; }

    static public bool can_delete_Item1() { return true; }
      
    static public bool can_view_Item1_Name() { return true; }

    static public bool can_edit_Item1_Name() { return true; }
    
  static public bool can_view_Item1_Description() { return true; }

    static public bool can_edit_Item1_Description() { return true; }
    

    
static public bool can_view_Group2() { return true; }

    static public bool can_create_Group2() { return true; }

    static public bool can_edit_Group2() { return true; }

    static public bool can_delete_Group2() { return true; }
      
    static public bool can_view_Group2_Name() { return true; }

    static public bool can_edit_Group2_Name() { return true; }
    

    
static public bool can_view_Item2A() { return true; }

    static public bool can_create_Item2A() { return true; }

    static public bool can_edit_Item2A() { return true; }

    static public bool can_delete_Item2A() { return true; }
      
    static public bool can_view_Item2A_Name() { return true; }

    static public bool can_edit_Item2A_Name() { return true; }
    
  static public bool can_view_Item2A_Description() { return true; }

    static public bool can_edit_Item2A_Description() { return true; }
    

    
static public bool can_view_Item2B() { return true; }

    static public bool can_create_Item2B() { return true; }

    static public bool can_edit_Item2B() { return true; }

    static public bool can_delete_Item2B() { return true; }
      
    static public bool can_view_Item2B_Name() { return true; }

    static public bool can_edit_Item2B_Name() { return true; }
    
  static public bool can_view_Item2B_Content() { return true; }

    static public bool can_edit_Item2B_Content() { return true; }
    

    

    static public bool can_view_HomePage_Group1() { return true; }

    static public bool can_create_HomePage_Group1() { return true; }

    static public bool can_edit_HomePage_Group1() { return true; }

    static public bool can_delete_HomePage_Group1() { return true; }
static public bool can_view_HomePage_Group2() { return true; }

    static public bool can_create_HomePage_Group2() { return true; }

    static public bool can_edit_HomePage_Group2() { return true; }

    static public bool can_delete_HomePage_Group2() { return true; }
static public bool can_view_Group1_Item1() { return true; }

    static public bool can_create_Group1_Item1() { return true; }

    static public bool can_edit_Group1_Item1() { return true; }

    static public bool can_delete_Group1_Item1() { return true; }
static public bool can_view_Group2_Item2A() { return true; }

    static public bool can_create_Group2_Item2A() { return true; }

    static public bool can_edit_Group2_Item2A() { return true; }

    static public bool can_delete_Group2_Item2A() { return true; }
static public bool can_view_Group2_Item2B() { return true; }

    static public bool can_create_Group2_Item2B() { return true; }

    static public bool can_edit_Group2_Item2B() { return true; }

    static public bool can_delete_Group2_Item2B() { return true; }
  }
}
