import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import axios from 'axios';

import { firebaseConfig } from '../constants/constants';

// Initialize Firebase
const config = firebaseConfig;

firebase.initializeApp(config);

const db = firebase.firestore();

export { axios, db }