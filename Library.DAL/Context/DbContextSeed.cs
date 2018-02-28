using Microsoft.AspNetCore.Identity;
using Shared;
using Shared.Enums;
using System.Threading.Tasks;

namespace Library.DAL.Context
{
    public static class DbContextSeed
    {
        public async static Task Seed(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            string password = Settings.UserPassword;
            string email = Settings.UserName;

            if (await userManager.FindByNameAsync(email)==null)
            {
                await roleManager.CreateAsync(new IdentityRole(Role.Admin.ToString()));
                await roleManager.CreateAsync(new IdentityRole(Role.User.ToString()));

                IdentityUser admin = new IdentityUser();
                admin.UserName = email;
                admin.Email = email;
                IdentityResult identityResult = await userManager.CreateAsync(admin, password);
                if(identityResult.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, Role.Admin.ToString());
                }
            }
        }
    }
}
