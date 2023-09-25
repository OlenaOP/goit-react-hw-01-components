import css from './Statistics.module.css';

const ListItem = ({ id, label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

const StatTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <StatTitle title={title} /> : ''}

      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <ListItem
              label={item.label}
              percentage={item.percentage}
              key={item.id}
            />
          );
        })}
      </ul>
    </section>
  );
};
