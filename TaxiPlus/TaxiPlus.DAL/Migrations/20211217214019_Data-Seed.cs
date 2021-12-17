using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiPlus.DAL.Migrations
{
    public partial class DataSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 5000);

            migrationBuilder.InsertData(
                table: "carManufacturers",
                columns: new[] { "Id", "Logo", "ManufacturerName" },
                values: new object[,]
                {
                    { 1, null, "Mercedes" },
                    { 2, null, "BMW" },
                    { 3, null, "Audi" },
                    { 4, null, "Volkswagen" },
                    { 5, null, "Toyota" },
                    { 6, null, "Honda" },
                    { 7, null, "Škoda" },
                    { 8, null, "Ford" },
                    { 9, null, "Chevrolet" },
                    { 10, null, "Volvo" },
                    { 11, null, "Nissan" },
                    { 12, null, "Hyundai" }
                });

            migrationBuilder.InsertData(
                table: "carTypes",
                columns: new[] { "Id", "TypeName" },
                values: new object[,]
                {
                    { 3, "Terenac" },
                    { 4, "Caddy" },
                    { 1, "Limuzina" },
                    { 2, "Karavan" }
                });

            migrationBuilder.InsertData(
                table: "cities",
                columns: new[] { "Id", "CityName" },
                values: new object[,]
                {
                    { 18, "Prijedor" },
                    { 19, "Cazin" },
                    { 20, "Velika Kladuša" },
                    { 21, "Banja Luka" },
                    { 22, "Bosanski Brod" },
                    { 23, "Livno" },
                    { 24, "Kupres" },
                    { 26, "Ključ" },
                    { 27, "Srebrenica" },
                    { 28, "Posušje" },
                    { 29, "Bjeljina" },
                    { 30, "Brčko" },
                    { 17, "Nevesinje" },
                    { 25, "Tomislavgrad" },
                    { 16, "Trebinje" },
                    { 13, "Vitez" },
                    { 14, "Busovača" },
                    { 1, "Sarajevo" },
                    { 15, "Kiseljak" },
                    { 3, "Mostar" },
                    { 4, "Zenica" },
                    { 5, "Tuzla" },
                    { 6, "Donji Vakuf" },
                    { 2, "Bugojno" },
                    { 8, "Sanski Most" },
                    { 9, "Bihać" }
                });

            migrationBuilder.InsertData(
                table: "cities",
                columns: new[] { "Id", "CityName" },
                values: new object[,]
                {
                    { 10, "Gornji Vakuf" },
                    { 11, "Skender Vakuf" },
                    { 12, "Varcar Vakuf" },
                    { 7, "Travnik" }
                });

            migrationBuilder.InsertData(
                table: "colorTypes",
                columns: new[] { "Id", "ColorTypeName" },
                values: new object[] { 1, "Metalik" });

            migrationBuilder.InsertData(
                table: "fuelTypes",
                columns: new[] { "Id", "FuelTypeName" },
                values: new object[,]
                {
                    { 5, "Električni automobil" },
                    { 4, "Hibrid" },
                    { 2, "Benzin" },
                    { 1, "Dizel" },
                    { 3, "Plin" }
                });

            migrationBuilder.InsertData(
                table: "genders",
                columns: new[] { "Id", "_Gender" },
                values: new object[,]
                {
                    { 1, "Muško" },
                    { 2, "Žensko" },
                    { 3, "Ne želim reći" }
                });

            migrationBuilder.InsertData(
                table: "roles",
                columns: new[] { "Id", "RoleName" },
                values: new object[,]
                {
                    { 1, "Administrator" },
                    { 2, "User" }
                });

            migrationBuilder.InsertData(
                table: "colors",
                columns: new[] { "Id", "ColorName", "ColorTypeId" },
                values: new object[,]
                {
                    { 1, "Bijela", 1 },
                    { 2, "Crna", 1 },
                    { 3, "Crvena", 1 },
                    { 4, "Plava", 1 },
                    { 5, "Zelena", 1 },
                    { 6, "Siva", 1 },
                    { 7, "Smeđa", 1 },
                    { 8, "Žuta", 1 },
                    { 9, "Zlatna", 1 }
                });

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "Address", "BirthDate", "CityId", "Email", "FirstName", "GenderId", "LastName", "Password", "PhoneNumber", "RoleId", "Username" },
                values: new object[,]
                {
                    { 1, "Sultan Ahmedova bb", new DateTime(1999, 1, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, "ahmedt@hotmail.com", "Ahmed", 1, "Terzic", "AdminFit!", "38762650592", 1, "Admin" },
                    { 2, "Sultan Ahmedova bb", new DateTime(1999, 11, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, "userF@hotmail.com", "User", 1, "Fit", "UserFit", "38711254", 2, "UserFit" }
                });

            migrationBuilder.InsertData(
                table: "cars",
                columns: new[] { "Id", "CarManufacturerId", "CarName", "CarTypeId", "ColorId", "FuelTypeId", "Image", "NumberOfDoors", "PricePerDay", "YearOfManufacturing" },
                values: new object[] { 1, 1, "Mercedes CLK 250", 3, 1, 1, null, 5, 50, 2017 });

            migrationBuilder.InsertData(
                table: "cars",
                columns: new[] { "Id", "CarManufacturerId", "CarName", "CarTypeId", "ColorId", "FuelTypeId", "Image", "NumberOfDoors", "PricePerDay", "YearOfManufacturing" },
                values: new object[] { 2, 4, "Golf MK 7", 1, 3, 2, null, 5, 50, 2016 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "carTypes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "carTypes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "cars",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "cars",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "fuelTypes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "fuelTypes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "fuelTypes",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "genders",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "genders",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "carManufacturers",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "carTypes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "carTypes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "cities",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "colors",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "fuelTypes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "fuelTypes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "genders",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "roles",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "roles",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "colorTypes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.InsertData(
                table: "cities",
                columns: new[] { "Id", "CityName" },
                values: new object[] { 5000, "Zagreb" });
        }
    }
}
