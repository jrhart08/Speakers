using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL.Infrastructure;
using System.Text.RegularExpressions;

namespace Speakers.DataAccess
{
    public class SpeakersDataContext : DbContext
    {
        public SpeakersDataContext(DbContextOptions<SpeakersDataContext> opts) : base(opts) { }

        public DbSet<SpeakingEngagementEntity>? SpeakingEngagements { get; set; }

        protected override void OnModelCreating(ModelBuilder model)
        {
            model.HasDefaultSchema("speakers");
            model.UsePostgreSqlNamingConvention();
        }
    }

    public static class SpeakersDataContextExtensions
    {
        public static NpgsqlDbContextOptionsBuilder ConfigureForSpeakersDataContext(this NpgsqlDbContextOptionsBuilder builder) =>
            builder.UseNodaTime();
    }
}
