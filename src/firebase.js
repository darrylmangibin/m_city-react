import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

import { firebaseConfig } from './config/keys';

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches')

export {
  firebase,
  firebaseMatches
}