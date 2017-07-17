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


  [Route("api/v1/Group2")]
  public class Group2ApiController : Controller
  {
    private readonly MailOptions _mailOptions;
    public readonly SimpleModelsAndRelationsContext _context;
    private IHostingEnvironment env;

    public Group2ApiController(SimpleModelsAndRelationsContext context, IHostingEnvironment env, IOptions<MailOptions> mailOptionsAccessor)
    {
      _context = context;
      _mailOptions = mailOptionsAccessor.Value;
      this.env = env;
    }

    public bool ApiTokenValid => RestrictToUserTypeAttribute.ApiToken != null &&
        HttpContext.Request.Headers["ApiToken"] == RestrictToUserTypeAttribute.ApiToken;

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Group2_id}/HomePage_Group2S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<HomePage> GetHomePage_Group2S(int Group2_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token) // test
        return Enumerable.Empty<SimpleModelsAndRelations.Models.HomePage>() // B
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.HomePage.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.HomePage.WithoutImages, item => item , null);
      var allowed_targets = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var editable_targets = ApiTokenValid ? _context.HomePage : (_context.HomePage);
      var can_edit_by_token = ApiTokenValid || true;
      var items = (from target in allowed_targets
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.HomePage.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.HomePage.WithoutImages, item => item , null);
    }

    [HttpGet("{Group2_id}/HomePage_Group2S/{HomePage_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*HomePage*/ GetHomePage_Group2ById(int Group2_id, int HomePage_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.HomePage : _context.HomePage;
      var item = (from target in allowed_targets
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.HomePage.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == HomePage_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.HomePage.WithoutImages(item);
      return Ok(item);
    }

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Group2_id}/Group2_Item2AS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item2A> GetGroup2_Item2AS(int Group2_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token) // test
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Item2A>() // B
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2A.WithoutImages, item => item , null);
      var allowed_targets = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var editable_targets = ApiTokenValid ? _context.Item2A : (_context.Item2A);
      var can_edit_by_token = ApiTokenValid || true;
      var items = (from link in _context.Group2_Item2A
              where link.Group2Id == source.Id
              from target in allowed_targets
              where link.Item2AId == target.Id
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2A.WithoutImages, item => item , null);
    }

    [HttpGet("{Group2_id}/Group2_Item2AS/{Item2A_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Item2A*/ GetGroup2_Item2AById(int Group2_id, int Item2A_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var item = (from link in _context.Group2_Item2A
              where link.Group2Id == source.Id
              from target in allowed_targets
              where link.Item2AId == target.Id
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == Item2A_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.Item2A.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Group2_id}/unlinked/Group2_Item2AS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item2A> GetUnlinkedGroup2_Item2AS(int Group2_id, [FromQuery] int page_index, [FromQuery] int page_size = 25)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Item2A>()
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2A.WithoutImages, item => item);
      var allowed_targets = ApiTokenValid ? _context.Item2A : _context.Item2A;
      var editable_targets = ApiTokenValid ? _context.Item2A : (_context.Item2A);
      var can_edit_by_token = ApiTokenValid || true;
      return (from target in allowed_targets
              where !_context.Group2_Item2A.Any(link => link.Group2Id == source.Id && link.Item2AId == target.Id) &&
              (from link in _context.Group2_Item2A
                where link.Item2AId == target.Id
                from s in _context.Group2
                where link.Group2Id == s.Id
                select s).Count() < 4
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Item2A.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2A.WithoutImages, item => item);
    }

    bool CanAdd_Group2_Group2_Item2AS(Group2 source) {
      return true;
    }

    bool CanAdd_Item2A_Group2_Item2AS(Item2A target) {
      return (from link in _context.Group2_Item2A
           where link.Item2AId == target.Id
           from source in _context.Group2
           where link.Group2Id == source.Id
           select source).Count() < 4;
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Group2_id}/Group2_Item2AS_Item2A")]
    public IActionResult /*IEnumerable<Item2A>*/ CreateNewGroup2_Item2A_Item2A(int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_create_by_token = ApiTokenValid || true;
      if (source == null || !can_create_by_token)
        return Unauthorized();
        // throw new Exception("Cannot create item in relation Group2_Item2AS");
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Group2_Group2_Item2AS(source) || !can_link_by_token)
        return Unauthorized();
        //throw new Exception("Cannot add item to relation Group2_Item2AS");
      var new_target = new Item2A() { CreatedDate = DateTime.Now, Id = _context.Item2A.Max(i => i.Id) + 1 };
      _context.Item2A.Add(new_target);
      _context.SaveChanges();
      var link = new Group2_Item2A() { Id = _context.Group2_Item2A.Max(l => l.Id) + 1, Group2Id = source.Id, Item2AId = new_target.Id };
      _context.Group2_Item2A.Add(link);
      _context.SaveChanges();
      return Ok(new Item2A[] { new_target });
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Group2_id}/Group2_Item2AS/{Item2A_id}")]
    public IActionResult LinkWithGroup2_Item2A(int Group2_id, int Item2A_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var allowed_targets = _context.Item2A;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Item2A_id);
      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Group2_Group2_Item2AS(source) || !can_link_by_token || !can_edit_source_by_token || !can_edit_target_by_token)
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2AS");
      if (!CanAdd_Item2A_Group2_Item2AS(target))
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2AS");
      var link = new Group2_Item2A() { Id = _context.Group2_Item2A.Max(i => i.Id) + 1, Group2Id = source.Id, Item2AId = target.Id };
      _context.Group2_Item2A.Add(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpDelete("{Group2_id}/Group2_Item2AS/{Item2A_id}")]
    public IActionResult UnlinkFromGroup2_Item2A(int Group2_id, int Item2A_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var allowed_targets = _context.Item2A;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Item2A_id);
      var link = _context.Group2_Item2A.FirstOrDefault(l => l.Group2Id == source.Id && l.Item2AId == target.Id);

      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_unlink_by_token = ApiTokenValid || true;
      if (!can_unlink_by_token || !can_edit_source_by_token || !can_edit_target_by_token) return Unauthorized(); // throw new Exception("Cannot remove item from relation Group2_Item2AS");
      _context.Group2_Item2A.Remove(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Group2_id}/Group2_Item2BS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item2B> GetGroup2_Item2BS(int Group2_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token) // test
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Item2B>() // B
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2B.WithoutImages, item => item , null);
      var allowed_targets = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var editable_targets = ApiTokenValid ? _context.Item2B : (_context.Item2B);
      var can_edit_by_token = ApiTokenValid || true;
      var items = (from link in _context.Group2_Item2B
              where link.Group2Id == source.Id
              from target in allowed_targets
              where link.Item2BId == target.Id
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2B.WithoutImages, item => item , null);
    }

    [HttpGet("{Group2_id}/Group2_Item2BS/{Item2B_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Item2B*/ GetGroup2_Item2BById(int Group2_id, int Item2B_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var item = (from link in _context.Group2_Item2B
              where link.Group2Id == source.Id
              from target in allowed_targets
              where link.Item2BId == target.Id
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == Item2B_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.Item2B.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Group2_id}/unlinked/Group2_Item2BS")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item2B> GetUnlinkedGroup2_Item2BS(int Group2_id, [FromQuery] int page_index, [FromQuery] int page_size = 25)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Item2B>()
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2B.WithoutImages, item => item);
      var allowed_targets = ApiTokenValid ? _context.Item2B : _context.Item2B;
      var editable_targets = ApiTokenValid ? _context.Item2B : (_context.Item2B);
      var can_edit_by_token = ApiTokenValid || true;
      return (from target in allowed_targets
              where !_context.Group2_Item2B.Any(link => link.Group2Id == source.Id && link.Item2BId == target.Id) &&
              true
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Item2B.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item2B.WithoutImages, item => item);
    }

    bool CanAdd_Group2_Group2_Item2BS(Group2 source) {
      return true;
    }

    bool CanAdd_Item2B_Group2_Item2BS(Item2B target) {
      return true;
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Group2_id}/Group2_Item2BS_Item2B")]
    public IActionResult /*IEnumerable<Item2B>*/ CreateNewGroup2_Item2B_Item2B(int Group2_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group2 : _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var can_create_by_token = ApiTokenValid || true;
      if (source == null || !can_create_by_token)
        return Unauthorized();
        // throw new Exception("Cannot create item in relation Group2_Item2BS");
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Group2_Group2_Item2BS(source) || !can_link_by_token)
        return Unauthorized();
        //throw new Exception("Cannot add item to relation Group2_Item2BS");
      var new_target = new Item2B() { CreatedDate = DateTime.Now, Id = _context.Item2B.Max(i => i.Id) + 1 };
      _context.Item2B.Add(new_target);
      _context.SaveChanges();
      var link = new Group2_Item2B() { Id = _context.Group2_Item2B.Max(l => l.Id) + 1, Group2Id = source.Id, Item2BId = new_target.Id };
      _context.Group2_Item2B.Add(link);
      _context.SaveChanges();
      return Ok(new Item2B[] { new_target });
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Group2_id}/Group2_Item2BS/{Item2B_id}")]
    public IActionResult LinkWithGroup2_Item2B(int Group2_id, int Item2B_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var allowed_targets = _context.Item2B;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Item2B_id);
      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Group2_Group2_Item2BS(source) || !can_link_by_token || !can_edit_source_by_token || !can_edit_target_by_token)
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2BS");
      if (!CanAdd_Item2B_Group2_Item2BS(target))
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group2_Item2BS");
      var link = new Group2_Item2B() { Id = _context.Group2_Item2B.Max(i => i.Id) + 1, Group2Id = source.Id, Item2BId = target.Id };
      _context.Group2_Item2B.Add(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpDelete("{Group2_id}/Group2_Item2BS/{Item2B_id}")]
    public IActionResult UnlinkFromGroup2_Item2B(int Group2_id, int Item2B_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Group2;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group2_id);
      var allowed_targets = _context.Item2B;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Item2B_id);
      var link = _context.Group2_Item2B.FirstOrDefault(l => l.Group2Id == source.Id && l.Item2BId == target.Id);

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
    public IActionResult /*ItemWithEditable<Group2>*/ GetById(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group2 : _context.Group2;
      var editable_items = ApiTokenValid ? _context.Group2 : _context.Group2;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Group2.FilterViewableAttributesLocal()(item_full);
      item = SimpleModelsAndRelations.Models.Group2.WithoutImages(item);
      return Ok(new ItemWithEditable<Group2>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }

[RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/WithPictures")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Group2>*/ GetByIdWithPictures(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group2 : _context.Group2;
      var editable_items = ApiTokenValid ? _context.Group2 : _context.Group2;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Group2.FilterViewableAttributesLocal()(item_full);
      return Ok(new ItemWithEditable<Group2>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }
    

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult /*Group2*/ Create()
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var can_create_by_token = ApiTokenValid || true;
      if (!can_create_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized create attempt");
      var item = new Group2() { CreatedDate = DateTime.Now, Id = _context.Group2.Max(i => i.Id) + 1 };
      _context.Group2.Add(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributesLocal()(item));
      _context.SaveChanges();
      item = SimpleModelsAndRelations.Models.Group2.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut]
    [ValidateAntiForgeryToken]
    public IActionResult Update([FromBody] Group2 item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group2 : _context.Group2;
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
    public IActionResult UpdateWithPictures([FromBody] Group2 item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group2 : _context.Group2;
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

      var allowed_items = ApiTokenValid ? _context.Group2 : _context.Group2;
      var item = _context.Group2.FirstOrDefault(e => e.Id == id);
      var can_delete_by_token = ApiTokenValid || true;
      if (item == null || !can_delete_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized delete attempt");
      
      if (!allowed_items.Any(a => a.Id == item.Id)) return Unauthorized(); // throw new Exception("Unauthorized delete attempt");
      
      

      _context.Group2.Remove(item);
      _context.SaveChanges();
      return Ok();
    }


    [RestrictToUserType(new string[] {"*"})]
    [HttpGet]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group2> GetAll([FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group2 : _context.Group2;
      var editable_items = ApiTokenValid ? _context.Group2 : _context.Group2;
      var can_edit_by_token = ApiTokenValid || true;
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true;
      var items = allowed_items.OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
        .Select(SimpleModelsAndRelations.Models.Group2.FilterViewableAttributes())
        .Select(s => Tuple.Create(s, can_edit_by_token && editable_items.Any(es => es.Id == s.Id)))
        .Paginate(can_create_by_token, can_delete_by_token, false, page_index, page_size, SimpleModelsAndRelations.Models.Group2.WithoutImages, item => item , null );
    }

    


    
  }

  