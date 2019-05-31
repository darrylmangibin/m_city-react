import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

import { firebaseConfig } from './config/keys';

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

firebaseDB.ref('matches').once('value').then((snapshot) => {
  console.log(snapshot.val())
})