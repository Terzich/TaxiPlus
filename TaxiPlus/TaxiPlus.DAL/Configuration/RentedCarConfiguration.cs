using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class RentedCarConfiguration:BaseEntityConfiguration<RentedCar>
    {
        public override void Configure(EntityTypeBuilder<RentedCar> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.RentedFrom).IsRequired();
            builder.Property(b => b.RentedTo).IsRequired();
            builder.HasOne(b => b.Car).WithMany(b => b.RentedCars).HasForeignKey(b => b.CarId);
            builder.HasOne(b => b.User).WithMany(b => b.RentedCars).HasForeignKey(b => b.UserId);
        }
    }
}
