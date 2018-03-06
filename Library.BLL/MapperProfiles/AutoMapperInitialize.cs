using AutoMapper;

namespace Library.BLL.MapperProfiles
{
    public static class AutoMapperInitialize
    {
        public static void Initialize()
        {
            Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<PublicationHouseProfile>();
                cfg.AddProfile<PublicationProfile>();
                cfg.AddProfile<AuthorProfile>();
                cfg.AddProfile<BookProfile>();
                cfg.AddProfile<BrochureProfile>();
                cfg.AddProfile<MagazineProfile>();

            });
        }
    }
}
