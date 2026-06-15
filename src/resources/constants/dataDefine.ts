import { EDomain, EStackType } from './type.enum';
export interface IStack {
  stack?: EStackType;
}

export const dataStacks: IStack[] = [
  { stack: EStackType.ANTIGRAVITY },
  { stack: EStackType.CLAUDE },
  { stack: EStackType.CODEX },
  { stack: EStackType.FIGMA },
  { stack: EStackType.FIGJAM },
  { stack: EStackType.ADOBESUITE },
  { stack: EStackType.ADOBEXD },
  { stack: EStackType.ZEPLIN },
  { stack: EStackType.INVISION },
  { stack: EStackType.FRAMER },
  { stack: EStackType.SPINE },
  { stack: EStackType.SPLINE },
  { stack: EStackType.JITTER },
];

export interface IDomain {
  domain?: EDomain;
}

export const dataDomains: IDomain[] = [
  { domain: EDomain.AI },
  { domain: EDomain.FINTECH },
  { domain: EDomain.WEB3 },
  { domain: EDomain.GAMEFI },
  { domain: EDomain.CRYPTO },
  { domain: EDomain.BLOCKCHAIN },
  { domain: EDomain.MEDICAL },
  { domain: EDomain.SAAS },
  { domain: EDomain.ECOMMERCE },
];
