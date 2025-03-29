import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { firebaseAuthWeb } from './firebaseClient'

export const registerWithFirebase = async (
  globalFirstName: string,
  email: string,
  password: string
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuthWeb,
      email,
      password
    )

    await updateProfile(response.user, {
      displayName: globalFirstName,
      photoURL: generateRandomPhotoUrl(),
    })

    return { success: true, error: null }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
}

export const generateRandomPhotoUrl = () => {
  const randomNum = Math.ceil(Math.random() * 6)
  return `./images/users/${randomNum}.png`
}
