using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.PublicationHouseViewModel
{
    public class GetPublicationHouseViewModel
    {
        public ICollection<GetPublicationHouseViewItem> PublicationHouses { get; set; }
    }
}
