import css from './TransactionHistory.module.css';

const TableRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export const TransactionHistory = ({ item }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map(items => {
          return (
            <TableRow
              key={items.id}
              type={items.type}
              amount={items.amount}
              currency={items.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};
