using Library.DAL.Abstract;
using Library.DAL.Context;
using Library.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Library.DAL.Repositories
{
    public class EntityRepository<T> : IGenericRepository<T> where T : TEntity
    {
        private ApplicationContext _context;
        private DbSet<T> _dbSet;

        public EntityRepository(ApplicationContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public virtual void Add(T item)
        {
            try
            {
                _dbSet.Add(item);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
            }
        }

        public virtual void Add(IEnumerable<T> items)
        {
            try
            {
                _dbSet.AddRange(items);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
            }
        }

        public virtual T FindById(int id)
        {
            try
            {
                return _dbSet.Find(id);
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
                return null;
            }
        }
        public virtual IEnumerable<T> GetAll()
        {

            try
            {
                return _dbSet.AsNoTracking().ToList();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
                return null;
            }
        }
        public IEnumerable<T> Get(Func<T, bool> predicate)
        {
            try
            {
                return _dbSet.AsNoTracking().Where(predicate).ToList();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
                return null;
            }
        }
        public void Remove(int id)
        {
            try
            {
                _dbSet.Remove(_dbSet.Find(id));
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
            }
        }

        public void Remove(IEnumerable<T> items)
        {
            try
            {
                _dbSet.RemoveRange(items);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
            }
        }
        public virtual void Update(T item)
        {
            try
            {
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
            }
        }
    }
}
