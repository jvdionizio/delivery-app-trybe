import PropTypes from 'prop-types';

function TextInputRoot({ children }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        h-12
        py-4
        px-3
        rounded
        bg-white-1000
        w-full
        ring-2
        ring-gray-100
        focus-within:ring-2
        focus-within:ring-yellow-500
        "
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

TextInputRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextInputRoot;
