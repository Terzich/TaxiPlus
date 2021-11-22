using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Repositories
{
    public class SqlServerQuestionRepository : BaseCRUDRepository<QuestionViewModel, Question, QuestionUpsertRequest>
    {
        private const string anonymus = "anonymus";
        private const string unanswered = "unanswered";
        private const string answered = "answered";



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
        public async Task<List<QuestionViewModel>> GetAllByFilter(string filter)
        {
            List<Question> list;
            switch (filter)
            {
                case anonymus:
                    list = await _context.questions.Where(q => q.UserId == null).ToListAsync();
                    break;
                case unanswered:
                    list = await _context.questions.Where(q => q.UserId != null && q.Answer == null).ToListAsync();
                    break;
                case answered:
                    list = await _context.questions.Where(q => q.UserId != null && q.Answer != null).ToListAsync();
                    break; 
                default:
                    list = await _context.questions.ToListAsync();
                    break;
            }

            var result = _mapper.Map<List<QuestionViewModel>>(list);
            foreach (var item in result)
            {
                User user = _context.users.Find(item.UserId);
                if (user != null)
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
