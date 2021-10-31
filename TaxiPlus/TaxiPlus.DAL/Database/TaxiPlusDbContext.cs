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




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CarConfiguration).Assembly);

            base.OnModelCreating(modelBuilder);
        }
    }
}
