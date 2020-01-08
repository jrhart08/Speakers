using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;
using System.Reflection;

namespace Speakers.DataAccess
{
    public static class ServicesExtensions
    {
        public static IServiceCollection AddSpeakersDataContext(this IServiceCollection services, string connectionString)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddDbContext<SpeakersDataContext>(opts => opts.UseNpgsql(connectionString, o => o.ConfigureForSpeakersDataContext()));
            services.AddTransient<SpeakersDataSeeder>();

            return services;
        }
    }
}
