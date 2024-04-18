export class Ingredient {

  private static maxId: number = 0;

  id: number = ++Ingredient.maxId;

  // using public accessor auto creates fields on class and assigns them
  constructor(
    public name: string,
    public amount: number
  ) {}
}
