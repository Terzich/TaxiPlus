﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiPlus.DAL.Domain
{
    public class City:BaseEntity
    {
        public string CityName { get; set; }
        public List<User> Users { get; set; }

    }
}
