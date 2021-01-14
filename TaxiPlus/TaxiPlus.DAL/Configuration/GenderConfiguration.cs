using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class GenderConfiguration:BaseEntityConfiguration<Gender>
    {
        public override void Configure(EntityTypeBuilder<Gender> builder)
        {
            base.Configure(builder);
            builder.Property(b => b._Gender).IsRequired();
            builder.HasMany(b => b.Users).WithOne(b => b.Gender).HasForeignKey(b => b.GenderId);


        }
    }
}
