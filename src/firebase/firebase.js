import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBwFCKC3z-GJQVCKtvbAYDPGNHtITDl8d0',
  authDomain: 'startrip-5659c.firebaseapp.com',
  databaseURL: 'https://startrip-5659c.firebaseio.com',
  projectId: 'startrip-5659c',
  storageBucket: 'startrip-5659c.appspot.com',
  messagingSenderId: '412379722907',
  appId: '1:412379722907:web:cfb7d57323cc98fb53023e'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//child_removed 유용 - 제거된 녀석의 key와 value를 가져옴
// database.ref('expenses').on('child_removed', (snap) => {
//   console.log(snap.key, snap.val());
// });

// database.ref('expenses').on('child_changed', (snap) => {
//   console.log(snap.key, snap.val());
// });
