using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class CarManufacturer
    {
        public int Id { get; set; }
        public string ManufacturerName { get; set; }
        public string Logo { get; set; }
        public List<Car> Cars { get; set; }

    }
}
