import { EDomain, EStackType } from './type.enum';
export interface IStack {
  stack?: EStackType;
}

export const dataStacks: IStack[] = [
  { stack: EStackType.FIGMA },
  { stack: EStackType.FIGJAM },
  { stack: EStackType.ADOBEXD },
  { stack: EStackType.ADOBESUITE },
  { stack: EStackType.ZEPLIN },
  { stack: EStackType.INVISION },
  { stack: EStackType.FRAMER },
];

export interface IDomain {
  domain?: EDomain;
}

export const dataDomains: IDomain[] = [
  { domain: EDomain.FINTECH },
  { domain: EDomain.WEB3 },
  { domain: EDomain.SAAS },
  { domain: EDomain.CRYPTO },
  { domain: EDomain.BLOCKCHAIN },
  { domain: EDomain.ECOMMERCE },
];
