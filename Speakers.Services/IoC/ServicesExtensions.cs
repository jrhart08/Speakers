using Microsoft.Extensions.DependencyInjection;
using NetCore.AutoRegisterDi;
using System.Linq;
using System.Reflection;

namespace Speakers.Services
{
    public static class ServicesExtensions
    {
        public static IServiceCollection AddSpeakersServices(this IServiceCollection services)
        {
            var serviceTypes = Assembly.GetExecutingAssembly().DefinedTypes
                .Where(it => it.Name.EndsWith("Service"))
                .ToList();
            
            foreach (var type in serviceTypes)
            {
                var interfaces = type.GetTypeInfo().ImplementedInterfaces;
                foreach (var interfaceType in interfaces)
                {
                    services.AddTransient(interfaceType, type);
                }
            }

            return services;
        }
    }
}
