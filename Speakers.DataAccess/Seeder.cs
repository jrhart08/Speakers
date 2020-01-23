using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace Speakers.DataAccess
{
    public class SpeakersDataSeeder
    {
        readonly SpeakersDataContext _db;
        public SpeakersDataSeeder(SpeakersDataContext db)
        {
            _db = db;
        }

        public void Seed()
        {
            Assembly.GetExecutingAssembly()
                .DefinedTypes
                .Select(type => new
                {
                    type,
                    seederInterface = type.GetInterfaces().FirstOrDefault(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(ISeeder<>)),
                })
                .Where(it => it.seederInterface != null)
                .ToList()
                .ForEach(seederDef =>
                {
                    dynamic seeder = Activator.CreateInstance(seederDef.type);
                    var entities = seeder.Entities;

                    var entityType = seederDef.seederInterface.GetGenericArguments()[0];

                    foreach (var entity in entities)
                    {
                        var dbEntity = _db.Find(entityType, entity.Id);
                        if (dbEntity == null)
                        {
                            _db.Add(entity);
                        }
                        else
                        {
                            _db.Entry(dbEntity).State = EntityState.Detached;
                            _db.Update(entity);
                        }
                    }
                });

            _db.SaveChanges();
        }
    }

    public interface ISeeder<T>
    {
        IEnumerable<T> Entities { get; }
    }
}
