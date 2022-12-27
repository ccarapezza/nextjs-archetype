
import { AdapterUser } from "next-auth/adapters";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User as UserDefinition } from "@next-auth/sequelize-adapter/dist/models";

interface CustomAdapterUser extends AdapterUser {
  password?: string;
}

@Table({
  timestamps: true,
  tableName: "users",
})
export class User extends Model<CustomAdapterUser, Partial<CustomAdapterUser>>{

  @Column({...UserDefinition.id})
  declare public id: string;

  @Column({...UserDefinition.name})
  public name?: string | null | undefined;

  @Column({...UserDefinition.email})
  public email!: string;

  @Column({...UserDefinition.emailVerified})
  public emailVerified!: Date | null;

  @Column({type: DataType.STRING, allowNull: true})
  public password?: string;

  @Column({...UserDefinition.image})
  public image?: string | null | undefined;
}