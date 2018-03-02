using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.BrochureViewModel
{
    public class GetBrochureViewModel
    {
        public ICollection<GetBrochureViewItem> Brochures { get; set; }
    }
}