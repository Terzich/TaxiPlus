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
    public class CarController : BaseCRUDController<CarViewModel, CarUpsertRequest>
    {
        public CarController(IBaseCRUDRepository<CarViewModel, CarUpsertRequest> repository) : base(repository)
        {
        }
    }
}
