import { ItemCase } from "@/components/ItemCase"
import { dataShows } from "@/resources/constants/dataDefine"

export default function SkyMavis() {
  return (
    <div className="mt-20">
      {
        dataShows.map((item, index) => {
          if (index == 0) {
            return (
              <ItemCase key={index} reverse={index % 2 !== 0 && true} imageLogo={item.imageLogo} imageOne={item.imageOne} imageTwo={item.imageTwo} subtitle={item.subtitle} biz={item.biz} checkpoints={item.checkpoints} />
            )
          }
        })
      }
    </div>
  )
}