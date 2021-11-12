using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class QuestionConfiguration:BaseEntityConfiguration<Question>
    {
        public override void Configure(EntityTypeBuilder<Question> builder)
        {
            base.Configure(builder);
            builder.Property(b => b.Text).IsRequired();
            builder.Property(b => b.UserId).IsRequired(false);
            builder.HasOne(b => b.User).WithMany(b => b.Questions).HasForeignKey(b => b.UserId);
        }
    }
}
