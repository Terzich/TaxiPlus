using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class RentedCar:BaseEntity
    {
        public DateTime RentedFrom { get; set; }
        public DateTime RentedTo { get; set; }
        public decimal TotalPrice { get; set; }
        public bool RentApproved { get; set; }
        public bool RequestCanceled { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int CarId { get; set; }
        public Car Car { get; set; }


    }

}
