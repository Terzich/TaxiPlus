using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerCarTypeRepository : BaseRepository<CarTypeViewModel, CarType>
    {
        public SqlServerCarTypeRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    }
}
