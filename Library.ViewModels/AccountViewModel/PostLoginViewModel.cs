using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.AccountViewModel
{
    public class PostLoginViewModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
