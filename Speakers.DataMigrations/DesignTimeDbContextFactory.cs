using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Npgsql;
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
                    "User ID=postgres;Password=password;Host=sql.data;Port=5432;Database=speakers_app;Pooling=true;",
                    pgOpts => pgOpts
                        .ConfigureForSpeakersDataContext()
                        .MigrationsAssembly(typeof(DesignTimeDbContextFactory).Assembly.FullName)
                );

            return new SpeakersDataContext(opts.Options);
        }
    }
}
