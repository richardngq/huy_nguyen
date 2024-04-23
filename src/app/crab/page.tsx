'use client';
import imageURL0 from '@/assets/image/image-detail-crab1-0.png'
import imageURL1 from '@/assets/image/image-detail-crab1-1.png'
import imageURL2 from '@/assets/image/image-detail-crab1-2.png'
import imageURL3 from '@/assets/image/image-detail-crab1-3.png'
import imageURL4 from '@/assets/image/image-detail-crab1-4.png'
import imageURL5 from '@/assets/image/image-detail-crab1-5.png'
import imageURL6 from '@/assets/image/image-detail-crab1-6.png'

import ImageGridSM from '@/assets/img/img-grid-sm.png';
import ImageGridGS from '@/assets/image/image-mockup-gs.png';
import ImageGridLogoSM from '@/assets/image/img-logo-SM.png';
import ImageGridLogoGS from '@/assets/image/img-logo-GSb.png';

import LottieJson from '@/assets/lottie/Crabada#3.json'
import Lottie from 'lottie-react'

import Image from 'next/image'
import Link from 'next/link'
import PlayVideo from '@/components/Video';

export default function IPFS() {

  const dataGrid = [
    {
      logo: ImageGridLogoGS,
      image: ImageGridGS,
      url: '/gs',
    },
    {
      logo: ImageGridLogoSM,
      image: ImageGridSM,
      url: '/sm',
    },
  ]

  const handleClick = (url?: any) => {
    window.location.replace(`./${url}`)
  }

  return (
    <section>
      <div className="hero h-[400px] card CRAB overflow-hidden">
        <Image src={imageURL0} alt='' />
      </div>

      <div className="overview py-10" data-aos="fade-up">
        <div className="container mx-auto">
          <h1 className='text-black text-4xl font-bold'>Crabada</h1>
          <div className='uppercase opacity-80 font-semibold mt-10'>Overview</div>
          <p className='text-base opacity-75 mt-4'>
            A Game-Fi title inspired by oceans and seas, taking the lead on the Avalanche platform in 2021. We have an entire ecosystem for our brainchild including: Game-Fi Landing Page, Marketplace , Application Game on multi-platform, Liquidity System and 1 Subnet on Avalanche system
          </p>
          <Link className='bg-[#515b87] text-white hover:opacity-50 w-fit block py-3 px-6 mt-6 rounded-xl cursor-pointer hover:scale-105' href={`https://www.behance.net/gallery/168289687/Crabada-NFT-Marketplace-Game-Fi`} target="_blank">
            Go to Behance
          </Link>
        </div>
      </div>


      <div className="role py-10 bg-[#eeeeee] group" data-aos="fade-up">
        <div className="container mx-auto">
          <div className='uppercase opacity-80 font-semibold mx-auto lg:text-center'>I am a Product Designer and UI Developer for <span className='group-hover:bg-blue-200'>Crabada</span></div>
          <p className='text-base opacity-75 mt-4'>
            I joined the project as a UI/UX Designer and also took on the responsibility of UI Developer at a time when the startup was just starting to brainstorm product ideas, design, and build it. In this article, I will discuss a Case Study for user management of their Crabs entering and exiting the game, as well as asset system partitioning.
          </p>
          <p className='text-base opacity-75 mt-4'>
            <b>This feature is essential for allowing users to interact with their items in both the Game Application and the wider Web3 ecosystem.</b>
          </p>
        </div>


      </div>

      <div className="scope py-10" data-aos="fade-up">
        <div className="container mx-auto">
          <div className='uppercase opacity-80 font-semibold mx-auto'>Define</div>
          <p className='text-base opacity-75 mt-4'>
            We need to help users bring their NFTs (Crabs, Items, Tokens, Assets) into the Game Application. This allows players to use their purchased NFTs to explore the game and its experiences. At the same time, while playing, players will earn valuable rewards and tokens that they can withdraw to their Web3 wallets for real-world profit.
          </p>
          <PlayVideo video={`./assets/video/crabadaM0.webm`} loop={false} classNames='w-full lg:w-2/3 mt-4' />
        </div>
      </div>

      <div className="insight py-10 bg-[#eeeeee]" data-aos="fade-up">
        <div className="container mx-auto">
          <div className='uppercase opacity-80 font-semibold mx-auto'>Wireframing</div>
          <p className='text-base opacity-75 mt-4'>
            Comprehensive NFT Management and User-Friendly Interface<br />
            We are committed to providing a transparent and user-friendly experience for NFT management, ensuring that players have a clear understanding of how their NFTs will be utilized within the game. This encompasses:
          </p>
          <p className='text-base opacity-75 mt-4'>
            Clear NFT Flow:
          </p>
          <ul className='text-base opacity-75 mt-4 ms-4 list-disc list-outside'>
            <li className='group'>We provide clear and concise information about the entire NFT flow, from depositing NFTs into the Game Application to withdrawing earned rewards.</li>
            <li className='group'>This transparency empowers players to make informed decisions about their NFTs and navigate the game with ease.</li>
          </ul>
          <Image src={imageURL1} alt="" className='w-auto h-10 mt-4' data-aos="fade-up" data-aos-delay={400} />

          <p className='text-base opacity-75 mt-8' data-aos="fade-up">
            Efficient NFT Search and Filtering:
          </p>
          <ul className='text-base opacity-75 mt-4 ms-4 list-disc list-outside'>
            <li className='group'>Recognizing the potential for a large number of Crabs, we implement robust search and filtering functionalities.</li>
            <li className='group'>Players can effortlessly search for and filter their NFTs based on various properties, such as species, attributes, and rarity levels.</li>
            <li className='group'>This efficient system enables players to quickly locate the NFTs they need for specific gameplay purposes.</li>
          </ul>
          <Image src={imageURL2} alt="" className='w-auto h-16 mt-4' data-aos="fade-up" data-aos-delay={400} />

          <p className='text-base opacity-75 mt-8' data-aos="fade-up">
            Multiple Select for Effortless NFT Management:
          </p>
          <ul className='text-base opacity-75 mt-4 ms-4 list-disc list-outside'>
            <li className='group'>We understand that players may want to manage multiple Crabs simultaneously.</li>
            <li className='group'>To streamline this process, we introduce a multiple select feature.</li>
            <li className='group'>Players can simply select multiple Crabs and perform actions on them in bulk, such as depositing, withdrawing, or transferring.</li>
            <li className='group'>This feature saves time and enhances the overall user experience.</li>
          </ul>
          <PlayVideo video={`./assets/video/crabada.webm`} loop={false} classNames='w-full lg:w-2/3 mt-4' />

          <p className='text-base opacity-75 mt-4'>
            In essence, our NFT management system is designed to provide players with a clear, efficient, and user-friendly experience, allowing them to seamlessly manage their NFTs and fully immerse themselves in the game.
          </p>
        </div>
      </div>

      <div className="problem py-10" data-aos="fade-up">
        <div className="container mx-auto">
          <div className='uppercase opacity-80 font-semibold mx-auto'>Design</div>
          <p className='text-base opacity-75 mt-4'>
            Our NFT management system empowers users to transfer NFTs between the Game Application and their Web3 wallets seamlessly, catering to their diverse needs and preferences. Users can select the specific categories of NFTs they wish to transfer, ensuring a streamlined and organized transfer process.
          </p>

          <p className='text-base opacity-75 mt-4'>
            <b>Crab Category Transfer:</b>
          </p>
          <ul className='text-base opacity-75 mt-2 ms-4 list-disc list-outside'>
            <li>For the Crab category, we employ a standard transfer mechanism, allowing users to effortlessly transfer individual Crabs or groups of Crabs.</li>
            <li>This straightforward approach aligns with the nature of Crabs as distinct and identifiable NFTs.</li>
          </ul>
          <Image src={imageURL3} alt="" className='w-auto mt-4' data-aos="fade-up" />

          <p className='text-base opacity-75 mt-8' data-aos="fade-up">
            <b>Equipment Category Transfer:</b>
          </p>
          <ul className='text-base opacity-75 mt-2 ms-4 list-disc list-outside'>
            <li>Similar to Crabs, Equipment NFTs can be transferred individually or in groups, enabling users to manage their equipment collection effectively.</li>
            <li>This method aligns with the typical usage of equipment items, where players often transfer multiple pieces of equipment at once.</li>
          </ul>
          <Image src={imageURL4} alt="" className='w-auto mt-4' data-aos="fade-up" />

          <p className='text-base opacity-75 mt-8' data-aos="fade-up">
            <b>Material and Chest Category Transfer:</b>
          </p>
          <ul className='text-base opacity-75 mt-2 ms-4 list-disc list-outside'>
            <li>Recognizing the unique characteristics of Materials and Chests, we implement a quantity-based transfer mechanism for these categories.</li>
            <li>This approach accounts for the fungible nature of Materials and the varied contents of Chests.</li>
            <li>Users can specify the desired transfer quantity for Materials, ensuring precise management of their resources.</li>
            <li>For Chests, users can transfer individual chests or multiple chests simultaneously.</li>
          </ul>
          <Image src={imageURL5} alt="" className='w-auto mt-4' data-aos="fade-up" />

          <p className='text-base opacity-75 mt-8' data-aos="fade-up">
            <b>Chest Category Transfer:</b>
          </p>
          <ul className='text-base opacity-75 mt-2 ms-4 list-disc list-outside'>
            <li>Users can transfer individual chests or multiple chests simultaneously, catering to their specific needs.</li>
            <li>This method aligns with the typical usage of Chests, where players often open multiple chests at once to discover their contents.</li>
          </ul>
          <Image src={imageURL6} alt="" className='w-auto mt-4' data-aos="fade-up" />

          <p className='text-base opacity-75 mt-8' data-aos="fade-up">
            <b>In essence, our NFT transfer system provides users with a flexible and intuitive approach to managing their NFTs, allowing them to seamlessly transfer items between the Game Application and the Web3 based on their specific needs and the unique characteristics of each NFT category</b>
          </p>
        </div>
      </div>
    </section>
  )
}