import { createClient } from "@/prismicio"
import { asHTML } from "@prismicio/client"
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next"
import Image from "next/image"
/* import { SliceZone } from "@prismicio/react" */
/* import { components } from ""; */

const AboutPage = async () => {
  const client = createClient()
  const about = await client.getSingle("about")
  
  return (
    <div className="w-full h-screen">
      <PrismicNextImage className="w-full" field={about.data.foto} />
        
        
    </div>
    







  )
}

export default AboutPage

{/* <div dangerouslySetInnerHTML={{__html:content}} > */ }
{/* <PrismicNextLink field={about.data.youtube} >YOUTUBE</PrismicNextLink> */ }