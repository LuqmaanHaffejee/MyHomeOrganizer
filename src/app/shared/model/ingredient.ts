export class Ingredient {

  // using public accessor auto creates fields on class and assigns them
  constructor(
    public id: number,
    public name: string,
    public amount: number
  ) {}
}
