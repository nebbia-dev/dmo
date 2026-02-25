'use client'
import {useMemo} from "react";
import dynamic from "next/dynamic";
import {ComposerLocation} from "@/app/_types/types";

export default function LocalMap({homepage, autoFilter, fullPage, composers} : {homepage:boolean, autoFilter?:undefined|number, fullPage?:undefined|boolean, composers?:undefined|ComposerLocation[]}) {
    const ImportedMap = useMemo(() => dynamic(
        () => import('@/app/_components/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return <ImportedMap homepage={homepage} autoFilter={autoFilter} fullPage={fullPage} composers={composers}/>
}