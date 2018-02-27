using Library.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL
{
    internal class PublicationHouseBookComparer : IEqualityComparer<PublicationHouseBook>
    {
        public bool Equals(PublicationHouseBook x, PublicationHouseBook y)
        {
            if ((x.BookId == y.BookId)&&(x.PublicationHouseId == y.PublicationHouseId))
            {
                return true;
            }
            return false;
        }
        public int GetHashCode(PublicationHouseBook codeh)
        {
            return 0;
        }
    }
}
