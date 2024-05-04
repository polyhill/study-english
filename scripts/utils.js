function build_md(element, md_path){
    var markdown = readText(md_path)
    var converter = new showdown.Converter({'simpleLineBreaks': true, 'tables': true});
    element.innerHTML = converter.makeHtml(markdown);
}

function readText(textFile) {
    "use strict";
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("Get", textFile, false);
    rawFile.onreadystatechange = function()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function getParam(name){
    var queryString = location.search
    var params = new URLSearchParams(queryString)
    return params.get(name)
}

function readLines(textFile){
    "use strict";
    return readText(textFile).split(/\r\n|\n/);;
}

/**
 * @param {String} HTML representing a single element.
 * @param {Boolean} flag representing whether or not to trim input whitespace, defaults to true.
 * @return {Element | HTMLCollection | null}
 */
function fromHTML(html, trim = true) {
    if (!html) return null;

    // Process the HTML string.
    html = trim ? html.trim() : html;
    
    // Then set up a new template element.
    const template = document.createElement('template');
    template.innerHTML = html;
    const result = template.content.children;
  
    // Then return either an HTMLElement or HTMLCollection,
    // based on whether the input HTML had one or more roots.
    if (result.length === 1) return result[0];
    return result;
  }