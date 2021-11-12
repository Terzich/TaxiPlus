using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiPlus.DAL.Database;
using TaxiPlus.DAL.Repositories;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.Security;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddAutoMapper(typeof(TaxiPlus.DAL.Mapper.Mapper));

            var connection = Configuration.GetConnectionString("TaxiPlusDatabase");

            services.AddAuthentication("BasicAuthentication").AddScheme
              <AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);
            services.AddDbContext<TaxiPlusDbContext>(b => b.UseSqlServer(connection));

            services.AddScoped<IBaseCRUDRepository<CityViewModel, CityUpsertRequest>, SqlServerCityRepository>();
            services.AddScoped<IBaseCRUDRepository<CarViewModel, CarUpsertRequest>, SqlServerCarRepository>();
            services.AddScoped<IBaseCRUDRepository<NewsViewModel, NewsUpsertRequest>, SqlServerNewsRepository>();
            services.AddScoped<IBaseCRUDRepository<UserViewModel, UserUpsertRequest>, SqlServerUserRepository>();
            services.AddScoped<IBaseCRUDRepository<RentedCarViewModel, RentedCarUpsertRequest>, SqlServerRentedCarRepository>();
            services.AddScoped<IBaseCRUDRepository<CarManufacturerViewModel, CarManufacturerUpsertRequest>, SqlServerCarManufacturerRepository>();
            services.AddScoped<IBaseCRUDRepository<QuestionViewModel, QuestionUpsertRequest>, SqlServerQuestionRepository>();

            services.AddScoped<IBaseRepository<FuelTypeViewModel>, SqlServerFuelTypeRepository>();
            services.AddScoped<IBaseRepository<ColorViewModel>, SqlServerColorRepository>();
            services.AddScoped<IBaseRepository<CarTypeViewModel>, SqlServerCarTypeRepository>();

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("MyPolicy");

            //app.UseSwagger();
            //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "IFORM.WebApi v1"));
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            //app.UseSwagger();
        }
    }
}
