using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class UserConfiguration:BaseEntityConfiguration<User>
    {
        public override void Configure(EntityTypeBuilder<User> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.FirstName).IsRequired();
            builder.Property(b => b.LastName).IsRequired();
            builder.Property(b => b.BirthDate).IsRequired();
            builder.Property(b => b.PhoneNumber).IsRequired();
            builder.HasOne(b => b.City).WithMany(b => b.Users).HasForeignKey(b => b.CityId);
            builder.HasOne(b => b.Gender).WithMany(b => b.Users).HasForeignKey(b => b.GenderId);
            builder.HasMany(b => b.RentedCars).WithOne(b => b.User).HasForeignKey(b => b.UserId);
            builder.HasMany(b => b.Questions).WithOne(b => b.User).HasForeignKey(b => b.UserId);






        }
    }
}
