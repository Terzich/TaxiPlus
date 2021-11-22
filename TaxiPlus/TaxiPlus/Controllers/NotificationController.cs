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
    public class NotificationController : BaseCRUDController<NotificationViewModel, NotificationUpsertRequest>
    {
        private SqlServerNotificationRepository repositoryCustom;
        public NotificationController(IBaseCRUDRepository<NotificationViewModel, NotificationUpsertRequest> repository, TaxiPlusDbContext context, IMapper mapper, IHostingEnvironment hostingEnvironment) : base(repository, hostingEnvironment)
        {
            repositoryCustom = new SqlServerNotificationRepository(context, mapper);
        }

        [HttpGet("getByUserId/{id}")]
        public async Task<IActionResult> getAllNotificationForUser(int id)
        {
            var list = await repositoryCustom.getAllNotificationForUser(id);
            return Ok(list);
        }
    }
}
