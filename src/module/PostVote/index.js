import mod from "../../core/core.js";
import { conlog, gmGet } from "../../core/utils.js";

mod.reg("/", () => {
    const discussId = window.location.href.match(/[0-9]+/)[0];
    setTimeout(function () {
        const pannel = document.getElementsByClassName('am-panel')[0];
        pannel.innerHTML += `<p>
                <a id="forbutton" class="am-btn am-btn-primary am-btn-sm" style="margin-top: 5px;" num=0>👍_次点赞</a><span>&nbsp;</span><a class="am-btn am-btn-danger am-btn-sm" name="save-discuss" id="againstbutton" style="margin-top: 5px;" num=0>👎_次踩</a>
                <br>
                <button id="savebbsbutton" class="am-btn am-btn-success am-btn-sm" style="margin-top: 5px;">保存帖子</button><span>&nbsp;</span><a class="am-btn am-btn-warning am-btn-sm" name="save-discuss" target='_blank' href="https://lgbbs.oiso.cf/show.php?url=https://www.luogu.com.cn/discuss/${discussId}" style="margin-top: 5px;">查看备份</a>
                </p>`;
        document.getElementById("savebbsbutton").addEventListener("click", function () {
            document.getElementById("savebbsbutton").innerHTML = "保存中……";
            console.log("savebbs~!");
            const url = `https://lgbbs.oiso.cf/save.php?url=https://www.luogu.com.cn/discuss/${discussId}?page=1`;
            gmGet({
                method: "GET",
                url: url,
                onload: function (response) {
                    if (response.responseText == 'success') {
                        document.getElementById("savebbsbutton").innerHTML = "保存成功！";
                        setTimeout(function () {
                            document.getElementById("savebbsbutton").innerHTML = "再次保存";
                        }, 1000);
                    } else {
                        document.getElementById("savebbsbutton").innerHTML = "保存失败qwq";
                        setTimeout(function () {
                            document.getElementById("savebbsbutton").innerHTML = "重新保存";
                        }, 1000);
                    }
                }
            });
        });
        document.getElementById("forbutton").addEventListener("click", function () {
            document.getElementById("forbutton").innerHTML = "赞成中……";
            console.log("for~!");
            const url = `//online.oiso.cf/lgbbs/for?id=${discussId}`;
            gmGet({
                method: "GET",
                url: url,
                onload: function (response) {
                    if (JSON.parse(response.responseText).code == 200) {
                        document.getElementById("forbutton").innerHTML = "点赞成功！";
                        setTimeout(function () {
                            // 获取当前点赞数
                            const forCount = document.getElementById("forbutton").getAttribute("num");
                            // 设置新的点赞数
                            document.getElementById("forbutton").setAttribute("num", parseInt(forCount) + 1);
                            // 设置新的点赞数
                            document.getElementById("forbutton").innerHTML = `👍${parseInt(forCount) + 1}次点赞`;
                        }, 1000);
                    } else {
                        document.getElementById("forbutton").innerHTML = "赞成失败qwq";
                        setTimeout(function () {
                            // 获取当前点赞数
                            const forCount = document.getElementById("forbutton").getAttribute("num");
                            // 设置新的点赞数
                            document.getElementById("forbutton").innerHTML = `👍${forCount}次点赞`;
                        }, 1000);
                    }
                }
            });
        });
        document.getElementById("againstbutton").addEventListener("click", function () {
            document.getElementById("againstbutton").innerHTML = "反对中……";
            console.log("against~!");
            const url = `//online.oiso.cf/lgbbs/against?id=${discussId}`;
            gmGet({
                method: "GET",
                url: url,
                onload: function (response) {
                    if (JSON.parse(response.responseText).code == 200) {
                        document.getElementById("againstbutton").innerHTML = "踩成功！";
                        setTimeout(function () {
                            // 获取当前点赞数
                            const againstCount = document.getElementById("againstbutton").getAttribute("num");
                            // 设置新的点赞数
                            document.getElementById("againstbutton").setAttribute("num", parseInt(againstCount) + 1);
                            // 设置新的点赞数
                            document.getElementById("againstbutton").innerHTML = `👎${parseInt(againstCount) + 1}次踩`;
                        }, 1000);
                    } else {
                        document.getElementById("againstbutton").innerHTML = "反对失败qwq";
                        setTimeout(function () {
                            // 获取当前点赞数
                            const againstCount = document.getElementById("againstbutton").getAttribute("num");
                            // 设置新的点赞数
                            document.getElementById("againstbutton").innerHTML = `👎${againstCount}次踩`;
                        }, 1000);
                    }
                }
            });
        });
        gmGet({
            method: "GET",
            url: `//online.oiso.cf/lgbbs/get?id=${discussId}`,
            onload: function (response) {
                console.log(response.responseText);
                if (JSON.parse(response.responseText).code == 200) {
                    const data = JSON.parse(response.responseText);
                    document.getElementById("forbutton").setAttribute("num", data.for);
                    document.getElementById("forbutton").innerHTML = `👍${data.for}次点赞`;
                    document.getElementById("againstbutton").setAttribute("num", data.against);
                    document.getElementById("againstbutton").innerHTML = `👎${data.against}次踩`;
                }
            }
        });
    }, 750);
});
