import { XIcon } from "./icons/xicon";

interface ModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description?: string;
  onClose: () => void;
}

export function Modal({ title, description, onClose, children, ...props }: ModalProps) {
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl" {...props}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        {description && (
          <div className="mt-2 flex flex-col px-4">
            <p className="text-gray-500">{description}</p>
          </div>
        )}
        <div className="mt-4 flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
}
