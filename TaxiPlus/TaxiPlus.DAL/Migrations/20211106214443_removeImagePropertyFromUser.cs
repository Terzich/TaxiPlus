using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class removeImagePropertyFromUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
