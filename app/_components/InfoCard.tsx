export default function InfoCard({name, address, phone, email, children, url, hours} : {name:string, address:string, phone:string, email:string, children?:undefined|React.ReactNode, url?:string|undefined, hours?:string|undefined}) {
    return(
        <div className={`w-full md:w-[calc(33%-8px)] bg-white rounded-xl p-8 ${children ? 'h-[65vh]' : 'h-[372px]' } relative`}>
            <h4 className="font-bold text-2xl h-[64px] line-clamp-2">{name}</h4>
            <div className={`${children ? 'h-[70%] overflow-y-auto mt-4' : ''}`}>
                {children}
                <ul className="my-4">
                    <li className="overflow-x-auto w-full whitespace-nowrap mt-2">
                        <span className="font-semibold">Indirizzo:</span><br/>
                        {address}
                    </li>
                    <li className="overflow-x-auto w-full whitespace-nowrap mt-2">
                        <span className="font-semibold">Telefono:</span><br/>
                        {phone}
                    </li>
                    <li className="overflow-x-auto w-full mt-2">
                        <span className="font-semibold">Email:</span><br/>
                        <a href={`mailto:${email}`} className="underline">{email}</a>
                    </li>
                    {hours && <li className="overflow-x-auto w-full whitespace-nowrap mt-2">
                        <span className="font-semibold">Orari di apertura:</span><br/>
                        {name.includes("Soncino")
                            ? <a href="/orario-infopoint-1.pdf" download className="underline">{hours}</a>
                            : <span>{hours}</span>
                        }
                    </li>}
                </ul>
            </div>
            {url && <div className="w-full text-right absolute bottom-8 right-8">
                <a href={url} target="_blank"
                   className="text-sm cursor-pointer mt-4 w-full text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3">
                    Vail al sito &gt;
                </a>
            </div>}
        </div>
    )
}