export enum RockBandType {
  ROCK,
  INDIE,
  METAL
}

export type RockBand = {
  name: string;
  type: RockBandType
};
