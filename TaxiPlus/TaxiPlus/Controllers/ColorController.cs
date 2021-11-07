using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Repositories;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.Controllers
{
    public class ColorController : BaseController<ColorViewModel>
    {
        public ColorController(IBaseRepository<ColorViewModel> repository) : base(repository)
        {
        }
    }
}
