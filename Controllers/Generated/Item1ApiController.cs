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


  [Route("api/v1/Item1")]
  public class Item1ApiController : Controller
  {
    private readonly MailOptions _mailOptions;
    public readonly SimpleModelsAndRelationsContext _context;
    private IHostingEnvironment env;

    public Item1ApiController(SimpleModelsAndRelationsContext context, IHostingEnvironment env, IOptions<MailOptions> mailOptionsAccessor)
    {
      _context = context;
      _mailOptions = mailOptionsAccessor.Value;
      this.env = env;
    }

    public bool ApiTokenValid => RestrictToUserTypeAttribute.ApiToken != null &&
        HttpContext.Request.Headers["ApiToken"] == RestrictToUserTypeAttribute.ApiToken;

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Item1_id}/Group1_Item1S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group1> GetGroup1_Item1S(int Item1_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item1 : _context.Item1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item1_id);
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
      var items = (from link in _context.Group1_Item1
              where link.Item1Id == source.Id
              from target in allowed_targets
              where link.Group1Id == target.Id
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group1.WithoutImages, item => item , null);
    }

    [HttpGet("{Item1_id}/Group1_Item1S/{Group1_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Group1*/ GetGroup1_Item1ById(int Item1_id, int Group1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item1 : _context.Item1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item1_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Group1 : _context.Group1;
      var item = (from link in _context.Group1_Item1
              where link.Item1Id == source.Id
              from target in allowed_targets
              where link.Group1Id == target.Id
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == Group1_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.Group1.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Item1_id}/unlinked/Group1_Item1S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group1> GetUnlinkedGroup1_Item1S(int Item1_id, [FromQuery] int page_index, [FromQuery] int page_size = 25)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item1 : _context.Item1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item1_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Group1>()
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group1.WithoutImages, item => item);
      var allowed_targets = ApiTokenValid ? _context.Group1 : _context.Group1;
      var editable_targets = ApiTokenValid ? _context.Group1 : (_context.Group1);
      var can_edit_by_token = ApiTokenValid || true;
      return (from target in allowed_targets
              where !_context.Group1_Item1.Any(link => link.Item1Id == source.Id && link.Group1Id == target.Id) &&
              (from link in _context.Group1_Item1
                where link.Group1Id == target.Id
                from s in _context.Item1
                where link.Item1Id == s.Id
                select s).Count() < 3
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group1.WithoutImages, item => item);
    }

    bool CanAdd_Item1_Group1_Item1S(Item1 source) {
      return (from link in _context.Group1_Item1
           where link.Item1Id == source.Id
           from target in _context.Group1
           where link.Group1Id == target.Id
           select target).Count() < 1;
    }

    bool CanAdd_Group1_Group1_Item1S(Group1 target) {
      return (from link in _context.Group1_Item1
           where link.Group1Id == target.Id
           from source in _context.Item1
           where link.Item1Id == source.Id
           select source).Count() < 3;
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Item1_id}/Group1_Item1S_Group1")]
    public IActionResult /*IEnumerable<Group1>*/ CreateNewGroup1_Item1_Group1(int Item1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item1 : _context.Item1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item1_id);
      var can_create_by_token = ApiTokenValid || true;
      if (source == null || !can_create_by_token)
        return Unauthorized();
        // throw new Exception("Cannot create item in relation Group1_Item1S");
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Item1_Group1_Item1S(source) || !can_link_by_token)
        return Unauthorized();
        //throw new Exception("Cannot add item to relation Group1_Item1S");
      var new_target = new Group1() { CreatedDate = DateTime.Now, Id = _context.Group1.Max(i => i.Id) + 1 };
      _context.Group1.Add(new_target);
      _context.SaveChanges();
      var link = new Group1_Item1() { Id = _context.Group1_Item1.Max(l => l.Id) + 1, Item1Id = source.Id, Group1Id = new_target.Id };
      _context.Group1_Item1.Add(link);
      _context.SaveChanges();
      return Ok(new Group1[] { new_target });
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Item1_id}/Group1_Item1S/{Group1_id}")]
    public IActionResult LinkWithGroup1_Item1(int Item1_id, int Group1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Item1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item1_id);
      var allowed_targets = _context.Group1;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Group1_id);
      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Item1_Group1_Item1S(source) || !can_link_by_token || !can_edit_source_by_token || !can_edit_target_by_token)
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group1_Item1S");
      if (!CanAdd_Group1_Group1_Item1S(target))
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group1_Item1S");
      var link = new Group1_Item1() { Id = _context.Group1_Item1.Max(i => i.Id) + 1, Item1Id = source.Id, Group1Id = target.Id };
      _context.Group1_Item1.Add(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpDelete("{Item1_id}/Group1_Item1S/{Group1_id}")]
    public IActionResult UnlinkFromGroup1_Item1(int Item1_id, int Group1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Item1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item1_id);
      var allowed_targets = _context.Group1;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Group1_id);
      var link = _context.Group1_Item1.FirstOrDefault(l => l.Item1Id == source.Id && l.Group1Id == target.Id);

      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_unlink_by_token = ApiTokenValid || true;
      if (!can_unlink_by_token || !can_edit_source_by_token || !can_edit_target_by_token) return Unauthorized(); // throw new Exception("Cannot remove item from relation Group1_Item1S");
      _context.Group1_Item1.Remove(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Item1>*/ GetById(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item1 : _context.Item1;
      var editable_items = ApiTokenValid ? _context.Item1 : _context.Item1;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Item1.FilterViewableAttributesLocal()(item_full);
      item = SimpleModelsAndRelations.Models.Item1.WithoutImages(item);
      return Ok(new ItemWithEditable<Item1>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }

[RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/WithPictures")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Item1>*/ GetByIdWithPictures(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item1 : _context.Item1;
      var editable_items = ApiTokenValid ? _context.Item1 : _context.Item1;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Item1.FilterViewableAttributesLocal()(item_full);
      return Ok(new ItemWithEditable<Item1>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }
    

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult /*Item1*/ Create()
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var can_create_by_token = ApiTokenValid || true;
      if (!can_create_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized create attempt");
      var item = new Item1() { CreatedDate = DateTime.Now, Id = _context.Item1.Max(i => i.Id) + 1 };
      _context.Item1.Add(SimpleModelsAndRelations.Models.Item1.FilterViewableAttributesLocal()(item));
      _context.SaveChanges();
      item = SimpleModelsAndRelations.Models.Item1.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut]
    [ValidateAntiForgeryToken]
    public IActionResult Update([FromBody] Item1 item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item1 : _context.Item1;
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
    public IActionResult UpdateWithPictures([FromBody] Item1 item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item1 : _context.Item1;
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
    [HttpDelete("{id}")]
    [ValidateAntiForgeryToken]
    public IActionResult Delete(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item1 : _context.Item1;
      var item = _context.Item1.FirstOrDefault(e => e.Id == id);
      var can_delete_by_token = ApiTokenValid || true;
      if (item == null || !can_delete_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized delete attempt");
      
      if (!allowed_items.Any(a => a.Id == item.Id)) return Unauthorized(); // throw new Exception("Unauthorized delete attempt");
      
      

      _context.Item1.Remove(item);
      _context.SaveChanges();
      return Ok();
    }


    [RestrictToUserType(new string[] {"*"})]
    [HttpGet]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item1> GetAll([FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item1 : _context.Item1;
      var editable_items = ApiTokenValid ? _context.Item1 : _context.Item1;
      var can_edit_by_token = ApiTokenValid || true;
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true;
      var items = allowed_items.OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
        .Select(SimpleModelsAndRelations.Models.Item1.FilterViewableAttributes())
        .Select(s => Tuple.Create(s, can_edit_by_token && editable_items.Any(es => es.Id == s.Id)))
        .Paginate(can_create_by_token, can_delete_by_token, false, page_index, page_size, SimpleModelsAndRelations.Models.Item1.WithoutImages, item => item , null );
    }

    


    
  }

  