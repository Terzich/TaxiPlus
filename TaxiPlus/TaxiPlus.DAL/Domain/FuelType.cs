using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class FuelType
    {
        public int Id { get; set; }
        public string FuelTypeName { get; set; }
        public List<Car> Cars{ get; set; }
    }
}
