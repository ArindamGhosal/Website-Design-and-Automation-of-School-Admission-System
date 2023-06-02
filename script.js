const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCcJzxqAHsbQObRsLROpLSzGfh6XlQXsR8",
    authDomain: "auth-production-7b74a.firebaseapp.com",
    projectId: "auth-production-7b74a",
    storageBucket: "auth-production-7b74a.appspot.com",
    messagingSenderId: "93720868569",
    appId: "1:93720868569:web:190524e559c081de06f0c8"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const errorMessage=document.getElementById("error_message")
const register = () => {

    const email = document.getElementById("signup_email").value
    const password = document.getElementById("signup_password").value
    console.log(email,password)

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

 const login = () => {
    const email = document.getElementById('signin_email').value
    const password = document.getElementById('signin_password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
        errorMessage.textContent=""
    })
    .catch((err) => {
        alert(err.message)
        errorMessage.textContent="Invalid email or wrong password"
        //console.log(err.code)
        //console.log(err.message)
    })
 }

// const saveData = () => {
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value

//     db.collection('users')
//     .add({
//         email: email,
//         password: password
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
// }

// const readData = () => {
//     db.collection('users')
//     .get()
//     .then((data) => {
//         console.log(data.docs.map((item) => {
//             return {...item.data(), id: item.id}
//         }))
//     })
// }

// const updateData = () => {
//     db.collection('users').doc('6caYOiNxwviOJFIQ4Uag')
//     .update({
//         email: 'ashishisagoodboy1234@gmail.com',
//         password: '123456'
//     })
//     .then(() => {
//         alert('Data Updated')
//     })
// }

// const deleteData = () => {
//     db.collection('users').doc('6caYOiNxwviOJFIQ4Uag').delete()
//     .then(() => {
//         alert('Data Deleted')
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }
