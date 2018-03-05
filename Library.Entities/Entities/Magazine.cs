using System;
using System.ComponentModel.DataAnnotations;

namespace Library.Entities.Entities
{
    public class Magazine : TEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Number { get; set; }
        [Required]
        public DateTime DateOfPublishing { get; set; }
    }
}
