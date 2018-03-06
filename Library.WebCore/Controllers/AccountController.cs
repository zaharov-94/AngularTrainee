using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using Library.ViewModels.AccountViewModel;
using Library.BLL;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace ContosoUniversity.API.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {     
        private UserManager<IdentityUser> _userManager;
        private SignInManager<IdentityUser> _signInManager;
        private RoleManager<IdentityRole> _roleManager;
        private JwtIssuerOptions _jwtOptions;
        private readonly JsonSerializerSettings _serializerSettings;        

        public AccountController(UserManager<IdentityUser> userManager,
                                 SignInManager<IdentityUser> signInManager,
                                 RoleManager<IdentityRole> roleManager,
                                 IOptions<JwtIssuerOptions> jwtOptions)
        {         
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _jwtOptions = jwtOptions.Value;

            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody]PostLoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (!result.Succeeded)
            {
                ModelState.AddModelError(string.Empty, "Wrong username or password");
                return BadRequest(ModelState);
            }

            var user = await _userManager.FindByNameAsync(model.Email);
            return new OkResult();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody]PostRegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                string errorMsg = null;

                foreach (var test in ModelState.Values)
                {
                    foreach (var msg in test.Errors)
                    {
                        errorMsg = msg.ErrorMessage;
                    }
                }
                return BadRequest(errorMsg);
            }

            var user = new IdentityUser
            {
                UserName = model.Email,
                Email = model.Email
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                var userAccount = await _userManager.FindByEmailAsync(model.Email);
                userAccount.EmailConfirmed = true;

                var findUserRole = await _roleManager.FindByNameAsync("User");
                var userRole = new IdentityRole("User");

                if (findUserRole == null)
                {
                    await _roleManager.CreateAsync(userRole);
                }

                if (!await _userManager.IsInRoleAsync(userAccount, userRole.Name))
                {
                    await _userManager.AddToRoleAsync(userAccount, userRole.Name);
                }

                return new OkResult();
            }

            AddErrors(result);

            return new BadRequestObjectResult(result.Errors);
        }

        #region Helpers
        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }
        #endregion
    }
}
