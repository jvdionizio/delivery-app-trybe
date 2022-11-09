import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';

function CardIcon({ children }) {
  return (
    <Slot
      className="
        w-4
        h-4
        text-gray-900
      "
      weight="bold"
    >
      {children}
    </Slot>
  );
}

CardIcon.displayName = 'Header.Icon';

CardIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardIcon;
