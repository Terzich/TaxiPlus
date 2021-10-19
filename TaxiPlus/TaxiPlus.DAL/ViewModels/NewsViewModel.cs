using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.ViewModels
{
    public class NewsViewModel
    {
        public int Id { get; set; }
        public string NewsTitle { get; set; }
        public string Content { get; set; }
        public DateTime PublishedAt { get; set; }
        public string ImageUrl { get; set; }
    }
}
