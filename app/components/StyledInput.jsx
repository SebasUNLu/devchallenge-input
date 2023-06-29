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
    sm: "py-[0.625em]",
    md: "py-[1.125em]"
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
  fullWidth = false,
  size = "md"
}) => {

  const [isfocused, setIsfocused] = useState(false);

  const handleFocus = () => {
    setIsfocused(true)
  }

  const handleBlur = () => {
    setIsfocused(false)
  }

  const styleGeneral = `w-full outline-none text-[#333333] border border-solid rounded-lg font-sans font-medium text-sm ${size === "sm" ? theme.sizes.sm : theme.sizes.md} ${startIcon ? "pl-11" : "pl-[0.75em]"}`

  const styleColor = disabled ? "border-[#E0E0E0]" : error ? theme.colors.error : theme.colors.default;

  const styleLabel = `flex flex-col ${fullWidth && "w-full"}`;

  const styleLabelColor = disabled ? "text-[#333333]" : error ?
    (isfocused ? theme.label.error.focus : theme.label.error.normal)
    : (isfocused ? theme.label.default.focus : theme.label.default.normal)

  const styleHelper = `mt-1 text-[10px] font-normal ${error ? theme.helperText.error : theme.helperText.default}`

  return (
    <label className={`${styleLabel} ${styleLabelColor}`}>{label}
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