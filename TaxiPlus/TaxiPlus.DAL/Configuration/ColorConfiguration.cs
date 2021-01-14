using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;

namespace TaxiPlus.DAL.Configuration
{
    public class ColorConfiguration:BaseEntityConfiguration<DAL.Domain.Color>
    {
        public override void Configure(EntityTypeBuilder<DAL.Domain.Color> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.ColorName).IsRequired();
            builder.HasMany(b => b.Cars).WithOne(b => b.Color).HasForeignKey(b => b.ColorId);
            builder.HasMany(b => b.Cars).WithOne(b => b.Color).HasForeignKey(b => b.ColorId);
            builder.HasOne(b => b.ColorType).WithMany(b => b.Colors).HasForeignKey(b => b.ColorTypeId);




        }
    }
}
