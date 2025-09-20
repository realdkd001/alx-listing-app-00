import { PillProps } from "@/interfaces"
import React from "react"
const Pill: React.FC<PillProps> = ({filter}) => {
    return (
        <button className="flex text-colorSecondary font-Quicksand text-[19px] justify-center items-center h-12 px-6 py-2.5
         active:bg-[#F0FFFB] border-[1.5px] border-[#E9E9E9] rounded-[30px] active:border-[#34967C]">
            {filter}
        </button>
    )
}

export default Pill
