using Library.BLL.Services;
using Library.DAL.Context;
using Library.ViewModels.PublicationViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebCore.Controllers
{
    [Authorize]
    [Route("api/publications")]
    public class PublicationController : Controller
    {
        PublicationService _publicationService;
        public PublicationController(ApplicationContext applicationContext)
        {
            _publicationService = new PublicationService(applicationContext);
        }
        [HttpGet]
        public GetPublicationViewModel Get()
        {
            return _publicationService.GetAll();
        }
    }
}
