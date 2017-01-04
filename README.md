node-aws-kms is a Node package that can helps you to encrypt/decrypt data in a easy way.

# Important

Always remenber to configure aws-sdk before using it

```js

const Aws = require('aws-sdk')
Aws.config.update(awsConfig)

```

# Encrypt data

```js

const Kms = require('kms')

// bufferData can be a string or a Buffer object
// If it's a string it will be wrapped into Buffer
Kms.encrypt(kmsKeyId, bufferData)
    .then(ciphertextBlob => {
        // ciphertextBlob is a Buffer object
        console.log(ciphertextBlob.toString())
    })

```

# Decrypt data
```js

const Kms = require('kms')

// ciphertextBlob should be a Buffer object
Kms.decrypt(ciphertextBlob)
    .then(bufferData => {
        // bufferData is a Buffer object
        console.log(bufferData.toString())
    })

```

# License

   Copyright 2017 KKTV Co., Ltd.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
