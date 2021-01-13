using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class Car
    {
        public int Id { get; set; }
        public string CarName { get; set; }
        public DateTime YearOfProduction { get; set; }
        public int NumberOfDoors { get; set; }
        public bool IsRentVehicle { get; set; }
        public bool IsTaxiVehicle { get; set; }
        public decimal PricePerDay { get; set; }

        public int CarManufacturerId { get; set; }
        public CarManufacturer CarManufacturer { get; set; }

        public int ColorId { get; set; }
        public Color Color { get; set; }

        public int FuelTypeId { get; set; }
        public FuelType FuelType { get; set; }

        public int CarTypeId { get; set; }
        public CarType CarType { get; set; }

        



    }
}
