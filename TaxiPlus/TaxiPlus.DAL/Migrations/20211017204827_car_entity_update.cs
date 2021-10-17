using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class car_entity_update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsRentVehicle",
                table: "cars");

            migrationBuilder.DropColumn(
                name: "IsTaxiVehicle",
                table: "cars");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsRentVehicle",
                table: "cars",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsTaxiVehicle",
                table: "cars",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
