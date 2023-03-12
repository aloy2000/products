import BaseModel from "./BaseModel.js"
import UserModel from "./UserModel.js"

class AddressModel extends BaseModel {
  static get tableName() {
    return "address"
  }

  static get relationMappings() {
    return {
      user: {
        modelClass: UserModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "address.userId",
          to: "users.id"
        }
      }
    }
  }
}

export default AddressModel
