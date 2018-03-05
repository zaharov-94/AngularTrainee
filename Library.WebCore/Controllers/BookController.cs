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
        public GetBookViewModel Get()
        {
            return _bookService.GetAll();
        }
        [Authorize]
        [HttpGet("{id}")]
        public GetBookViewItem Get(int id)
        {
            GetBookViewItem book = _bookService.GetById(id);
            return book;
        }
        [Authorize(Roles="Admin")]
        [HttpPost]
        public IActionResult Post([FromBody]PostBookViewItem book)
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
        public IActionResult Put(int id, [FromBody]PostBookViewItem book)
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
            GetBookViewItem book = _bookService.GetById(id);
            _bookService.Delete(id);
            return Ok(book);
        }
    }
}
