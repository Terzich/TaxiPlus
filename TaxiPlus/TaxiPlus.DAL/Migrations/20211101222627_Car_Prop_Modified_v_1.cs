using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class Car_Prop_Modified_v_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "YearOfProduction",
                table: "cars");

            migrationBuilder.AlterColumn<int>(
                name: "PricePerDay",
                table: "cars",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AddColumn<int>(
                name: "YearOfManufacturing",
                table: "cars",
                type: "int",
                maxLength: 2021,
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "YearOfManufacturing",
                table: "cars");

            migrationBuilder.AlterColumn<decimal>(
                name: "PricePerDay",
                table: "cars",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<DateTime>(
                name: "YearOfProduction",
                table: "cars",
                type: "datetime2",
                maxLength: 2021,
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
