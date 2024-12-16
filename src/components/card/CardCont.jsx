import { createClient } from "@/prismicio"
import { PrismicNextImage } from "@prismicio/next";
import Card from "./Card";

const CardCont = async () => {
    const client = createClient()
    const header = await client.getSingle("header")
    return (
        <div className="w-full flex gap-4 flex-wrap justify-center bg-purple-300">
            {header.data.imagenes.map(({ foto, index }) => (
                <Card >
                    <PrismicNextImage key={index} className="w-full object-cover" field={foto} alt="" />
                </Card>
            ))}
        </div>
    )
}

export default CardCont