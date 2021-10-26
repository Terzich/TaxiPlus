using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

        public async Task<List<RentedCarViewModel>> getAllForSingleCar(int carId)
        {
            var list = await _context.rentedCars.Where(rc => rc.CarId == carId).ToListAsync();
            return _mapper.Map<List<RentedCarViewModel>>(list);
        }
    }
}
