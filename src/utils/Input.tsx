import React, { InputHTMLAttributes, FC } from "react";
import "../styles/input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlfor: string;
  label: string;
  type: string | any;
  placeholder: string;
  name: string;
}

const Input: FC<InputProps> = ({
  htmlfor,
  type,
  label,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <div className="formInput">
      <label htmlFor={htmlfor}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;