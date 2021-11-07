﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerFuelTypeRepository : BaseRepository<FuelTypeViewModel, FuelType>
    {
        public SqlServerFuelTypeRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    }
}
