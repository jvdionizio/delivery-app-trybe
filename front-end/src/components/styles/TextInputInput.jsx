/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { clsx } from 'clsx';

function TextInputInput(props) {
  return (
    <input
      className={ clsx(
        {
          'bg-transparent': props.inputType !== 'number',
          'bg-white-smoked': props.inputType === 'number',
        },
        'flex-1',
        'text-gray-900',
        'text-xs',
        'placeholder:text-gray-400',
        'outline-none',
        'w-full',
        {
          'text-center': props.inputType === 'number',
        },
      ) }
      { ...props }
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export default TextInputInput;
