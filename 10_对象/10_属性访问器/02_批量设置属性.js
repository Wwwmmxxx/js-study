'use strict'
const web = {
  name: '后盾人',
  url: 'houdunren.com',
  get site() {
    return `${this.name},${this.url}`;
  },
  set site(value) {
    [this.name, this.url] = value.split(',');
  }
}

web.site = "后盾人,hdcms.com";
console.log(web.site); // 后盾人,hdcms.com