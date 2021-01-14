using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TaxiPlus.DAL.Repositories
{
    public interface IBaseRepository<TModel>
    {
        Task<List<TModel>> GetAll();
        Task<TModel> GetById(int id);

    }
}
