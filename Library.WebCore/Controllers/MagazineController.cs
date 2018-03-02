using Library.BLL.Services;
using Library.DAL.Context;
using Library.ViewModels;
using Library.ViewModels.MagazineViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.WebCore.Controllers
{
    [Authorize]
    [Route("api/magazines")]
    public class MagazineController : Controller
    {
        MagazineService _magazineService;
        public MagazineController(ApplicationContext applicationContext)
        {
            _magazineService = new MagazineService(applicationContext);
        }
        [HttpGet]
        public GetMagazineViewModel Get()
        {
            return _magazineService.GetAll();
        }

        [HttpGet("{id}")]
        public GetMagazineViewItem Get(int id)
        {
            GetMagazineViewItem magazine = _magazineService.GetById(id);
            return magazine;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostMagazineViewItem magazine)
        {
            if (ModelState.IsValid)
            {
                _magazineService.Add(magazine);
                return Ok(magazine);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]PostMagazineViewItem magazine)
        {
            if (ModelState.IsValid)
            {
                _magazineService.Edit(magazine);
                return Ok(magazine);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            GetMagazineViewItem magazine = _magazineService.GetById(id);
            _magazineService.Delete(id);
            return Ok(magazine);
        }
    }
}
