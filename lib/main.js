const pageMod = require("page-mod");
const self = require('self');

pageMod.add({
  include: '*',
  contentScriptWhen: 'ready',
  contentScript: self.data.load('hoge.js'),
  onAttach: function onAttach(worker, mod) {
    console.log("onAttach");
  }
});
