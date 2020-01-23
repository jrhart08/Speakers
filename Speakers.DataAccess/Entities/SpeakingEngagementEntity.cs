using Microsoft.EntityFrameworkCore;
using NodaTime;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;
using System.Text;

namespace Speakers.DataAccess
{
    [Table("SpeakingEngagement")]
    public class SpeakingEngagementEntity
    {
        [Key]
        public Guid Id { get; set; }

        public string SpeakerName { get; set; } = "";
        public string TalkName { get; set; } = "";
        public string HostGroupName { get; set; } = "";
        public LocalDateTime DateTimeStart { get; set; }
        public LocalDateTime DateTimeEnd { get; set; }
        public string City { get; set; } = "";
        public string State { get; set; } = "";
        public int Attendance { get; set; }

        public Instant DateCreated { get; set; } = SystemClock.Instance.GetCurrentInstant();
    }

    public class SpeakingEngagementSeeder : ISeeder<SpeakingEngagementEntity>
    {
        public IEnumerable<SpeakingEngagementEntity> Entities => new[] {
            new SpeakingEngagementEntity
            {
                Id = Guid.Parse("6619dbee-d34b-416a-bf2d-43f6b2acd7e4"),
                SpeakerName = "Eric Siebeneich",
                TalkName = "EF Core and PostgreSQL",
                HostGroupName = "Improving",
                DateTimeStart = new LocalDateTime(2020, 01, 07, 19, 0, 0),
                DateTimeEnd = new LocalDateTime(2020, 01, 07, 21, 0, 0),
                City = "Houston",
                State = "Texas",
                Attendance = 20
            },
            new SpeakingEngagementEntity
            {
                Id = Guid.Parse("17f7b538-5d8d-4a29-a297-90ec831f3f0e"),
                SpeakerName = "Claudio Lasalla",
                TalkName = "Code Review: I Mean No Harm",
                HostGroupName = "Improving Code",
                DateTimeStart = new LocalDateTime(2019, 10, 8, 19, 0, 0),
                DateTimeEnd = new LocalDateTime(2019, 10, 8, 21, 0, 0),
                City = "Houston",
                State = "Texas",
                Attendance = 40
            },
            new SpeakingEngagementEntity
            {
                Id = Guid.Parse("ef46a8be-05a5-409f-b527-12e002b63b8c"),
                SpeakerName = "Joseph Hart",
                TalkName = "Designing and Publishing NPM Packages for Better Code Reusability",
                HostGroupName = "Improving Code",
                DateTimeStart = new LocalDateTime(2019, 12, 7, 19, 0, 0),
                DateTimeEnd = new LocalDateTime(2019, 12, 7, 21, 0, 0),
                City = "Houston",
                State = "Texas",
                Attendance = 12
            }
        };
    }
}
