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


  [Route("api/v1/Item2B")]
  public class Item2BApiController : Controller
  {
    private readonly MailOptions _mailOptions;
    public readonly SimpleModelsAndRelationsContext _context;
    private IHostingEnvironment env;

    public Item2BApiController(SimpleModelsAndRelationsContext context, IHostingEnvironment env, IOptions<MailOptions> mailOptionsAccessor)
    {
      _context = context;
      _mailOptions = mailOptionsAccessor.Value;
      this.env = env;
    }

    public bool ApiTokenValid => RestrictToUserTypeAttribute.ApiToken != null &&
        HttpContext.Request.Headers["ApiToken"] == RestrictToUserTypeAttribute.ApiToken;

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Item2B_id}/Group2_Item2BS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group2> GetGroup2_Item2BS(int Item2B_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2B_id);
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
      var items = (from link in _context.Group2_Item2B
              where link.Item2BId == source.Id
              from target in allowed_targets
              where link.Group2Id == target.Id
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item , null);
    }

    [HttpGet("{Item2B_id}/Group2_Item2BS/{Group2_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Group2*/ GetGroup2_Item2BById(int Item2B_id, int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2B_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Group2 : _context.Group2;
      var item = (from link in _context.Group2_Item2B
              where link.Item2BId == source.Id
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
    [HttpGet("{Item2B_id}/unlinked/Group2_Item2BS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group2> GetUnlinkedGroup2_Item2BS(int Item2B_id, [FromQuery] int page_index, [FromQuery] int page_size = 25)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2B_id);
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
              where !_context.Group2_Item2B.Any(link => link.Item2BId == source.Id && link.Group2Id == target.Id) &&
              true
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item);
    }

    bool CanAdd_Item2B_Group2_Item2BS(Item2B source) {
      return true;
    }

    bool CanAdd_Group2_Group2_Item2BS(Group2 target) {
      return true;
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Item2B_id}/Group2_Item2BS_Group2")]
    public IActionResult /*IEnumerable<Group2>*/ CreateNewGroup2_Item2B_Group2(int Item2B_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2B_id);
      var can_create_by_token = ApiTokenValid || true;
      if (source == null || !can_create_by_token)
        return Unauthorized();
        // throw new Exception("Cannot create item in relation Group2_Item2BS");
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Item2B_Group2_Item2BS(source) || !can_link_by_token)
        return Unauthorized();
        //throw new Exception("Cannot add item to relation Group2_Item2BS");
      var new_target = new Group2() { CreatedDate = DateTime.Now, Id = _context.Group2.Max(i => i.Id) + 1 };
      _context.Group2.Add(new_target);
      _context.SaveChanges();
      var link = new Group2_Item2B() { Id = _context.Group2_Item2B.Max(l => l.Id) + 1, Item2BId = source.Id, Group2Id = new_target.Id };
      _context.Group2_Item2B.Add(link);
      _context.SaveChanges();
      return Ok(new Group2[] { new_target });
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Item2B_id}/Group2_Item2BS/{Group2_id}")]
    public IActionResult LinkWithGroup2_Item2B(int Item2B_id, int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Item2B;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2B_id);
      var allowed_targets = _context.Group2;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Group2_id);
      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Item2B_Group2_Item2BS(source) || !can_link_by_token || !can_edit_source_by_token || !can_edit_target_by_token)
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2BS");
      if (!CanAdd_Group2_Group2_Item2BS(target))
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2BS");
      var link = new Group2_Item2B() { Id = _context.Group2_Item2B.Max(i => i.Id) + 1, Item2BId = source.Id, Group2Id = target.Id };
      _context.Group2_Item2B.Add(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpDelete("{Item2B_id}/Group2_Item2BS/{Group2_id}")]
    public IActionResult UnlinkFromGroup2_Item2B(int Item2B_id, int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Item2B;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Item2B_id);
      var allowed_targets = _context.Group2;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Group2_id);
      var link = _context.Group2_Item2B.FirstOrDefault(l => l.Item2BId == source.Id && l.Group2Id == target.Id);

      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_unlink_by_token = ApiTokenValid || true;
      if (!can_unlink_by_token || !can_edit_source_by_token || !can_edit_target_by_token) return Unauthorized(); // throw new Exception("Cannot remove item from relation Group2_Item2BS");
      _context.Group2_Item2B.Remove(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Item2B>*/ GetById(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var editable_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributesLocal()(item_full);
      item = SimpleModelsAndRelations.Models.Item2B.WithoutImages(item);
      return Ok(new ItemWithEditable<Item2B>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }

[RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/WithPictures")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Item2B>*/ GetByIdWithPictures(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var editable_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributesLocal()(item_full);
      return Ok(new ItemWithEditable<Item2B>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }
    

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult /*Item2B*/ Create()
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var can_create_by_token = ApiTokenValid || true;
      if (!can_create_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized create attempt");
      var item = new Item2B() { CreatedDate = DateTime.Now, Id = _context.Item2B.Max(i => i.Id) + 1 };
      _context.Item2B.Add(SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributesLocal()(item));
      _context.SaveChanges();
      item = SimpleModelsAndRelations.Models.Item2B.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut]
    [ValidateAntiForgeryToken]
    public IActionResult Update([FromBody] Item2B item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
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
    public IActionResult UpdateWithPictures([FromBody] Item2B item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
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

      var allowed_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var item = _context.Item2B.FirstOrDefault(e => e.Id == id);
      var can_delete_by_token = ApiTokenValid || true;
      if (item == null || !can_delete_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized delete attempt");
      
      if (!allowed_items.Any(a => a.Id == item.Id)) return Unauthorized(); // throw new Exception("Unauthorized delete attempt");
      
      

      _context.Item2B.Remove(item);
      _context.SaveChanges();
      return Ok();
    }


    [RestrictToUserType(new string[] {"*"})]
    [HttpGet]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item2B> GetAll([FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var editable_items = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var can_edit_by_token = ApiTokenValid || true;
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true;
      var items = allowed_items.OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
        .Select(SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributes())
        .Select(s => Tuple.Create(s, can_edit_by_token && editable_items.Any(es => es.Id == s.Id)))
        .Paginate(can_create_by_token, can_delete_by_token, false, page_index, page_size, SimpleModelsAndRelations.Models.Item2B.WithoutImages, item => item , null );
    }

    


    
  }

  