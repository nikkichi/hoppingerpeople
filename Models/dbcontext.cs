using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HoppingerPeople.Models{
  public partial class HoppingerPeopleContext : DbContext {

      public HoppingerPeopleContext(DbContextOptions<HoppingerPeopleContext> options) : base(options){}
  }
}
