import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className='w-full relative'>
        <div className='absolute t-0 l-0 w-full h-64 bg-gradient-to-t from-white to-transparent to-40%'></div>
        <div className="h-64 w-full flex items-center justify-center bg-gradient-to-t from-white to-transparent">
          <h1 className='text-orange-600 text-3xl font-bold'>Dev Challenge - Buttons</h1>
        </div>
      </div>
      <div className='flex items-center justify-center p-4 text-xl font-bold'>
        <h2>By Sebastián Marchetti :)</h2>
      </div>
      <div className='px-8 py-4'>
        <p className='text-center text-lg'>
          This is the first of 8 challenges proposed on the page <Link href={"https://devchallenges.io/"} target='_blank' className='font-bold text-orange-600'>DevChallenges.io</Link> which consists of creating a reusable and customizable Button component. Among the customization options are the size, color, style variant, enable, enable shadow and a choice of 5 icons, both at the beginning and at the end of the text.</p>
        <p className='text-center text-lg my-2'>The technologies used were React with Next.js and tailwind for the styles</p>
        <p className='text-center text-lg'>These options can be used in various combinations as shown below:</p>
        <p className='text-center text-lg'>(Try hovering and focusing (with the Tab key) the inputs to see the colors)</p>
      </div>
    </>
  );
};

export default Header;