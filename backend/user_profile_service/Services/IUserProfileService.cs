﻿
using user_profile_service.Models;

namespace user_profile_service.Services
{
    public interface IUserProfileService
    {
        Task<UserProfile> CreteUserProfile(User user);
    }
}