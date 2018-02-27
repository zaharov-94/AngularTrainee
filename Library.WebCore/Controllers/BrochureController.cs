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
    [Route("api/brochures")]
    public class BrochureController : Controller
    {
        BrochureService _brochureService;
        public BrochureController(BrochureService brochureService)
        {
            _brochureService = brochureService;
        }
        [HttpGet]
        public IEnumerable<BrochureViewModel> Get()
        {
            return _brochureService.GetAll();
        }
        [HttpGet("{id}")]
        public BrochureViewModel Get(int id)
        {
            BrochureViewModel brochure = _brochureService.GetById(id);
            return brochure;
        }

        [HttpPost]
        public IActionResult Post([FromBody]BrochureViewModel brochure)
        {
            if (ModelState.IsValid)
            {
                _brochureService.Add(brochure);
                return Ok(brochure);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]BrochureViewModel brochure)
        {
            if (ModelState.IsValid)
            {
                _brochureService.Edit(brochure);
                return Ok(brochure);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            BrochureViewModel brochure = _brochureService.GetById(id);
            _brochureService.Delete(id);
            return Ok(brochure);
        }
    }
}
