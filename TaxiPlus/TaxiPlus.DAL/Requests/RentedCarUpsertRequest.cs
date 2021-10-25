using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Requests
{
    public class RentedCarUpsertRequest
    {
        public DateTime RentedFrom { get; set; }
        public DateTime RentedTo { get; set; }
        public decimal TotalPrice { get; set; }
        public bool RentApproved { get; set; }
        public bool RequestCanceled { get; set; }
        public int UserId { get; set; }
        public int CarId { get; set; }
    }
}
