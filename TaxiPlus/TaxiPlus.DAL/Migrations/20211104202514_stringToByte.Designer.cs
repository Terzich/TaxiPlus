﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TaxiPlus.DAL.Database;

namespace TaxiPlus.DAL.Migrations
{
    [DbContext(typeof(TaxiPlusDbContext))]
    [Migration("20211104202514_stringToByte")]
    partial class stringToByte
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("CarManufacturerId")
                        .HasColumnType("int");

                    b.Property<string>("CarName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CarTypeId")
                        .HasColumnType("int");

                    b.Property<int>("ColorId")
                        .HasColumnType("int");

                    b.Property<int>("FuelTypeId")
                        .HasColumnType("int");

                    b.Property<byte[]>("Image")
                        .HasColumnType("varbinary(max)");

                    b.Property<int>("NumberOfDoors")
                        .HasColumnType("int");

                    b.Property<int>("PricePerDay")
                        .HasColumnType("int");

                    b.Property<int>("YearOfManufacturing")
                        .HasMaxLength(2021)
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CarManufacturerId");

                    b.HasIndex("CarTypeId");

                    b.HasIndex("ColorId");

                    b.HasIndex("FuelTypeId");

                    b.ToTable("cars");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.CarManufacturer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Logo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ManufacturerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("carManufacturers");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.CarType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("TypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("carTypes");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("CityName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("cities");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Color", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ColorName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ColorTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ColorTypeId");

                    b.ToTable("colors");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.ColorType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ColorTypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("colorTypes");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.FuelType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("FuelTypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("fuelTypes");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Gender", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("_Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("genders");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.News", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NewsTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("PublishedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("news");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("questions");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.RentedCar", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("CarId")
                        .HasColumnType("int");

                    b.Property<bool>("RentApproved")
                        .HasColumnType("bit");

                    b.Property<DateTime>("RentedFrom")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("RentedTo")
                        .HasColumnType("datetime2");

                    b.Property<bool>("RequestCanceled")
                        .HasColumnType("bit");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CarId");

                    b.HasIndex("UserId");

                    b.ToTable("rentedCars");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("RoleName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("roles");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("CityId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GenderId")
                        .HasColumnType("int");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.HasIndex("GenderId");

                    b.HasIndex("RoleId");

                    b.ToTable("users");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Car", b =>
                {
                    b.HasOne("TaxiPlus.DAL.Domain.CarManufacturer", "CarManufacturer")
                        .WithMany("Cars")
                        .HasForeignKey("CarManufacturerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TaxiPlus.DAL.Domain.CarType", "CarType")
                        .WithMany("Cars")
                        .HasForeignKey("CarTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TaxiPlus.DAL.Domain.Color", "Color")
                        .WithMany("Cars")
                        .HasForeignKey("ColorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TaxiPlus.DAL.Domain.FuelType", "FuelType")
                        .WithMany("Cars")
                        .HasForeignKey("FuelTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CarManufacturer");

                    b.Navigation("CarType");

                    b.Navigation("Color");

                    b.Navigation("FuelType");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Color", b =>
                {
                    b.HasOne("TaxiPlus.DAL.Domain.ColorType", "ColorType")
                        .WithMany("Colors")
                        .HasForeignKey("ColorTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ColorType");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Question", b =>
                {
                    b.HasOne("TaxiPlus.DAL.Domain.User", "User")
                        .WithMany("Questions")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.RentedCar", b =>
                {
                    b.HasOne("TaxiPlus.DAL.Domain.Car", "Car")
                        .WithMany("RentedCars")
                        .HasForeignKey("CarId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TaxiPlus.DAL.Domain.User", "User")
                        .WithMany("RentedCars")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Car");

                    b.Navigation("User");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.User", b =>
                {
                    b.HasOne("TaxiPlus.DAL.Domain.City", "City")
                        .WithMany("Users")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TaxiPlus.DAL.Domain.Gender", "Gender")
                        .WithMany("Users")
                        .HasForeignKey("GenderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TaxiPlus.DAL.Domain.Role", "Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("City");

                    b.Navigation("Gender");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Car", b =>
                {
                    b.Navigation("RentedCars");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.CarManufacturer", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.CarType", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.City", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Color", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.ColorType", b =>
                {
                    b.Navigation("Colors");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.FuelType", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.Gender", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("TaxiPlus.DAL.Domain.User", b =>
                {
                    b.Navigation("Questions");

                    b.Navigation("RentedCars");
                });
#pragma warning restore 612, 618
        }
    }
}
