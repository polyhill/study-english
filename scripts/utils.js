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