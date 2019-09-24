/* Create your bookmarklet using the javascript: line in this comment block.
 * The long form representation is so you can see what it's doing.
 * To convert between longform and bookmarklet use an urlencode tool (in VSCode 
 * there's a crypto-tools extension that provides this), but there are online
 * tools too.
 * 
javascript:(function()%20{%20var%20textArea%20=%20$("textarea.gwt-TextArea")[0];%20var%20oldCode%20=%20textArea.value;%20var%20multiLines%20=%20(oldCode.indexOf("\n")%20!==%20oldCode.lastIndexOf("\n"));%20if(multiLines){%20alert("Won't%20operate%20on%20multiline%20expression");%20}%20var%20noSemiColon%20=%20(oldCode.lastIndexOf(";")%20==%20-1);%20var%20parts%20=%20oldCode.split(".");%20var%20newCode%20=%20'var%20usingJava8=%20typeof%20Java%20!==%20"undefined"%20&&%20Java%20&&%20typeof%20Java.type%20===%20"function";'%20+%20"\n";%20newCode%20+=%20"if%20(usingJava8)%20{\n";%20newCode%20+=%20"\t//%20logic%20for%20Java%208%20goes%20here\n";%20newCode%20+=%20"\tvar%20jsArray%20=%20Java.from("%20+%20parts[0]%20+%20");\n";%20newCode%20+=%20"\tjsArray."%20+%20parts[1]%20+%20";\n";%20newCode%20+=%20"}%20else%20{\n";%20newCode%20+=%20"\t//logic%20for%20Java%207%20and%20earlier%20go%20here\n";%20if(noSemiColon){%20newCode%20+=%20"\t"%20+%20oldCode%20+%20";\n";%20}%20else%20{%20newCode%20+=%20"\t"%20+%20oldCode%20+%20"\n";%20}%20newCode%20+=%20"}";%20textArea.value%20=%20newCode;%20}()); 
 */

(function() {
  var textArea = $("textarea.gwt-TextArea")[0];
  var oldCode = textArea.value;
  var multiLines = oldCode.indexOf("\n") !== oldCode.lastIndexOf("\n");
  if (multiLines) {
    alert("Won't operate on multiline expression");
  }
  var noSemiColon = oldCode.lastIndexOf(";") == -1;
  var parts = oldCode.split(".");
  var newCode =
    'var usingJava8= typeof Java !== "undefined" && Java && typeof Java.type === "function";' +
    "\n";
  newCode += "if (usingJava8) {\n";
  newCode += "\t// logic for Java 8 goes here\n";
  newCode += "\tvar jsArray = Java.from(" + parts[0] + ");\n";
  newCode += "\tjsArray." + parts[1] + ";\n";
  newCode += "} else {\n";
  newCode += "\t//logic for Java 7 and earlier go here\n";
  if (noSemiColon) {
    newCode += "\t" + oldCode + ";\n";
  } else {
    newCode += "\t" + oldCode + "\n";
  }
  newCode += "}";
  textArea.value = newCode;
})();
