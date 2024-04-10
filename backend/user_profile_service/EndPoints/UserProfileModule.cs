using Carter;
using Microsoft.AspNetCore.Mvc;
using user_profile_service.Models;
using user_profile_service.Services;

namespace user_profile_service.EndPoints
{
    public class UserProfileModule : CarterModule
    {
        public UserProfileModule() : base("/api/user-profile-service") { }

        public override void AddRoutes(IEndpointRouteBuilder app)
        {
            app.MapPost("/create-profile", async (IUserProfileService userProfileService, User user) =>
            {
                var userProfile = await userProfileService.CreteUserProfile(user);
                return Results.Json(userProfile);
            });

            app.MapPost("/add-to-my-video", async (IUserProfileService userProfileService, Video video) =>
            {
                var res = await userProfileService.AddToMyVideos(video);
                return Results.Json(res);
            });

        }
    }
}
