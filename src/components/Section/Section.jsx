import PropTypes from 'prop-types';
import { Title, SectionBox } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      {title && <Title>{title}</Title>}
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
