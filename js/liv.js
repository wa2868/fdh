function replaceShortcodes() {
    const shortcodes = {
        fd: { name: '720p', regex: /\[fd id='(.*?)'\]/g, url: 'https://www.fastdramahd.com/dl/' },
        egt: { name: 'GDTOT', regex: /\[egt id='(.*?)'\]/g, url: 'https://new17.gdtot.dad/file/' },
    };

    const contentContainers = document.querySelectorAll('.download-links');
    contentContainers.forEach(contentContainer => {
        let content = contentContainer.innerHTML;
        for (const key in shortcodes) {
            if (shortcodes.hasOwnProperty(key)) {
                content = content.replace(shortcodes[key].regex, function(match, id) {
                    return `<a href='${shortcodes[key].url}${id}' target='_blank' class="f-links">
                                ${shortcodes[key].name}
                            </a>`;
                });
            }
        }
        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);
