using Library.BLL.Services;
using Library.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.WebCore.Controllers
{
    [Route("api/covertypes")]
    public class CoverTypeController : Controller
    {
        BrochureService _brochureService;
        public CoverTypeController(BrochureService brochureService)
        {
            _brochureService = brochureService;
        }
        [HttpGet]
        public IActionResult GetTypesOfCover()
        {
            var types = Enum.GetNames(typeof(TypeOfCover));
            return Ok(types);
        }
    }
}
