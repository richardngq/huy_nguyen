import Image1 from '@/assets/img/img-1.png';
import Image2 from '@/assets/img/img-2.png';
import Image3 from '@/assets/img/img-3.png';
import Image4 from '@/assets/img/img-4.png';

import LogoSM from '@/assets/img/logo-sm.png';
import ImageSM1 from '@/assets/img/img-01-sm.png';
import ImageSM2 from '@/assets/img/img-02-sm.png';
import LogoGS from '@/assets/img/logo-gs.png';
import ImageGS1 from '@/assets/img/img-01-gs.png';
import ImageGS2 from '@/assets/img/img-02-gs.png';
import LogoCN from '@/assets/img/logo-cn.png';
import ImageCN1 from '@/assets/img/img-01-cn.png';
import ImageCN2 from '@/assets/img/img-02-cn.png';

import ImageGridSM from '@/assets/img/img-grid-sm.png';
import ImageGridGS from '@/assets/img/img-grid-gs.png';
import ImageGridCN1 from '@/assets/img/img-grid-cn-01.png';
import ImageGridCN2 from '@/assets/img/img-grid-cn-02.png';

export interface IData {
  href?: string;
  title?: string;
  image?: any;
  description?: string;
}

export const dataWorks: IData[] = [
  {
    href: 'https://www.behance.net/gallery/167051093/Shiseido',
    title: `Shiseido`,
    image: Image1,
    description: `Shiseido offers the highest quality products make-up Japan with 145 years of technology`,
  },
  {
    href: 'https://www.behance.net/gallery/168289687/Crabada-NFT-Marketplace-Game-Fi',
    title: `Crabada`,
    image: Image2,
    description: `An Exciting Undersea Adventure Awaits GameFi`,
  },
  {
    href: 'https://www.behance.net/gallery/167131231/F2NFT-Marketplace-v20',
    title: `F2FNT`,
    image: Image3,
    description: `The player can play solo, duos or a squad of 4 and fight on various planets GameFi.`,
  },
  {
    href: 'https://www.behance.net/gallery/167049811/Legend-of-the-7-Kingdoms-Landing-Page',
    title: `Legend Of 7 Kingdoms`,
    image: Image4,
    description: `An RPG GameFi about 7 Kingdoms with Blockchain and Crypto`,
  },
];

export interface IDataShow {
  imageLogo?: any;
  imageOne?: any;
  imageTwo?: any;
  subtitle?: string;
  biz?: any;
  checkpoints?: string;
  showLinearTop?: boolean;
  showLinearBot?: boolean;
}

