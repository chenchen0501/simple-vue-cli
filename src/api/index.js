// api出口
import { importAll } from '@/utils'

const map = importAll(require.context('./', false, /.js$/))

let allApis = {}

for (let key in map) {
  if (key !== "./index.js") {
    allApis = {...allApis, ...map[key].default}
  }
}

export default allApis;