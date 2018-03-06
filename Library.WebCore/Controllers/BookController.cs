using Library.BLL.Services;
using Library.DAL.Context;
using Library.ViewModels.BookViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebCore.Controllers
{
    [Route("api/books")]
    public class BookController : Controller
    {
        BookService _bookService;
        public BookController(ApplicationContext applicationContext)
        {
            _bookService = new BookService(applicationContext);
        }
        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            GetBookViewModel listBooks = _bookService.GetAll();
            return Ok(listBooks);
        }
        [Authorize]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            GetByIdBookViewModel book = _bookService.GetById(id);
            return Ok(book);
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostBookViewModel book)
        {
            if (ModelState.IsValid)
            {
                _bookService.Add(book);
                return Ok(book);
            }
            return BadRequest(ModelState);
        }
        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]PostBookViewModel book)
        {
            if (ModelState.IsValid)
            {
                _bookService.Edit(book);
                return Ok(book);
            }
            return BadRequest(ModelState);
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            GetByIdBookViewModel book = _bookService.GetById(id);
            _bookService.Delete(id);
            return Ok(book);
        }
    }
}
