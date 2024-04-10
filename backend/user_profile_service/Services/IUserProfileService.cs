
using user_profile_service.Models;

namespace user_profile_service.Services
{
    public interface IUserProfileService
    {
        Task<bool> AddToMyVideos(Video video);
        Task<bool> CreteUserProfile(User user);
    }
}