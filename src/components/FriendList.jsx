import css from './FriendList.module.css';

const ListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => {
        return (
          <ListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
};
