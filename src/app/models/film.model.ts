import { Character } from "./character.model"

export interface Film {
  nombre: string;
  numero_episodio: string;
  director: string;
  descripcion: string;
  personajes: Character[];
}
