using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.ViewModels
{
    public class NotificationViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public int UserId { get; set; }
    }
}
