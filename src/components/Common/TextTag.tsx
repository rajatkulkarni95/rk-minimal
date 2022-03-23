type TProps = {
  text: string;
};

const TextTag = ({ text }: TProps) => {
  return (
    <span className="text-[10px] py-1 px-3 rounded mr-2 border border-gray-600">
      {text}
    </span>
  );
};

export default TextTag;
