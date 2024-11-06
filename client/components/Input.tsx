interface Props {
  placeholder?: string;
  value?: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => void;
}

const Input = ({ placeholder, value, handleChange }: Props) => {
  return (
    <input
      className="h-10 w-60 lg:w-72 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out bg-white text-gray-700 placeholder-gray-400"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
