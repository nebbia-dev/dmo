'use client'
import {useState} from "react";
import Link from "next/link";
import AnimatedHoverButton from "@/app/_components/AnimatedHoverButton";

export default function Stories({gallery, description} : {description: string, gallery:any[]}) {

    const [disabled, setDisabled] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>(['colomba.webp', 'lab.webp', 'monument.webp', 'museum.webp', 'town.webp']);
    function slide(step:'prev'|'next') {
        setDisabled(true);
        const arrCopy = [...images];
        switch(step) {
            case 'prev':
                arrCopy.unshift(arrCopy.pop() as string);
                break;
            case 'next':
                arrCopy.push(arrCopy.shift() as string);
                break;
            default:
        }
        setImages(arrCopy);
        setDisabled(false);
    }

    return (
        <div className="w-[90%] ml-[12.5%] mt-4 flex gap-4">
            <div className="w-[25%] h-auto">
                <img id="col-img-now" className="rounded-xl w-full h-full object-cover"
                     src={process.env.NEXT_PUBLIC_BASE_URL + gallery[0].url} alt={gallery[0].alternativeText}/>
            </div>
            <div className="w-[75%] flex flex-col items-end bg-[#f0f8ff] relative z-10">
                <div className="flex gap-2">
                    <img id="first-img" className="rounded-xl w-[30%] h-[400px] object-cover"
                         src={process.env.NEXT_PUBLIC_BASE_URL + gallery[1].url} alt={gallery[1].alternativeText}/>
                    <img id="second-img" className="rounded-xl w-[30%] h-[400px] object-cover"
                         src={process.env.NEXT_PUBLIC_BASE_URL + gallery[2].url} alt={gallery[2].alternativeText}/>
                    <img id="third-img" className="rounded-xl w-[30%] h-[400px] object-cover"
                         src={process.env.NEXT_PUBLIC_BASE_URL + gallery[3].url} alt={gallery[3].alternativeText}/>
                    <img id="fourth-img" className="rounded-l-xl w-[10%] h-[400px] object-cover"
                         src={process.env.NEXT_PUBLIC_BASE_URL + gallery[4].url} alt={gallery[4].alternativeText}/>
                </div>
                <div
                    className="w-[95%] pt-12 pb-8 pl-4 pr-[calc(20%+(0.25rem*8))] flex items-center gap-12 bg-[#f0f8ff] relative z-10">
                    <button type="button"
                    disabled={disabled} onClick={() => slide('prev')} className="cursor-pointer p-3 flex items-center justify-center w-12 h-12 border-1 border-orange-800 text-orange-800 rounded-xl font-bold text-2xl">
                        &lt;
                </button>
                <div>
                    <h2 className="font-bold text-3xl">Le storie del territorio</h2>
                    <p className="mt-4">
                        {description}
                    </p>
                    <div className="w-full text-right mt-8">
                        <Link href="/stories" className="font-bold underline relative">
                            <AnimatedHoverButton content="Vai alle Storie del Territorio"/>
                        </Link>
                    </div>
                </div>
                    <button type="button" disabled={disabled} onClick={() => slide('next')}
                            className="cursor-pointer p-3 flex items-center justify-center w-12 h-12 border-1 border-orange-800 text-orange-800 rounded-xl font-bold text-2xl">
                    &gt;
            </button>
        </div>
</div>
</div>
)
}