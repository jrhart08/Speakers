using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Speakers.DataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace Speakers.DataMigrations
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<SpeakersDataContext>
    {
        public SpeakersDataContext CreateDbContext(string[] args)
        {
            var opts = new DbContextOptionsBuilder<SpeakersDataContext>()
                .UseNpgsql(
                    "User ID=postgres;Password=password;Host=localhost;Port=5432;Database=speakers_app;Pooling=true;",
                    pgOpts => pgOpts.MigrationsAssembly(typeof(DesignTimeDbContextFactory).Assembly.FullName)
                );

            return new SpeakersDataContext(opts.Options);
        }
    }
}
