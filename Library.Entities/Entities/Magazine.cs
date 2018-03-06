using System;
using System.ComponentModel.DataAnnotations;

namespace Library.Entities.Entities
{
    public class Magazine : BaseEntity
    {
        public string Name { get; set; }
        public int Number { get; set; }
        public DateTime DateOfPublishing { get; set; }
    }
}
