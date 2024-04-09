using Microsoft.EntityFrameworkCore;
using user_profile_service.Models;

namespace user_profile_service.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}
