"use client"

import React, { useState } from 'react';
import CustomInputIcon from './CustomInputIcon';

const theme = {
  label: {
    general: "flex flex-col",
    default: {
      normal: "text-[#333333] hover:text-[#333333]",
      focus: "text-[#2962FF] hover:text-[#333333]"
    },
    error: {
      normal: "text-[#D32F2F] hover:text-[#333333]",
      focus: "text-[#D32F2F] hover:text-[#333333]"
    }
  },
  input: {
    general: "w-full outline-none text-[#333333] border border-solid rounded-lg font-sans font-medium text-sm",
    startIcon: {
      on: "pl-11",
      off: "pl-[0.75em]"
    },
    endIcon: {
      on: "pr-11",
      off: "pr-[0.75em]"
    },
  },
  disabled: {
    text: "text-[#333333]",
    border: "border-[#E0E0E0]"
  },
  colors: {
    default: "border-[#828282] hover:border-[#333333] focus:border-[#2962FF]",
    error: "border-[#D32F2F] hover:border-[#333333] focus:border-[#D32F2F]"
  },
  helperText: {
    general: "mt-1 text-[10px] font-normal",
    normal: "text-[#828282]",
    error: "text-[#D32F2F]"
  },
  sizes: {
    sm: "py-[0.625em]",
    md: "py-[1.125em]"
  },
  multiline: {
    general: "text-[#333333] outline-none hover:text-[#333333] border border-solid border-[#828282] hover:border-[#333333] focus:border-[#2962FF] rounded-lg font-sans font-medium text-sm px-[0.75em]",
    sm: "py-[0.625em]",
    md: "py-[1.125em]",
  }
}

const StyledInput = ({
  placeholder = "Placeholder",
  label = "Label",
  error = false,
  disabled = false,
  helperText = "",
  startIcon = "",
  endIcon = "",
  fullWidth = false,
  size = "md",
  multiline = false,
  row = 2,
  value = ""
}) => {

  if (row < 2) row = 2

  const [isfocused, setIsfocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleFocus = () => {
    setIsfocused(true)
  }

  const handleBlur = () => {
    setIsfocused(false)
  }

  const styleInput = `${theme.input.general} ${size === "sm" ? theme.sizes.sm : theme.sizes.md}`

  const iconsPaddingStyle = `
    ${startIcon ? theme.input.startIcon.on : theme.input.startIcon.off} 
    ${endIcon ? theme.input.endIcon.on : theme.input.endIcon.off}
  `

  const styleGeneralColor = disabled ? theme.disabled.border : error ? theme.colors.error : theme.colors.default;

  const styleLabelColor = disabled ? theme.disabled.text : error ?
    (isfocused ? theme.label.error.focus : theme.label.error.normal)
    : (isfocused ? theme.label.default.focus : theme.label.default.normal)

  const styleHelper = `${theme.helperText.general} ${error ? theme.helperText.error : theme.helperText.normal}`

  const styleWidth = fullWidth ? "w-full" : "w-[200px]"

  const selectedChildren =
    multiline
      ? <textarea
        placeholder={placeholder}
        className={`resize-none h-[${row * 22}px] ${theme.multiline.general} ${styleWidth} ${size === 'sm' ? theme.multiline.sm : theme.multiline.md} ${iconsPaddingStyle} ${styleGeneralColor}`}
        rows={row}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        onChange={handleChange}
        value={inputValue}
      />
      : <input
        type='text'
        placeholder={placeholder}
        className={`${styleInput} ${styleGeneralColor} ${iconsPaddingStyle}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        onChange={handleChange}
        value={inputValue}
      />

  return (
    <label className={`${theme.label.general} ${styleLabelColor} ${styleWidth}`}>{label}
      <div className='relative'>
        {startIcon && <CustomInputIcon iconName={startIcon} multiline={multiline} />}
        {selectedChildren}
        {endIcon && <CustomInputIcon iconName={endIcon} end multiline={multiline} />}
      </div>
      {helperText && <p className={styleHelper}>{helperText}</p>}
    </label>
  );
};

export default StyledInput;