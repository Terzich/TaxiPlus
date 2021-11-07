using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Repositories;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.Controllers
{
    public class FuelTypeController : BaseController<FuelTypeViewModel>
    {
        public FuelTypeController(IBaseRepository<FuelTypeViewModel> repository) : base(repository)
        {
        }
    }
}
