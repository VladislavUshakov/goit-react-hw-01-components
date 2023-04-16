import {
  Item,
  Percentage,
  Section,
  StatList,
  Title,
} from './Statistics.styles';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => (
  <Section>
    {title && <Title>{title}</Title>}

    <StatList>
      {data.map(item => {
        return (
          <Item key={item.id}>
            <span>{item.label}</span>
            <Percentage>{item.percentage}</Percentage>
          </Item>
        );
      })}
    </StatList>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
