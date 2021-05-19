import firestore, { getDocumentRef } from 'services/Firebase/firestore'
import _ from 'lodash'

/**
 * @info deleteDocument (06 Apr 2021) // CREATION DATE
 *
 * @since 06 Apr 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @param {string}     path     Path to a collection.
 * @param {object}     data     An Object containing the data for the new document.
 *
 * @return {Promise<DocumentReference<DocumentData>>|Object}
 */

const createDocument = async (
  path,
  data = {},
  { idField = 'id', withoutUndef = true } = {}
) => {
  if (idField) {
    const docId = getDocumentRef(path).id
    const buf = withoutUndef
      ? _.pickBy({ ...data, [idField]: docId }, _.identity)
      : { ...data, [idField]: docId }
    await firestore.collection(path).doc(docId).set(buf)
    return buf
  } else {
    return firestore
      .collection(path)
      .add(withoutUndef ? _.omitBy(data, _.isNil) : data)
  }
}

export default createDocument
