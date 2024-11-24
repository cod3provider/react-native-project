import {createUserWithEmailAndPassword, signOut} from "@firebase/auth";
import {auth} from "@/config";
import {AppDispatch} from "@/redux/store/store";
import {clearUserInfo} from "@/redux/reducers/userSlice";

interface AuthCredentials {
  email: string;
  password: string;
}

export const registerDB = async ({email, password}: AuthCredentials) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log('Error with signup', err);
  }
}

export const logoutDB = async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUserInfo());
  } catch (err) {
    console.log('Logout error', err);
  }
}
