import { ItemCase } from "@/components/ItemCase"
import { dataShows } from "@/resources/constants/dataDefine"

export default function Gestreon() {
  return (
    <div className="container mt-20 mx-auto">
      {
        dataShows.map((item, index) => {
          if (index == 1) {
            return (
              <ItemCase key={index} reverse={index % 2 !== 0 && true} imageLogo={item.imageLogo} imageOne={item.imageOne} imageTwo={item.imageTwo} subtitle={item.subtitle} biz={item.biz} checkpoints={item.checkpoints} />
            )
          }
        })
      }
    </div>
  )
}