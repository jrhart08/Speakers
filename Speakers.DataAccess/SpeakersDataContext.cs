using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace Speakers.DataAccess
{
    public class SpeakersDataContext : DbContext
    {
        public SpeakersDataContext(DbContextOptions<SpeakersDataContext> opts) : base(opts) { }

        protected override void OnModelCreating(ModelBuilder model)
        {
            model.HasDefaultSchema("speakers_app");

            var snakeCase = new Regex($"([a-z])([A-Z]+)");
            foreach (var t in model.Model.GetEntityTypes())
            {
                t.SetTableName(snakeCase.Replace(t.GetTableName(), "$1_$2").ToLower());
                foreach (var p in t.GetProperties())
                {
                    p.SetColumnName(snakeCase.Replace(p.GetColumnName(), "$1_$2").ToLower());
                }
            }
        }
    }
}
