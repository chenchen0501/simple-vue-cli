// api出口
// import { importAll } from '@/utils'

// const map = importAll(require.context('./', false, /.js$/))

// const names = []

// for (let key in map) {
//   if (key !== "./index.js") {
//     const newKey = key.replace(/\.\//g, "").replace(/.js$/g, "");
//     names.push(newKey)
//   }
// }

import user from './user'

export default {
  ...user
}