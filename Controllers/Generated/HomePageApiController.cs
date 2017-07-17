using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using SimpleModelsAndRelations;
using SimpleModelsAndRelations.Models;
using SimpleModelsAndRelations.Filters;
using System.IO;


  [Route("api/v1/HomePage")]
  public class HomePageApiController : Controller
  {
    private readonly MailOptions _mailOptions;
    public readonly SimpleModelsAndRelationsContext _context;
    private IHostingEnvironment env;

    public HomePageApiController(SimpleModelsAndRelationsContext context, IHostingEnvironment env, IOptions<MailOptions> mailOptionsAccessor)
    {
      _context = context;
      _mailOptions = mailOptionsAccessor.Value;
      this.env = env;
    }

    public bool ApiTokenValid => RestrictToUserTypeAttribute.ApiToken != null &&
        HttpContext.Request.Headers["ApiToken"] == RestrictToUserTypeAttribute.ApiToken;

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{HomePage_id}/HomePage_Group1S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group1> GetHomePage_Group1S(int HomePage_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var source = allowed_sources.FirstOrDefault(s => s.Id == HomePage_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token) // test
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Group1>() // B
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group1.WithoutImages, item => item , null);
      var allowed_targets = ApiTokenValid ? _context.Group1 : _context.Group1;
      var editable_targets = ApiTokenValid ? _context.Group1 : (_context.Group1);
      var can_edit_by_token = ApiTokenValid || true;
      var items = (from target in allowed_targets
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group1.WithoutImages, item => item , null);
    }

    [HttpGet("{HomePage_id}/HomePage_Group1S/{Group1_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Group1*/ GetHomePage_Group1ById(int HomePage_id, int Group1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var source = allowed_sources.FirstOrDefault(s => s.Id == HomePage_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Group1 : _context.Group1;
      var item = (from target in allowed_targets
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == Group1_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.Group1.WithoutImages(item);
      return Ok(item);
    }

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{HomePage_id}/HomePage_Group2S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group2> GetHomePage_Group2S(int HomePage_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var source = allowed_sources.FirstOrDefault(s => s.Id == HomePage_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token) // test
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Group2>() // B
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item , null);
      var allowed_targets = ApiTokenValid ? _context.Group2 : _context.Group2;
      var editable_targets = ApiTokenValid ? _context.Group2 : (_context.Group2);
      var can_edit_by_token = ApiTokenValid || true;
      var items = (from target in allowed_targets
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item , null);
    }

    [HttpGet("{HomePage_id}/HomePage_Group2S/{Group2_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Group2*/ GetHomePage_Group2ById(int HomePage_id, int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var source = allowed_sources.FirstOrDefault(s => s.Id == HomePage_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Group2 : _context.Group2;
      var item = (from target in allowed_targets
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == Group2_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.Group2.WithoutImages(item);
      return Ok(item);
    }

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<HomePage>*/ GetById(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var editable_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.HomePage.FilterViewableAttributesLocal()(item_full);
      item = SimpleModelsAndRelations.Models.HomePage.WithoutImages(item);
      return Ok(new ItemWithEditable<HomePage>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }

[RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/WithPictures")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<HomePage>*/ GetByIdWithPictures(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var editable_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.HomePage.FilterViewableAttributesLocal()(item_full);
      return Ok(new ItemWithEditable<HomePage>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }
    

    [RestrictToUserType(new string[] {})]
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult /*HomePage*/ Create()
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var can_create_by_token = ApiTokenValid || true;
      if (!can_create_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized create attempt");
      var item = new HomePage() { CreatedDate = DateTime.Now, Id = _context.HomePage.Max(i => i.Id) + 1 };
      _context.HomePage.Add(SimpleModelsAndRelations.Models.HomePage.FilterViewableAttributesLocal()(item));
      _context.SaveChanges();
      item = SimpleModelsAndRelations.Models.HomePage.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut]
    [ValidateAntiForgeryToken]
    public IActionResult Update([FromBody] HomePage item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      if (!allowed_items.Any(i => i.Id == item.Id)) return Unauthorized();
      var new_item = item;
      
      var can_edit_by_token = ApiTokenValid || true;
      if (item == null || !can_edit_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized edit attempt");
      _context.Update(new_item);
      _context.Entry(new_item).Property(x => x.CreatedDate).IsModified = false;
      _context.SaveChanges();
      return Ok();
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut("WithPictures")]
    [ValidateAntiForgeryToken]
    public IActionResult UpdateWithPictures([FromBody] HomePage item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      if (!allowed_items.Any(i => i.Id == item.Id)) return Unauthorized();
      var new_item = item;
      
      var can_edit_by_token = ApiTokenValid || true;
      if (item == null || !can_edit_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized edit attempt");
      _context.Update(new_item);
      _context.Entry(new_item).Property(x => x.CreatedDate).IsModified = false;
      _context.SaveChanges();
      return Ok();
    }

    [RestrictToUserType(new string[] {})]
    [HttpDelete("{id}")]
    [ValidateAntiForgeryToken]
    public IActionResult Delete(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var item = _context.HomePage.FirstOrDefault(e => e.Id == id);
      var can_delete_by_token = ApiTokenValid || true;
      if (item == null || !can_delete_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized delete attempt");
      
      if (!allowed_items.Any(a => a.Id == item.Id)) return Unauthorized(); // throw new Exception("Unauthorized delete attempt");
      
      

      _context.HomePage.Remove(item);
      _context.SaveChanges();
      return Ok();
    }


    [RestrictToUserType(new string[] {"*"})]
    [HttpGet]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<HomePage> GetAll([FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var editable_items = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var can_edit_by_token = ApiTokenValid || true;
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true;
      var items = allowed_items.OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
        .Select(SimpleModelsAndRelations.Models.HomePage.FilterViewableAttributes())
        .Select(s => Tuple.Create(s, can_edit_by_token && editable_items.Any(es => es.Id == s.Id)))
        .Paginate(can_create_by_token, can_delete_by_token, false, page_index, page_size, SimpleModelsAndRelations.Models.HomePage.WithoutImages, item => item , null );
    }

    


    /*
    static public void CleanupNullRelations(SimpleModelsAndRelationsContext _context) {
    
      _context.Group1_Item1.RemoveRange(_context.Group1_Item1.Where(l =>
        l.Group1Id == null ||
        l.Item1Id == null ||
        !_context.Group1.Any(s => s.Id == l.Group1Id) ||
        !_context.Item1.Any(s => s.Id == l.Item1Id)));
      _context.SaveChanges();
    

      _context.Group1_Item1.RemoveRange(_context.Group1_Item1.Where(l =>
        l.Item1Id == null ||
        l.Group1Id == null ||
        !_context.Item1.Any(s => s.Id == l.Item1Id) ||
        !_context.Group1.Any(s => s.Id == l.Group1Id)));
      _context.SaveChanges();
    

      _context.Group2_Item2A.RemoveRange(_context.Group2_Item2A.Where(l =>
        l.Group2Id == null ||
        l.Item2AId == null ||
        !_context.Group2.Any(s => s.Id == l.Group2Id) ||
        !_context.Item2A.Any(s => s.Id == l.Item2AId)));
      _context.SaveChanges();
    

      _context.Group2_Item2A.RemoveRange(_context.Group2_Item2A.Where(l =>
        l.Item2AId == null ||
        l.Group2Id == null ||
        !_context.Item2A.Any(s => s.Id == l.Item2AId) ||
        !_context.Group2.Any(s => s.Id == l.Group2Id)));
      _context.SaveChanges();
    

      _context.Group2_Item2B.RemoveRange(_context.Group2_Item2B.Where(l =>
        l.Group2Id == null ||
        l.Item2BId == null ||
        !_context.Group2.Any(s => s.Id == l.Group2Id) ||
        !_context.Item2B.Any(s => s.Id == l.Item2BId)));
      _context.SaveChanges();
    

      _context.Group2_Item2B.RemoveRange(_context.Group2_Item2B.Where(l =>
        l.Item2BId == null ||
        l.Group2Id == null ||
        !_context.Item2B.Any(s => s.Id == l.Item2BId) ||
        !_context.Group2.Any(s => s.Id == l.Group2Id)));
      _context.SaveChanges();
    
    }
    */
    
  }

  