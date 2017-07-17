using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using HoppingerPeople.Models;

namespace HoppingerPeople.Migrations
{
    [DbContext(typeof(HoppingerPeopleContext))]
    partial class HoppingerPeopleContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("HoppingerPeople.Models.HomePage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.HasKey("Id");

                    b.ToTable("HomePage");
                });

            modelBuilder.Entity("HoppingerPeople.Models.Session", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AdditionalInfo");

                    b.Property<string>("Content");

                    b.Property<string>("CookieName");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<int?>("LoggedEntityId");

                    b.Property<string>("LoggedEntityName");

                    b.HasKey("Id");

                    b.HasIndex("CookieName");

                    b.HasIndex("CreatedAt");

                    b.HasIndex("LoggedEntityId");

                    b.HasIndex("LoggedEntityName");

                    b.ToTable("Session");
                });
        }
    }
}
