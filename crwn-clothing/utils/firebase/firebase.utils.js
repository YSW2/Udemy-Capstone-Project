import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAoMJDpdqrV_OkbIRSXDOl2t_81VwP-E8g',
  authDomain: 'crwn-clothing-db-6e248.firebaseapp.com',
  projectId: 'crwn-clothing-db-6e248',
  storageBucket: 'crwn-clothing-db-6e248.firebasestorage.app',
  messagingSenderId: '505657851621',
  appId: '1:505657851621:web:c1e99d20b7efe1e53e1e0c',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
