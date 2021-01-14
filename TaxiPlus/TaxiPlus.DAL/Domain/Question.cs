using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class Question:BaseEntity
    {
        public string Text { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }

    }
}
