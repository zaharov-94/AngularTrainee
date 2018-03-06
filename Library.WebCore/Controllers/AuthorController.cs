using Library.BLL.Services;
using Library.DAL.Context;
using Library.ViewModels.AuthorViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebCore.Controllers
{
    [Authorize]
    [Route("api/authors")]
    public class AuthorController : Controller
    {
        AuthorService _authorService;
        public AuthorController(ApplicationContext applicationContext)
        {
            _authorService = new AuthorService(applicationContext);
        }
        [HttpGet]
        public IActionResult Get()
        {
            GetAuthorViewModel result = _authorService.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            GetByIdAuthorViewModel author = _authorService.GetById(id);
            return Ok(author);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostAuthorViewModel author)
        {
            if (ModelState.IsValid)
            {
                _authorService.Add(author);
                return Ok(author);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]PostAuthorViewModel author)
        {
            if (ModelState.IsValid)
            {
                _authorService.Edit(author);
                return Ok(author);
            }
            return BadRequest(ModelState);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            GetByIdAuthorViewModel author = _authorService.GetById(id);
            _authorService.Delete(id);
            return Ok(author);
        }
    }
}
