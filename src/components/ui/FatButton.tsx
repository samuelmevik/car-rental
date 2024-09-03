type FatButtonProps = {
  text: string;
  hover?: boolean;
}

function FatButton({
  text,
  hover = false,
}: FatButtonProps) {
  return (
    <button
      className={`bg-primary border-primary py-2 px-6 border-2 duration-500 ${hover && `hover:bg-transparent hover:text-black`}`}
    >
      {text}
    </button>
  );
}

export default FatButton;