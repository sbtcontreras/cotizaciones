interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 ${className}`}
      {...props}
    />
  );
}
