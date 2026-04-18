import { useState, useMemo } from 'react';
import { PAGINATION_SIZE } from '../../../Confs';
import './Table.scss';

/**
 * Reusable Table — filterable, sortable, paginated (PAGINATION_SIZE rows/page).
 *
 * @param {Array}  columns            - [{ key, label, sortable? }]
 * @param {Array}  data               - Array of row objects
 * @param {string} filterPlaceholder  - Placeholder text for the search input
 */
function Table({ columns = [], data = [], filterPlaceholder = 'Search...' }) {
  const [filter,  setFilter]  = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [page,    setPage]    = useState(1);

  const filtered = useMemo(() => {
    if (!filter.trim()) return data;
    const lower = filter.toLowerCase();
    return data.filter(row =>
      Object.values(row).some(val => String(val).toLowerCase().includes(lower))
    );
  }, [data, filter]);

  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const cmp = String(a[sortKey]).localeCompare(String(b[sortKey]), undefined, { numeric: true });
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  const totalPages  = Math.max(1, Math.ceil(sorted.length / PAGINATION_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged       = sorted.slice((currentPage - 1) * PAGINATION_SIZE, currentPage * PAGINATION_SIZE);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
    setPage(1);
  }

  function handleFilter(e) {
    setFilter(e.target.value);
    setPage(1);
  }

  function sortIcon(key) {
    if (sortKey !== key) return ' ⇅';
    return sortDir === 'asc' ? ' ↑' : ' ↓';
  }

  return (
    <div className="reusable-table">
      {/* Filter */}
      <div className="reusable-table__filter">
        <input
          type="text"
          className="form-control"
          placeholder={filterPlaceholder}
          value={filter}
          onChange={handleFilter}
        />
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  className={col.sortable ? 'reusable-table__sortable' : undefined}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                >
                  {col.label}
                  {col.sortable && (
                    <span className="reusable-table__sort-icon">{sortIcon(col.key)}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center text-muted py-4">
                  No results found.
                </td>
              </tr>
            ) : (
              paged.map((row, i) => (
                <tr key={row.id ?? i}>
                  {columns.map(col => (
                    <td key={col.key}>{row[col.key] ?? '—'}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="reusable-table__pagination">
        <span className="reusable-table__count text-muted">
          {sorted.length} result{sorted.length !== 1 ? 's' : ''}
        </span>
        <div className="reusable-table__pager">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="reusable-table__page-info">
            {currentPage} / {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
