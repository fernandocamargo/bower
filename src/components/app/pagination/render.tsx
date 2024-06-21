import type Component from './types';
import use from './hooks';

export default (function Pagination({
  children,
  className,
  max,
  min,
  page,
  perPage,
  ...props
}) {
  const { onInput, onSubmit } = use(props);

  return (
    <form className={className} onInput={onInput} onSubmit={onSubmit}>
      <fieldset>
        <legend>See other results</legend>
        {children}
        <div>
          <label htmlFor="page">Go to page:</label>
          <input
            defaultValue={page}
            id="page"
            max={max}
            min={min}
            name="page"
            pattern="\d*"
            type="number"
            required
          />
        </div>
        <div>
          <label htmlFor="perPage">Items per page:</label>
          <select defaultValue={perPage} id="perPage" name="perPage" required>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
} as Component);
