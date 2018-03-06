using Library.BLL.Services;
using Library.DAL.Context;
using Library.ViewModels.BrochureViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebCore.Controllers
{
    [Authorize]
    [Route("api/brochures")]
    public class BrochureController : Controller
    {
        BrochureService _brochureService;
        public BrochureController(ApplicationContext applicationContext)
        {
            _brochureService = new BrochureService(applicationContext);
        }
        [HttpGet]
        public IActionResult Get()
        {
            GetBrochureViewModel brochureList = _brochureService.GetAll();
            return Ok(brochureList);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            GetByIdBrochureViewModel brochure = _brochureService.GetById(id);
            return Ok(brochure);
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostBrochureViewModel brochure)
        {
            if (ModelState.IsValid)
            {
                _brochureService.Add(brochure);
                return Ok(brochure);
            }
            return BadRequest(ModelState);
        }
        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]PostBrochureViewModel brochure)
        {
            if (ModelState.IsValid)
            {
                _brochureService.Edit(brochure);
                return Ok(brochure);
            }
            return BadRequest(ModelState);
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            GetByIdBrochureViewModel brochure = _brochureService.GetById(id);
            _brochureService.Delete(id);
            return Ok(brochure);
        }
    }
}
