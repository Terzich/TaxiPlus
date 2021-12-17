using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class DataSeedUpdates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "518A69A38EAF1DCD6DFE01103906EACA");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "DCB20627FC8E6F9ECC3C52DE847BF1DB");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "AdminFit!");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "UserFit");
        }
    }
}
