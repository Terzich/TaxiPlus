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
    public class QuestionController : BaseCRUDController<QuestionViewModel, QuestionUpsertRequest>
    {
        private SqlServerQuestionRepository _repositoryCustom;
        public QuestionController(IBaseCRUDRepository<QuestionViewModel, QuestionUpsertRequest> repository, TaxiPlusDbContext context, IMapper mapper, IHostingEnvironment hostingEnvironment) : base(repository, hostingEnvironment)
        {
            _repositoryCustom = new SqlServerQuestionRepository(context, mapper);
        }

        [HttpGet("getByFilter")]
        public async Task<IActionResult> FilterQuestion([FromQuery] string filter)
        {
            var dobainObj = await _repositoryCustom.GetAllByFilter(filter);
            return Ok(dobainObj);
        }
    }
}
