'use client';
import Image from "next/image"
import { Paragraph } from "@/components/Paragraph"
import Logo from "@/assets/img/img-logo-GS.png"
import Image00 from "@/assets/img/image-detail-GS00.png"
import Image01 from "@/assets/img/image-detail-GS01.png"
import Image02 from "@/assets/img/image-detail-GS02.png"
import Image03 from "@/assets/img/image-detail-GS03.png"
// import Image04 from "@/assets/img/image-detail-GS04.png"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Gestreon() {
  return (
    <section className="container mt-20 mx-auto">
      <Image alt="" src={Logo} className="w-auto h-20" data-aos="fade-up" />
      <div data-aos="fade-up">
        <Paragraph
          classNames="mt-6"
          title="PROJECT BRIEF"
          content="Build a luxury and classy sales website, specializing in pre-owned luxury products such as leather goods, jewelry, watches and other luxury items.
          Targeting British, high-class customers who want to sell items that have not been used for a long time, and want to find a reputable and convenient place to sell their products."
        />
      </div>

      <div className="flex flex-col gap-12 mt-12">
        <Image alt="" src={Image00} data-aos="fade-up" />

        <div data-aos="fade-up">
          <Paragraph
            title="RESPONSIBILITIES"
            content="I will make a design base on key features include robust account and product management functionalities, secure payment options, and a reliable rating and feedback system to foster trust. With a focus on showcasing top products and renowned brands, the site should integrate social sharing and online support features. Emphasizing sleek design, modern fonts, and refined colors like black, white, gold, and platinum."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="col-span-6">
            <Image alt="" src={Image01} className="w-full h-full object-contain" />
          </div>
          <Paragraph
            classNames="col-span-4"
            title="Wireframe"
            content="Sketching and wireframing essential pages in the customer experience alongside the Product Owner. Providing a site map and user flow for buyers in a suitable manner."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <Paragraph
            classNames="col-span-4"
            title="How it work?"
            content="For users, buyers, and sellers, it will be necessary to position various types of items as well as diverse branding. Users will easily locate products with a variety of filters. With a click-by-click rule, users will feel smoother during the buying and selling process."
          />
          <div className="col-span-6">
            <Image alt="" src={Image02} className="w-full h-full object-contain" />
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="col-span-6">
            <Image alt="" src={Image03} className="w-full h-full object-contain" />
          </div>
          <Paragraph
            classNames="col-span-4"
            title="Brand saying - Tone of Voice - Show up"
            content="
            Gestreon is a diverse and upscale e-commerce platform where individuals can engage in peer-to-peer (P2P) transactions for high-end items. With a mission to elevate brand identity and promote diversity, Gestreon provides a space for individuals to trade directly with each other on a variety of high-end products, from luxury leather goods to fine jewelry and premium watches. By honoring brand recognition and sophistication, Gestreon not only cultivates a trustworthy buying and selling community but also advocates for diversity in ownership and transactions of luxury goods. Gestreon's diversity lies not only in offering unique and luxurious products but also in creating a safe and reliable trading environment where people can conduct transactions directly and conveniently.
            "
          />
        </div>

      </div>

    </section>
  )
}