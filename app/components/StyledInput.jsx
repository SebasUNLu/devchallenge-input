"use client"

import React, { useState } from 'react';
import CustomIcon from './CustomIcon';

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
    default: "border-[#828282] hover:border-[#333333] focus:border-[#2962FF]",
    error: "border-[#D32F2F] hover:border-[#333333] focus:border-[#D32F2F]"
  },
  helperText: {
    default: "text-[#828282]",
    error: "text-[#D32F2F]"
  },
  sizes: {

  }
}

const StyledInput = ({
  placeholder = "Placeholder",
  label = "label",
  error = false,
  disabled = false,
  helperText = "",
  startIcon = "",
  endIcon = "",
}) => {

  const [isfocused, setIsfocused] = useState(false);

  const handleFocus = () => {
    setIsfocused(true)
  }

  const handleBlur = () => {
    setIsfocused(false)
  }

  const styleGeneral = "outline-none text-[#333333] border border-solid rounded-lg font-sans font-medium text-sm py-[1.125em] pl-[0.75em]"

  const styleColor = disabled ? "border-[#E0E0E0]" : error ? theme.colors.error : theme.colors.default;

  const styleLabel = disabled ? "text-[#333333]" : error ?
    (isfocused ? theme.label.error.focus : theme.label.error.normal)
    : (isfocused ? theme.label.default.focus : theme.label.default.normal)

  const styleHelper = `mt-1 text-[10px] font-normal ${error ? theme.helperText.error : theme.helperText.default}`

  return (
    <label className={`flex flex-col ${styleLabel}`}>{label}
      <div className='relative'>
        {startIcon && <CustomIcon iconName={startIcon} />}
        <input
          type='text'
          placeholder={placeholder}
          className={`${styleGeneral} ${styleColor}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
        />
        {endIcon && <CustomIcon iconName={endIcon} end />}
      </div>
      {helperText && <p className={styleHelper}>{helperText}</p>}

    </label>
  );
};

export default StyledInput;