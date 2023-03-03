// Utils for ex-oiso

export const gmPost = (url, data, headers = {}, type = "application/json") => {
    const res = new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url,
            method: "POST",
            data: typeof data !== "string" ? JSON.stringify(data) : data,
            headers: {
                "Content-Type":
                    typeof data === "string" ? type : "application/json",
                ...headers,
            },
            onload: (r) => {
                let parsedData;
                try {
                    parsedData = JSON.parse(r.responseText);
                } catch {} // eslint-disable-line
                resolve({
                    ...r,
                    data: parsedData,
                });
            },
            onerror: reject,
        });
    });
    return res;
};

export const gmGet = (url, headers = {}) => {
    const res = new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url,
            method: "GET",
            headers,
            onload: (r) => {
                let parsedData;
                try {
                    parsedData = JSON.parse(r.responseText);
                } catch (e) {} // eslint-disable-line
                resolve({
                    ...r,
                    data: parsedData,
                });
            },
            onerror: reject,
        });
    });
    return res;
};

export const sleep = (t) => new Promise((res) => {
    setTimeout(res, t);
});

export const conlog = (txt) => {
    console.log(txt);
};

export const requestWithCache = (url, callback) => {
    // 从缓存中读取数据
    var cache = JSON.parse(localStorage.getItem('cache'));
    if (cache == null) {
        cache = {};
    }
    if (cache[url] != null) {
        console.log("cache hit.");
        console.log(cache[url]);
        callback(cache[url]);
        if (new Date().getTime() - cache[url].updateTime < 1000 * 60 * 60 * 24) {
            // 缓存数据不超过一天，不需要更新
            return;
        } else {
            // 缓存数据超过一天，需要更新
            console.log("but the cache has expired.");
        }
    }
    // 缓存中没有数据，从服务器获取数据
    console.log("cache miss.");
    // 蓝色console.log
    console.log("%c[requestWithCache] url = " + url, "color: blue");
    GM_xmlhttpRequest({
        method: "GET",
        url: url,
        onload: function (response) {
            // 将数据缓存到本地
            const res = { "responseText": response.responseText, "status": response.status, "updateTime": new Date().getTime() };
            cache[url] = res;
            console.log("%c[requestWithCache] res = " + res, "color: blue");
            localStorage.setItem('cache', JSON.stringify(cache));
            callback(res);
        }
    });
}

export const clearCache = () => {
    localStorage.removeItem('cache');
}