using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Repositories;

namespace TaxiPlus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<TModel> : ControllerBase
    {
        private readonly IBaseRepository<TModel> _repository;

        public BaseController(IBaseRepository<TModel> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult>Get()
        {
            var domainObjs= await _repository.GetAll();
            return Ok(domainObjs);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var domainObj = await _repository.GetById(id);
            return Ok(domainObj);
        }

    }
}
