using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SimpleModelsAndRelations.Models
{
    public partial class HomePage: IEntity {
    public HomePage() {
      
    }
    public int Id {get;set;}
    
    [Newtonsoft.Json.JsonProperty(ItemConverterType = typeof(Newtonsoft.Json.Converters.JavaScriptDateTimeConverter))] public DateTime CreatedDate{ get; set; }
        
    
    static public Expression<Func<HomePage,HomePage>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<HomePage,HomePage> FilterViewableAttributesLocal() {
      return self => self;
    }
    static public HomePage WithoutImages(HomePage self) {
      
      return self;
    }
  }

  
  
  [Table("G1")] public partial class Group1: IEntity {
    public Group1() {
      Group1_Item1S = new HashSet<Group1_Item1>();
    }
    public int Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual ICollection<Group1_Item1> Group1_Item1S {get;set;}
    [Newtonsoft.Json.JsonProperty(ItemConverterType = typeof(Newtonsoft.Json.Converters.JavaScriptDateTimeConverter))] public DateTime CreatedDate{ get; set; }
        public string Letter {get;set;}
    public string RichText {get;set;}
    public string Pic {get;set;}
    public bool IsRad {get;set;}
    [Column("Name")] public string Name {get;set;}
    public DateTime Time {get;set;}
    public DateTime Date {get;set;}
    public string Url {get;set;}
    public int Int {get;set;}
    public string String {get;set;}
    public double Double {get;set;}
    [Newtonsoft.Json.JsonProperty(ItemConverterType = typeof(Newtonsoft.Json.Converters.JavaScriptDateTimeConverter))] public DateTime DateTime {get;set;}
    public string Tel {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual Group1_FileData Group1_FileData {get;set;}
    public string File {get;set;}
    public string Email {get;set;}
    
    static public Expression<Func<Group1,Group1>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Group1,Group1> FilterViewableAttributesLocal() {
      return self => self;
    }
    static public Group1 WithoutImages(Group1 self) {
      self.Pic = null;
      return self;
    }
  }

  public partial class Group1_FileData {
      public int Id {get;set;}
      public string Content {get;set;}
      public string FileName {get;set;}
      public string ContentType {get;set;}
      [Newtonsoft.Json.JsonIgnore] public virtual Group1 Group1 {get;set;}
      public int Group1Id {get;set;}
    }
  
  public partial class Item1: IEntity {
    public Item1() {
      Group1_Item1S = new HashSet<Group1_Item1>();
    }
    public int Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual ICollection<Group1_Item1> Group1_Item1S {get;set;}
    [Newtonsoft.Json.JsonProperty(ItemConverterType = typeof(Newtonsoft.Json.Converters.JavaScriptDateTimeConverter))] public DateTime CreatedDate{ get; set; }
        public string Name {get;set;}
    public string Description {get;set;}
    
    static public Expression<Func<Item1,Item1>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Item1,Item1> FilterViewableAttributesLocal() {
      return self => self;
    }
    static public Item1 WithoutImages(Item1 self) {
      
      return self;
    }
  }

  
  
  public partial class Group2: IEntity {
    public Group2() {
      Group2_Item2AS = new HashSet<Group2_Item2A>();
      Group2_Item2BS = new HashSet<Group2_Item2B>();
    }
    public int Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual ICollection<Group2_Item2A> Group2_Item2AS {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual ICollection<Group2_Item2B> Group2_Item2BS {get;set;}
    [Newtonsoft.Json.JsonProperty(ItemConverterType = typeof(Newtonsoft.Json.Converters.JavaScriptDateTimeConverter))] public DateTime CreatedDate{ get; set; }
        public string Name {get;set;}
    
    static public Expression<Func<Group2,Group2>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Group2,Group2> FilterViewableAttributesLocal() {
      return self => self;
    }
    static public Group2 WithoutImages(Group2 self) {
      
      return self;
    }
  }

  
  
  public partial class Item2A: IEntity {
    public Item2A() {
      Group2_Item2AS = new HashSet<Group2_Item2A>();
    }
    public int Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual ICollection<Group2_Item2A> Group2_Item2AS {get;set;}
    [Newtonsoft.Json.JsonProperty(ItemConverterType = typeof(Newtonsoft.Json.Converters.JavaScriptDateTimeConverter))] public DateTime CreatedDate{ get; set; }
        public string Name {get;set;}
    public string Description {get;set;}
    
    static public Expression<Func<Item2A,Item2A>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Item2A,Item2A> FilterViewableAttributesLocal() {
      return self => self;
    }
    static public Item2A WithoutImages(Item2A self) {
      
      return self;
    }
  }

  
  
  public partial class Item2B: IEntity {
    public Item2B() {
      Group2_Item2BS = new HashSet<Group2_Item2B>();
    }
    public int Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual ICollection<Group2_Item2B> Group2_Item2BS {get;set;}
    [Newtonsoft.Json.JsonProperty(ItemConverterType = typeof(Newtonsoft.Json.Converters.JavaScriptDateTimeConverter))] public DateTime CreatedDate{ get; set; }
        public string Name {get;set;}
    public string Content {get;set;}
    
    static public Expression<Func<Item2B,Item2B>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Item2B,Item2B> FilterViewableAttributesLocal() {
      return self => self;
    }
    static public Item2B WithoutImages(Item2B self) {
      
      return self;
    }
  }

  
  
  



  [Table("G1_I1")] public partial class Group1_Item1 {
    public Group1_Item1() {
      
    }
    public int Id {get;set;}
    
    
        [Newtonsoft.Json.JsonIgnore] public virtual Group1 Group1 {get;set;}
    public int Group1Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual Item1 Item1 {get;set;}
    public int Item1Id {get;set;}
    
    static public Expression<Func<Group1_Item1,Group1_Item1>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Group1_Item1,Group1_Item1> FilterViewableAttributesLocal() {
      return self => self;
    }
    
  }

  
  

  public partial class Group2_Item2A {
    public Group2_Item2A() {
      
    }
    public int Id {get;set;}
    
    
        [Newtonsoft.Json.JsonIgnore] public virtual Group2 Group2 {get;set;}
    public int Group2Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual Item2A Item2A {get;set;}
    public int Item2AId {get;set;}
    
    static public Expression<Func<Group2_Item2A,Group2_Item2A>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Group2_Item2A,Group2_Item2A> FilterViewableAttributesLocal() {
      return self => self;
    }
    
  }

  
  

  public partial class Group2_Item2B {
    public Group2_Item2B() {
      
    }
    public int Id {get;set;}
    
    
        [Newtonsoft.Json.JsonIgnore] public virtual Group2 Group2 {get;set;}
    public int Group2Id {get;set;}
    [Newtonsoft.Json.JsonIgnore] public virtual Item2B Item2B {get;set;}
    public int Item2BId {get;set;}
    
    static public Expression<Func<Group2_Item2B,Group2_Item2B>> FilterViewableAttributes() {
      return self => self;
    }
    static public Func<Group2_Item2B,Group2_Item2B> FilterViewableAttributesLocal() {
      return self => self;
    }
    
  }

  
  

  public partial class LoggableEntities {
  
}

  public partial class Session {
    public int Id {get;set;}
    public int? LoggedEntityId {get;set;}
    public string LoggedEntityName {get;set;}
    public string AdditionalInfo {get;set;}
    public string CookieName {get;set;}
    public string Content {get;set;}
    public DateTime CreatedAt {get;set;}
  }
}
