using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace Speakers.DataAccess
{
    public static class PostgreSqlNamingConvention
    {
        public static void UsePostgreSqlNamingConvention(this ModelBuilder model)
        {
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
