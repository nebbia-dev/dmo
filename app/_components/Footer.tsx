import Link from "next/link";

export default function Footer({links, contacts} : {links:any, contacts:any}) {
    return (
        <footer id="footer" className="min-h-[40vh] bg-corpo-blue w-full flex gap-4 py-16 text-white">
            <div className="w-[80vw] flex flex-col lg:flex-row gap-20 items-center lg:items-start mx-auto">
                <div className="w-[50vw] lg:w-[20vw] flex flex-col items-center justify-center gap-8">
                    <Link href='/' className="w-[90%]">
                        <img
                            src='/logo.webp'
                            alt="Logo di Visit Cremona"
                            width={500}
                            height={500}
                        />
                    </Link>
                    <div className="flex gap-8 w-full items-center justify-center">
                        <img
                            src='/icons/InLombardia_white.png'
                            alt="Logo di InLombardia"
                            className="w-[80px]"
                            width={500}
                            height={500}
                        />

                        <img
                            src='/icons/E015-Logo_white.png'
                            alt="Logo di E015"
                            className="w-[80px]"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-[35vw] text-center lg:text-left">
                    <p className="font-semibold mb-4">Contatti</p>
                    <p>Sede: Piazza del Comune, 8 - 26100 CREMONA</p>
                    <p><a className="hover:text-corpo-orange"
                          href="tel:+390372407081">Tel.: + 39 0372 407081</a></p>
                    <p>REA: TN-186218 | P.IVA 01902590221</p>
                    <p>Cap. Soc. € 141.250,00</p>
                    <p>PEC: protocollo@comunedicremona.legalmail.it</p>
                    <div className="mt-3 mb-2 flex gap-4 justify-center lg:justify-start">
                        Seguici sui social:
                        <ul className="flex gap-4 items-center">
                            <li>
                                <a aria-label="Vai al profilo Facebook di Visit Cremona" target="_blank"
                                   rel="noopener noreferrer" href='https://www.facebook.com/share/17DFpcJBEK/?mibextid=wwXIfr'>
                                    <img aria-hidden={true} src="/icons/hugeicons_facebook-02.webp" alt="facebook logo"
                                         width={24}
                                         height={24}/>
                                </a>
                            </li>
                            <li>
                                <a aria-label="Vai al profilo Instagram di Visit Cremona" target="_blank"
                                   rel="noopener noreferrer" href='https://www.instagram.com/visitcremona_official/'>
                                    <img aria-hidden={true} src="/icons/logo-instagram.webp" alt="instagram logo"
                                         width={24}
                                         height={24}/>
                                </a>
                            </li>
                            <li>
                                <a aria-label="Vai al profilo Youtube di Visit Cremona" target="_blank"
                                       rel="noopener noreferrer" href='https://www.youtube.com/@VisitCremonaofficial'>
                                        <img aria-hidden={true} src="/icons/logo-youtube.svg" alt="instagram logo"
                                             width={24}
                                             height={24}/>
                                    </a>
                                </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="w-full lg:w-[45vw] flex justify-center lg:justify-start gap-6 underline text-corpo-orange">
                    <ul className="flex flex-col gap-6 text-center lg:text-left">
                        <li><a href="/Visit Cremona_Brand Guide_V6.pdf" download target="_blank"
                               rel="noopener noreferrer">Guida del brand</a></li>
                        <li><a rel="noopener noreferrer" target="_blank"
                            href='https://form.agid.gov.it/c_d150/visitcremona.com/dichiarazione'>Dichiarazione di accessibilità</a>
                        </li>
                        <li><a target="_blank" rel="noopener noreferrer" href='https://trasparenza.comune.cremona.it/'>
                            Amministrazione trasparente</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href='https://dati.turismocremona.it/'>Osservatorio
                            Turistico Cremonese</a></li>
                    </ul>
                    <ul className="flex flex-col gap-6 text-center lg:text-left">
                        <li><Link
                            href='/who'>Chi siamo</Link>
                        </li>
                        <li><Link href="/partner">Partner</Link></li>
                        <li><Link
                            href='/contact'>Richiesta di informazioni</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}