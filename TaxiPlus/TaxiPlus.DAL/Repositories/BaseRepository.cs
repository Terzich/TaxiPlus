using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Repositories
{
    public class BaseRepository<TModel, TDatabase> : IBaseRepository<TModel> where TDatabase : BaseEntity
    {
        protected readonly TaxiPlusDbContext _context;

        protected readonly IMapper _mapper;
        public BaseRepository(TaxiPlusDbContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public virtual async Task<List<TModel>> GetAll()
        {
            var list = await _context.Set<TDatabase>().ToListAsync();
            return _mapper.Map<List<TModel>>(list);
        }
        public virtual async Task<TModel> GetById(int id)
        {
            var domainObj = await _context.Set<TDatabase>().FindAsync(id);
            return _mapper.Map<TModel>(domainObj);
        }
    }
}
