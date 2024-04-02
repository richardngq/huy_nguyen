import Image from "next/image"
import img from '/public/image/image.png'
import { TypeAnimation } from "react-type-animation"
interface IAbout {
  classNames?: string
}

export default function About<IAbout>({ classNames = '' }) {
  const bio = [
    {
      Username: `Hi, I'm Huy Nguyen`,
      Description: `I'm a product designer based in Vietnam with experience in delivering end-to-end UX/UI design for software products. 
      I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.
      `,
    }
  ]
  return (
    <div className={`relative w-full flex flex-col md:flex-row items-start md:items-center gap-6 z-20 mt-20 ${classNames}`} data-aos="fade-up">
      {
        bio.map((item, index) => {
          return (
            <div key={index} className="w-full flex-1">
              <p className="text-4xl md:text-6xl font-bold">{item.Username}</p>
              <p className="text-lg leading-8 mt-4 max-w-full opacity-50">
                {item.Description}
              </p>
            </div>
          )
        })
      }
      <div className="hidden lg:flex absolute top-[-80%]" data-aos="fade-up" data-aos-delay={500}>
      </div>
    </div>
  )
}