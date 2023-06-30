import React from 'react';
import { AiFillPhone, AiFillLock, AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'

const CustomIcon = ({ iconName = undefined, end = false, multiline = false }) => {
  let iconChosen;
  if (iconName === "phone") iconChosen = <AiFillPhone size={16} />
  if (iconName === "lock") iconChosen = <AiFillLock size={16} />
  if (iconName === "github") iconChosen = <AiFillGithub size={16} />
  if (iconName === "mail") iconChosen = <AiOutlineMail size={16} />
  if (iconName === "twitter") iconChosen = <AiOutlineTwitter size={16} />

  return <IconContainer end={end} multiline={multiline}>
    {iconChosen}
  </IconContainer>
};

export default CustomIcon;

const IconContainer = ({ end, children, multiline = false }) => {

  const defaultStyle = "top-0 bottom-0 m-auto"
  const multilineStyle = "top-0 mt-3"

  const styleDiv = `w-4 h-4 absolute ${multiline ? multilineStyle : defaultStyle}  ${end ? "right-0 mr-3" : "left-0 ml-3"}`

  return (
    <div className={styleDiv}>
      {children}
    </div>
  );
}