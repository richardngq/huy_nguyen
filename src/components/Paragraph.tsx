import { FC } from "react";
interface ITypes {
  title?: string
  content?: any
  classNames?: string
}
export const Paragraph: FC<ITypes> = ({ title, content, classNames = '' }) => {
  return (
    <div className={`flex flex-col gap-2 ${classNames}`}>
      <div className="font-bold">{title}</div>
      {
        content && <div className="text-sm font-thin leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
      }
    </div>
  )
}