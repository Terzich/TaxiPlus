using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string PhoneNumber { get; set; }
        public string ImageUrl { get; set; }
        public int CityId { get; set; }
        public City City { get; set; }
        public int GenderId { get; set; }
        public City Gender { get; set; }
        public List<Question> Questions { get; set; }





    }
}
