import { Anchor } from '$/components/widgets';

import type Component from './types';
import { PAGINATION } from './constants';
import use from './hooks';
import Header from './header';
import Pagination from './pagination';
import Search from './search';
import Table from './table';

export default (function App({ className }) {
  const {
    params: { deep, key, keywords, page, perPage },
    fetching,
    modules,
    paginate,
    pagination,
    search,
    sorting,
    total,
  } = use();

  return (
    <div className={className}>
      <Header />
      <main>
        <Search deep={deep} key={key} keywords={keywords} onSubmit={search} />
        <Table rows={modules} sorting={sorting}>
          {fetching.pending && 'Loading popular repositories...'}
        </Table>
        <Pagination
          key={key}
          max={pagination.total}
          min={PAGINATION.FIRST_PAGE}
          onSubmit={paginate}
          page={page}
          perPage={perPage}
        >
          <dl>
            <dt>Pagination stats:</dt>
            <dd>
              Page {page} of {pagination.total} ({total} result(s))
            </dd>
          </dl>
          <nav>
            <h5>Navigate through:</h5>
            <ul>
              <li>
                <Anchor href={pagination.first.href} title="First page">
                  First page
                </Anchor>
              </li>
              <li>
                <Anchor href={pagination.previous.href} title="Previous page">
                  Previous page
                </Anchor>
              </li>
              <li>
                <Anchor href={pagination.next.href} title="Next page">
                  Next page
                </Anchor>
              </li>
              <li>
                <Anchor href={pagination.last.href} title="Last page">
                  Last page
                </Anchor>
              </li>
            </ul>
          </nav>
        </Pagination>
        <aside></aside>
      </main>
      <footer>Made with class hatred.</footer>
    </div>
  );
} as Component);
