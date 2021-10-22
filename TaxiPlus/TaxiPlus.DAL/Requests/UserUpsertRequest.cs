using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Requests
{
    public class UserUpsertRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string ImageUrl { get; set; }
        public int CityId { get; set; }
        public int GenderId { get; set; }
    }
}
