using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ski_calc.Controllers
{
    public enum SkiDiscipline
    {
        Classic = 0,
        Freestyle = 1,
    }

    public class CalculateSkiLengthRequest
    {
        public int Age { get; set; }
        public int Length { get; set; }
        public SkiDiscipline Discipline { get; set; }
    }

    public class CalculateSkiLengthResult
    {
        public int? MinRecommendedLength { get; }
        public int? MaxRecommendedLength { get; }
        public SkiDiscipline Discipline { get; }
        public CalculateSkiLengthResult(int minRecommendedLength, int maxRecommendedLength, SkiDiscipline discipline)
        {
            this.MinRecommendedLength = minRecommendedLength;
            this.MaxRecommendedLength = maxRecommendedLength;
            this.Discipline = discipline;
        }

        public CalculateSkiLengthResult(int recommendedLength, SkiDiscipline discipline)
        {
            this.MinRecommendedLength = recommendedLength;
            this.MaxRecommendedLength = recommendedLength;
            this.Discipline = discipline;
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [Route("calculate")]
        [HttpPost]
        public ActionResult<CalculateSkiLengthResult> Calculate([FromBody] CalculateSkiLengthRequest request)
        {
            if (request.Age <= 4)
            {
                return new CalculateSkiLengthResult(request.Length, request.Discipline);
            }

            if (request.Age <= 8)
            {
                return new CalculateSkiLengthResult(request.Length + 10, request.Length + 20, request.Discipline);
            }

            switch (request.Discipline)
            {
                case SkiDiscipline.Classic: return new CalculateSkiLengthResult(request.Length + 20, request.Discipline);
                case SkiDiscipline.Freestyle: return new CalculateSkiLengthResult(request.Length + 10, request.Length + 15, request.Discipline);
                default: return BadRequest($"Discipline {request.Discipline} is not covered by the calculator");
            }
        }
    }
}
