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
                cfg.AddProfile<GroupingBookToBookViewModel>();
                cfg.AddProfile<PublicationHouseToPublicationHouseViewModel>();
                cfg.AddProfile<PublicationToPublicationViewModel>();
                cfg.AddProfile<AuthorToAuthorViewModel>();
                cfg.AddProfile<BookViewItemToBookViewModel>();
                cfg.AddProfile<BrochureToBrochureViewModel>();
                cfg.AddProfile<MagazineToMagazineViewModel>();
                cfg.AddProfile<BookToBookViewItem>();
            });
        }
    }
}
