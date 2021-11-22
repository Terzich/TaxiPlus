using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Requests
{
    public class NotificationUpsertRequest
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public int UserId { get; set; }
        public bool Viewed { get; set; }

    }
}
