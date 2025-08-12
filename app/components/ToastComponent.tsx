import { ToastContainer } from "react-toastify";

export const ToastComponent: React.FC = () => (
  <ToastContainer
    autoClose={3000}
    closeButton={false}
    position="top-right"
    theme="dark"
    toastClassName={(context) => {
      const type = context?.type;
      return [
        "relative flex p-4 shadow-md border",
        "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
        type === "success" && "border-green-500",
        type === "error" && "border-red-500",
        type === "info" && "border-blue-500",
        type === "warning" && "border-yellow-500",
      ]
        .filter(Boolean)
        .join(" ");
    }}
    className="text-sm w-auto font-medium text-gray-800 dark:text-gray-200"
  />
);
