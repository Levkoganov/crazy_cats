export interface ICatsState {
  top5Cats: ICats[];
  catsResult: ICats[];
  cat: ICats[];
  isLoading: boolean;
}

export interface ICats {
  _id: string;
  name: string;
  age: number;
  location: string;
  favoriteFood: string;
  color: string;
  height: number;
  weight: number;
  pic?: null;
  likes: number;
}
