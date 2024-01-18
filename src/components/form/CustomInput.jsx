import { forwardRef } from "react";

const CustomInput = (
  // eslint-disable-next-line react/prop-types
  { type, label, name, required, ...props },
  ref
) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        ref={ref}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
        {...props}
        required={required}
      />
    </div>
  );
};

export default forwardRef(CustomInput);
