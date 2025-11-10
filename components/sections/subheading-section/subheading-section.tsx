import React from 'react';

export interface SubheadingSectionProps {
  text: string;
}

export const SubheadingSection = (props: SubheadingSectionProps) => {
  const { text } = props;

  return (
    <h2 className='font-michroma pt-8 text-[40px] leading-none font-semibold text-primary uppercase md:pt-8 lg:pt-12'>
      {text}
    </h2>
  );
};
