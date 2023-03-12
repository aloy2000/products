import mw from "@/api/mw.js"
import validate from "@/api/middlewares/validate.js"
import CartModel from "@/api/db/models/CartModel.js"
import { idValidator } from "@/validators.js"

const handler = mw({
  GET: [
    validate({
      query: {
        userId: idValidator.required(),
      },
    }),
    async ({
      locals: {
        query: { userId },
      },
      res,
    }) => {
      try {
        const cart = await CartModel.query()
          .select("products.*", "carts.quantity")
          .where("userId", userId)
          .join("products", "carts.productId", "products.id")

        if (!cart) {
          res.send({
            result: false,
          })
        }

        res.send({
          result: cart,
        })
      } catch (err) {
        const error = err.response?.data?.error || "Oops. Something went wrong"

        return [Array.isArray(error) ? error : [error]]
      }
    },
  ],
})

export default handler
