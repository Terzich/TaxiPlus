using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class CarTypeConfiguration:BaseEntityConfiguration<CarType>
    {
        public override void Configure(EntityTypeBuilder<CarType> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.TypeName).IsRequired();
            builder.HasMany(b => b.Cars).WithOne(b => b.CarType).HasForeignKey(b => b.CarTypeId);


        }
    }
}
