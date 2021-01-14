using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TaxiPlus.DAL.Repositories
{
    public interface IBaseCRUDRepository<TModel,TUpsertRequest>:IBaseRepository<TModel>
    {
        Task<int> Insert(TUpsertRequest request);
        Task Update(int id, TUpsertRequest request);
        Task Delete(int id);
    }
}
