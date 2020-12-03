import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCaabgLOs5NMieJWwfrrrDfEJCSkMQaQzc',
  authDomain: 'sibuls-contact.firebaseapp.com',
  databaseURL: 'https://sibuls-contact.firebaseio.com',
  projectId: 'sibuls-contact',
  storageBucket: 'sibuls-contact.appspot.com',
  messagingSenderId: '612374256270',
  appId: '1:612374256270:web:e02ef417cb2ecb49f147df',
});

var db = firebaseApp.firestore();

export { db };
