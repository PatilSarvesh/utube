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

        public async Task<bool> CreteUserProfile(User user)
        {
            try
            {
                var profile = await _dbContext.UserProfiles.FindAsync(user.Id);

                if (profile == null)
                {
                    var userProfile = new UserProfile()
                    {
                        Id = user.Id,
                        FullName = user.FullName,
                        Email = user.Email,
                        PhoneNumber = user.PhoneNumber,
                        CreatedOn = user.CreatedOn,
                        LikedVideos = [],
                        WatchLater = [],
                        MyVideos = [],
                        Subscribers = [],
                        Subscriptions = [],
                    };

                    _dbContext.UserProfiles.Add(userProfile);

                    await _dbContext.SaveChangesAsync();

                    return true;

                }
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving user: {ex.Message}");
                return false;
            }
        }
    }
}
