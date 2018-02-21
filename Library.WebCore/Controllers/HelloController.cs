using Library.BLL.Services;
using Library.Entities.Entities.Identity;
using Library.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace hello_world
{
  [Route("api/[Controller]")]
    public class HelloController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        BookService _bookService;

        public HelloController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, BookService bookService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _bookService = bookService;
            IEnumerable<BookViewModel> brochureViewModel = _bookService.GetAllBook();
        }

        [HttpGet]
        public IActionResult Greetings()
        {
            return Ok("Hello from ASP.NET Core Web .");
        }
    }
}
