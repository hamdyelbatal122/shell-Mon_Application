function getFileName(e){return e.replace(/[^0-9 ]/g,"")}function updateTitle(e){document.getElementById("currcomp").title=e,document.getElementById("currcomp").innerHTML=document.getElementById(e).innerHTML}function setFrame(e){var t=window.frames[0],n=t.location.href,o=n.lastIndexOf("/");n=n.substring(0,o);window.location.href;t.location.href=e}function getFramePath(){var e=document.createElement("a");e.href=window.frames[0].location.href;var t=e.pathname;switch(!0){case/\/today.html/.test(t):selectedComponentId="gif";break;case/\/instances\/[a-z]*\/$/.test(t):case/\/instances\/[a-z]*\/([0-9]*.html)$/.test(t):selectedComponentId=t.split("/").reverse().join("/").split("/")[1];break;case/\/([0-9]*.html)$/.test(t):selectedComponentId="gif"}}function choosefName(e,t){return void 0===t?"gif"!=e?"/instances/"+e+"/":"today.html":"gif"!=e?"/instances/"+e+"/"+t:t}function choosingComp(){fordate=document.getElementById("dt").value,compId=document.getElementById("currcomp").title;var e=(new Date).toJSON().slice(0,10).replace(/-/g,"-");fordate==e||""==fordate?filename=choosefName(compId):(datefile=getFileName(fordate)+".html",filename=choosefName(compId,datefile)),setFrame(filename)}function resizeIframe(e){var t=e.contentWindow.document.body.scrollHeight,n=e.contentWindow.document.body.scrollWidth;e.height=t+20,e.width=n+20}