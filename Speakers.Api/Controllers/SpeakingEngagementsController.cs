using Microsoft.AspNetCore.Mvc;
using Speakers.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Speakers.Api.Controllers
{
    [Route("api/speaking-engagements")]
    public class SpeakingEngagementsController : Controller
    {
        readonly ISpeakingEngagementService _speakingEngagementsService;
        public SpeakingEngagementsController(ISpeakingEngagementService ses)
        {
            _speakingEngagementsService = ses;
        }

        [Route(""), HttpGet]
        public async Task<ActionResult> GetRecentSpeakingEngagements() =>
            Ok(await _speakingEngagementsService.GetRecentEngagements());
    }
}
