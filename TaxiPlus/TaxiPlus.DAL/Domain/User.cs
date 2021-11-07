using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class User:BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public int CityId { get; set; }
        public City City { get; set; }
        public int GenderId { get; set; }
        public Gender Gender { get; set; }
        public List<Question> Questions { get; set; }
        public List<RentedCar> RentedCars { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}
