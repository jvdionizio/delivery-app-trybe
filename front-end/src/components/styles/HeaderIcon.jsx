import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';

function HeaderIcon({ children }) {
  return (
    <Slot className="w-5 h-5 text-gray-900" weight="bold">
      {children}
    </Slot>
  );
}

HeaderIcon.displayName = 'Header.Icon';

HeaderIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderIcon;
