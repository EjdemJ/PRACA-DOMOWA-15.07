function Button({ text, className, onClick, type, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
}

export default Button;
