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
    public class SqlServerUserRepository : BaseCRUDRepository<UserViewModel, User, UserUpsertRequest>
    {
        public SqlServerUserRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public override async Task<List<UserViewModel>> GetAll()
        {
            var list = await _context.users.ToListAsync();
            var result = _mapper.Map<List<UserViewModel>>(list);
            foreach (var item in result)
            {
                item.Gender = _context.genders.Find(item.GenderId)._Gender;
                item.CityName = _context.cities.Find(item.CityId).CityName;
            }
            return result;
        }

        public override async Task<UserViewModel> GetById(int id)
        {
            var user = await _context.users.FindAsync(id);
            var result = _mapper.Map<UserViewModel>(user);
            result.CityName = _context.cities.Find(result.CityId).CityName;
            result.Gender = _context.genders.Find(result.GenderId)._Gender;

            return result;
        }
    }
}
