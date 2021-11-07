using Microsoft.AspNetCore.Hosting;
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
    public class CarManufacturerController : BaseCRUDController<CarManufacturerViewModel, CarManufacturerUpsertRequest>
    {
        public CarManufacturerController(IBaseCRUDRepository<CarManufacturerViewModel, CarManufacturerUpsertRequest> repository, IHostingEnvironment hostingEnvironment) : base(repository, hostingEnvironment)
        {
        }
    }
}
