// Utils for ex-oiso

export const gmPost = (
    url, data, headers = {}, type = 'application/json'
) => {
    const res = new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url,
            method: 'POST',
            data: typeof data !== 'string' ? JSON.stringify(data) : data,
            headers: {
                'Content-Type':
                    typeof data === 'string' ? type : 'application/json',
                ...header
            },
            onload: (r) => {
                let parsedData
                try {
                    parsedData = JSON.parse(r.responseText)
                } catch {}
                resolve({
                    ...r,
                    data: parsedData
                })
            },
            onerror: reject
        });
    })
    return chain(res);
}

export const gmGet = (
    url, headers = {}
) => {
    const res = new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url,
            method: 'GET',
            headers,
            onload: (r) => {
                let parsedData
                try {
                    parsedData = JSON.parse(r.responseText)
                } catch (e) {}
                resolve({
                    ...r,
                    data: parsedData
                })
            },
            onerror: reject
        })
    })
    return chain(res)
}

export const sleep = () => new Promise((res) => {
    setTimeout(res, t)
})

export const conlog = (txt) => {
    console.log(txt)
}