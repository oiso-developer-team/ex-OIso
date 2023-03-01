import { conlog } from "./utils";

const mod = {
    // todo: data, status
    reg: (url, func) => {
        curUrl = window.location.href;
        url = "https://www.luogu.com.cn" + url;
        conlog(url);
        conlog(curUrl);
        if (curUrl.search(url) === 0) {
            func();
        }
    }
};

export default mod;