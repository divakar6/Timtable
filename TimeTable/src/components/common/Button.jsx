export function Button({ children, onClick, disabled = false, variant = 'primary' }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    danger: 'bg-red-600 hover:bg-red-700',
    success: 'bg-green-600 hover:bg-green-700'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}