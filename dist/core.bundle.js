(()=>{var e=o=>{console.log(o)};var n={reg:(o,s)=>{let t=window.location.href;o=`https://www.luogu.com.cn${o}`,e(o),e(t),t.search(o)===0&&s()}},r=n;r.reg("/",()=>{e("Hello World!")});})();
