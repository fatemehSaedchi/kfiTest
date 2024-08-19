import React from "react"
import {twMerge} from "tailwind-merge";

interface Props {
    children: React.ReactNode
    className?: string
}

export function Section({children, className=''}: Props) {
    return (
        <section className={twMerge('container mx-auto px-4 relative', className)}>
            {children}
        </section>
    );
}