using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class News_Image : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "news");

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "news",
                type: "varbinary(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "news");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "news",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
