using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class ColorType:BaseEntity
    {
        public string ColorTypeName { get; set; }
        public List<Color> Colors { get; set; }
    }
}
