import Image from "next/image"
import img from '/public/image/image.png'
interface IAbout {
  classNames?: string
}

export default function About<IAbout>({ classNames = '' }) {
  const bio = [
    {
      Username: `Richard Ng`,
      Label: `Product Designer && Front End Developer`,
      Description: `5 Year of experience about Fx Exchanges | Blockchain | Fintech | DeFi | GameFi | Medical.`,
    }
  ]
  return (
    <div className={`min-h-screen flex flex-col md:flex-row items-start md:items-center gap-6 ${classNames}`}>
      {
        bio.map((item, index) => {
          return (
            <div key={index} className="flex-1">
              <h1 className="name text-5xl" dangerouslySetInnerHTML={{ __html: `${item.Username}` }} />
              <div className="sub text-sm text-slate-400 font-semibold mt-4" dangerouslySetInnerHTML={{ __html: `${item.Label}` }} />
              <div className="description text-base leading-8 text-slate-500 mt-4 max-w-full" dangerouslySetInnerHTML={{ __html: `${item.Description}` }} />
            </div>
          )
        })
      }
      <div className="flex-1 flex justify-center items-center">
        {/* <Image src={img} alt="" priority /> */}
      </div>
    </div>
  )
}