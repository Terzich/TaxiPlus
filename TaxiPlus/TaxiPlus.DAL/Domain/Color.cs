using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class Color:BaseEntity
    {
        public string ColorName { get; set; }
        public int ColorTypeId { get; set; }
        public ColorType ColorType { get; set; }
        public List<Car> Cars { get; set; }
    }
}
