import mod from '../../core/core.js'
import { conlog } from '../../core/utils.js'
mod.reg('/', () => {
    conlog('Hello World!');
})
