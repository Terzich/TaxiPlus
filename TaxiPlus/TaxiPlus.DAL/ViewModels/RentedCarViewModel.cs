using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.ViewModels
{
    public class RentedCarViewModel
    {
        public int Id { get; set; }
        public DateTime RentedFrom { get; set; }
        public DateTime RentedTo { get; set; }
        public decimal TotalPrice { get; set; }
        public bool RentApproved { get; set; }
        public bool RequestCanceled { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int CarId { get; set; }
        public string CarName { get; set; }
    }
}
