'use client'
import LocalMap from "@/app/_components/LocalMap";

export default function Routes() {

    return(
        <section
            className="w-[90vw] md:w-[80vw] mx-auto mt-[79px] px-4 md:px-0 pt-[69px] mb-[80px] flex flex-col md:flex-row gap-16 fadein-slower">
            <div className="flex flex-col w-full">
                <h1 className="font-bold text-4xl mt-8">Pianifica il tuo viaggio</h1>
                <h2 className="font-bold text-2xl mt-16 mb-8">In auto</h2>
                <LocalMap homepage={false} autoFilter={100} fullPage={true}/>
                <div className="w-full text-right mt-8">
                    <a href="https://www.google.com/maps/dir//Cremona,+26100+CR/@45.6574975,9.9627623,7z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4780fe6d3c71fe83:0x307737e7e74bdaf5!2m2!1d10.0227044!2d45.1333135?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                       className="cursor-pointer mt-4 w-full text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3"
                       target="_blank"
                    >Ottieni indicazioni &gt;</a>
                </div>
            </div>
        </section>
    )
}