var firebase = require('firebase')

module.exports = {

init : function() {

	 var config={
	    apiKey: "AIzaSyAgyMw1Hr-q5-v3cd5klal0luRAwpcCyug",
	    authDomain: "agent21-165007.firebaseapp.com",
	    databaseURL: "https://agent21-165007.firebaseio.com",
	    projectId: "agent21-165007",
	    storageBucket: "agent21-165007.appspot.com",
	      messagingSenderId: "482518908870",
	};

	firebase.initializeApp(config);
	return firebase;

},

logTicket:function (slackPostBody) {


  var ticketData = {
  	channel:slackPostBody.channel.id,
  	createdBy:slackPostBody.user.id,
  	priority:"high",
  	status:"New",
  	messageId:slackPostBody.callback_id,
  	timestamp:slackPostBody.action_ts,



  };
  var ticketKey =firebase.database().ref('tickets/').push().key;
	var updates={};
	updates['tickets/'+ticketKey]= ticketData;
	
	
	var messageRef = firebase.database().ref('messages/').child(slackPostBody.callback_id);
	messageRef.update({
		ticketId: ticketKey
	});



	firebase.database().ref().update(updates);
		
},


};

