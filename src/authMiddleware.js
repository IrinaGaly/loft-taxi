import { AUTHENTICATE, logIn } from './actions'
import { serverLogIn } from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  // if(action.type === AUTHENTICATE) {
  //   const {email, password} = action.payload;
  //   const data = await serverLogIn(email, password)
  //   console.log(data.success);
  //   if (data.success) {
  //     store.dispatch(logIn())
  //   }
  //   else {
  //     next(action)
  //   }
  // }
  switch (action.type) {
    case AUTHENTICATE: {
      const {email, password} = action.payload;
      const data = await serverLogIn(email, password)
      console.log(data.success);

      if (data.success) {
        store.dispatch(logIn())
      }
    }
    break;
  }
}
