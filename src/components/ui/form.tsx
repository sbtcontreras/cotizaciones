interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export function Form({ children, className = "", ...props }: FormProps) {
  return (
    <form className={`w-full bg-white rounded-lg px-4 pt-2 flex flex-col gap-4 ${className}`} {...props}>
      {children}
    </form>
  );
}
