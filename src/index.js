const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const express = require('express');

const app = express();
const port = 3333;
const tokenfirebase = require('./config/todo.json');

initializeApp({
    credential: cert(tokenfirebase)
});

const firestore = getFirestore();