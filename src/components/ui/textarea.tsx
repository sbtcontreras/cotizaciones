interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ className = "", ...props }: TextAreaProps) {
  return (
    <textarea
      className={`w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 ${className}`}
      {...props}
    />
  );
}