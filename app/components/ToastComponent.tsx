import { ToastContainer } from "react-toastify";

export const ToastComponent: React.FC = () => (
  <ToastContainer
    autoClose={3000}
    closeButton={false}
    position="top-right"
    theme="light"
    toastClassName={(context) => {
      const type = context?.type;
      return [
        "relative flex p-4 rounded-xl shadow-md border",
        "bg-white dark:bg-dark-card border-sage-100 dark:border-dark-border",
        type === "success" && "!border-sage-400",
        type === "error" && "!border-terra-400",
        type === "info" && "!border-steel-400",
        type === "warning" && "!border-warm-300",
      ]
        .filter(Boolean)
        .join(" ");
    }}
    className="text-sm w-auto font-medium text-heading dark:text-dark-text"
  />
);
