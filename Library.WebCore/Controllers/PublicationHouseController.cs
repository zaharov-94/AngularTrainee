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
        public IActionResult Get()
        {
            GetPublicationHouseViewModel listPublicationHouses = _publicationHouseService.GetAll();
            return Ok(listPublicationHouses);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            GetByIdPublicationHouseViewModel publicationHouse = _publicationHouseService.GetById(id);
            return Ok(publicationHouse);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostPublicationHouseViewModel publicationHouse)
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
        public IActionResult Put(int id, [FromBody]PostPublicationHouseViewModel publicationHouse)
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
            GetByIdPublicationHouseViewModel publicationHouse = _publicationHouseService.GetById(id);
            _publicationHouseService.Delete(id);
            return Ok(publicationHouse);
        }
    }
}
