import LinkCard from "@/app/_components/LinkCard";

export default async function Press() {

    let content;

    try {
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/area-presses/',
            { next: { revalidate: 1000 }});
        content = await data.json();

    } catch(error) {
        console.log(error);
    }

    return (
        <section
            className="w-[95vw] md:w-[80vw] mx-auto mt-[79px] px-4 md:px-0 pt-[69px] mb-[80px] flex flex-col md:flex-row gap-16 fadein-slower">
            <div className="flex flex-col w-full">
                <h1 className="font-bold text-4xl mt-8 mb-16">Area stampa</h1>
                <div className="flex gap-4 flex-wrap">
                    {content.data.map((el:any) => {
                        return(
                            <LinkCard
                                key={el.nome}
                                title={el.nome}
                                url={el.download}
                                description={el.descrizione}
                                download={true}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}