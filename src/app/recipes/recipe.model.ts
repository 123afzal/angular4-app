import {Ingredints} from '../shared/ingredints.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredints : Ingredints[];

  constructor(name: string, description: string, imagePath: string, ingredints: Ingredints[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredints = ingredints;
  }
}
