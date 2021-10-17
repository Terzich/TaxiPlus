using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Requests
{
    public class CarUpsertRequest
    {
        public string CarName { get; set; }
        public DateTime YearOfProduction { get; set; }
        public int NumberOfDoors { get; set; }
        public decimal PricePerDay { get; set; }
        public int CarManufacturerId { get; set; }
        public int ColorId { get; set; }
        public int FuelTypeId { get; set; }
        public int CarTypeId { get; set; }
    }
}
