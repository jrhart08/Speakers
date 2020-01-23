using Speakers.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Speakers.Services
{
    public interface ISpeakingEngagementService
    {
        Task<IEnumerable<SpeakingEngagement>> GetRecentEngagements();
    }
}