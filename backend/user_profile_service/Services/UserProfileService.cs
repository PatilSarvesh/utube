using user_profile_service.Data;
using user_profile_service.Models;

namespace user_profile_service.Services
{
    public class UserProfileService : IUserProfileService
    {
        private readonly ApplicationDbContext _dbContext;
        public UserProfileService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<UserProfile> CreteUserProfile(User user)
        {
            try
            {
                var ans = await _dbContext.UserProfiles.FindAsync(user.Id);

                if (ans == null)
                {
                    var userProfile = new UserProfile()
                    {
                        Id = new Guid().ToString(),
                        FullName = user.FullName,
                        Email = user.Email,
                        PhoneNumber = user.PhoneNumber,
                        CreatedOn = user.CreatedOn,
                        LikedVideos = new List<string>(),
                        WatchLater = new List<string>(),
                        MyVideos = new List<string>(),
                        Subscribers = new List<string>(),
                        Subscriptions = new List<string>(),
                    };

                    _dbContext.UserProfiles.Add(userProfile);

                    await _dbContext.SaveChangesAsync();

                    return userProfile;

                }

                return ans; // Successfully saved user
            }
            catch (Exception ex)
            {
                // Log or handle exception
                Console.WriteLine($"Error saving user: {ex.Message}");
                return new UserProfile(); // Failed to save user
            }
        }
    }
}
