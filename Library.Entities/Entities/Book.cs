using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Library.Entities.Entities
{
    public class Book : BaseEntity
    {
        public string Name { get; set; }
        public DateTime DateOfPublishing { get; set; }
    }
}
