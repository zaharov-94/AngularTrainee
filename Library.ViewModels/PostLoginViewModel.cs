﻿using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels
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