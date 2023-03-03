import mod from "../../core/core.js";
import { conlog, gmGet } from "../../core/utils.js";

mod.reg("/", () => {
    var avatars = document.getElementsByClassName('am-comment-avatar');
    for (let i = 0; i < avatars.length; i++) {
        const avatar = avatars[i];
        console.log(avatar);
        const uid = avatar.src.split('/')[5].split('.')[0];
        console.log(uid);
        // avatar 是一个 img 标签
        // 添加一张头像挂件图片，刚好覆盖在头像上面
        var avatarPendant = document.createElement('img');
        requestWithCache("https://online.oiso.cf/pendant/get?uid=" + uid, function (response) {
            if (response.responseText != 'False') {
                console.log(response.responseText);
                avatarPendant.src = response.responseText;
                // avatarPendant.style.position = 'absolute';
                avatarPendant.className = 'am-comment-avatar-pendant';
                avatarPendant.style.top = '0';
                avatarPendant.style.left = '0';
                avatarPendant.style.height = '48px';
                // 中心放大
                avatarPendant.style.transform = 'scale(1.35)';
                avatarPendant.style.marginLeft = '-48px';
                avatarPendant.style.borderRadius = '5%';
                avatarPendant.style.opacity = '0.75';
                // 父元素的后面插入
                avatar.parentNode.insertBefore(avatarPendant, avatar.nextSibling);
            }
        });
    }
    var my_avatar = document.getElementsByClassName('avatar')[0];
    if (my_avatar) { // 右上角的头像
        const uid = my_avatar.src.split('/')[5].split('.')[0];
        console.log("my_avatar", uid);
        requestWithCache("https://online.oiso.cf/pendant/get?uid=" + uid, function (response) {
            console.log(response.responseText);
            if (response.responseText != 'False') {
                var my_avatar_pendant = document.createElement('img');
                my_avatar_pendant.src = response.responseText;
                my_avatar_pendant.className = 'am-comment-avatar-pendant';
                my_avatar_pendant.style.top = '0';
                my_avatar_pendant.style.right = '0';
                my_avatar_pendant.style.height = '35px';
                my_avatar_pendant.style.transform = 'scale(1.35)';
                my_avatar_pendant.style.borderRadius = '5%';
                my_avatar_pendant.style.opacity = '0.75';
                my_avatar_pendant.style.position = 'absolute';
                my_avatar.parentNode.insertBefore(my_avatar_pendant, my_avatar.nextSibling);
            }
        });
    }
    if (location.href.indexOf("https://www.luogu.com.cn/user/") != -1) {
        var uid;
        if (document.getElementsByClassName('avatar')[1]) {
            uid = document.getElementsByClassName('avatar')[1].src.split('/')[5].split('.')[0];
            console.log(uid);
            requestWithCache("https://online.oiso.cf/pendant/get?uid=" + uid, function (response) {
                console.log(response.responseText);
                if (response.responseText != 'False') {
                    var my_avatar_pendant = document.createElement('img');
                    my_avatar_pendant.src = response.responseText;
                    my_avatar_pendant.className = 'am-comment-avatar-pendant';
                    my_avatar_pendant.style.bottom = '25px';
                    my_avatar_pendant.style.left = '25px';
                    my_avatar_pendant.style.height = '64px';
                    my_avatar_pendant.style.transform = 'scale(1.35)';
                    my_avatar_pendant.style.borderRadius = '5%';
                    my_avatar_pendant.style.opacity = '0.75';
                    my_avatar_pendant.style.position = 'absolute';
                    document.getElementsByClassName('avatar')[1].parentNode.insertBefore(my_avatar_pendant, document.getElementsByClassName('avatar')[1].nextSibling);
                }
            });
        }
        if (document.getElementsByClassName('avatar')[2]) {
            for (let i = 2; i < document.getElementsByClassName('avatar').length; i++) {
                requestWithCache("https://online.oiso.cf/pendant/get?uid=" + uid, function (response) {
                    console.log(response.responseText);
                    if (response.responseText != 'False') {
                        const element = document.getElementsByClassName('avatar')[i];
                        var my_avatar_pendant = document.createElement('img');
                        my_avatar_pendant.src = response.responseText;
                        my_avatar_pendant.className = 'am-comment-avatar-pendant';
                        my_avatar_pendant.style.top = '10px';
                        my_avatar_pendant.style.left = '0px';
                        my_avatar_pendant.style.height = '60px';
                        my_avatar_pendant.style.transform = 'scale(1.35)';
                        my_avatar_pendant.style.borderRadius = '5%';
                        my_avatar_pendant.style.opacity = '0.75';
                        my_avatar_pendant.style.position = 'absolute';
                        element.parentNode.insertBefore(my_avatar_pendant, element.nextSibling);
                    }
                });
            }
        }
    } else if (location.href.indexOf("https://www.luogu.com.cn/record/list") != -1) {
        for (let i = 1; i < document.getElementsByClassName('avatar').length; i++) {
            const element = document.getElementsByClassName('avatar')[i];
            const uid = document.getElementsByClassName('avatar')[i].children[0].src.split('/')[5].split('.')[0];
            console.log(uid);
            requestWithCache("https://online.oiso.cf/pendant/get?uid=" + uid, function (response) {
                console.log(response.responseText);
                if (response.responseText != 'False') {
                    var my_avatar_pendant = document.createElement('img');
                    my_avatar_pendant.src = response.responseText;
                    my_avatar_pendant.className = 'am-comment-avatar-pendant';
                    my_avatar_pendant.style.marginLeft = '-45px';
                    my_avatar_pendant.style.marginTop = '12px';
                    my_avatar_pendant.style.height = my_avatar_pendant.style.width = '35px';
                    my_avatar_pendant.style.transform = 'scale(1.35)';
                    my_avatar_pendant.style.borderRadius = '5%';
                    my_avatar_pendant.style.opacity = '0.75';
                    element.parentNode.insertBefore(my_avatar_pendant, element.nextSibling);
                }
            });
        }
    } else if (location.href.indexOf("https://www.luogu.com.cn/problem/solution/") != -1) {
        for (let i = 1; i < document.getElementsByClassName('avatar').length; i++) {
            const element = document.getElementsByClassName('avatar')[i];
            const uid = document.getElementsByClassName('avatar')[i].src.split('/')[5].split('.')[0];
            console.log(uid);
            requestWithCache("https://online.oiso.cf/pendant/get?uid=" + uid, function (response) {
                console.log(response.responseText);
                if (response.responseText != 'False') {
                    var my_avatar_pendant = document.createElement('img');
                    my_avatar_pendant.src = response.responseText;
                    my_avatar_pendant.className = 'am-comment-avatar-pendant';
                    my_avatar_pendant.style.marginLeft = '-3em';
                    my_avatar_pendant.style.marginTop = '0px';
                    my_avatar_pendant.style.height = my_avatar_pendant.style.width = '2em';
                    my_avatar_pendant.style.transform = 'scale(1.35)';
                    my_avatar_pendant.style.borderRadius = '5%';
                    my_avatar_pendant.style.opacity = '0.75';
                    element.parentNode.insertBefore(my_avatar_pendant, element.nextSibling);
                }
            });
        }
    }
});