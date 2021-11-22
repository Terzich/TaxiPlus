using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerNotificationRepository : BaseCRUDRepository<NotificationViewModel, Notification, NotificationUpsertRequest>
    {
        public SqlServerNotificationRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public async Task<List<NotificationViewModel>> getAllNotificationForUser(int userId)
        {
            var list = await _context.notifications.Where(n => n.UserId == userId).ToListAsync();
            return _mapper.Map<List<NotificationViewModel>>(list);
        }
    }
}
