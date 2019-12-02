export interface Card {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  playerClass: string;
  locale: string;
  mechanics?: Mechanic[];
  faction?: string;
  rarity?: string;
  health?: number;
  collectible?: boolean;
  img?: string;
  imgGold?: string;
  attack?: number;
  race?: string;
  cost?: number;
  flavor?: string;
  artist?: string;
  howToGet?: string;
  howToGetGold?: string;
  durability?: number;
}

interface Mechanic {
  name: string;
}
