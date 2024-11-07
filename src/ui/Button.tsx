type ChildrenProps = {
  buttonName: string;
  buttonIcon?: string;
  className: string;
  onClick?: () => void;
};

function Button({
  buttonName,
  buttonIcon,
  className,
  onClick,
}: ChildrenProps) {
  return (
    <button
      onClick={onClick}
      className={`text-black flex items-center rounded-md rounded-tr-xl px-2 py-1 lg:px-3 lg:py-2 shadow-md text-xs lg:text-sm ${className}`}
    >
      <i className={`${buttonIcon} text-lg`}></i>
      {buttonName}
    </button>
  );
}

export default Button;

