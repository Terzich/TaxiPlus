using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class Gender:BaseEntity
    {
        public string _Gender { get; set; }
        public List<User> Users { get; set; }

    }
}
