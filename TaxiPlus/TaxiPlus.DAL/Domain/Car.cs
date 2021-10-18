using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class Car:BaseEntity
    {
        public string CarName { get; set; }
        public DateTime YearOfProduction { get; set; }
        public int NumberOfDoors { get; set; }
        public decimal PricePerDay { get; set; }

        public List<RentedCar> RentedCars { get; set; }

        public int CarManufacturerId { get; set; }
        public CarManufacturer CarManufacturer { get; set; }

        public int ColorId { get; set; }
        public Color Color { get; set; }

        public int FuelTypeId { get; set; }
        public FuelType FuelType { get; set; }

        public int CarTypeId { get; set; }
        public CarType CarType { get; set; }

        public string ImageUrl { get; set; }
    }
}
