using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class stringToByte : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "cars");

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "cars",
                type: "varbinary(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "cars");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "cars",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
