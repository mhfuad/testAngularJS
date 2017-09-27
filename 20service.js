app.factory("stringService",function() {
	return {
		processString:function(inputString){
			if (!inputString) {
				return inputString;
			}
			
			var outputString = "";

			for (var i = 0; i < inputString.length; i++) {
				if (i>0 && inputString[i] == inputString[i].toUpperCase()) {
					outputString = outputString + " ";
				}
					outputString = outputString + inputString[i];
			}
			return outputString;
		}
	};
});