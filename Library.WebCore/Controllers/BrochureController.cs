using Library.BLL.Services;
using Library.DAL.Context;
using Library.ViewModels;
using Library.ViewModels.BrochureViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        public GetBrochureViewModel Get()
        {
            return _brochureService.GetAll();
        }
        [HttpGet("{id}")]
        public GetBrochureViewItem Get(int id)
        {
            GetBrochureViewItem brochure = _brochureService.GetById(id);
            return brochure;
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostBrochureViewItem brochure)
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
        public IActionResult Put(int id, [FromBody]PostBrochureViewItem brochure)
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
            GetBrochureViewItem brochure = _brochureService.GetById(id);
            _brochureService.Delete(id);
            return Ok(brochure);
        }
    }
}
