using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.ViewModels
{
    public class QuestionViewModel
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int? UserId { get; set; }
        public User User { get; set; }
        public string Answer { get; set; }
        public string NameAndSurname { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
    }
}
