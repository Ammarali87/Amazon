import { prop, modelOptions , getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class Product {
  public _id: string;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public slug!: string;

  @prop({ default: 0 })
  public rating!: number;

  @prop({ default: 0 })
  public numViews!: number;
}

 export const ProductModel = getModelForClass(Product)







