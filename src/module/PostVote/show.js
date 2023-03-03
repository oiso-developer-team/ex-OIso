import mod from "../../core/core.js";
import { conlog, gmPost } from "../../core/utils.js";

mod.reg("/", () => {
    // 获取所有 /discuss/show?postid=<数字> 的<a>标签
    const discussList = document.querySelectorAll("a[href^='/discuss/show?postid=']");
    // 遍历所有的帖子
    var ids = [];
    for (let i = 0; i < discussList.length; i++) {
        // 获取帖子的id
        const discussId = discussList[i].getAttribute("href").split("=")[1];
        // 添加到ids数组中
        ids.push(discussId);
    }
    // 获取这些帖子的赞/踩
    gmPost({
        method: "POST",
        url: "//online.oiso.cf/lgbbs/getlist",
        data: JSON.stringify(ids),
        headers: {
            "Content-Type": "application/json"
        },
        onload: function (response) {
            console.log(response.responseText);
            if (JSON.parse(response.responseText).code == 200) {
                const data = JSON.parse(response.responseText);
                // 遍历所有的帖子
                for (let i = 0; i < discussList.length; i++) {
                    // 获取帖子的id
                    const discussId = discussList[i].getAttribute("href").split("=")[1];
                    // 获取帖子的赞/踩
                    const discussData = data[discussId];
                    // 获取帖子的标题
                    const discussTitle = discussList[i].innerHTML;
                    // 设置新的标题
                    discussList[i].innerHTML = `${discussTitle} <div style="float:right;">[&#8593;${discussData.for} &#8595;${discussData.against}]</div>`;
                }
            }
        }
    });
});