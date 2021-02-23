/* <p>后盾人</p>
<h1>houdunren.com</h1>
<h2>hdcms.com</h2> */

let body = document.body;
let reg = /<(h[1-6])>[\s\S]*<\/\1>/gi
body.innerHTML = body.innerHTML.replace(reg,"");