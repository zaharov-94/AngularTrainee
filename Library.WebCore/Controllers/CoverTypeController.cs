using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shared.Enums;
using System;

namespace Library.WebCore.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/covertypes")]
    public class CoverTypeController : Controller
    {
        [HttpGet]
        public IActionResult GetTypesOfCover()
        {
            var types = Enum.GetNames(typeof(TypeOfCover));
            return Ok(types);
        }
    }
}
