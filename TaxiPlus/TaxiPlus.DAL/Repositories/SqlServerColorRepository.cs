using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerColorRepository : BaseRepository<ColorViewModel, Color>
    {
        public SqlServerColorRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }
    }
}
