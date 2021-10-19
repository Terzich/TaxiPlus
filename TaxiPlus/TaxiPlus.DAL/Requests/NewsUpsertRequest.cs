using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Requests
{
    public class NewsUpsertRequest
    {
        public string NewsTitle { get; set; }
        public string Content { get; set; }
        public DateTime PublishedAt { get; set; }
        public string ImageUrl { get; set; }
    }
}
