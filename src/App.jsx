import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

import css from 'App.module.css';

export const App = () => {
  return (
    <>
      <div>
        <h1 className={css.heading1}>1 - Профіль соціальної мережі</h1>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <h1 className={css.heading1}>2- Секція статистики</h1>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <h1 className={css.heading1}>3 - Список друзів</h1>
        <FriendList friends={friends} />
      </div>
      <div>
        <h1 className={css.heading1}>4 - Історія транзакцій</h1>
        <TransactionHistory item={transactions} />
      </div>
    </>
  );
};
