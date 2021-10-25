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
    public class RentedCarController : BaseCRUDController<RentedCarViewModel, RentedCarUpsertRequest>
    {
        public RentedCarController(IBaseCRUDRepository<RentedCarViewModel, RentedCarUpsertRequest> repository) : base(repository)
        {
        }
    }
}
