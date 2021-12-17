using AutoMapper;
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
    public class RentedCarController : BaseCRUDController<RentedCarViewModel, RentedCarUpsertRequest>
    {
        private SqlServerRentedCarRepository repositoryCustom;
        public RentedCarController(IBaseCRUDRepository<RentedCarViewModel, RentedCarUpsertRequest> repository, TaxiPlusDbContext context, IMapper mapper, IHostingEnvironment hostingEnvironment) : base(repository, hostingEnvironment)
        {
            repositoryCustom = new SqlServerRentedCarRepository(context, mapper);
        }

        [HttpGet("getByCarId/{id}")]
        public async Task<IActionResult> getForSingleCar(int id)
        {
            var list = await repositoryCustom.getAllForSingleCar(id);
            return Ok(list);
        }

        [HttpGet("getByUserId/{id}")]
        public async Task<IActionResult> getForSingleUser(int id)
        {
            var list = await repositoryCustom.getAllForSingleUser(id);
            return Ok(list);
        }

        [HttpGet("getByFilter")]
        public async Task<IActionResult> FilterRequests([FromQuery] string filter)
        {
            var dobainObj = await repositoryCustom.GetAllByFilter(filter);
            return Ok(dobainObj);
        }
    }
}
