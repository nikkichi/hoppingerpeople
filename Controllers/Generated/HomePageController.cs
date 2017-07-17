using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Hosting;
using SendGrid;
using SendGrid.Helpers.Mail;
using HoppingerPeople;
using HoppingerPeople.Models;
using HoppingerPeople.Filters;


[Route("/[controller]")]
  public class HomePagesController : Controller
  {
    private readonly MailOptions _mailOptions;
    public readonly HoppingerPeopleContext _context;
    public IHostingEnvironment env;

    public HomePagesController(HoppingerPeopleContext context, IHostingEnvironment env, IOptions<MailOptions> mailOptionsAccessor)
    {
      _context = context;
      _mailOptions = mailOptionsAccessor.Value;
      this.env = env;
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/{*slug}")]
    public IActionResult View(int id, string slug)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      

      ViewData["id"] = id;
      ViewData["slug"] = slug;
      ViewData["Page"] = "HomePages/View";
      return View();
    }
  }

  