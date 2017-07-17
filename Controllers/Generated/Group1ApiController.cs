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


  [Route("api/v1/Group1")]
  public class Group1ApiController : Controller
  {
    private readonly MailOptions _mailOptions;
    public readonly SimpleModelsAndRelationsContext _context;
    private IHostingEnvironment env;

    public Group1ApiController(SimpleModelsAndRelationsContext context, IHostingEnvironment env, IOptions<MailOptions> mailOptionsAccessor)
    {
      _context = context;
      _mailOptions = mailOptionsAccessor.Value;
      this.env = env;
    }

    public bool ApiTokenValid => RestrictToUserTypeAttribute.ApiToken != null &&
        HttpContext.Request.Headers["ApiToken"] == RestrictToUserTypeAttribute.ApiToken;

    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Group1_id}/HomePage_Group1S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<HomePage> GetHomePage_Group1S(int Group1_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group1 : _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
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

    [HttpGet("{Group1_id}/HomePage_Group1S/{HomePage_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*HomePage*/ GetHomePage_Group1ById(int Group1_id, int HomePage_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group1 : _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
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
    [HttpGet("{Group1_id}/Group1_Item1S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item1> GetGroup1_Item1S(int Group1_id, [FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group1 : _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token) // test
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Item1>() // B
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Item1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item1.WithoutImages, item => item , null);
      var allowed_targets = ApiTokenValid ? _context.Item1 : _context.Item1;
      var editable_targets = ApiTokenValid ? _context.Item1 : (_context.Item1);
      var can_edit_by_token = ApiTokenValid || true;
      var items = (from link in _context.Group1_Item1
              where link.Group1Id == source.Id
              from target in allowed_targets
              where link.Item1Id == target.Id
              select target).OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
              .Select(SimpleModelsAndRelations.Models.Item1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item1.WithoutImages, item => item , null);
    }

    [HttpGet("{Group1_id}/Group1_Item1S/{Item1_id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Item1*/ GetGroup1_Item1ById(int Group1_id, int Item1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group1 : _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return NotFound();
      var allowed_targets = ApiTokenValid ? _context.Item1 : _context.Item1;
      var item = (from link in _context.Group1_Item1
              where link.Group1Id == source.Id
              from target in allowed_targets
              where link.Item1Id == target.Id
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Item1.FilterViewableAttributes())
              .FirstOrDefault(t => t.Id == Item1_id);
      if (item == null) return NotFound();
      item = SimpleModelsAndRelations.Models.Item1.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{Group1_id}/unlinked/Group1_Item1S")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Item1> GetUnlinkedGroup1_Item1S(int Group1_id, [FromQuery] int page_index, [FromQuery] int page_size = 25)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group1 : _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true || true;
      var can_link_by_token = ApiTokenValid || true;
      var can_view_by_token = ApiTokenValid || true;
      if (source == null || !can_view_by_token)
        return Enumerable.Empty<SimpleModelsAndRelations.Models.Item1>()
              .AsQueryable()
              .Select(SimpleModelsAndRelations.Models.Item1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, false))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item1.WithoutImages, item => item);
      var allowed_targets = ApiTokenValid ? _context.Item1 : _context.Item1;
      var editable_targets = ApiTokenValid ? _context.Item1 : (_context.Item1);
      var can_edit_by_token = ApiTokenValid || true;
      return (from target in allowed_targets
              where !_context.Group1_Item1.Any(link => link.Group1Id == source.Id && link.Item1Id == target.Id) &&
              (from link in _context.Group1_Item1
                where link.Item1Id == target.Id
                from s in _context.Group1
                where link.Group1Id == s.Id
                select s).Count() < 1
              select target).OrderBy(i => i.CreatedDate)
              .Select(SimpleModelsAndRelations.Models.Item1.FilterViewableAttributes())
              .Select(t => Tuple.Create(t, can_edit_by_token && editable_targets.Any(et => et.Id == t.Id)))
              .Paginate(can_create_by_token, can_delete_by_token, can_link_by_token, page_index, page_size, SimpleModelsAndRelations.Models.Item1.WithoutImages, item => item);
    }

    bool CanAdd_Group1_Group1_Item1S(Group1 source) {
      return (from link in _context.Group1_Item1
           where link.Group1Id == source.Id
           from target in _context.Item1
           where link.Item1Id == target.Id
           select target).Count() < 3;
    }

    bool CanAdd_Item1_Group1_Item1S(Item1 target) {
      return (from link in _context.Group1_Item1
           where link.Item1Id == target.Id
           from source in _context.Group1
           where link.Group1Id == source.Id
           select source).Count() < 1;
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Group1_id}/Group1_Item1S_Item1")]
    public IActionResult /*IEnumerable<Item1>*/ CreateNewGroup1_Item1_Item1(int Group1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = ApiTokenValid ? _context.Group1 : _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
      var can_create_by_token = ApiTokenValid || true;
      if (source == null || !can_create_by_token)
        return Unauthorized();
        // throw new Exception("Cannot create item in relation Group1_Item1S");
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Group1_Group1_Item1S(source) || !can_link_by_token)
        return Unauthorized();
        //throw new Exception("Cannot add item to relation Group1_Item1S");
      var new_target = new Item1() { CreatedDate = DateTime.Now, Id = _context.Item1.Max(i => i.Id) + 1 };
      _context.Item1.Add(new_target);
      _context.SaveChanges();
      var link = new Group1_Item1() { Id = _context.Group1_Item1.Max(l => l.Id) + 1, Group1Id = source.Id, Item1Id = new_target.Id };
      _context.Group1_Item1.Add(link);
      _context.SaveChanges();
      return Ok(new Item1[] { new_target });
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{Group1_id}/Group1_Item1S/{Item1_id}")]
    public IActionResult LinkWithGroup1_Item1(int Group1_id, int Item1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
      var allowed_targets = _context.Item1;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Item1_id);
      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_link_by_token = ApiTokenValid || true;
      if (!CanAdd_Group1_Group1_Item1S(source) || !can_link_by_token || !can_edit_source_by_token || !can_edit_target_by_token)
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group1_Item1S");
      if (!CanAdd_Item1_Group1_Item1S(target))
        return BadRequest();
        // throw new Exception("Cannot add item to relation Group1_Item1S");
      var link = new Group1_Item1() { Id = _context.Group1_Item1.Max(i => i.Id) + 1, Group1Id = source.Id, Item1Id = target.Id };
      _context.Group1_Item1.Add(link);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpDelete("{Group1_id}/Group1_Item1S/{Item1_id}")]
    public IActionResult UnlinkFromGroup1_Item1(int Group1_id, int Item1_id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_sources = _context.Group1;
      var source = allowed_sources.FirstOrDefault(s => s.Id == Group1_id);
      var allowed_targets = _context.Item1;
      var target = allowed_targets.FirstOrDefault(s => s.Id == Item1_id);
      var link = _context.Group1_Item1.FirstOrDefault(l => l.Group1Id == source.Id && l.Item1Id == target.Id);

      var can_edit_source_by_token = ApiTokenValid || true;
      var can_edit_target_by_token = ApiTokenValid || true;
      var can_unlink_by_token = ApiTokenValid || true;
      if (!can_unlink_by_token || !can_edit_source_by_token || !can_edit_target_by_token) return Unauthorized(); // throw new Exception("Cannot remove item from relation Group1_Item1S");
      _context.Group1_Item1.Remove(link);
      var target_to_remove = _context.Item1.FirstOrDefault(t => t.Id == Item1_id);
      
      _context.Item1.Remove(target_to_remove);
      _context.SaveChanges();
      return Ok();
    }
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Group1>*/ GetById(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var editable_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Group1.FilterViewableAttributesLocal()(item_full);
      item = SimpleModelsAndRelations.Models.Group1.WithoutImages(item);
      return Ok(new ItemWithEditable<Group1>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }

[RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/WithPictures")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*ItemWithEditable<Group1>*/ GetByIdWithPictures(int id)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var editable_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var item_full = allowed_items.FirstOrDefault(e => e.Id == id);
      if (item_full == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Group1.FilterViewableAttributesLocal()(item_full);
      return Ok(new ItemWithEditable<Group1>() {
        Item = item,
        Editable = editable_items.Any(e => e.Id == item.Id) });
    }
    
    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/Pic")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult /*Container<string>*/ GetPicById(int id)
    {
var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var full_item = allowed_items.FirstOrDefault(e => e.Id == id);
      if (full_item == null) return NotFound();
      var item = SimpleModelsAndRelations.Models.Group1.FilterViewableAttributesLocal()(full_item);
      return Ok(new Container<string> { Content = item.Pic });
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut("{id}/Pic")]
    [ValidateAntiForgeryToken]
    public void ChangePic(int id, [FromBody] Container<string> Pic)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      if (!allowed_items.Any(i => i.Id == id)) return;
      var item = new Group1() { Id = id, Pic = Pic.Content };
      _context.Group1.Update(item);
      
      _context.Entry(item).Property(x => x.Letter).IsModified = false;
      _context.Entry(item).Property(x => x.RichText).IsModified = false;
      _context.Entry(item).Property(x => x.IsRad).IsModified = false;
      _context.Entry(item).Property(x => x.Name).IsModified = false;
      _context.Entry(item).Property(x => x.Time).IsModified = false;
      _context.Entry(item).Property(x => x.Date).IsModified = false;
      _context.Entry(item).Property(x => x.Url).IsModified = false;
      _context.Entry(item).Property(x => x.Int).IsModified = false;
      _context.Entry(item).Property(x => x.String).IsModified = false;
      _context.Entry(item).Property(x => x.Double).IsModified = false;
      _context.Entry(item).Property(x => x.DateTime).IsModified = false;
      _context.Entry(item).Property(x => x.Tel).IsModified = false;
      _context.Entry(item).Property(x => x.File).IsModified = false;
      _context.Entry(item).Property(x => x.Email).IsModified = false;
      _context.Entry(item).Property(x => x.CreatedDate).IsModified = false;
      _context.Entry(item).Property(x => x.Pic).IsModified = true;
      _context.SaveChanges();
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult /*Group1*/ Create()
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var can_create_by_token = ApiTokenValid || true;
      if (!can_create_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized create attempt");
      var item = new Group1() { CreatedDate = DateTime.Now, Id = _context.Group1.Max(i => i.Id) + 1 };
      _context.Group1.Add(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributesLocal()(item));
      _context.SaveChanges();
      item = SimpleModelsAndRelations.Models.Group1.WithoutImages(item);
      return Ok(item);
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut]
    [ValidateAntiForgeryToken]
    public IActionResult Update([FromBody] Group1 item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      if (!allowed_items.Any(i => i.Id == item.Id)) return Unauthorized();
      var new_item = item;
      
      var can_edit_by_token = ApiTokenValid || true;
      if (item == null || !can_edit_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized edit attempt");
      _context.Update(new_item);
      _context.Entry(new_item).Property(x => x.Pic).IsModified = false;
      _context.Entry(new_item).Property(x => x.CreatedDate).IsModified = false;
      _context.SaveChanges();
      return Ok();
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPut("WithPictures")]
    [ValidateAntiForgeryToken]
    public IActionResult UpdateWithPictures([FromBody] Group1 item)
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
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

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var item = _context.Group1.FirstOrDefault(e => e.Id == id);
      var can_delete_by_token = ApiTokenValid || true;
      if (item == null || !can_delete_by_token)
        return Unauthorized();
        // throw new Exception("Unauthorized delete attempt");
      
      if (!allowed_items.Any(a => a.Id == item.Id)) return Unauthorized(); // throw new Exception("Unauthorized delete attempt");
      
      

      var targets_to_remove_0 = _context.Item1.Where(t => _context.Group1_Item1.Any(l => l.Group1Id == item.Id && l.Item1Id == t.Id));
      
      _context.Item1.RemoveRange(targets_to_remove_0);

      _context.Group1.Remove(item);
      _context.SaveChanges();
      return Ok();
    }


    [RestrictToUserType(new string[] {"*"})]
    [HttpGet]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public Page<Group1> GetAll([FromQuery] int page_index, [FromQuery] int page_size = 25 )
    {
      var session = HttpContext.Get<LoggableEntities>(_context);

      var allowed_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var editable_items = ApiTokenValid ? _context.Group1 : _context.Group1;
      var can_edit_by_token = ApiTokenValid || true;
      var can_create_by_token = ApiTokenValid || true;
      var can_delete_by_token = ApiTokenValid || true;
      var items = allowed_items.OrderBy(i => i.CreatedDate).AsQueryable();
      
      return items
        .Select(SimpleModelsAndRelations.Models.Group1.FilterViewableAttributes())
        .Select(s => Tuple.Create(s, can_edit_by_token && editable_items.Any(es => es.Id == s.Id)))
        .Paginate(can_create_by_token, can_delete_by_token, false, page_index, page_size, SimpleModelsAndRelations.Models.Group1.WithoutImages, item => item , null );
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpGet("{id}/FileDownload")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Download_File(int id)
    {
      var file = _context.Group1_FileData.FirstOrDefault(i => i.Group1Id == id);
      byte[] bytes = Convert.FromBase64String(file.Content);
      MemoryStream ms = new MemoryStream(bytes);
      return new FileStreamResult(ms, file.ContentType) { FileDownloadName = file.FileName };
    }

    [RestrictToUserType(new string[] {"*"})]
    [HttpPost("{id}/FileUpload")]
    public IActionResult Upload_File(int id)
    {
      var files = Request.Form.Files;
      if (files.Count != 1) throw new Exception("Uploader should receive exactly one file.");
      var file = files[0];
      using(var stream = file.OpenReadStream())
      {
        var bytes = new byte[stream.Length];
        stream.Read(bytes, 0, (int)stream.Length);
        var data = Convert.ToBase64String(bytes);
        var data_item = _context.Group1_FileData.FirstOrDefault(i => i.Group1Id == id);
        if (data_item == null) {
          data_item = new Group1_FileData() { Content = data, FileName = file.FileName, ContentType = file.ContentType, Group1Id = id, Id = _context.Group1_FileData.Max(i => i.Id) + 1 };
          _context.Group1_FileData.Add(data_item);
        } else {
          data_item.FileName = file.FileName;
          data_item.ContentType = file.ContentType;
          data_item.Content = data;
        }
        _context.Group1.FirstOrDefault(e => e.Id == id).File = file.FileName;
        _context.SaveChanges();
      }
      return Ok();
    }
    


    
  }

  