export function Button({ children, className = "", ...props }) {
    return (
      <button className={`inline-flex items-center ${className}`} {...props}>
        {children}
      </button>
    );
  }
  