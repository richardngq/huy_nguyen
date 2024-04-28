'use client';
import Image from "next/image"
import { Paragraph } from "@/components/Paragraph"
import Logo from "@/assets/backers/dark/img-logo-03.png"
import Image00 from "@/assets/img/image-detail-CR00.png"
import Image01 from "@/assets/img/image-detail-CR01.png"
import Image02 from "@/assets/img/image-detail-CR02.png"
import Image03 from "@/assets/img/image-detail-CR03.png"

export default function Crabada() {
  return (
    <section className="container mt-20 mx-auto">
      <Image alt="" src={Logo} className="w-auto h-20" data-aos="fade-up" />
      <div data-aos="fade-up">
        <Paragraph
          classNames="mt-6"
          title="PROJECT BRIEF"
          content="Crabada is an idle game available on most native platforms. Earn in-game rewards in exciting, Battle gameplay as you send your Crabada NFTs to Battle for riches and glory. With its diverse ecosystem and simplified game mechanics, Crabada is an exciting and fun Play-and-Earn idle turn-based RPG game that offers activities such as Mining, Looting, and Breeding. Players get to choose their strongest three crabs to take with them into battle. Each with unique strengths and abilities which are inherited through the breeding process."
        />
      </div>

      <div className="flex flex-col gap-12 mt-12">
        <Image alt="" src={Image00} data-aos="fade-up" />

        <div data-aos="fade-up">
          <Paragraph
            title="RESPONSIBILITIES"
            content="In my role as a product designer for the Crabada ecosystem, my responsibilities entail ensuring that every component of the product, from the landing page to the marketplace, idle game, bridge assets, and pool, is designed and implemented optimally. Firstly, I would focus on designing the landing page, ensuring it is not only visually appealing but also informative and engaging to attract users. Next, for the marketplace, I would create a sleek and user-friendly interface, ensuring users can buy, sell, and trade NFTs conveniently. Meanwhile, designing the idle game would involve creating an entertaining and addictive experience, combining interactivity with replay value. Lastly, designing features like bridge assets and pool would establish a reliable and flexible infrastructure, enabling users to easily move assets and participate in decentralized finance activities. It's crucial that all components of the Crabada ecosystem work harmoniously and seamlessly, providing users with a comprehensive and enjoyable experience."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="col-span-6">
            <Image alt="" src={Image01} className="w-full h-full object-contain" />
          </div>
          <Paragraph
            classNames="col-span-4"
            title="Design System"
            content="The importance of a Design System in the Crabada ecosystem lies in its ability to ensure consistency, efficiency, and scalability across all its components.
            <br /><br />
            In summary, a well-implemented Design System is essential for maintaining consistency, efficiency, scalability, collaboration, and accessibility within the Crabada ecosystem. It serves as a foundational framework that supports the development and evolution of products while reinforcing the brand identity and delivering a superior user experience."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <Paragraph
            classNames="col-span-4"
            title="User Flow - Wireframe"
            content="
            Creating user flows and wireframes for the Crabada ecosystem brings significant benefits. 
            The strength of this process lies in its ability to produce a logically structured and easily understandable design, thereby shaping the user experience clearly and effectively. Identifying user actions and interactions through user flows helps establish a natural and logical flow in the user experience, from login to performing transactions and interactions within the ecosystem.
            <br /><br />
            Additionally, creating wireframes transforms abstract ideas into specific and practical interface frames, helping the development and design team understand how the product will function and interact with users. In summary, creating user flows and wireframes is a crucial and essential step in developing the Crabada ecosystem, ensuring that the product is designed to meet real user needs and deliver the best possible experience.
            "
          />
          <div className="col-span-6">
            <Image alt="" src={Image02} className="w-full h-full object-contain" />
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-6">
          <Paragraph
            title="Design thinking - Design process"
            content="
            <b>Objectives: </b>
            Clearly define the goals and objectives of the DeFi game marketplace, such as providing a platform for buying, selling, and trading NFTs and other in-game assets.
            <br />
            <b>User experience:</b>
            The DeFi game marketplace should have an intuitive and user-friendly interface, with clear navigation and an aesthetically pleasing design.
            <br />
            <b>Game integration:</b>
            The DeFi game marketplace should integrate with various games.
            <br />
            <b>NFT marketplace:</b>
            The DeFi game marketplace should have a robust NFT marketplace, allowing users to easily buy, sell, and trade NFTs.
            <br />
            <b>Trading functionality:</b>
            The DeFi game marketplace should have a trading platform with robust trading functionality, including real-time pricing information and the ability to place orders.
            <br />
            <b>Payment system integration:</b>
            The DeFi game marketplace should be integrated with a secure payment system, allowing users to make transactions and trade with ease.
            <br />
            <b>Analytics:</b>
            The DeFi game marketplace should have robust analytics capabilities, allowing you to track user behavior and make data-driven decisions about how to improve the platform over time.
            "
          />
          <div>
            <Image alt="" src={Image03} className="w-full h-full object-contain" />
          </div>
        </div>

      </div>

    </section>
  )
}