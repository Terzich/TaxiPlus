using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Repositories;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.Controllers
{
    [Authorize]
    public class UserController : BaseCRUDController<UserViewModel, UserUpsertRequest>
    {
        SqlServerUserRepository repositoryCustom;
        public UserController(IBaseCRUDRepository<UserViewModel, UserUpsertRequest> repository, TaxiPlusDbContext context, IMapper mapper, IHostingEnvironment hostingEnvironment) : base(repository, hostingEnvironment)
        {
            repositoryCustom = new SqlServerUserRepository(context, mapper);
        }
        [HttpGet("login")]
        public async Task<List<UserViewModel>> Get([FromQuery] UserSearchRequest request)
        {
            
            List<UserViewModel> list = await repositoryCustom.GetAllLogin(request);
            return list; 
        }
    }
}
