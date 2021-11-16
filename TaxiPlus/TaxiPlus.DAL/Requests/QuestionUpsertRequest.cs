using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Requests
{
    public class QuestionUpsertRequest
    {
        public string Text { get; set; }
        public int? UserId { get; set; }
        public User User { get; set; }
        public string Answer { get; set; }

    }
}
