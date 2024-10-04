import sequelize from "@/db";
import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: number;
  email: string;
  password: string;
  role: string;
}
const User = sequelize.define<UserModel>("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: process.env.MY_ROLE_USER },
});


export { User, UserModel }