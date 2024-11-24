import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "@firebase/auth";
import {auth} from "@/config";
import {AppDispatch} from "@/redux/store/store";
import {
  clearUserInfo,
  setUserInfo
} from "@/redux/reducers/userSlice";

interface AuthCredentials {
  email: string;
  password: string;
  login: string;
}

export const registerDB = async ({email, password, login}: AuthCredentials) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: login,
    })

    console.log('auth', user)
    return true;
  } catch (err) {
    console.log('Error with signup', err);
    return false;
  }
}

export const loginDB = async ({email, password}: AuthCredentials, dispatch: AppDispatch) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;
    console.log('user', user);

    dispatch(setUserInfo({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }));

    return user;
  } catch (err) {
    throw err;
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

export const authStateChanged = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    console.log('Auth state changed:', user);
    if (user) {
      dispatch(setUserInfo({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }))
    } else {
      dispatch(clearUserInfo());
    }
  })
}

export const updateUserProfile = async (update: {displayName?: string; photoURL?: string}) => {}