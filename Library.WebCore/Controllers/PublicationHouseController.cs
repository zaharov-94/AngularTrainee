using Library.BLL.Services;
using Library.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.WebCore.Controllers
{
  [Route("api/publicationHouses")]
  public class PublicationHouseController : Controller
  {
    PublicationHouseService _publicationHouseService;
    public PublicationHouseController(PublicationHouseService publicationHouseService)
    {
      _publicationHouseService = publicationHouseService;
    }
    [HttpGet]
    public IEnumerable<PublicationHouseViewModel> Get()
    {
      return _publicationHouseService.GetAll();
    }

    [HttpGet("{id}")]
    public PublicationHouseViewModel Get(int id)
    {
      PublicationHouseViewModel publicationHouse = _publicationHouseService.GetById(id);
      return publicationHouse;
    }

    [HttpPost]
    public IActionResult Post([FromBody]PublicationHouseViewModel publicationHouse)
    {
      if (ModelState.IsValid)
      {
        _publicationHouseService.Add(publicationHouse);
        return Ok(publicationHouse);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]PublicationHouseViewModel publicationHouse)
    {
      if (ModelState.IsValid)
      {
        _publicationHouseService.Edit(publicationHouse);
        return Ok(publicationHouse);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      PublicationHouseViewModel publicationHouse = _publicationHouseService.GetById(id);
      _publicationHouseService.Delete(id);
      return Ok(publicationHouse);
    }
  }
}
