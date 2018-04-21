var subDivCount = 1;

var editorDiv = document.getElementById('source');
var Range = require('ace/range').Range;
var editor = ace.edit('source');

// Initialize ace
editor.getSession().setMode('ace/mode/javascript');
editor.setFontSize(12);
editor.setOption("maxLines", 100);


function displayFunction(code) {
    // Temporary
    var div = document.createElement("div");
    div.id = "func" + subDivCount.toString();
    document.body.insertBefore(div, null);
    subDivCount++;
    code = "function reverse(str) {\n" +
           "    if (str === \"\") {\n" +
           "        return\"\";\n" +
           "    }else{\n" +
           "        return reverse(str.substr(i)) + str[0];\n" +
           "    }\n" +
           "}";
    var tempEditor = ace.edit(div.id);
    tempEditor.getSession().setMode('ace/mode/javascript');
    tempEditor.setFontSize(12);
    tempEditor.setOption("maxLines", 10);
    tempEditor.session.setValue(code);
    var lineNumber = tempEditor.session.getLength();
    tempEditor.gotoLine(lineNumber);
}