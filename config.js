// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDiVAY7XLV61RriUlYGT3iKbbLOYTb3eNs',
  authDomain: 'neoversity-8ec31.firebaseapp.com',
  projectId: 'neoversity-8ec31',
  storageBucket: 'gs://neoversity-8ec31.firebasestorage.app',
  // appId: '1:964283961121:ios:dc69213d0ace40590bf860',
  // messagingSenderId: '964283961121',
  // databaseURL: '<https://neoversity-8ec31.firebaseio.com>',
  // measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

// Ініціалізація Auth з AsyncStorage для роботи редакс персистора
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
