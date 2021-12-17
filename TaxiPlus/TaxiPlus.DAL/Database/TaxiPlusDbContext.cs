using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Configuration;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Database
{
    public class TaxiPlusDbContext:DbContext
    {
        public TaxiPlusDbContext(DbContextOptions<TaxiPlusDbContext> options):base(options)
        {

        }
        
        public DbSet<Car> cars { get; set; }
        public DbSet<CarManufacturer> carManufacturers { get; set; }
        public DbSet<CarType> carTypes { get; set; }
        public DbSet<City> cities { get; set; }
        public DbSet<Color> colors { get; set; }
        public DbSet<ColorType> colorTypes { get; set; }
        public DbSet<FuelType> fuelTypes { get; set; }
        public DbSet<Gender> genders { get; set; }
        public DbSet<Question> questions { get; set; }
        public DbSet<RentedCar> rentedCars { get; set; }
        public DbSet<User> users { get; set; }
        public DbSet<News> news{ get; set; }
        public DbSet<Role> roles{ get; set; }
        public DbSet<Notification> notifications{ get; set; }





        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CarConfiguration).Assembly);

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<City>().HasData(new City { Id =1, CityName = "Sarajevo" },
                new City { Id = 2, CityName = "Bugojno" },
                new City { Id = 3, CityName = "Mostar" },
                new City { Id = 4, CityName = "Zenica" },
                new City { Id = 5, CityName = "Tuzla" },
                new City { Id = 6, CityName = "Donji Vakuf"},
                new City { Id = 7, CityName = "Travnik" },
                new City { Id = 8, CityName = "Sanski Most" },
                new City { Id = 9, CityName = "Bihać" },
                new City { Id = 10, CityName = "Gornji Vakuf" },
                new City { Id = 11, CityName = "Skender Vakuf" },
                new City { Id = 12, CityName = "Varcar Vakuf" },
                new City { Id = 13, CityName = "Vitez" },
                new City { Id = 14, CityName = "Busovača" },
                new City { Id = 15, CityName = "Kiseljak" },
                new City { Id = 16, CityName = "Trebinje" },
                new City { Id = 17, CityName = "Nevesinje" },
                new City { Id = 18, CityName = "Prijedor" },
                new City { Id = 19, CityName = "Cazin" },
                new City { Id = 20, CityName = "Velika Kladuša" },
                new City { Id = 21, CityName = "Banja Luka" },
                new City { Id = 22, CityName = "Bosanski Brod" },
                new City { Id = 23, CityName = "Livno" },
                new City { Id = 24, CityName = "Kupres" },
                new City { Id = 25, CityName = "Tomislavgrad" },
                new City { Id = 26, CityName = "Ključ" },
                new City { Id = 27, CityName = "Srebrenica" },
                new City { Id = 28, CityName = "Posušje" },
                new City { Id = 29, CityName = "Bjeljina" }, 
                new City { Id = 30, CityName = "Brčko" });
            modelBuilder.Entity<Gender>().HasData(new Gender { Id = 1, _Gender = "Muško" }, new Gender { Id = 2, _Gender = "Žensko" }, new Gender { Id = 3, _Gender = "Ne želim reći" });
            
            modelBuilder.Entity<Role>().HasData(new Role { Id = 1, RoleName = "Administrator" }, new Role { Id = 2, RoleName = "User" });

            modelBuilder.Entity<User>().HasData(new User { Id = 1, GenderId = 1, CityId = 2, Address = "Sultan Ahmedova bb", FirstName = "Ahmed", LastName = "Terzic", Email = "ahmedt@hotmail.com", Username = "Admin", Password = "518A69A38EAF1DCD6DFE01103906EACA", BirthDate = new DateTime(1999, 01, 13), RoleId = 1, PhoneNumber = "38762650592" },
                new User { Id = 2, GenderId = 1, CityId = 3, Address = "Sultan Ahmedova bb", FirstName = "User", LastName = "Fit", Email = "userF@hotmail.com", Username = "UserFit", Password = "DCB20627FC8E6F9ECC3C52DE847BF1DB", BirthDate = new DateTime(1999, 11, 11), RoleId = 2, PhoneNumber = "38711254" });

            modelBuilder.Entity<CarManufacturer>().HasData(new CarManufacturer { Id = 1, ManufacturerName = "Mercedes" },
                new CarManufacturer { Id = 2, ManufacturerName = "BMW" },
                new CarManufacturer { Id = 3, ManufacturerName = "Audi" },
                new CarManufacturer { Id = 4, ManufacturerName = "Volkswagen" },
                new CarManufacturer { Id = 5, ManufacturerName = "Toyota" },
                new CarManufacturer { Id = 6, ManufacturerName = "Honda" },
                new CarManufacturer { Id = 7, ManufacturerName = "Škoda" },
                new CarManufacturer { Id = 8, ManufacturerName = "Ford" },
                new CarManufacturer { Id = 9, ManufacturerName = "Chevrolet" },
                new CarManufacturer { Id = 10, ManufacturerName = "Volvo" },
                new CarManufacturer { Id = 11, ManufacturerName = "Nissan" },
                new CarManufacturer { Id = 12, ManufacturerName = "Hyundai" }
                );
            modelBuilder.Entity<CarType>().HasData(new CarType { Id = 1, TypeName = "Limuzina" }, new CarType { Id = 2, TypeName = "Karavan" },
                new CarType { Id = 3, TypeName = "Terenac" }, new CarType { Id = 4, TypeName = "Caddy" });
            modelBuilder.Entity<ColorType>().HasData(new ColorType { Id = 1, ColorTypeName = "Metalik" });
            modelBuilder.Entity<Color>().HasData(new Color { Id = 1, ColorTypeId = 1, ColorName = "Bijela" },
                new Color { Id = 2, ColorTypeId = 1, ColorName = "Crna" },
                new Color { Id = 3, ColorTypeId = 1, ColorName = "Crvena" },
                new Color { Id = 4, ColorTypeId = 1, ColorName = "Plava" },
                new Color { Id = 5, ColorTypeId = 1, ColorName = "Zelena" },
                new Color { Id = 6, ColorTypeId = 1, ColorName = "Siva" },
                new Color { Id = 7, ColorTypeId = 1, ColorName = "Smeđa" },
                new Color { Id = 8, ColorTypeId = 1, ColorName = "Žuta" },
                new Color { Id = 9, ColorTypeId = 1, ColorName = "Zlatna" }
                );

            modelBuilder.Entity<FuelType>().HasData(new FuelType { Id = 1, FuelTypeName = "Dizel" },
                new FuelType { Id = 2, FuelTypeName = "Benzin" },
                new FuelType { Id = 3, FuelTypeName = "Plin" },
                new FuelType { Id = 4, FuelTypeName = "Hibrid" },
                new FuelType { Id = 5, FuelTypeName = "Električni automobil" });


            modelBuilder.Entity<Car>().HasData(new Car { Id = 1, CarName = "Mercedes CLK 250", NumberOfDoors = 5, PricePerDay=50, YearOfManufacturing = 2017, ColorId = 1, CarTypeId = 3, FuelTypeId = 1, CarManufacturerId = 1},
                new Car { Id = 2, CarName = "Golf MK 7", NumberOfDoors = 5, PricePerDay = 50, YearOfManufacturing = 2016, ColorId = 3, CarTypeId = 1, FuelTypeId = 2, CarManufacturerId = 4 });
        }
    }
}
