function TextInputInput(props) {
  return (
    <input
      className="
        bg-transparent
        flex-1 text-gray-900
        text-xs
        placeholder:text-gray-400
        outline-none
        w-full
        "
      { ...props }
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export default TextInputInput;
