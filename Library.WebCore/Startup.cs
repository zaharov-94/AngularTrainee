using AutoMapper;
using Library.BLL.MapperProfiles;
using Library.BLL.Services;
using Library.DAL.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace Library.WebCore
{
  public class Startup
    {

        public Startup(IConfiguration configuration)
        {
          Configuration = configuration;
          
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddMvc();
            AutoMapperInitialize.Initialize();
            services.AddDbContext<ApplicationContext>(options =>
                      options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddIdentity<IdentityUser, IdentityRole>()
                  .AddEntityFrameworkStores<ApplicationContext>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc();
            app.Run(async (context) =>
            {
              context.Response.ContentType = "text/html";
              await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
            });
    } 
    }
}
