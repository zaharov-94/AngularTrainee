using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Library.Entities.Entities
{
    public class Book : TEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime DateOfPublishing { get; set; }
    }
}
