using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class FuelTypeConfiguration:BaseEntityConfiguration<FuelType>
    {
        public override void Configure(EntityTypeBuilder<FuelType> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.FuelTypeName).IsRequired();
            builder.HasMany(b => b.Cars).WithOne(b => b.FuelType).HasForeignKey(b => b.FuelTypeId);


        }
    }
}
