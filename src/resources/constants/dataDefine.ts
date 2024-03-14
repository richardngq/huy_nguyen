import Image0 from '@/assets/img/img.png';
import Image1 from '@/assets/img/img-1.png';
import Image2 from '@/assets/img/img-2.png';
import Image3 from '@/assets/img/img-3.png';

export interface IData {
  href?: string;
  title?: string;
  image?: any;
  description?: string;
}

export const dataWorks: IData[] = [
  {
    href: 'https://www.behance.net/gallery/167050693/Canon-Gallery-S',
    title: `Canon`,
    image: Image1,
    description: `Portable exhibition walls with stands for Canon photographers.`,
  },
  {
    href: 'https://www.behance.net/gallery/167051093/Shiseido',
    title: `Shiseido`,
    image: Image2,
    description: `Shiseido offers the highest quality products make-up Japan with 145 years of technology`,
  },
  {
    href: 'https://www.behance.net/gallery/168289687/Crabada-NFT-Marketplace-Game-Fi',
    title: `Crabada`,
    image: Image0,
    description: `An Exciting Undersea Adventure Awaits GameFi`,
  },
  {
    href: 'https://www.behance.net/gallery/167049811/Legend-of-the-7-Kingdoms-Landing-Page',
    title: `Legend 7`,
    image: Image3,
    description: `Blockchain - Crypto - GameFi`,
  },
];
