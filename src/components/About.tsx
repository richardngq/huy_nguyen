import Image from "next/image"
import img from '/public/image/image.png'
import { TypeAnimation } from "react-type-animation"
interface IAbout {
  classNames?: string
}

export default function About<IAbout>({ classNames = '' }) {
  const bio = [
    {
      Username: `Huy Nguyen`,
      Label: `Product Designer`,
      Description: `Hi, I am a Product Designer and UI/UX Designer from IPFS - Fx Dex in Vietnam.`,
    }
  ]
  return (
    <div className={`relative w-full flex flex-col md:flex-row items-start md:items-center gap-6 z-20 ${classNames}`} data-aos="fade-up">
      {
        bio.map((item, index) => {
          return (
            <div key={index} className="w-full flex-1">
              {/* <TypeAnimation
                sequence={[
                  item.Username
                ]}
                wrapper="p"
                speed={50}
                className="text-7xl font-bold"
                preRenderFirstString={true}
              />
              <TypeAnimation
                sequence={[
                  1000,
                  item.Description
                ]}
                wrapper="p"
                speed={50}
                className="text-2xl leading-8 text-gray-50 mt-4 max-w-full"
              /> */}
              <p className="text-4xl md:text-7xl font-bold">{item.Username}</p>
              <p className="text-xl md:text-2xl font-light text-gray-50 mt-4 max-w-full">{item.Label}</p>
              <TypeAnimation
                sequence={[
                  1000,
                  item.Description
                ]}
                wrapper="p"
                speed={50}
                className="text-base leading-8 text-white mt-4 max-w-full"
              />
            </div>
          )
        })
      }
      <div className="hidden lg:flex absolute top-[-80%]" data-aos="fade-up" data-aos-delay={500}>
        {/* <div className="contained">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="monitor">
            <div className="camera o-x">
              <div className="camera o-y">
                <div className="camera o-z">
                  <div className="vr">
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                    <div className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}