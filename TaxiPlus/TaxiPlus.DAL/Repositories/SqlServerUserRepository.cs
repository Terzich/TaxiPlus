using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
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
        public Domain.User Authenticiraj(AuthentcationRequest _user)
        {
            var user = _context.users.FirstOrDefault(x => x.Username == _user.UserName);
            if (user != null)
            {

                var newHash = CreateMD5(_user.Password);

                if (newHash == user.Password)
                {
                    return _mapper.Map<Domain.User>(user);
                }
            }
            return null;
        }
        public  async Task<List<UserViewModel>> GetAllLogin(UserSearchRequest userSearchRequest)
        {
            var list = await _context.users.Where(u => userSearchRequest.Username == u.Username).ToListAsync();
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

        public override async Task<int> Insert(UserUpsertRequest request)
        {
                var entity = _mapper.Map<User>(request);

                entity.Password = CreateMD5(request.Password);


                await _context.users.AddAsync(entity);
                _context.SaveChanges();

                return entity.Id;
        }

        public static string CreateMD5(string input)
        {
            // Use input string to calculate MD5 hash
            using (System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                // Convert the byte array to hexadecimal string
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("X2"));
                }
                return sb.ToString();
            }
        }

    }
}
