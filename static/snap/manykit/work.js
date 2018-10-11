onmessage = function(event) {
  importScripts('manykit/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}