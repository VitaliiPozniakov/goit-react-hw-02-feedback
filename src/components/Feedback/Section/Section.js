
import PropTypes from 'prop-types';
import { Sect, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <section >
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;