using Library.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Library.DAL.Abstract
{
    public interface IGenericRepository<T> where T : TEntity
    {
        void Add(T item);
        void Add(IEnumerable<T> items);
        T FindById(int id);
        IEnumerable<T> GetAll();
        IEnumerable<T> Get(Func<T, bool> predicate);
        void Remove(int id);
        void Remove(IEnumerable<T> items);
        void Update(T item);
    }
}
