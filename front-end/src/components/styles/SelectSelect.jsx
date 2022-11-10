/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { clsx } from 'clsx';

function SelectSelect({ children }, props) {
  return (
    <select
      className={ clsx(
        {
          'bg-transparent': props.type !== 'number',
          'bg-white-smoked': props.type === 'number',
        },
        'flex-1',
        'text-gray-900',
        'text-xs',
        'placeholder:text-gray-400',
        'outline-none',
        'w-full',
        {
          'text-center': props.type === 'number',
        },
      ) }
      { ...props }
    >
      { children }
    </select>
  );
}

SelectSelect.displayName = 'Select.Select';

export default SelectSelect;
