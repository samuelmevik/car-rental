type FatButtonProps = {
  text: string;
  hover?: boolean;
  onClick?: () => void;
}

function PrimaryButton({
  text,
  hover = false,
  onClick
}: FatButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white border-primary py-2 px-6 border-2 duration-500 ${hover && `hover:bg-transparent hover:text-black`}`}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;