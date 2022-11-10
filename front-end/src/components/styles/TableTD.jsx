/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function TableTD({ children, productName }, props) {
  return (
    <Slot
      className={ clsx(
        'py-1',
        'px-2',
        {
          'text-center': !productName,
          'text-left': productName,
        },
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

TableTD.defaultProps = {
  asChild: false,
  productName: false,
};

TableTD.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  productName: PropTypes.bool,
};

export default TableTD;
