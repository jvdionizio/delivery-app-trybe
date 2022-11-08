import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function TextInputRoot({ children, error }) {
  return (
    <div
      className={ clsx(
        'flex',
        'items-center',
        'gap-3',
        'h-12',
        'py-4',
        'px-3',
        'rounded',
        'bg-white-1000',
        'w-full',
        'ring-2',
        'ring-gray-100',
        {
          'ring-red': error,
        },
        'focus-within:ring-2',
        'focus-within:ring-yellow-500',
      ) }
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

TextInputRoot.defaultProps = {
  error: false,
};

TextInputRoot.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

export default TextInputRoot;
