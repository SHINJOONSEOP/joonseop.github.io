// markdown-viewer.js
function loadMarkdown(filePath) {
    fetch(filePath)
      .then(res => res.text())
      .then(md => {
        const html = marked.parse(md);
        document.getElementById("content").innerHTML = html;
      })
      .catch(err => {
        document.getElementById("content").innerHTML = "<p>파일을 불러올 수 없습니다.</p>";
      });
  }