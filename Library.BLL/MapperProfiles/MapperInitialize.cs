using AutoMapper;

namespace Library.BLL.MapperProfiles
{
    public static class MapperInitialize
    {
        public static void Initialize()
        {
            Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<GroupingBookToBookView>();
                cfg.AddProfile<PublicationHouseToPublicationHouseViewModel>();
                cfg.AddProfile<PublicationToPublicationViewModel>();
                cfg.AddProfile<BookViewItemToBookViewModel>();
                cfg.AddProfile<BrochureToBrochureViewModel>();
                cfg.AddProfile<MagazineToMagazineViewModel>();
            });
        }
    }
}
