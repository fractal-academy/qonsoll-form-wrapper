import firestore from 'services/Firebase/firestore'
import _ from 'lodash'

/**
 * @info setDocument (06 Apr 2021) // CREATION DATE
 *
 * @since 06 Apr 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @param {string}     path     Path to a collection.
 * @param {string}     id       Path to a document.
 * @param {object}     data     Data for the document.
 *
 * @return {Promise<void>}
 */

const setDocument = (path, id, data, { withoutUndef = true }) => {
  return firestore
    .collection(path)
    .doc(id)
    .set(withoutUndef ? _.omitBy(data, _.isNil) : data)
}

export default setDocument
