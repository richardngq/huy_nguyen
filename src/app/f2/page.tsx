'use client';
import Image from "next/image"
import { Paragraph } from "@/components/Paragraph"
import Logo from "@/assets/img/img-logo-F2.png"
import Image00 from "@/assets/img/image-detail-F200.png"
import Image01 from "@/assets/img/image-detail-F201.png"
import Image02 from "@/assets/img/image-detail-F202.png"
import Image03 from "@/assets/img/image-detail-F203.png"

export default function F2NFT() {
  return (
    <section className="container mt-20 mx-auto">
      <Image alt="" src={Logo} className="w-auto h-20" data-aos="fade-up" />
      <div data-aos="fade-up">
        <Paragraph
          classNames="mt-6"
          title="PROJECT BRIEF"
          content="We need to design and develop an integrated NFT Marketplace within the game to allow players to buy and sell unique and valuable NFTs. The Product Designer's role is to create a user-friendly interface that facilitates seamless NFT transactions. This includes designing a simple and engaging UI, streamlining the transaction process, providing visual enhancements to showcase the uniqueness of each NFT, integrating social interaction features, ensuring security, and conducting thorough testing and feedback collection to optimize the NFT trading experience over time. Our goal is to build a reliable and engaging NFT Marketplace, offering the best experience for players to trade valuable digital assets in the Fi game."
        />
      </div>

      <div className="flex flex-col gap-12 mt-12">
        <Image alt="" src={Image00} data-aos="fade-up" />

        <div data-aos="fade-up">
          <Paragraph
            title="RESPONSIBILITIES"
            content="Need to design and develop an integrated NFT Marketplace within the game to allow players to buy and sell unique and valuable NFTs (Non-Fungible Tokens). The role of the Product Designer is to create a visually intuitive and flexible experience for users during NFT transactions."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="col-span-6">
            <Image alt="" src={Image01} className="w-full h-full object-contain" />
          </div>
          <Paragraph
            classNames="col-span-4"
            title="Design System"
            content="As a UI/UX designer, the benefits of a design system are manifold. It provides a centralized source of truth for design elements, ensuring consistency and efficiency throughout the product development process. By establishing reusable components, patterns, and guidelines, a design system streamlines workflow, saves time, and promotes collaboration among designers and developers. It enhances brand identity by maintaining visual coherence and reinforces usability by standardizing user interactions. Ultimately, a design system empowers teams to deliver cohesive and user-centric experiences while reducing redundancy and minimizing errors."
          />
        </div>

        <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <Paragraph
            classNames="col-span-4"
            title="NFT - UX Case Study"
            content="
            Conduct user research to understand the target audience's needs, preferences, and pain points when trading NFTs.
            Analyze existing NFT marketplaces to identify common UX patterns, challenges, and areas for improvement.
            <br /><br />
            <b>Design and Prototyping:</b>
            Develop a user-friendly interface with intuitive navigation to facilitate easy access to the selling and sending functionalities.
            Create clear and visually appealing product listings for owned NFTs, including images, descriptions, and metadata.
            Implement a seamless authentication process, such as wallet integration, for users to access their NFT inventory securely.
            Design a streamlined workflow for initiating and completing transactions, including setting prices, specifying recipients, and confirming actions.
            Prototype interactive features, such as drag-and-drop functionality for adding NFTs to the marketplace or initiating transfers.
            <br /><br />
            <b>Testing and Iteration:</b>
            Conduct usability testing with representative users to evaluate the effectiveness and efficiency of the design.
            Gather feedback on the clarity of instructions, ease of navigation, and overall satisfaction with the selling and sending process.
            Iterate on the design based on user feedback, addressing any usability issues or pain points identified during testing.
            <br /><br />
            <b>Launch and Evaluation:</b>
            Roll out the updated UX design on the marketplace platform, ensuring seamless integration and compatibility across devices.
            Monitor user engagement and behavior post-launch to assess the impact of the redesigned selling and sending features.
            <br /><br />
            Gather user feedback through surveys, reviews, and analytics data to continue refining the UX and addressing user needs over time.
            "
          />
          <div className="col-span-6">
            <Image alt="" src={Image02} className="w-full h-full object-contain" />
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-6">
          <Paragraph
            title="Happy case"
            content="
            In an ideal scenario on a game-fi marketplace, users would experience a seamless and joyful buying and selling process. They would discover a unique and valuable NFT, execute the transaction swiftly and effortlessly. The success of this transaction would leave them feeling proud and excited to engage further in the game-fi community, creating a positive experience and memorable moments.
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