
document.getElementById("login").onclick = () =>{

    // get email and password

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // invoke firebase

    firebaseConfig.auth().signInWithEmailAndPassword(email,password)
    .then((userCredentials) =>{

        let user = userCredentials.user;
        let uid = user.uid;

    //    check the usertype
    firebaseConfig.firestore().collection("users")
    .doc(uid).get().then((doc) =>{

        let userType = doc.data().userType;

        if(userType == "admin"){
            window.location.href = "/admin/"
        }
    })
    }).catch((error) =>{
        console.log(error.message)
    })
}