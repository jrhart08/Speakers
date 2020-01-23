using NodaTime;
using System;
using System.Collections.Generic;
using System.Text;

namespace Speakers.Domain
{
    public class SpeakingEngagement
    {
        public Guid Id { get; set; }
        public string SpeakerName { get; set; } = "";
        public string TalkName { get; set; } = "";
        public string HostGroupName { get; set; } = "";
        public LocalDateTime DateTimeStart { get; set; }
        public LocalDateTime DateTimeEnd { get; set; }
        public string City { get; set; } = "";
        public string State { get; set; } = "";
        public int Attendance { get; set; }
    }
}
