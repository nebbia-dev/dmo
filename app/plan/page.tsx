import InfoCard from "@/app/_components/InfoCard";
import Link from "next/link";
import Markdown from "react-markdown";
import Routes from "@/app/_components/Routes";

export default async function Plan() {

    let content, contentInfo;

    try {
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/plan/',
            { next: { revalidate: 1000 }});
        let dataInfo = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/infopoints/',
            { next: { revalidate: 1000 }});
        content = await data.json();
        contentInfo = await dataInfo.json();

    } catch(error) {
        console.log(error);
    }

    return(
        <>
            <Routes/>

            <section
                className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-0 pt-12 pb-20 fadein-slower">
                <h2 className="font-bold text-2xl mb-8">Con l'aereo</h2>
                <div className="markdown">
                    <Markdown>
                        {content.data.aereo}
                    </Markdown>
                </div>
            </section>

            <section
                className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-0 pt-8 pb-20 fadein-slower">
                <h2 className="font-bold text-2xl mb-8">Con l'autobus</h2>
                <div className="markdown">
                    <Markdown>
                        {content.data.bus}
                    </Markdown>
                </div>
            </section>

            <section
                className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-0 pt-8 pb-20 fadein-slower">
                <h2 className="font-bold text-2xl mb-8">Elenco infopoint</h2>
                <div className="flex gap-4 flex-wrap w-full">
                    {contentInfo.data.map((el:any) => {
                        return(
                            <InfoCard
                                key={el.nome}
                                name={el.nome}
                                address={el.indirizzo}
                                phone={el.telefono}
                                email={el.email}
                                url={el.link}
                            />
                        )
                    })}
                </div>
            </section>

            <section className="w-full bg-alt-blue text-white">
                <div className="flex flex-col w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-20 pb-20 md:pb-24">
                    <h2 className="font-bold text-3xl mb-8">Dove dormire</h2>

                    <div className="rounded-xl border border-white p-4 w-fit">
                        <p>Guarda tutte le infrastrutture
                            <Link href="/" className="font-bold text-corpo-orange underline ml-2">Clicca qui &gt;</Link>
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}