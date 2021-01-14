using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class ColorTypeConfiguration:BaseEntityConfiguration<ColorType>
    {
        public override void Configure(EntityTypeBuilder<ColorType> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.ColorTypeName).IsRequired();
            builder.HasMany(b => b.Colors).WithOne(b => b.ColorType).HasForeignKey(b => b.ColorTypeId);


        }
    }
}
