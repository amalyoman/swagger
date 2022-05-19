alert();
	     var bridgeHandler = function (bridgeError, response, bridgeContext, bridgeBody) {
	        try {
	        		console.log("in try block");

	            bridgeContext = atob(bridgeContext);
	            bridgeBody = atob(bridgeBody);
	
	            var context = typeof bridgeContext === 'string' ? JSON.parse(bridgeContext) : bridgeContext;
	            if (!context.bridgeType) return;
	
	            var body = typeof bridgeBody === 'string' ? JSON.parse(bridgeBody) || {} : bridgeBody;
	            var error = bridgeError ? JSON.parse(bridgeError) : {};
	
	                alert(String((body.data).value));

	        } catch (err) {
	        	console.log("eror");
	            return;
	        }

	    };

	    var bg1 = bridgeHandler;
	
	
	
	
	    window.fetchToken = function () {
	
	        try {
	
	            var context = btoa(JSON.stringify({
	                bridgeType: "FETCH_TOKEN"
	            }));
	
	            var data = btoa(JSON.stringify({
	                key: "token"
	            }));
	            console.log("fetching Token");
	            NativeStore.getString(context, data, "bg1");
	        } catch (err) {
	           console.log("error in fetching");
	        }
	    };
       fetchToken();
