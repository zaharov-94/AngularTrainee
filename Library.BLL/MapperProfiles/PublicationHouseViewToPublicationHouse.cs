using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class PublicationHouseViewToPublicationHouse : Profile
    {
        public PublicationHouseViewToPublicationHouse()
        {
            CreateMap<PublicationHouseViewModel, PublicationHouse>();
        }
    }
}
