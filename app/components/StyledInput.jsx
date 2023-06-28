"use client"

import React, { useState } from 'react';

const theme = {
  label: {
    default: {
      normal: "text-[#333333] hover:text-[#333333]",
      focus: "text-[#2962FF] hover:text-[#333333]"
    },
    error: {
      normal: "text-[#D32F2F] hover:text-[#333333]",
      focus: "text-[#D32F2F] hover:text-[#333333]"
    }
  },
  colors: {
    default: "border-[#828282] hover:border-[#333333] !focus:border-[#2962FF]",
    error: "border-[#D32F2F] hover:border-[#333333] focus:border-[#D32F2F]"
  },
  sizes: {

  }
}

const StyledInput = ({ placeholder = "Placeholder", label = "label", error = false }) => {

  const [isfocused, setIsfocused] = useState(false);

  const handleFocus = () => {
    setIsfocused(true)
  }

  const handleBlur = () => {
    setIsfocused(false)
  }

  const styleGeneral = "text-[#333333] border border-solid rounded-lg font-sans font-medium text-sm py-[1.125em] pl-[0.75em]"

  const styleColor = error ? theme.colors.error : theme.colors.default;

  const styleLabel = error ?
    (isfocused ? theme.label.error.focus : theme.label.error.normal)
    : (isfocused ? theme.label.default.focus : theme.label.default.normal)

  return (
    <label className={`flex flex-col ${styleLabel}`}>{label}
      <input
        type='text'
        placeholder={placeholder}
        className={`${styleGeneral} ${styleColor}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </label>
  );
};

export default StyledInput;