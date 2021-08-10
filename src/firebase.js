import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/analytics';
import secrets from './secrets'

// //================Firstore Setup===========================

firebase.initializeApp(secrets.firebaseConfig);
const db = firebase.firestore()
export const locations = db.collection('locations')