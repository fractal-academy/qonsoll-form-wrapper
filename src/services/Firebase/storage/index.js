import firebase from '../init'
import 'firebase/storage'

const storage = firebase.storage()

export default storage

export { default as deleteURL } from './deleteURL'
export { default as getURL } from './getURL'
export { default as storageRef } from './storageRef'
export { default as upload } from './upload'
