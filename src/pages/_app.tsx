import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Vazirmatn} from "next/font/google";

const vazir = Vazirmatn({subsets: ['arabic']})

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${vazir.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}
