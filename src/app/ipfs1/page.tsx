'use client';
import imageURL0 from '@/assets/image/image-detail-ipfs-0.png'
import imageURL1 from '@/assets/image/image-detail-ipfs-1.png'
import imageURL1b from '@/assets/image/image-detail-ipfs-1b.png'
import imageURL1c from '@/assets/image/image-detail-ipfs-1c.png'
import imageURL2 from '@/assets/image/image-detail-ipfs-2.png'
import imageURL2b from '@/assets/image/image-detail-ipfs-2b.png'
import imageURL2c from '@/assets/image/image-detail-ipfs-2c.png'
import imageURL3 from '@/assets/image/image-detail-ipfs-3.png'
import imageURL4 from '@/assets/image/image-detail-ipfs-4.png'
import imageURL4b from '@/assets/image/image-detail-ipfs-4b.png'
import { Button } from '@/components/common/Button';
import { TracingBeam } from '@/components/ui/tracing-beam';

import Image from 'next/image'

export default function IPFS() {

  return (
    <section>
      <div className="hero h-[400px] bg-no-repeat card IPFS overflow-hidden">
        <Image src={imageURL0} alt='' />
      </div>

      <TracingBeam className="px-6">
        <div>
          <div className="overview py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <h1 className='text-5xl font-bold'>FXCE</h1>
              <div className='uppercase opacity-80 font-semibold mt-10'>Overview</div>
              <p className='text-base opacity-75 mt-4'>
                An FX Social Trading Platform is considered to have the most optimized technology features related to FX. Here, users are known as Traders will have the opportunity to use and optimize the tools in FX. In addition, this is also an FX community sharing trading strategies and profiting from user&rsquo;s own FX strategies.
              </p>
              <Button title="Explore More" link={`https://fxce.com/`} />
            </div>
          </div>

          <div className="role py-14 bg-[#17171e] group" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto lg:text-center'>I am a product designer for <span className=''>IPFS - FXCE Technical Solution</span></div>
              <p className='text-base opacity-75 mt-4'>
                I joined the project as a Product Designer at a time when the project had been up and running for a while, but had not yet gained user traction. The leaders here are looking for the best way for their flagship product to reach and engage users.
              </p>
              <p className='text-base opacity-75 mt-4'>
                <b>User Experience (UX) Improvement:</b> This is about enhancing and completely transforming the customer&rsquo;s usage experience.
              </p>
            </div>


          </div>

          <div className="scope py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Understanding the problem</div>
              <p className='text-base opacity-75 mt-4'>
                The product was launched by the entire development team with all the features but without any user experience (UX) research or consideration. Based on customer service (CS) and complaints from the customer support online channel, I have observed the following issues:
              </p>
              <ul className='text-base opacity-75 mt-4 ms-4 list-disc list-outside'>
                <li className='group'><b className=''>Overwhelming amount of information:</b> This means that the product is too cluttered and difficult to use. Users may feel overwhelmed by the amount of information they have to process, and they may not be able to find what they are looking for.</li>
                <li className='group'><b className=''>Poor proximity:</b>This means that the elements on the product are not positioned in a way that is intuitive for users. Users may have to spend a lot of time searching for the information they need, and they may become frustrated.</li>
              </ul>
            </div>
          </div>

          <div className="insight py-14 bg-[#17171e]" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Gathering insights</div>
              <p className='text-base opacity-75 mt-4'>
                Summary of the process of customer segmentation based on driven tracing data:
              </p>
              <ul className='text-base opacity-75 mt-4 ms-4 list-disc list-outside'>
                <li className='group'><b className=''>Data Collection:</b> Gather relevant marketing data from various sources, including third-party tracking tools, website analytics, and customer relationship management (CRM) systems.</li>
                <li className='group'><b className=''>Data Cleaning and Preparation</b> Clean and prepare the data to ensure its accuracy, consistency, and completeness. This may involve handling missing values, correcting errors, and standardizing data formats.</li>
                <li className='group'><b className=''>Customer Identification:</b> Identify and distinguish unique customer profiles based on available identifiers such as email addresses, phone numbers, or user IDs. Assign each customer to a unique profile.</li>
                <li className='group'><b className=''>Data Segmentation:</b> Segment customers into distinct groups based on shared characteristics or behaviors derived from the collected data. Common segmentation criteria include:</li>
                <li className='group'><b className=''>Source of traffic:</b> Organic, direct, referral, social, etc.</li>
                <li className='group'><b className=''>Geographic location:</b> Country, region, city, etc.</li>
                <li className='group'><b className=''>Device and browser:</b> Desktop, mobile, tablet, browser type, etc.</li>
                <li className='group'><b className=''>User engagement:</b> Time on site, pageviews, bounce rate, conversion rate, etc.</li>
                <li className='group'><b className=''>Profiling and Analysis:</b> Create detailed profiles for each customer segment, highlighting key attributes, behaviors, and preferences. Analyze these profiles to identify trends, patterns, and insights that can inform marketing strategies.</li>
              </ul>
              <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                  <Image src={imageURL1} alt="" className='w-full scale-105' />
                </div>

                <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                  <Image src={imageURL1b} alt="" className='w-full scale-105' />
                </div>

                <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                  <Image src={imageURL1c} alt="" className='w-full scale-105' />
                </div>
              </div>
            </div>
          </div>

          <div className="problem py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Problem Driven</div>
              <p className='text-base opacity-75 mt-4'>
                Declining Traffic and Low Conversion Rate
              </p>
              <p className='text-base opacity-75 mt-4'>
                <b>Key Findings:</b>
              </p>
              <ul className='text-base opacity-75 mt-2 ms-4 list-disc list-outside'>
                <li className='group'><b className=''>Significant drop in website traffic:</b> A 64% decrease in traffic over the past 30 days compared to the previous 7 days, and a 56% decrease in traffic over the past 7 days compared to the previous day. This indicates a severe issue with traffic acquisition and retention.</li>
                <li className='group'><b className=''>Low conversion rate:</b> Despite 1.1 million page views, only 289,000 product views (26%) and 194,000 scrolls (17%) occurred. This suggests that users are not engaging with the content or finding the products they are looking for.</li>
                <li className='group'><b className=''>High discrepancy between <span className='hover:bg-lime-400'>&ldquo;Start Sessions&rdquo;</span> and <span className='hover:bg-lime-400'>&ldquo;User Engagements&rdquo;</span>:</b> The number of &ldquo;Start Sessions&rdquo; (69,000) is significantly higher than &ldquo;User Engagements&rdquo; (140,000), indicating that users are visiting the website but not taking the desired actions.</li>
              </ul>
              <p className='text-base opacity-75 mt-4'>
                <b>Potential Issues:</b>
              </p>
              <ul className='text-base opacity-75 mt-2 ms-4 list-disc list-outside'>
                <li className='group'><b className=''>Unrelevant or unattractive website content:</b> The website content may not be appealing or relevant to the target audience, failing to capture their interest and encourage engagement.</li>
                <li className='group'><b className=''>Usability and navigation issues:</b> The website might be difficult to use or navigate, causing users to abandon their visits due to frustration or inability to find what they are looking for.</li>
                <li className='group'><b className=''>Product-market mismatch:</b> The products or services offered may not align with the needs and interests of the target audience, leading to low conversion rates and a lack of user engagement.</li>
                <li className='group'><b className=''>Ineffective marketing campaigns:</b> The marketing efforts might not be effectively attracting the right type of traffic to the website, resulting in a high volume of unqualified visitors who are unlikely to convert.</li>
              </ul>
            </div>
          </div>

          <div className="solution py-14 bg-[#17171e]" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>The Solution</div>
              <p className='text-base opacity-75 mt-4'>
                Based on the research and findings, the following key issues have been identified and require immediate attention:
              </p>
              <ul className='text-base opacity-75 mt-4 ms-4 list-disc list-outside'>
                <li className='group'><b className=''>Content Optimization:</b> The website&rsquo;s content needs to be thoroughly evaluated and enhanced to better align with the interests, needs, and search intent of the target audience. This will involve creating engaging and informative content that resonates with the target users, driving increased engagement and improving search engine rankings.</li>
                <li className='group'><b className=''>User Experience (UX) Enhancement:</b> The website&rsquo;s usability and navigation must be significantly improved to provide a seamless and user-friendly experience. This may involve simplifying the website&rsquo;s structure, redesigning the layout, optimizing page loading speed, and ensuring clear and consistent navigation elements.</li>
                <li className='group'><b className=''>Product-Market Fit Validation:</b> A thorough assessment of the products or services offered is crucial to determine whether they effectively address the target audience&rsquo;s needs and preferences. This may involve conducting user surveys, market research, and analyzing customer feedback to identify potential gaps or areas for improvement.</li>
              </ul>
              <p className='text-base opacity-75 mt-4'>
                To implement user experience (UX) improvements and product enhancements, a standardized Design System is being rapidly developed and implemented for the team.
              </p>
              <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)] mt-4'>
                <Image src={imageURL2} alt="" className='w-full scale-[103%]' />
              </div>

              <p className='text-base opacity-75 mt-10'>
                After numerous brainstorming sessions with stakeholders, a complete product overhaul has been undertaken, ensuring a seamless UI/UX for users.
              </p>
              <div className='flex flex-col lg:flex-row gap-6 mt-4'>
                <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                  <Image src={imageURL2b} alt="" className='w-full scale-105' />
                </div>
                <div className='w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)]'>
                  <Image src={imageURL2c} alt="" className='w-full scale-105' />
                </div>
              </div>
              <p className='text-sm opacity-50 mt-12'>
                <i>
                  <b>Disclaimer:</b> Out of respect for the team members and individuals who contributed to this achievement, I will only share a portion of the system design.
                </i>
              </p>
            </div>
          </div>

          <div className="result py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Results</div>
              <p className='text-base opacity-75 mt-4'>
                In today&rsquo;s competitive business landscape, customer experience (CX) has emerged as a critical differentiator for success. Businesses that prioritize CX optimization are reaping significant rewards, including increased customer loyalty, higher conversion rates, and enhanced brand reputation.
                Investing in CX optimization is not just a cost; it&rsquo;s a strategic decision that drives long-term business growth and profitability.
              </p>
              <div className='flex flex-col lg:flex-row gap-6 mt-4'>
                <ul className='flex-1 text-base opacity-75 ms-4 list-disc list-outside'>
                  <li className='group'><b className=''>Customer expectations are constantly changing.</b><br /> Today&rsquo;s customers are more informed, connected, and demanding than ever before. They have high expectations for seamless, personalized, and engaging experiences across all touchpoints. Businesses that fail to keep pace with these evolving expectations risk losing customers to competitors.</li>
                  <li className='mt-2 group'><b className=''>Technology is constantly evolving.</b><br /> New technologies are emerging all the time, and these technologies can be used to create new and innovative ways to improve CX. For example, artificial intelligence (AI) can be used to personalize customer interactions, chatbots can be used to provide 24/7 customer support, and virtual reality (VR) can be used to create immersive customer experiences. Businesses that don&rsquo;t adopt these new technologies will quickly fall behind.</li>
                  <li className='mt-2 group'><b className=''>The competitive landscape is constantly changing.</b><br /> More and more businesses are recognizing the importance of CX, and they are investing heavily in improving their CX offerings. This means that businesses need to constantly innovate and differentiate in order to stand out from the crowd.</li>
                </ul>
                <div className='flex-1 w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)] mt-4'>
                  <Image src={imageURL3} alt="" className='w-full' />
                </div>
              </div>
            </div>
          </div>

          <div className="feedbacks py-14" data-aos="fade-up">
            <div className="container mx-auto">
              <div className='uppercase opacity-100 font-semibold mx-auto'>Customer and Colleague Feedback: A Powerful Combination for Growth</div>

              <div className='flex flex-col lg:flex-row gap-6 mt-4'>

                <div className='flex-1 w-full h-fit border-4 border-white rounded-2xl overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.1)] mt-4'>
                  <Image src={imageURL4} alt="" className='w-full' />
                </div>
                <div className='flex-1 w-full h-fit mt-4'>
                  <Image src={imageURL4b} alt="" className='w-full' />
                </div>
              </div>

              <p className='text-sm opacity-50 mt-12'>
                <i>
                  <b>Disclaimer:</b> Out of respect for the team members and individuals who contributed to this achievement, I will only share a portion of the system design.
                </i>
              </p>
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>
  )
}