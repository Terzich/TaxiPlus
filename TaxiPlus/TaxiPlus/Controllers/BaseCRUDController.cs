using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting.Internal;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using TaxiPlus.DAL.Repositories;

namespace TaxiPlus.Controllers
{
    
    public class BaseCRUDController<TModel,TUpsertRequest> : BaseController<TModel>
    {
        private readonly IBaseCRUDRepository<TModel,TUpsertRequest> _repository;
        private readonly IHostingEnvironment _hostingEnvironment;

        public BaseCRUDController(IBaseCRUDRepository<TModel, TUpsertRequest> repository, IHostingEnvironment hostingEnvironment):base(repository)
        {
            _repository = repository;
            _hostingEnvironment = hostingEnvironment;
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.Delete(id);
            return Ok();
        }



        [HttpPost("image-upload")]
        public string UploadImage()
        {
            try  
            {
                var file = Request.Form.Files[0];
                string folderName = "Upload";
                string webRootPath = _hostingEnvironment.ContentRootPath;
                string newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }

                if (file.Length > 0)
                {
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return fileName;
                }
                
            }
            catch (System.Exception ex)
            {

                return "audi-png-45036.png";
            }
            return "audi-png-45036.png";


        }


    }
}
