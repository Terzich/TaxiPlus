using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class CarManufacturerConfiguration:BaseEntityConfiguration<CarManufacturer>
    {
        public override void Configure(EntityTypeBuilder<CarManufacturer> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.ManufacturerName).IsRequired();
            builder.HasMany(b => b.Cars).WithOne(b => b.CarManufacturer).HasForeignKey(b => b.CarManufacturerId);


        }
    }
}
