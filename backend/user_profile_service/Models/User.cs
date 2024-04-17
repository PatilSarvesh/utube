namespace user_profile_service.Models
{
    public class User
    {
        public string Id { get; set; }

        public string FullName { get; set; }
        public string Email { get; set; }
        public string? PhoneNumber { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
