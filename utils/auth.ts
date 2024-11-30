import {
  createUserWithEmailAndPassword,
  onAuthStateChanged, signInWithEmailAndPassword,
  signOut, updateProfile
} from "@firebase/auth";
import {auth} from "@/config";
import {AppDispatch} from "@/redux/store/store";
import {
  clearUserInfo,
  setUserInfo
} from "@/redux/reducers/userSlice";
import {addUser, getUser} from "@/utils/firestore";

interface AuthCredentials {
  email: string;
  password: string;
  displayName: string;
}

export const registerDB = async ({email, password, displayName}: AuthCredentials) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {displayName});

    await addUser(user.uid, {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
    });

    console.log('auth', auth)
    return true;
  } catch (err) {
    console.log('Error with signup', err);
  }
}

export const loginDB = async ({email, password}: AuthCredentials, dispatch: AppDispatch) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;
    console.log('user', user);

    dispatch(setUserInfo({
      uid: user.uid,
      email: user?.email || '',
      displayName: user?.displayName || '',
      profilePhoto: user?.photoURL || "",
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
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUser(user.uid)

      dispatch(setUserInfo({
        ...userData,
        uid: user.uid,
        email: user.email || '',
      }));
    } else {
      dispatch(clearUserInfo());
    }
  });
};

export const updateUserProfile = async (update: {displayName?: string; photoURL?: string}) => {}