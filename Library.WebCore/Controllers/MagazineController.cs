using Library.BLL.Services;
using Library.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.WebCore.Controllers
{
  [Route("api/magazines")]
  public class MagazineController : Controller
  {
    MagazineService _magazineService;
    public MagazineController(MagazineService magazineService)
    {
      _magazineService = magazineService;
    }
    [HttpGet]
    public IEnumerable<MagazineViewModel> Get()
    {
      return _magazineService.GetAll();
    }

    [HttpGet("{id}")]
    public MagazineViewModel Get(int id)
    {
      MagazineViewModel magazine = _magazineService.GetById(id);
      return magazine;
    }

    [HttpPost]
    public IActionResult Post([FromBody]MagazineViewModel magazine)
    {
      if (ModelState.IsValid)
      {
        _magazineService.Add(magazine);
        return Ok(magazine);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]MagazineViewModel magazine)
    {
      if (ModelState.IsValid)
      {
        _magazineService.Edit(magazine);
        return Ok(magazine);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      MagazineViewModel magazine = _magazineService.GetById(id);
      _magazineService.Delete(id);
      return Ok(magazine);
    }
  }
}
