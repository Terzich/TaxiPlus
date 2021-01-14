using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class CityConfiguration:BaseEntityConfiguration<City>
    {
        public override void Configure(EntityTypeBuilder<City> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.CityName).IsRequired();
            builder.HasMany(b => b.Users).WithOne(b => b.City).HasForeignKey(b => b.CityId);


        }
    }
}
