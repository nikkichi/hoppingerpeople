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
using HoppingerPeople;
using HoppingerPeople.Models;
using HoppingerPeople.Filters;


namespace HoppingerPeople.Models
{
  public static class Permissions {
    static public bool can_view_HomePage() { return true; }

    static public bool can_create_HomePage() { return false; }

    static public bool can_edit_HomePage() { return true; }

    static public bool can_delete_HomePage() { return false; }
      
  

    

    
  }
}
