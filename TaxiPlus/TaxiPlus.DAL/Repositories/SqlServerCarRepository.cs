using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerCarRepository : BaseCRUDRepository<CarViewModel, Car, CarUpsertRequest>
    {
        public SqlServerCarRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public override async Task<List<CarViewModel>> GetAll()
        {
            var list = await _context.cars.ToListAsync();
            var result = _mapper.Map<List<CarViewModel>>(list);
            foreach (var item in result)
            {
                item.CarManufacturerName = _context.carManufacturers.Find(item.CarManufacturerId).ManufacturerName;
                item.CarType = _context.carTypes.Find(item.CarTypeId).TypeName;
                item.Color = _context.colors.Find(item.ColorId).ColorName;
                item.FuelType = _context.fuelTypes.Find(item.FuelTypeId).FuelTypeName;
            }
            return result;
        }
    }
}
