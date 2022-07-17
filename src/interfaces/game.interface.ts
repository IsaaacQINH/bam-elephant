import { CardValue, ICard } from "./card.interface";
import { IGameMode } from "./gamemode.interface";

export interface IGameState {
  deck: ICard[];
  drawnCards: ICard[];
  disposedCards: ICard[];
  rule: string;
  rules: Partial<Record<CardValue, string>>;
  newRule: string;
  modalIsOpen: boolean;
}
export type GameRules = Partial<Record<CardValue, string>>;
export interface IGameActions {
  setDeck: (deck: ICard[]) => void;
  setDrawnCards: (cards: ICard[]) => void;
  setDisposedCards: (cards: ICard[]) => void;
  setRule: (rule: string) => void;
  setRules: (rules: GameRules) => void;
  setNewRule: (newRule: string) => void;
  toggleModal: () => void;
}

export interface IGameHelpers {
  winner: ICard | null | undefined;
  loser: ICard | null | undefined;
  roundHasStarted: boolean;
  roundHasEnded: boolean;
}
export interface IGameThunks {
  shuffle: () => void;
  restart: () => void;
}

export interface IGameInjections {
  state: IGameState;
  actions: IGameActions;
  helpers: IGameHelpers;
  thunks: IGameThunks;
}
export type WinnerCallback = (e: IGameInjections) => void;
export type WinnerCallbacks = Partial<Record<CardValue, WinnerCallback>>;
export interface IUseGameStateOptions {
  discardedPileSize?: number;
  playerCount?: number;
  gameMode?: IGameMode;
}