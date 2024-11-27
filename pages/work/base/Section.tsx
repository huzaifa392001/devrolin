import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react'

interface sectionProps extends HTMLAttributes<HTMLDivElement> {
    text: string | ReactNode
}


const Section: React.FC<sectionProps> = ({ children }) => {
    return <p className="w-full text-[90px] flex justify-center break-words lg:max-w-[90%] lg:mx-auto pt-28">
        {children}
    </p>
};
export default Section