const TextInput = ({ label, placeholder }) => {
    return (
      <div className="">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ">
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border border-gray-300 dark:border-gray-700 rounded-sm px-4 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all duration-200 ease-in-out"
        />
      </div>
    );
  };
  export default TextInput;