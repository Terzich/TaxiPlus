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
    public class SqlServerRentedCarRepository : BaseCRUDRepository<RentedCarViewModel, RentedCar, RentedCarUpsertRequest>
    {
        public SqlServerRentedCarRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    }
}
