using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Repositories;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.Controllers
{
    public class GenderController : BaseController<GenderViewModel>
    {
        public GenderController(IBaseRepository<GenderViewModel> repository) : base(repository)
        {
        }
    }
}
