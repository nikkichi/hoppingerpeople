using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SimpleModelsAndRelations.Migrations
{
    public partial class SpecChange_20170717114157 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "G1",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    DateTime = table.Column<DateTime>(nullable: false),
                    Double = table.Column<double>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    File = table.Column<string>(nullable: true),
                    Int = table.Column<int>(nullable: false),
                    IsRad = table.Column<bool>(nullable: false),
                    Letter = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Pic = table.Column<string>(nullable: true),
                    RichText = table.Column<string>(nullable: true),
                    String = table.Column<string>(nullable: true),
                    Tel = table.Column<string>(nullable: true),
                    Time = table.Column<DateTime>(nullable: false),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_G1", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Group2",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group2", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HomePage",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CreatedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HomePage", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Item1",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item1", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Item2A",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item2A", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Item2B",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Content = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item2B", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Session",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AdditionalInfo = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    CookieName = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    LoggedEntityId = table.Column<int>(nullable: true),
                    LoggedEntityName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Session", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Group1_FileData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Content = table.Column<string>(nullable: true),
                    ContentType = table.Column<string>(nullable: true),
                    FileName = table.Column<string>(nullable: true),
                    Group1Id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group1_FileData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Group1_FileData_G1_Group1Id",
                        column: x => x.Group1Id,
                        principalTable: "G1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "G1_I1",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Group1Id = table.Column<int>(nullable: false),
                    Item1Id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_G1_I1", x => x.Id);
                    table.ForeignKey(
                        name: "FK_G1_I1_G1_Group1Id",
                        column: x => x.Group1Id,
                        principalTable: "G1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_G1_I1_Item1_Item1Id",
                        column: x => x.Item1Id,
                        principalTable: "Item1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Group2_Item2A",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Group2Id = table.Column<int>(nullable: false),
                    Item2AId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group2_Item2A", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Group2_Item2A_Group2_Group2Id",
                        column: x => x.Group2Id,
                        principalTable: "Group2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Group2_Item2A_Item2A_Item2AId",
                        column: x => x.Item2AId,
                        principalTable: "Item2A",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Group2_Item2B",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Group2Id = table.Column<int>(nullable: false),
                    Item2BId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group2_Item2B", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Group2_Item2B_Group2_Group2Id",
                        column: x => x.Group2Id,
                        principalTable: "Group2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Group2_Item2B_Item2B_Item2BId",
                        column: x => x.Item2BId,
                        principalTable: "Item2B",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Group1_FileData_Group1Id",
                table: "Group1_FileData",
                column: "Group1Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_G1_I1_Group1Id",
                table: "G1_I1",
                column: "Group1Id");

            migrationBuilder.CreateIndex(
                name: "IX_G1_I1_Item1Id",
                table: "G1_I1",
                column: "Item1Id");

            migrationBuilder.CreateIndex(
                name: "IX_Group2_Item2A_Group2Id",
                table: "Group2_Item2A",
                column: "Group2Id");

            migrationBuilder.CreateIndex(
                name: "IX_Group2_Item2A_Item2AId",
                table: "Group2_Item2A",
                column: "Item2AId");

            migrationBuilder.CreateIndex(
                name: "IX_Group2_Item2B_Group2Id",
                table: "Group2_Item2B",
                column: "Group2Id");

            migrationBuilder.CreateIndex(
                name: "IX_Group2_Item2B_Item2BId",
                table: "Group2_Item2B",
                column: "Item2BId");

            migrationBuilder.CreateIndex(
                name: "IX_Session_CookieName",
                table: "Session",
                column: "CookieName");

            migrationBuilder.CreateIndex(
                name: "IX_Session_CreatedAt",
                table: "Session",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_Session_LoggedEntityId",
                table: "Session",
                column: "LoggedEntityId");

            migrationBuilder.CreateIndex(
                name: "IX_Session_LoggedEntityName",
                table: "Session",
                column: "LoggedEntityName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Group1_FileData");

            migrationBuilder.DropTable(
                name: "G1_I1");

            migrationBuilder.DropTable(
                name: "Group2_Item2A");

            migrationBuilder.DropTable(
                name: "Group2_Item2B");

            migrationBuilder.DropTable(
                name: "HomePage");

            migrationBuilder.DropTable(
                name: "Session");

            migrationBuilder.DropTable(
                name: "G1");

            migrationBuilder.DropTable(
                name: "Item1");

            migrationBuilder.DropTable(
                name: "Item2A");

            migrationBuilder.DropTable(
                name: "Group2");

            migrationBuilder.DropTable(
                name: "Item2B");
        }
    }
}
