using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class CarType
    {
        public int Id { get; set; }
        public string TypeName { get; set; }
        public List<Car> Cars { get; set; }

    }
}
