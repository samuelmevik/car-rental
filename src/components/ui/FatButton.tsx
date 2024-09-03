type FatButtonProps = {
  text: string;
  hover?: boolean;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
}

function FatButton({
  text,
  hover = false,
  bgColor = "bg-orange-500",
  borderColor = "border-orange-500",
  textColor = "text-white",
  hoverBgColor = "bg-transparent",
  hoverTextColor = "text-black",
}: FatButtonProps) {
  return (
    <button
      className={`${bgColor} ${borderColor} ${textColor} py-2 px-6 border-2 duration-500 ${hover && `hover:${hoverBgColor} hover:${hoverTextColor}`}`}
    >
      {text}
    </button>
  );
}

export default FatButton;