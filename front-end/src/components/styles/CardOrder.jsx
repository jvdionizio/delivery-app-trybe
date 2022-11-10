import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function CardOrder({ children, status }) {
  return (
    <div
      className={ clsx(
        'flex',
        'flex-col',
        'w-1/3',
        'items-center',
        'justify-center',
        'gap-3',
        'p-4',
        {
          'bg-yellow-200': status === 'Pendente',
          'bg-yellow-500': status === 'Preparando',
          'bg-blue': status === 'Entregue',
        },
      ) }
    >
      {children}
    </div>
  );
}

CardOrder.defaultProps = {
  status: 'none',
};

CardOrder.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
};

export default CardOrder;
