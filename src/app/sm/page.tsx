'use client';
import Image from "next/image"
import imageURL0 from "@/assets/image/image-detail-sm-0.png"
import imageURL1 from "@/assets/image/image-detail-sm-1.png"
import imageURL2 from "@/assets/image/image-detail-sm-2.png"
import imageURL3 from "@/assets/image/image-detail-sm-3.png"
import imageURL4 from "@/assets/image/image-detail-sm-4.png"

import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Button } from "@/components/common/Button";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SkyMavis() {

  return (
    <>
      <section>
        <div className="hero h-[400px] card SM overflow-hidden" data-aos='fade'>
          <Image src={imageURL0} alt='' />
        </div>
        <TracingBeam className="px-6">
          <div>
            <div className="overview py-14" data-aos="fade-up">
              <div className="container mx-auto">
                <h1 className='text-5xl font-bold'>Sky Mavis</h1>
                <div className='uppercase opacity-80 font-semibold mt-10'>Overview</div>
                <p className='text-base opacity-75 mt-4'>
                  The objective is to establish an internal application for employee compensation and facilitate the transfer of multiple assets between entities based on assets. As a busy user with external commitments, a mobile phone is considered a closely-held item, allowing users to diversify asset conversions within their community anytime, anywhere on their phones. The application is developed based on blockchain and cryptocurrency platforms.
                </p>
                <Button title="Explore Now" link={`https://scatter.roninchain.com/`} />
              </div>
            </div>

            <div className="role py-14 bg-[#17171e] group" data-aos="fade-up">
              <div className="container mx-auto">
                <div className='uppercase opacity-100 font-semibold mx-auto lg:text-center'>I am a UI UX designer</div>
                <p className='text-base opacity-75 mt-4'>
                  As the product designer is to create a user-friendly internal application for employee compensation and asset transfer.
                </p>
                <p className='text-base opacity-75 mt-4'>
                  <b>Single-Flow Processing for Admin:</b> Sending Multiple Assets Tokens - Happy Case Scenario.
                </p>
                <p className='text-base opacity-75 mt-4'>
                  This document outlines the single-flow processing for admins when sending multiple assets tokens to users in a happy case scenario.
                </p>
              </div>
            </div>

            <div className="scope py-14" data-aos="fade-up">
              <div className="container mx-auto">
                <div className='uppercase opacity-100 font-semibold mx-auto'>Scope Of Work</div>
                <p className='text-base opacity-75 mt-4'>
                  Understanding that our users are busy individuals, I prioritize mobile optimization, ensuring they can conveniently manage asset conversions anytime, anywhere. Leveraging blockchain and cryptocurrency platforms, the application guarantees security and transparency in transfers. Through collaboration and iterative design, I aim to deliver an intuitive and efficient solution that meets our user&rsquo;s needs.
                </p>
              </div>
            </div>

            <div className="insight py-14 bg-[#17171e]" data-aos="fade-up">
              <div className="container mx-auto">
                <div className='uppercase opacity-100 font-semibold mx-auto'>Gathering insights</div>
                <p className='text-base opacity-75 mt-4 group'>
                  <b className="">User Flow for Admin:</b> Sending Multiple Assets Tokens
                </p>
                <p className='text-base opacity-75 mt-4'>
                  <b>Goal:</b> Clearly define the steps an admin takes to send multiple assets tokens to users in an efficient and user-friendly manner.
                </p>
                <div className='w-full h-fit mt-10 bg-[#17171e]'>
                  <TransformWrapper
                    initialScale={1}
                    initialPositionX={200}
                    initialPositionY={100}
                  >
                    {
                      (
                        { zoomIn = useControls, zoomOut = useControls, resetTransform = useControls }) => (
                        <div className="relative">
                          <div className="absolute top-0 right-0 inline-flex items-center gap-2 z-20">
                            <div className="py-2 px-4 rounded bg-black text-white text-xs cursor-pointer hover:bg-gray-800" onClick={() => zoomIn()}><Icon icon={`tabler:plus`} fontSize={16} /></div>
                            <div className="py-2 px-4 rounded bg-black text-white text-xs cursor-pointer hover:bg-gray-800" onClick={() => zoomOut()}><Icon icon={`tabler:minus`} fontSize={16} /></div>
                            <div className="py-2 px-4 rounded bg-black text-white text-xs cursor-pointer hover:bg-gray-800" onClick={() => resetTransform()}>Reset</div>
                          </div>

                          <TransformComponent>
                            <Image src={imageURL1} alt="" className='w-full' />
                          </TransformComponent>
                        </div>
                      )}
                  </TransformWrapper>
                </div>
              </div>
            </div>

            <div className="problem py-14" data-aos="fade-up">
              <div className="container mx-auto">
                <div className='uppercase opacity-100 font-semibold mx-auto'>Start with Lo-Fi</div>
                <div className="flex flex-col gap-6 lg:flex-row mt-4">
                  <div className="flex-1">
                    <p className='text-base opacity-75'>
                      The user will quickly have multiple options on one screen, with interactions between screens enhancing interaction quality when performing tasks across different modes for conversion. I hope this isn&rsquo;t just an application for transferring various types of assets, but also easily accessible to users, even when the recipient is one-on-one with the user.
                    </p>
                  </div>
                  <div className='flex-1 w-full h-fit'>
                    <Image src={imageURL2} alt="" className='w-full' />
                  </div>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row mt-20">
                  <div className="flex-1">
                    <p className='text-base opacity-75 mt-4'>
                      As a designer with extensive experience in fintech and blockchain, I understand the repercussions of not being transparent about the security process of the application. Expanded users will be provided with personal encryption keys, generated from the database of the human resources management system. This detailed approach ensures that individuals with permission are provided with access information as needed, and transparent money tracking based on their account. To enhance security and interaction, biometric certification is used when users access the system with predetermined passwords. In cases of excessive incorrect information:
                    </p>
                    <ul className='text-base opacity-75 ms-4 list-disc list-outside'>
                      <li className='group'><b className=''>For biometric authentication:</b> users will be redirected to the login screen to proceed with manual login.</li>
                      <li className='group'><b className=''>For password authentication:</b> users will need to contact the admin to address issues with their personal account.</li>
                    </ul>
                  </div>
                  <div className='flex-1 w-full h-fit'>
                    <Image src={imageURL3} alt="" className='w-full' />
                  </div>
                </div>
              </div>
            </div>

            <div className="result py-14" data-aos="fade-up">
              <div className="container mx-auto">
                <div className='uppercase opacity-100 font-semibold mx-auto'>Results</div>
                <p className='text-base opacity-75 mt-4'>
                  Multi-asset sending feature simplifies asset management for users. With just a few clicks, users can securely send multiple types of assets to their desired recipients, streamlining the process and enhancing convenience. This feature not only saves time but also ensures efficient and hassle-free transactions, contributing to a seamless user experience within the blockchain ecosystem.
                  <br /><br />
                  Furthermore, Scatter contributes to the broader adoption of blockchain technology by providing a user-friendly gateway for individuals to explore the potential of decentralized finance (DeFi) and non-fungible tokens (NFTs). Its support for various blockchains and dApp ecosystems makes it accessible to a wide range of users, regardless of their technical expertise.
                  <br /><br />
                  Overall, Scatter&rsquo;s impact on end-users is undeniable, offering a secure, user-friendly, and accessible interface for interacting with blockchain-based applications and digital assets. As blockchain technology continues to evolve, Scatter remains at the forefront, driving innovation and empowering users to participate in the decentralized economy.
                </p>
                <div className='flex-1 w-full h-fit mt-4'>
                  <Image src={imageURL4} alt="" className='w-full' />
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </section>
    </>
  )
}