using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class CarConfiguration:BaseEntityConfiguration<Car>
    {
        public override void Configure(EntityTypeBuilder<Car> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.CarName).IsRequired();
            builder.Property(b => b.YearOfProduction).HasMaxLength(2021);
            builder.HasOne(b => b.Color).WithMany(b => b.Cars).HasForeignKey(b => b.ColorId);
            builder.HasOne(b => b.CarManufacturer).WithMany(b => b.Cars).HasForeignKey(b => b.CarManufacturerId);
            builder.HasOne(b => b.CarType).WithMany(b => b.Cars).HasForeignKey(b => b.CarTypeId);
            builder.HasOne(b => b.FuelType).WithMany(b => b.Cars).HasForeignKey(b => b.FuelTypeId);
            builder.HasMany(b => b.RentedCars).WithOne(b => b.Car).HasForeignKey(b => b.CarId);







        }
    }
}
