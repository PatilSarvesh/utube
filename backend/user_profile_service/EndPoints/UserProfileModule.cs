using Carter;
using user_profile_service.Models;
using user_profile_service.Services;

namespace user_profile_service.EndPoints
{
    public class UserProfileModule : ICarterModule
    {
        public UserProfileModule() : base("/api/user-profile-service") { }

        public override void AddRoutes(IEndpointRouteBuilder app)
        {
            app.MapPost("/create-profile", async (IUserProfileService userProfileService, User user) =>
            {
                var userProfile = await userProfileService.CreteUserProfile(user);
                return Results.Json(userProfile);
            });

            app.MapPost("/add-to-my-video", async (IUserProfileService userProfileService, string videoId, string userId) =>
            {
                 await userProfileService.AddToMyVideos(videoId, userId);
                return Results.Ok();
            });
        }
    }
}
