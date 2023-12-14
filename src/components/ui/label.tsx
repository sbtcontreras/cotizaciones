interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, className = "", ...props }: LabelProps) {
  return (
    <label className={`mb-2 font-bold text-lg text-gray-900 ${className}`} {...props}>
      {children}
    </label>
  );
}
