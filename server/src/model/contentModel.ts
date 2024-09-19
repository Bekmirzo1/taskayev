import sequelize from "@/db";
import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { ModelCtor } from "sequelize-typescript";

interface InfoModel extends Model<InferAttributes<InfoModel>, InferCreationAttributes<InfoModel>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: number;
  description: string;
  items: string;
  image: string;
}
const Info = sequelize.define<InfoModel>("content_block", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  description: { type: DataTypes.STRING, allowNull: false },
  items: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
});

export { Info };