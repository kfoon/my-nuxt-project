import type { EventHandler } from 'h3'

export const defineWrappedResponseHandler = (handler: EventHandler) =>
  defineEventHandler(async (event) => {
    try {
      console.log("Custom Helper Function magic ✨");
      const response = await handler(event)
      return { response }
    } catch (err) {
      return { err }
    }
  })