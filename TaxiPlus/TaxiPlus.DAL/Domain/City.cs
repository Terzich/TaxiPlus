using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class City
    {
        public int Id { get; set; }
        public string CityName { get; set; }
        public string Address { get; set; }
        public List<User> Users { get; set; }

    }
}
