using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SimpleModelsAndRelations.Models{
  public partial class SimpleModelsAndRelationsContext {
    public DbSet<HomePage> HomePage { get; set; }
    public DbSet<Group1> Group1 { get; set; }
    public DbSet<Item1> Item1 { get; set; }
    public DbSet<Group2> Group2 { get; set; }
    public DbSet<Item2A> Item2A { get; set; }
    public DbSet<Item2B> Item2B { get; set; }
    
    public DbSet<Group1_FileData> Group1_FileData {get;set;}
    
    
    
    
    public DbSet<Group1_Item1> Group1_Item1 { get; set; }
    public DbSet<Group2_Item2A> Group2_Item2A { get; set; }
    public DbSet<Group2_Item2B> Group2_Item2B { get; set; }
    public DbSet<Session> Session { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {



  
    
    
    
    
    

  
      modelBuilder.Entity<Session>()
        .HasIndex(b => b.CookieName);
      modelBuilder.Entity<Session>()
        .HasIndex(b => b.LoggedEntityName);
      modelBuilder.Entity<Session>()
        .HasIndex(b => b.LoggedEntityId);
      modelBuilder.Entity<Session>()
        .HasIndex(b => b.CreatedAt);
    }
  }
}
    