using Library.BLL.Services;
using Library.DAL.Context;
using Library.ViewModels.PublicationHouseViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebCore.Controllers
{
    [Authorize]
    [Route("api/publicationHouses")]
    public class PublicationHouseController : Controller
    {
        PublicationHouseService _publicationHouseService;
        public PublicationHouseController(ApplicationContext applicationContext)
        {
            _publicationHouseService = new PublicationHouseService(applicationContext);
        }
        [HttpGet]
        public GetPublicationHouseViewModel Get()
        {
            return _publicationHouseService.GetAll();
        }

        [HttpGet("{id}")]
        public GetPublicationHouseViewItem Get(int id)
        {
            GetPublicationHouseViewItem publicationHouse = _publicationHouseService.GetById(id);
            return publicationHouse;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostPublicationHouseViewItem publicationHouse)
        {
            if (ModelState.IsValid)
            {
                _publicationHouseService.Add(publicationHouse);
                return Ok(publicationHouse);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]PostPublicationHouseViewItem publicationHouse)
        {
            if (ModelState.IsValid)
            {
                _publicationHouseService.Edit(publicationHouse);
                return Ok(publicationHouse);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            GetPublicationHouseViewItem publicationHouse = _publicationHouseService.GetById(id);
            _publicationHouseService.Delete(id);
            return Ok(publicationHouse);
        }
    }
}