export const dataShows: IDataShow[] = [
  {
    imageLogo: LogoSM,
    imageOne: ImageSM1,
    imageTwo: ImageSM2,
    subtitle: `Design an internal tool for a business owners to pay their employees with cryptocurrencies. That can be stable coins or different coins. The mobile app is only available for this.`,
    biz: `Create a Web design responsive for multiple devices so clients can easy to collect their gallery everywhere in the world. The Design Language should be “Danshari” (AKA Minimalism) style. It should be like a cinema online for everyone.`,
    checkpoints: `
      <b class="text-white">User Experience:</b> The app should prioritize ease of use, with a clear and intuitive interface that guides the user through the payment process.
      <br/><br/>
      <b class="text-white">Security:</b> The app should prioritize security, incorporating measures such as encryption, two-factor authentication, and secure storage of private keys to protect user funds and data.
      <br/><br/>
      <b class="text-white">User Onboarding:</b> The app should make it easy for employees to set up and start using the app, with clear instructions and a simple sign-up process.
      <br/><br/>
      <b class="text-white">Payment Processing:</b> The app should have a robust payment processing system that can handle transactions quickly and securely, with real-time updates on payment status.
      <br/><br/>
      <b class="text-white">Currency Management:</b> The app should allow employees to manage their cryptocurrency funds, including options to send, receive, and exchange different cryptocurrencies.
      <br/><br/>
      <b class="text-white">Customization:</b> The app should allow for customization, such as setting up multiple payment options, adjusting payment frequency, and specifying payment amounts.
      <br/><br/>
      <b class="text-white">Compliance:</b> The app should be designed with compliance in mind, taking into account regulations and legal requirements for cryptocurrency payments in different jurisdictions.
    `,
  },
  {
    imageLogo: LogoGS,
    imageOne: ImageGS1,
    imageTwo: ImageGS2,
    subtitle: `A leading platform for preloved luxury fashion, Gestreon offers extraordinary designs curated by the world's finest experts and collectors`,
    biz: `Beyond offering an unparalleled shopping experience, Gestreon serves as a hub for aficionados to immerse themselves in the world of luxury fashion, featuring insights, trends, and exclusive collaborations. Whether seeking a coveted statement piece or exploring the latest fashion innovations, Gestreon remains the go-to destination for connoisseurs seeking the epitome of style and sophistication.`,
    checkpoints: `
    <b class="text-white">User experience:</b> Designing a user interface that is easy to use and intuitive. Optimizing the user experience from product search to checkout. Creating easy access points for product categories and advanced search features. Ensuring consistency across pages and the purchasing process.
    <br/><br/>
    <b class="text-white">Image presentation:</b> Arranging product images in an appealing and attention-grabbing manner. Providing high-quality images with multiple views for detailed product examination. Clearly identifying and displaying important information such as size, material, and product status (new, used, etc.).
    <br/><br/>
    <b class="text-white">Shopping Experience:</b> Developing a smooth and easy shopping process, from adding products to the cart to completing the purchase. Providing search and filtering features so users can easily find desired items. Implementing registration and login features for users to manage orders and personal information.
    <br/><br/>
    <b class="text-white">Branding:</b> Developing a design style consistent with the Gestreon brand, reflecting luxury and sophistication. Creating interactive experiences and engaging interfaces to make a strong impression and connect with users. Establishing brand identity elements such as logo, colors, and unique fonts to create a distinctive mark for Gestreon.
    `,
  },
  {
    imageLogo: LogoCN,
    imageOne: ImageCN1,
    imageTwo: ImageCN2,
    subtitle: `Canon Gallery S is a product from Canon Company Japan. For grateful who use company products to take art photos. update That is where art photos and their author be honored.`,
    biz: `Create a Web design responsive for multiple devices so clients can easy to collect their gallery everywhere in the world. The Design Language should be “Danshari” (AKA Minimalism) style. It should be like a cinema online for everyone.`,
    checkpoints: `
    <b class="text-white">User experience:</b> The online photo gallery should be easy to use, visually appealing, and provide a seamless browsing experience for users.
    <br/><br/>
    <b class="text-white">Navigation:</b> The online photo gallery should have clear and intuitive navigation, making it easy for users to find what they're looking for.
    <br/><br/>
    <b class="text-white">Image presentation:</b> The online photo gallery should showcase the photographs in a way that highlights their quality and makes them appealing to potential buyers.
    <br/><br/>
    <b class="text-white">Search functionality:</b> A search function is important for an online photo gallery as it allows users to easily find specific photographs.
    <br/><br/>
    <b class="text-white">Responsiveness:</b> The online photo gallery should be designed to be fully responsive, meaning that it should display properly on all devices, including desktops, laptops, tablets, and smartphones.
    <br/><br/>
    <b class="text-white">Analytics:</b> The online photo gallery should have robust analytics capabilities, allowing you to track user behavior, understand how users interact with the gallery, and make data-driven decisions about how to improve the gallery over time.
    `,
  },
];

export interface IDataGrid {
  image1?: any;
  image2?: any;
  url?: string;
  href?: string;
  tags?: string[];
}

export const dataGrid: IDataGrid[] = [
  {
    image1: ImageGridSM,
    url: '/sm',
    href: 'https://scatter.roninchain.com/',
    tags: ['Mobile app', 'Fintech', 'Crypto'],
  },
  {
    image1: ImageGridGS,
    url: '/gs',
    href: 'https://thegestreon.com/',
    tags: ['Website', 'E-commerce', 'SaaS'],
  },
  {
    image1: ImageGridCN1,
    image2: ImageGridCN2,
    url: '/cn',
    href: 'https://cweb.canon.jp/gallery/s/',
    tags: ['Website', 'SaaS', 'CMS', 'Gallery'],
  },
];
