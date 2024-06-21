import type Component from './types';
import use from './hooks';

export default (function Search({
  deep: defaultChecked,
  keywords: defaultValue,
  className,
  ...props
}) {
  const { onInput, onSubmit, ref } = use(props);

  return (
    <form className={className} onInput={onInput} onSubmit={onSubmit}>
      <fieldset>
        <legend>Search packages by keywords</legend>
        <div>
          <label htmlFor="keywords">Keywords</label>
          <input
            defaultValue={defaultValue}
            id="keywords"
            name="keywords"
            pattern="^\S+$"
            placeholder="Search..."
            ref={ref}
            type="text"
            required
          />
        </div>
        <div>
          <input
            defaultChecked={defaultChecked}
            id="deep"
            name="deep"
            type="checkbox"
            value="true"
          />
          <label htmlFor="deep">Use complementary requests</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
} as Component);
