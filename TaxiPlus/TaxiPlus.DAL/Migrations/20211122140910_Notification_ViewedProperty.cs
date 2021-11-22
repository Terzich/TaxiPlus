using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class Notification_ViewedProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Viewed",
                table: "notifications",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Viewed",
                table: "notifications");
        }
    }
}
