Const ForReading = 1
Const ForWriting = 2

strFileName = Wscript.Arguments(0)
strOldText = """[FULL_HTTP_URL_TO_JSAPI]"
strNewText = "(location.protocol === 'file:' ? 'http:' : location.protocol) + '//' + location.host + ""/"

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile(strFileName, ForReading)

strText = objFile.ReadAll
objFile.Close
strNewText = Replace(strText, strOldText, strNewText)

Set objFile = objFSO.OpenTextFile(strFileName, ForWriting)
objFile.WriteLine strNewText
objFile.Close