using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class PublicationHouseToPublicationHouseView : Profile
    {
        public PublicationHouseToPublicationHouseView()
        {
            CreateMap<PublicationHouse, PublicationHouseViewModel>();
        }
    }
}
