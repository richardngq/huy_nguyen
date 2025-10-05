'use client';
import Image from "next/image"
import imageURL0 from "@/assets/image/image-detail-gs-0.png"
import imageURL1 from "@/assets/image/image-detail-gs-1.png"
import imageURL2 from "@/assets/image/image-detail-gs-2.png"
import imageURL2b from "@/assets/image/image-detail-gs-2b.png"
import imageURL3 from "@/assets/image/image-detail-gs-3.png"
import imageURL3b from "@/assets/image/image-detail-gs-3b.png"
import imageURL3c from "@/assets/image/image-detail-gs-3c.png"
import imageURL3d from "@/assets/image/image-detail-gs-3d.png"

import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Button } from "@/components/common/Button";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Gestreon() {

  return (
    <section>
      <div className="hero min-h-20 lg:min-h-80 card GS overflow-hidden" data-aos='fade'>
        <Image className="relative" src={imageURL0} alt='' />
      </div>

      <TracingBeam className="px-6">
        <div>
          <div className="overview py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <h1 className='text-5xl font-bold'>The Gesteron</h1>
              <div className='uppercase opacity-80 font-semibold mt-10'>Overview</div>
              <p className='text-base opacity-75 mt-4'>
                As an e-commerce website, it serves as a third-party platform for collectors of luxury items. Here, they are provided with buying and selling services for the items they own without concerns about authenticity, damage, or credibility issues. The transactions take place entirely visually between both the buyer and seller on the website
              </p>
              <Button title="Explore More" link={`https://thegestreon.com/`} />
            </div>
          </div>

          <div className="role py-14 bg-[#17171e] group" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold'>I am a Product Designer for <span className=''>The Gesteron</span></div>
              <p className='text-base opacity-75 mt-4'>
                I joined the project as a Product Designer at the early stages when the startup began to brainstorm ideas about the product, design, and its creation. In this article, I will discuss one case study during the final stages of the product development.
              </p>
              <p className='text-base opacity-75 mt-4'>
                <b>Enhancing traditional payment methods:</b> This is aimed at improving the user experience. For me, this posed a challenge in researching and implementing user-centric design features.
              </p>
            </div>


          </div>

          <div className="scope py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Scope Of Work</div>
              <p className='text-base opacity-75 mt-4'>
                With the core structure remaining an e-commerce platform, we provide a full range of features based on customer research from within the collector community. Smooth operation and maintenance are key for the majority of our customers. To substantiate this:
              </p>
              <p className='text-base opacity-75 mt-8'>
                We have:
              </p>
              <ul className="flex flex-row gap-4 lg:gap-6 mt-2">
                <li className="flex flex-col gap-0 group">
                  <p className="text-xs"><span className="text-xl">9k7</span> Visits</p>
                  <Link href={''} target="_blank" className="inline-flex items-center gap-1 group-hover:text-blue-500"><b>Website</b></Link>
                </li>
                <li className="flex flex-col gap-0 group">
                  <p className="text-xs"><span className="text-xl">315k</span> Followers</p>
                  <Link href={'https://www.instagram.com/thegestreon/'} target="_blank" className="inline-flex items-center gap-1 group-hover:text-blue-500"><b>Instagram</b><Icon icon={`fluent:window-new-24-regular`} className="scale-0 group-hover:scale-100" /></Link>
                </li>
                <li className="flex flex-col gap-0 group">
                  <p className="text-xs"><span className="text-xl">713.2k</span> Likes</p>
                  <Link href={'https://www.tiktok.com/@thegestreon'} target="_blank" className="inline-flex items-center gap-1 group-hover:text-blue-500"><b>Tiktok</b><Icon icon={`fluent:window-new-24-regular`} className="scale-0 group-hover:scale-100" /></Link>
                </li>
                <li className="flex flex-col gap-0 group">
                  <p className="text-xs"><span className="text-xl">4.7k</span> Rating</p>
                  <Link href={'https://uk.trustpilot.com/review/thegestreon.com'} target="_blank" className="inline-flex items-center gap-1 group-hover:text-blue-500"><b>Trustpilot</b><Icon icon={`fluent:window-new-24-regular`} className="scale-0 group-hover:scale-100" /></Link>
                </li>
              </ul>

              <div className='text-base opacity-75 mt-8 group'>
                <p>
                  I have conducted interviews and supported my clients through various forms and online support channels in order to:
                </p>
                <ul className='text-base mt-4 ms-4 list-disc list-outside'>
                  <li className=' opacity-75 group-hover:opacity-100 w-fit'>Understand the user&rsquo;s goals and needs.</li>
                  <li className=' opacity-75 group-hover:opacity-100 w-fit mt-1'>Identify weaknesses within the current user journey.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="insight py-14 bg-[#17171e]" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Gathering insights</div>
              <p className='text-base opacity-75 mt-4'>
                After collecting user feedback, I proceeded to create user personas to consolidate the identified challenges. I will summarize the fundamental pain points of the users.
              </p>
              <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                <div className='w-full h-fit '>
                  <Image src={imageURL1} alt='' className='w-full object-contain' />
                </div>
              </div>

              <p className='text-base opacity-75 mt-4'>
                I relied on an approach based on data called the severity framework to communicate my process and list usability issues in priority order to address them for improvement.
              </p>
              <p className='text-sm opacity-50 mt-4'>
                <i>
                  <b>Disclaimer:</b>To ensure customer security and privacy, I utilize illustrative images and initials of users.
                </i>
              </p>
            </div>
          </div>

          <div className="problem py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Problem Driven</div>
              <p className='text-base opacity-75 mt-4'>
                Based on user feedback, my team and I empathized and unanimously proceeded to research and improve this issue.
              </p>
              <div className="text-base mt-4 group">
                <p className='opacity-75'>
                  I conducted <b>A/B testing</b> and <b>utilized heatmaps</b> to experiment with the user testing process:
                </p>
                <ul className='text-base opacity-75 mt-2 ms-4 list-disc list-outside'>
                  <li><span className="group-hover:font-semibold">~ 20%</span> of users use <span className="group-hover:font-semibold">ShopPay</span>.</li>
                  <li><span className="group-hover:font-semibold">~ 27%</span> of users use <span className="group-hover:font-semibold">GooglePay</span>.</li>
                  <li><span className="group-hover:font-semibold">{`>`} 35%</span> of users use <span className="group-hover:font-semibold">PayPal</span>.</li>
                </ul>
              </div>

              <p className='text-base opacity-75 mt-4'>
                The majority of users will use third-party services where they already have payment information available.
              </p>
              <div className='flex flex-col lg:flex-row gap-6 mt-4'>
                <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                  <Image src={imageURL2} alt='' className='w-full' />
                </div>
                <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                  <Image src={imageURL2b} alt='' className='w-full' />
                </div>
                <div className="hidden lg:block w-full" />
              </div>
              <p className='text-sm opacity-50 mt-4'>
                <i>
                  &ldquo;So what does this mean for our target customers? Do they already have such products available? Are they able to easily use the service?&rdquo;
                </i>
              </p>
            </div>
          </div>

          <div className="solution py-14 bg-[#17171e]" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>The Solution</div>
              <p className='text-base opacity-75 mt-4'>
                After a period of brainstorming, we conducted market research on competitors. We referenced various competitors, but here are two examples that I consider most representative for this e-commerce industry sector.
              </p>
              <div className='flex flex-col lg:flex-row gap-6 mt-4'>
                <div className="w-full group">
                  <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                    <Image src={imageURL3} alt='' className='w-full' />
                  </div>
                  <p className='opacity-75 text-sm mt-4 '><b>Farfetch:</b> Requires users to confirm information and the recipient&rsquo;s address during checkout, even if they have logged in and confirmed the billing address previously.</p>
                </div>
                <div className="w-full group">
                  <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                    <Image src={imageURL3b} alt='' className='w-full' />
                  </div>
                  <p className='opacity-75 text-sm mt-4 '><b>Pacsun:</b> Does not provide e-payment services and remains loyal to the charge by card system.</p>
                </div>
                <div className="hidden lg:block w-full" />
              </div>
              <p className='text-base opacity-75 mt-8'>
                Based on research and analysis, we have decided on a different approach: integrating phone tracing into e-commerce.
                We are not far from a scenario where current registration information is synchronized solely with the phone number. With just the phone number, all information will be confirmed instantly at the store with a high level of accuracy.
              </p>
              <div className='flex flex-col lg:flex-row gap-6 mt-4'>
                <div className="flex-1 ">
                  <p className='text-base opacity-75 mt-4'>
                    When we started implementing it, we all wondered how it would work out. Typically, customer information lies within the UI of the store system to confirm details from the buyer. Here, we will let users confirm their own information!
                  </p>
                  <p className='text-base opacity-75 mt-4'>
                    Right after they opt to remember the information and enter the phone number that matches the system from before, all details will synchronize with all payment fields seamlessly without hassle in subsequent transactions.
                  </p>
                </div>
                <div className='flex-1 flex flex-col gap-6 mt-4'>
                  <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                    <Image src={imageURL3c} alt='' className='w-full' />
                  </div>
                  <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]' data-aos='fade-down'>
                    <Image src={imageURL3d} alt='' className='w-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="result py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Results and takeaways</div>
              <p className='text-base opacity-75 mt-4 group'>
                Customer feedback has been very positive. This marks our first step on the Trustpilot rating system. Particularly noteworthy is the feedback from older customers who share, &ldquo;<i className="">Now we won&rsquo;t need assistance to check and edit troublesome payment details anymore</i>&rdquo;
              </p>
              <div className='flex flex-col lg:flex-row gap-6 mt-4 group'>
                <ul className='flex-1 text-base opacity-75 ms-4 list-disc list-outside'>
                  <li className=''><b className=''>User testing doesn&rsquo;t end post-development.</b><br /> Design is an ongoing iterative process aimed at continually improving the user experience. Always seek ways to gather and listen to user feedback.</li>
                  <li className='mt-2'><b className=''>Regarding pre-technical knowledge.</b><br /> This helps minimize any rework later because foreknowledge of technical limitations informs your design strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>
  )
}