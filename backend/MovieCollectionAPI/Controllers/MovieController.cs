using Microsoft.AspNetCore.Mvc;
using MovieCollectionAPI.Controllers.Data;

namespace MovieCollectionAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp) {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();

            return x;
        }

    }
}
