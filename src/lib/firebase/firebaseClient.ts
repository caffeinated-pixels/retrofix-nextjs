import { initializeApp } from 'firebase/app'
import { clientConfig } from './config'
import { getAuth } from 'firebase/auth'

// Firebase Web SDK
export const firebaseAppWeb = initializeApp(clientConfig)
export const firebaseAuthWeb = getAuth(firebaseAppWeb)
