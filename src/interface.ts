enum MetalCategory {
  gold = "gold",
  silver = "silver",
  platinum = "platinum",
  roseGold = "rose gold", // Rose gold is an alloy made from a combination of pure gold and copper. 75 percent pure gold to 25 percent copper, which makes 18k rose gold.
}

type gender = "M" | "F";

enum ProductCategory {
  ring = "ring",
  necklace = "necklace",
  bracelet = "bracelet",
  earring = "earring",
  chain = "chain",
  pendant = "pendant",
  kada = "kada",
  coin = "coin",
  bangle = "bangle",
  mangalsutra = "mangalsutra",
  payal = "payal",

}

export interface IUser {
  id: string;
  phoneNumber: string;
}

export interface IProduct {
  sku: string;
  name: string;
  gender: gender;
  description: string;
  price: number;
  img: string;
  color: string;
  productSize?: number;

  metalCategory: MetalCategory;
  productCategory: ProductCategory;

  purity: number;
  wastage?: number;
  labourCharge?: number; // per gram
  goldPurity?: number; // KT
  goldWastage?: number;

  grossWeight: number;
  goldWeight?: number;
  platinumWeight?: number;
  silverWeight?: number;
  diamondWeight?: number;

  stoneQuantity?: number;
  melting?: number; // percentage
}

export interface ICart {
  id: string;
  products: string[];
  createdAt: Date;
  updatedAt: Date;
}