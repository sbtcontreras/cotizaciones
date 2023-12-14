interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className = "", ...props }: SelectProps) {
  return (
    <select
      className={`w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 ${className}`}
      {...props}
    />
  );
}