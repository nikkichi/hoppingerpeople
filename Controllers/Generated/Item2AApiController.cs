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


  [Route("api/v1/Item2A")]
  public class Item2AApiController : Controller
  {
    private readonly MailOptions _mailOptions;
    public readonly SimpleModelsAndRelationsContext _context;
    private IHostingEnvironment env;

    public Item2AApiController(SimpleModelsAndRelationsContext context, IHostingEnvironment env, IOptions<MailOptions> mailOptionsAccessor)
    {
      _context = context;
      _mailOptions = mailOptionsAccessor.Value;
      this.env = env;
    }

    public bool ApiTokenValid => RestrictToUserTypeAttribute.ApiToken != null &&
        HttpContext.Request.Headers["ApiToken"] == RestrictToUserTypeAttribute.ApiToken;

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Item2A_id}/Group2_Item2AS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group2> GetGroup2_Item2AS(int Item2A_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2A_id);
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
      var items = (from link in _context.Group2_Item2A
              where link.Item2AId == source.Id
              from target in allowed_targets
              where link.Group2Id == target.Id
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item , null);
    }

    [HttpGet("{Item2A_id}/Group2_Item2AS/{Group2_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Group2*/ GetGroup2_Item2AById(int Item2A_id, int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2A_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Group2 : _context.Group2;
      var item = (from link in _context.Group2_Item2A
              where link.Item2AId == source.Id
              from target in allowed_targets
              where link.Group2Id == target.Id
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == Group2_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.Group2.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Item2A_id}/unlinked/Group2_Item2AS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group2> GetUnlinkedGroup2_Item2AS(int Item2A_id, [FromQuery] int page_index, [FromQuery] int page_size = 25)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2A_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Group2>()
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item);
      var allowed_targets = ApiTokenValid ? _context.Group2 : _context.Group2;
      var editable_targets = ApiTokenValid ? _context.Group2 : (_context.Group2);
      var can_edit_by_token = ApiTokenValid || true;
      return (from target in allowed_targets
              where !_context.Group2_Item2A.Any(link => link.Item2AId == source.Id && link.Group2Id == target.Id) &&
              true
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item);
    }

    bool CanAdd_Item2A_Group2_Item2AS(Item2A source) {
      return (from link in _context.Group2_Item2A
           where link.Item2AId == source.Id
           from target in _context.Group2
           where link.Group2Id == target.Id
           select target).Count() < 4;
    }

    bool CanAdd_Group2_Group2_Item2AS(Group2 target) {
      return true;
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Item2A_id}/Group2_Item2AS_Group2")]
    public IActionResult /*IEnumerable<Group2>*/ CreateNewGroup2_Item2A_Group2(int Item2A_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2A_id);
      var can_create_by_token = ApiTokenValid || true;
      if (source == null || !can_create_by_token)
        return Unauthorized();
        // throw new Exception("Cannot create item in relation Group2_Item2AS");
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Item2A_Group2_Item2AS(source) || !can_link_by_token)
        return Unauthorized();
        //throw new Exception("Cannot add item to relation Group2_Item2AS");
      var new_target = new Group2() { CreatedDate = DateTime.Now, Id = _context.Group2.Max(i => i.Id) + 1 };
      _context.Group2.Add(new_target);
      _context.SaveChanges();
      var link = new Group2_Item2A() { Id = _context.Group2_Item2A.Max(l => l.Id) + 1, Item2AId = source.Id, Group2Id = new_target.Id };
      _context.Group2_Item2A.Add(link);
      _context.SaveChanges();
      return Ok(new Group2[] { new_target });
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Item2A_id}/Group2_Item2AS/{Group2_id}")]
    public IActionResult LinkWithGroup2_Item2A(int Item2A_id, int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Item2A;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2A_id);
      var allowed_targets = _context.Group2;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Group2_id);
      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Item2A_Group2_Item2AS(source) || !can_link_by_token || !can_edit_source_by_token || !can_edit_target_by_token)
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2AS");
      if (!CanAdd_Group2_Group2_Item2AS(target))
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2AS");
      var link = new Group2_Item2A() { Id = _context.Group2_Item2A.Max(i => i.Id) + 1, Item2AId = source.Id, Group2Id = target.Id };
      _context.Group2_Item2A.Add(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpDelete("{Item2A_id}/Group2_Item2AS/{Group2_id}")]
    public IActionResult UnlinkFromGroup2_Item2A(int Item2A_id, int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Item2A;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2A_id);
      var allowed_targets = _context.Group2;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Group2_id);
      var link = _context.Group2_Item2A.FirstOrDefault(l => l.Item2AId == source.Id && l.Group2Id == target.Id);

      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_unlink_by_token = ApiTokenValid || true;
      if (!can_unlink_by_token || !can_edit_source_by_token || !can_edit_target_by_token) return Unauthorized(); // throw new Exception("Cannot remove item from relation Group2_Item2AS");
      _context.Group2_Item2A.Remove(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Item2A>*/ GetById(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var editable_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributesLocal()(item_full);
      item = SimpleModelsAndRelations.Models.Item2A.WithoutImages(item);
      return Ok(new ItemWithEditable<Item2A>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }

[RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/WithPictures")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Item2A>*/ GetByIdWithPictures(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var editable_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributesLocal()(item_full);
      return Ok(new ItemWithEditable<Item2A>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }
    

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult /*Item2A*/ Create()
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var can_create_by_token = ApiTokenValid || true;
      if (!can_create_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized create attempt");
      var item = new Item2A() { CreatedDate = DateTime.Now, Id = _context.Item2A.Max(i => i.Id) + 1 };
      _context.Item2A.Add(SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributesLocal()(item));
      _context.SaveChanges();
      item = SimpleModelsAndRelations.Models.Item2A.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut]
    [ValidateAntiForgeryToken]
    public IActionResult Update([FromBody] Item2A item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
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
    public IActionResult UpdateWithPictures([FromBody] Item2A item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
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

      var allowed_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var item = _context.Item2A.FirstOrDefault(e => e.Id == id);
      var can_delete_by_token = ApiTokenValid || true;
      if (item == null || !can_delete_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized delete attempt");
      
      if (!allowed_items.Any(a => a.Id == item.Id)) return Unauthorized(); // throw new Exception("Unauthorized delete attempt");
      
      

      _context.Item2A.Remove(item);
      _context.SaveChanges();
      return Ok();
    }


    [RestrictToUserType(new string[] {"*"})]
    [HttpGet]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item2A> GetAll([FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var editable_items = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var can_edit_by_token = ApiTokenValid || true;
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true;
      var items = allowed_items.OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
        .Select(SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributes())
        .Select(s => Tuple.Create(s, can_edit_by_token && editable_items.Any(es => es.Id == s.Id)))
        .Paginate(can_create_by_token, can_delete_by_token, false, page_index, page_size, SimpleModelsAndRelations.Models.Item2A.WithoutImages, item => item , null );
    }

    


    
  }

  