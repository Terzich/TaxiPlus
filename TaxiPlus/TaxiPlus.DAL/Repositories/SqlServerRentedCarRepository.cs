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
        private const string approved = "approved";
        private const string declined = "declined";
        private const string unknown = "unknown";
        public SqlServerRentedCarRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public async override Task<List<RentedCarViewModel>> GetAll()
        {
            var list = await _context.rentedCars.ToListAsync();
            var result = _mapper.Map<List<RentedCarViewModel>>(list);
            foreach (var item in result)
            {
                User user = _context.users.Find(item.UserId);
                item.UserName = user.FirstName + " " + user.LastName;
                item.CarName = _context.cars.Find(item.CarId).CarName;
            }
            return result;
        }
        public async Task<List<RentedCarViewModel>> getAllForSingleCar(int carId)
        {
            var list = await _context.rentedCars.Where(rc => rc.CarId == carId).ToListAsync();
            return _mapper.Map<List<RentedCarViewModel>>(list);
        }
        public async override Task<int> Insert(RentedCarUpsertRequest request)
        {
            var newFromDate = request.RentedFrom.AddDays(1);
            var newToDate = request.RentedTo.AddDays(1);
            request.RentedFrom = newFromDate;
            request.RentedTo = newToDate;

            var domainToInsert = _mapper.Map<RentedCar>(request);
            await _context.rentedCars.AddAsync(domainToInsert);
            await _context.SaveChangesAsync();
            return domainToInsert.Id;
        }
        public async Task<List<RentedCarViewModel>> GetAllByFilter(string filter)
        {
            List<RentedCar> list;
            switch (filter)
            {
                case approved:
                    list = await _context.rentedCars.Where(q => q.RentApproved).ToListAsync();
                    break;
                case declined:
                    list = await _context.rentedCars.Where(q => q.RequestCanceled).ToListAsync();
                    break;
                case unknown:
                    list = await _context.rentedCars.Where(q => !q.RequestCanceled && !q.RentApproved).ToListAsync();
                    break;
                default:
                    list = await _context.rentedCars.ToListAsync();
                    break;
            }

            var result = _mapper.Map<List<RentedCarViewModel>>(list);
            foreach (var item in result)
            {
                User user = _context.users.Find(item.UserId);
                item.UserName = user.FirstName + " " + user.LastName;
                item.CarName = _context.cars.Find(item.CarId).CarName;
            }
            return result;
        }
    }
}
