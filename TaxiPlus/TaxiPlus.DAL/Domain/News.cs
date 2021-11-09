using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class News : BaseEntity
    {
        public string NewsTitle { get; set; }
        public string Content { get; set; }
        public DateTime PublishedAt { get; set; }
        public byte[] Image { get; set; }

    }
}
