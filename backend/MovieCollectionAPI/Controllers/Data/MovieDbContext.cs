using Microsoft.EntityFrameworkCore;

namespace MovieCollectionAPI.Controllers.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) 
        {

        }

        public DbSet<Movie> Movies { get; set; }
    }
}
