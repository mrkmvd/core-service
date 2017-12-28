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

logTicket:function () {
  console.log(userInfo.userId);
  firebase.database().ref('users/' + userInfo.userId).set({
    email: userInfo.email,
    profile_picture : userInfo.profileImage,
    teamId:userInfo.teamId,
    userId:userInfo.userId,
    displayName:userInfo.displayName
  });
}



};

