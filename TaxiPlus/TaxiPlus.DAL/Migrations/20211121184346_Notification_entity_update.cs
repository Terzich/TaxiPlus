using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class Notification_entity_update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Notification_users_UserId",
                table: "Notification");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Notification",
                table: "Notification");

            migrationBuilder.RenameTable(
                name: "Notification",
                newName: "notifications");

            migrationBuilder.RenameIndex(
                name: "IX_Notification_UserId",
                table: "notifications",
                newName: "IX_notifications_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_notifications",
                table: "notifications",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_notifications_users_UserId",
                table: "notifications",
                column: "UserId",
                principalTable: "users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_notifications_users_UserId",
                table: "notifications");

            migrationBuilder.DropPrimaryKey(
                name: "PK_notifications",
                table: "notifications");

            migrationBuilder.RenameTable(
                name: "notifications",
                newName: "Notification");

            migrationBuilder.RenameIndex(
                name: "IX_notifications_UserId",
                table: "Notification",
                newName: "IX_Notification_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Notification",
                table: "Notification",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Notification_users_UserId",
                table: "Notification",
                column: "UserId",
                principalTable: "users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
