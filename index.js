function copycode(identify) {
    var copyText = document.getElementById(identify);
    var copiedText = copyText.innerHTML.replaceAll(/^\s\s\s\s\s\s\s\s\s\s\s\s/gm, "").replaceAll("\n", "").replaceAll("<br>", "\n").replaceAll(/<span class="number">[\d\s]+<\/span>/gm, '').replaceAll(/<a class="copy" onclick="copycode\(`[\w-]+`\)"><i class="fa-regular fa-copy" aria-hidden="true"><\/i> Copy Code<\/a>/gm, '')
        .replaceAll("&lt;", '<').replaceAll("&gt;", '>').replaceAll("<code>", "").replaceAll("</code>", "").replaceAll("\s*$", "");
    navigator.clipboard.writeText(copiedText);
}