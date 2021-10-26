using AutoMapper;
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
        SqlServerRentedCarRepository repositoryCustom;
        public RentedCarController(IBaseCRUDRepository<RentedCarViewModel, RentedCarUpsertRequest> repository, TaxiPlusDbContext context, IMapper mapper) : base(repository)
        {
            repositoryCustom = new SqlServerRentedCarRepository(context, mapper);
        }

        [HttpGet("getByCarId/{id}")]
        public async Task<IActionResult> getForSingleCar(int id)
        {
            var list = await repositoryCustom.getAllForSingleCar(id);
            return Ok(list);
        }
    }
}
