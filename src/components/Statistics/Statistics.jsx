import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      {/* <FaRegThumbsUp /> */}
      <StatisticsList>
        {stats.map((stat, index) => {
          return (
            <StatisticItem
              icon={icons[index]}
              key={stat.id}
              title={stat.title}
              total={stat.total}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
