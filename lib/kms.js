'use strict'

function encrypt(keyId, bufferData) {
    const Promise = require('bluebird')

    return new Promise((resolve, reject) => {
        const Aws = require('aws-sdk')
        const kms = new Aws.KMS()
        kms.encrypt(
            {
                KeyId: keyId,
                Plaintext: bufferData,
            },
            (err, data) => {
                if (err) {
                    return reject(err)
                }
                return resolve(data.CiphertextBlob)
            }
        )
    })
}

function decrypt(ciphertextBlob) {
    const Promise = require('bluebird')

    return new Promise((resolve, reject) => {
        const Aws = require('aws-sdk')
        const kms = new Aws.KMS()
        kms.decrypt(
            {
                CiphertextBlob: new Buffer(ciphertextBlob, 'base64'),
            },
            (err, data) => {
                if (err) {
                    return reject(err)
                }
                const bufferData = data.Plaintext

                return resolve(bufferData)
            }
        )
    })
}

module.exports = {
    encrypt: encrypt,
    decrypt: decrypt,
}
