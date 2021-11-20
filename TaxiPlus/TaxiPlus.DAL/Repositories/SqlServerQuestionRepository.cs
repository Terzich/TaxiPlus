using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerQuestionRepository : BaseCRUDRepository<QuestionViewModel, Question, QuestionUpsertRequest>
    {
        public SqlServerQuestionRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public override async Task<List<QuestionViewModel>> GetAll()
        {
            var list = await _context.questions.ToListAsync();
            var result = _mapper.Map<List<QuestionViewModel>>(list);
            foreach (var item in result)
            {
                User user = _context.users.Find(item.UserId);
                if(user != null)
                {
                    item.NameAndSurname = user.FirstName + " " + user.LastName;
                    item.Username = user.Username;
                    item.Email = user.Email;
                }
            }
            return result;
        }
    }
}
