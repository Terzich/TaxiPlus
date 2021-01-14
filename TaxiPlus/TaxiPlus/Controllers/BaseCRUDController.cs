using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Repositories;

namespace TaxiPlus.Controllers
{
    
    public class BaseCRUDController<TModel,TUpsertRequest> : BaseController<TModel>
    {
        private readonly IBaseCRUDRepository<TModel,TUpsertRequest> _repository;

        public BaseCRUDController(IBaseCRUDRepository<TModel, TUpsertRequest> repository):base(repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> Insert([FromBody]TUpsertRequest request)
        {
            var id = await _repository.Insert(request);
            return Ok(id);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] TUpsertRequest request)
        {
            await _repository.Update(id,request);
            return Ok(id);
        }

    }
}
