using Carter;
using user_profile_service.Models;
using user_profile_service.Services;

namespace user_profile_service.EndPoints
{
    public class UserProfileModule : ICarterModule
    {
        public void AddRoutes(IEndpointRouteBuilder app)
        {
            app.MapPost("/api/user-profile-service/create-profile", async (IUserProfileService userProfileService, User user) =>
            {
                var userProfile = await userProfileService.CreteUserProfile(user);
                return Results.Json(userProfile);
            });

        }
    }
}
