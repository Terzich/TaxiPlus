using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class Notification  : BaseEntity
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
