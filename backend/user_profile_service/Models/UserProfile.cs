namespace user_profile_service.Models
{
    public class UserProfile
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime CreatedOn { get; set; }

        public List<string> MyVideos { get; set; }
        public List<string> LikedVideos { get; set; }
        public List<string> WatchLater { get; set; }
        public List<string> Subscribers { get; set; }
        public List<string> Subscriptions { get; set; }

    }
}
