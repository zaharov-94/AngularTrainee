using Library.BLL.Services;
using Library.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.WebCore.Controllers
{
  [Route("api/books")]
  public class BookController : Controller
  {
    BookService _bookService;
    public BookController(BookService bookService)
    {
      _bookService = bookService;
    }
    [HttpGet]
    public IEnumerable<BookViewModel> Get()
    {
      return _bookService.GetAll();
    }

    [HttpGet("{id}")]
    public BookViewModel Get(int id)
    {
      BookViewModel book = _bookService.GetById(id);
      return book;
    }

    [HttpPost]
    public IActionResult Post([FromBody]BookViewModel book)
    {
      if (ModelState.IsValid)
      {
        _bookService.Add(book);
        return Ok(book);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]BookViewModel book)
    {
      if (ModelState.IsValid)
      {
        _bookService.Edit(book);
        return Ok(book);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      BookViewModel book = _bookService.GetById(id);
      _bookService.Delete(id);
      return Ok(book);
    }
  }
}
