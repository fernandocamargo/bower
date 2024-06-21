import type Component from './types';
import Column from './column';
import Row from './row';

export const renderRow = (row, index) => <Row key={index} {...row} />;

export default (function Table({ children, className, rows, sorting }) {
  return (
    <table className={className}>
      <thead>
        <tr>
          <Column title="Sort by name" {...sorting.name}>
            Name
          </Column>
          <Column title="Sort by owner" {...sorting.owner}>
            Owner
          </Column>
          <Column title="Sort by stars" {...sorting.stars}>
            Stars
          </Column>
        </tr>
      </thead>
      {children ? (
        <tfoot>
          <tr>
            <td colSpan={3}>{children}</td>
          </tr>
        </tfoot>
      ) : (
        <tbody>{rows.map(renderRow)}</tbody>
      )}
    </table>
  );
} as Component);
