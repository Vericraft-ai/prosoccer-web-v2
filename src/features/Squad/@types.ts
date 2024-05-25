export type Player = {
  name: string;
  number: number;
  color: string;
  numberColor: string;
  nameColor: string;
  onClick: () => void;
}

export type Squad = {
  gk: Player;
  df: Player[];
  cdm: Player[];
  cm: Player[];
  cam: Player[];
  fw: Player[];
}

export type Style = {
  color: string;
  numberColor: string;
  nameColor: string;
}

export type Team = {
  squad: Squad;
  style: Style;
}