import { changeTimesDark } from './js/changeTimesDark.js';

try {
    changeTimesDark();
    hljs.initHighlightingOnLoad();
}
catch(err) {
    console.err(err)
}








