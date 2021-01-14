using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Domain;

namespace TaxiPlus.DAL.Repositories
{
    public class BaseCRUDRepository<TModel, TDatabase, TUpsertRequest> : BaseRepository<TModel, TDatabase>,
        IBaseCRUDRepository<TModel, TUpsertRequest> where TDatabase : BaseEntity
    {
        public BaseCRUDRepository(TaxiPlusDbContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public async Task Delete(int id)
        {
            var domainObj = await _context.Set<TDatabase>().FindAsync(id);
            _context.Set<TDatabase>().Remove(domainObj);
           await  _context.SaveChangesAsync(); 
        }

        public async Task<int> Insert(TUpsertRequest request)
        {
            var domainToInsert = _mapper.Map<TDatabase>(request);
            await _context.Set<TDatabase>().AddAsync(domainToInsert);
            await _context.SaveChangesAsync();
            return domainToInsert.Id;
        }

        public async Task Update(int id, TUpsertRequest request)
        {
            var domainObj = await _context.Set<TDatabase>().FindAsync(id);
            _context.Set<TDatabase>().Attach(domainObj);
            _context.Set<TDatabase>().Update(domainObj);
            _mapper.Map(request, domainObj);
            await _context.SaveChangesAsync();

        }
    }
}
