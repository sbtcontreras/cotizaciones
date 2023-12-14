interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}