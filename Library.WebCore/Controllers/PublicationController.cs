using Library.BLL.Services;
using Library.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.WebCore.Controllers
{
  [Route("api/publications")]
  public class PublicationController : Controller
  {
    PublicationService _publicationService;
    public PublicationController(PublicationService publicationService)
    {
      _publicationService = publicationService;
    }
    [HttpGet]
    public IEnumerable<PublicationViewModel> Get()
    {
      return _publicationService.GetAll();
    }
  }
}
