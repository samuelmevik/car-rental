import { twMerge } from "tailwind-merge";

type FatButtonProps = {
  text: string;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

function PrimaryButton({
  text,
  className,
  hover = false,
  onClick
}: FatButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(`bg-primary text-white border-primary py-2 px-6 border-2 duration-500 ${hover && `hover:bg-transparent hover:text-black`}`, className)}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;