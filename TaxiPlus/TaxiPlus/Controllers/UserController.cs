using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Repositories;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.Controllers
{
    public class UserController : BaseCRUDController<UserViewModel, UserUpsertRequest>
    {
        public UserController(IBaseCRUDRepository<UserViewModel, UserUpsertRequest> repository) : base(repository)
        {
        }
    }
}
