import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";

const Links = async() => {
    const client = createClient();
    const navegacion = await client.getSingle("header")
    const background = navegacion.data.background
  return (
    <div style={{backgroundColor:background}} className="flex justify-center h-16 gap-4 items-center">
                {navegacion.data.navigation.map(({ link, label }) => (
                    <li className="" key={label}>
                        <PrismicNextLink field={link}  >{label} </PrismicNextLink>
                    </li>
                ))}
            </div>
  )
}

export default Links
