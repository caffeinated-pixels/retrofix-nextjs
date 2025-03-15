import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { clientConfig } from './config'

// Initialize Firebase Web SDK; check if instance already exists
const firebaseAppWeb =
  getApps().length === 0 ? initializeApp(clientConfig) : getApp()

// Get Auth instance
export const firebaseAuthWeb = getAuth(firebaseAppWeb)
