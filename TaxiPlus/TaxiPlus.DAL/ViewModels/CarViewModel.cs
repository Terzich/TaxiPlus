using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.ViewModels
{
    public class CarViewModel
    {
        public int Id { get; set; }
        public string CarName { get; set; }
        public DateTime YearOfProduction { get; set; }
        public int NumberOfDoors { get; set; }
        public decimal PricePerDay { get; set; }
        public int CarManufacturerId { get; set; }
        public string CarManufacturerName { get; set; }
        public int ColorId { get; set; }
        public string ColorName { get; set; }
        public int FuelTypeId { get; set; }
        public string FuelType { get; set; }
        public int CarTypeId { get; set; }
        public string CarType { get; set; }
        public string ImageUrl { get; set; }

    }
}
