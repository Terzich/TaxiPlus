using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TaxiPlus.DAL.Domain;
using TaxiPlus.DAL.Requests;
using TaxiPlus.DAL.ViewModels;

namespace TaxiPlus.DAL.Mapper
{
    public class Mapper:Profile
    {
        public Mapper()
        {
            CreateMap<City, CityViewModel>().ReverseMap();
            CreateMap<City, CityUpsertRequest>().ReverseMap();
            CreateMap<Car, CarViewModel>().ReverseMap();
            CreateMap<Car, CarUpsertRequest>().ReverseMap();
            CreateMap<News, NewsViewModel>().ReverseMap();
            CreateMap<News, NewsUpsertRequest>().ReverseMap();
        }
    }
}
