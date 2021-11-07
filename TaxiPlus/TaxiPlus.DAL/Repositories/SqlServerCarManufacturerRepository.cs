using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerCarManufacturerRepository : BaseCRUDRepository<CarManufacturerViewModel, CarManufacturer, CarManufacturerUpsertRequest>
    {
        public SqlServerCarManufacturerRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    }
}
