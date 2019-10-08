using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Speakers.DataAccess
{
    public static class ServicesExtensions
    {
        public static IServiceCollection AddSpeakersDataContext(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<SpeakersDataContext>(opts => opts.UseNpgsql(connectionString));

            return services;
        }
    }
}
