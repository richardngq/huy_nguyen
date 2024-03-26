'use client';
import Image from "next/image"
import { Paragraph } from "@/components/Paragraph"
import Logo from "@/assets/img/img-logo-SM.png"
import Image00 from "@/assets/img/image-detail-SM00.png"
import Image01 from "@/assets/img/image-detail-SM01.png"
import Image02 from "@/assets/img/image-detail-SM02.png"
import Image03 from "@/assets/img/image-detail-SM03.png"
import Image04 from "@/assets/img/image-detail-SM04.png"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function SkyMavis() {
  return (
    <section className="container mt-20 mx-auto">
      <Image alt="" src={Logo} className="w-auto h-20" data-aos="fade-up" />
      <div data-aos="fade-up">
        <Paragraph
          classNames="mt-6"
          title="PROJECT BRIEF"
          content="The objective is to establish an internal application for employee compensation and facilitate the transfer of multiple assets between entities based on assets. As a busy user with external commitments, a mobile phone is considered a closely-held item, allowing users to diversify asset conversions within their community anytime, anywhere on their phones. The application is developed based on blockchain and cryptocurrency platforms."
        />
      </div>

      <div className="flex flex-col gap-12 mt-12">
        <Image alt="" src={Image00} data-aos="fade-up" />

        <div data-aos="fade-up">
          <Paragraph
            title="RESPONSIBILITIES"
            content="My role as the product designer is to create a user-friendly internal application for employee compensation and asset transfer. Understanding that our users are busy individuals, I prioritize mobile optimization, ensuring they can conveniently manage asset conversions anytime, anywhere. Leveraging blockchain and cryptocurrency platforms, the application guarantees security and transparency in transfers. Through collaboration and iterative design, I aim to deliver an intuitive and efficient solution that meets our users' needs."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="col-span-6">
            <Image alt="" src={Image01} className="w-full h-full object-contain" />
          </div>
          <Paragraph
            classNames="col-span-4"
            title="What is first?"
            content="Building a comprehensive user flow before proceeding to wireframing and designing is essential to map out the user journey and evaluate the coherence during the product requirement research phase."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <Paragraph
            classNames="col-span-4"
            title="How it work?"
            content="The user will quickly have multiple options on one screen, with interactions between screens enhancing interaction quality when performing tasks across different modes for conversion. I hope this isn't just an application for transferring various types of assets, but also easily accessible to users, even when the recipient is one-on-one with the user."
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
            title="Security and accessibility"
            content="As a designer with extensive experience in fintech and blockchain, I understand the repercussions of not being transparent about the security process of the application. Expanded users will be provided with personal encryption keys, generated from the database of the human resources management system. This detailed approach ensures that individuals with permission are provided with access information as needed, and transparent money tracking based on their account. To enhance security and interaction, biometric certification is used when users access the system with predetermined passwords. In cases of excessive incorrect information:
            <br/><br/>
            <p>For biometric authentication, users will be redirected to the login screen to proceed with manual login.</p>
            <br />
            <p>For password authentication, users will need to contact the admin to address issues with their personal account.</p>
            </ul>
            "
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-6">
          <Paragraph
            title="Impact and End-User"
            content="
            Multi-asset sending feature simplifies asset management for users. With just a few clicks, users can securely send multiple types of assets to their desired recipients, streamlining the process and enhancing convenience. This feature not only saves time but also ensures efficient and hassle-free transactions, contributing to a seamless user experience within the blockchain ecosystem.
            <br /><br />
            Furthermore, Scatter contributes to the broader adoption of blockchain technology by providing a user-friendly gateway for individuals to explore the potential of decentralized finance (DeFi) and non-fungible tokens (NFTs). Its support for various blockchains and dApp ecosystems makes it accessible to a wide range of users, regardless of their technical expertise.
            <br /><br />
            Overall, Scatter's impact on end-users is undeniable, offering a secure, user-friendly, and accessible interface for interacting with blockchain-based applications and digital assets. As blockchain technology continues to evolve, Scatter remains at the forefront, driving innovation and empowering users to participate in the decentralized economy.
            "
          />
          <div className="relative">
            <Image alt="" src={Image04} className="w-full h-full object-contain" />
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-6">
          <Paragraph
            title="Special thanks to"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <div className="inline-flex gap-3 py-3 ps-3 pe-4 bg-gray-200 border border-gray-100 rounded-xl w-fit">
              <div className="avatar relative w-16 h-16 overflow-hidden rounded-full">
                <Image src={`https://media.licdn.com/dms/image/C5603AQFAKHRTIWCqCg/profile-displayphoto-shrink_400_400/0/1565670656772?e=1717027200&v=beta&t=_rPeVkPQZn4dUJ92lopicJqoFesYQQXxBGefJBPqRMo`} alt="" className="w-full h-full object-contain" fill />
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Cong Nguyen</p>
                <p className="font-thin text-sm">Senior Front End</p>
                <p className="text-xs leading-5 opacity-50">at Sky Mavis</p>
              </div>
            </div>

            <div className="inline-flex gap-3 py-3 ps-3 pe-4 bg-gray-200 border border-gray-100 rounded-xl w-fit">
              <div className="avatar relative w-16 h-16 flex items-center justify-center overflow-hidden bg-black rounded-full">
                <Icon icon="solar:user-bold" fontSize={48} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Leoh Hiep</p>
                <p className="font-thin text-sm">Designer Lead</p>
                <p className="text-xs leading-5 opacity-50">at Sky Mavis</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}