using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SimpleModelsAndRelations.Models;

namespace SimpleModelsAndRelations.Migrations
{
    [DbContext(typeof(SimpleModelsAndRelationsContext))]
    partial class SimpleModelsAndRelationsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group1", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<DateTime>("Date");

                    b.Property<DateTime>("DateTime");

                    b.Property<double>("Double");

                    b.Property<string>("Email");

                    b.Property<string>("File");

                    b.Property<int>("Int");

                    b.Property<bool>("IsRad");

                    b.Property<string>("Letter");

                    b.Property<string>("Name")
                        .HasColumnName("Name");

                    b.Property<string>("Pic");

                    b.Property<string>("RichText");

                    b.Property<string>("String");

                    b.Property<string>("Tel");

                    b.Property<DateTime>("Time");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.ToTable("G1");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group1_FileData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<string>("ContentType");

                    b.Property<string>("FileName");

                    b.Property<int>("Group1Id");

                    b.HasKey("Id");

                    b.HasIndex("Group1Id")
                        .IsUnique();

                    b.ToTable("Group1_FileData");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group1_Item1", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Group1Id");

                    b.Property<int>("Item1Id");

                    b.HasKey("Id");

                    b.HasIndex("Group1Id");

                    b.HasIndex("Item1Id");

                    b.ToTable("G1_I1");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group2", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Group2");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group2_Item2A", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Group2Id");

                    b.Property<int>("Item2AId");

                    b.HasKey("Id");

                    b.HasIndex("Group2Id");

                    b.HasIndex("Item2AId");

                    b.ToTable("Group2_Item2A");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group2_Item2B", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Group2Id");

                    b.Property<int>("Item2BId");

                    b.HasKey("Id");

                    b.HasIndex("Group2Id");

                    b.HasIndex("Item2BId");

                    b.ToTable("Group2_Item2B");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.HomePage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.HasKey("Id");

                    b.ToTable("HomePage");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Item1", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Item1");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Item2A", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Item2A");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Item2B", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Item2B");
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Session", b =>
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

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group1_FileData", b =>
                {
                    b.HasOne("SimpleModelsAndRelations.Models.Group1", "Group1")
                        .WithOne("Group1_FileData")
                        .HasForeignKey("SimpleModelsAndRelations.Models.Group1_FileData", "Group1Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group1_Item1", b =>
                {
                    b.HasOne("SimpleModelsAndRelations.Models.Group1", "Group1")
                        .WithMany("Group1_Item1S")
                        .HasForeignKey("Group1Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SimpleModelsAndRelations.Models.Item1", "Item1")
                        .WithMany("Group1_Item1S")
                        .HasForeignKey("Item1Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group2_Item2A", b =>
                {
                    b.HasOne("SimpleModelsAndRelations.Models.Group2", "Group2")
                        .WithMany("Group2_Item2AS")
                        .HasForeignKey("Group2Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SimpleModelsAndRelations.Models.Item2A", "Item2A")
                        .WithMany("Group2_Item2AS")
                        .HasForeignKey("Item2AId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SimpleModelsAndRelations.Models.Group2_Item2B", b =>
                {
                    b.HasOne("SimpleModelsAndRelations.Models.Group2", "Group2")
                        .WithMany("Group2_Item2BS")
                        .HasForeignKey("Group2Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SimpleModelsAndRelations.Models.Item2B", "Item2B")
                        .WithMany("Group2_Item2BS")
                        .HasForeignKey("Item2BId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
