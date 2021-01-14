using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class CarManufacturer: BaseEntity
    {
        public string ManufacturerName { get; set; }
        public string Logo { get; set; }
        public List<Car> Cars { get; set; }

    }
}
