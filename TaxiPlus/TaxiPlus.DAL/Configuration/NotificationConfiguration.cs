using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Configuration
{
    public class NotificationConfiguration : BaseEntityConfiguration<Notification>
    {
        public override void Configure(EntityTypeBuilder<Notification> builder)
        {
            base.Configure(builder);
            builder.HasOne(b => b.User).WithMany(b => b.Notifications).HasForeignKey(b => b.UserId);
        }
    }
}
