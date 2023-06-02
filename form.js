
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

 // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";

 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {

     apiKey: "AIzaSyC2n08_FOeIGz100L_9lGtvQJNRhdrpY5U",

     authDomain: "school-website-f7bad.firebaseapp.com",

     databaseURL: "https://school-website-f7bad-default-rtdb.asia-southeast1.firebasedatabase.app",

     projectId: "school-website-f7bad",

     storageBucket: "school-website-f7bad.appspot.com",

     messagingSenderId: "92715865877",

     appId: "1:92715865877:web:6809fb0644372b437dbb1c",

     measurementId: "G-CSK54CW5TF"

 };


 // Initialize Firebase

 const app = initializeApp(firebaseConfig);

 // const analytics = getAnalytics(app);


 import { getDatabase, ref, get, set, child, update, remove }
     from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";


 const db = getDatabase();

 var name = document.querySelector("#name");
 var _Class = document.querySelector("#Class");
 var Section = document.querySelector("#Section");
 var fathername = document.querySelector("#fathername");
 var mothername = document.querySelector("#mothername");
 var birthday = document.querySelector("#birthday");
 var ACN = document.querySelector("#ACN");
 var ContactNo = document.querySelector("#ContactNo");
 var WPC = document.querySelector("#WPC");
 var address = document.querySelector("#address");
 var R = document.querySelector("#R");
 var Caste = document.querySelector("#Caste");
 var gender_details = document.querySelector("#gender_details");


 // var fileInp = document.querySelector("#fileInp");
 var BankName = document.querySelector("#BankName");
 var BankBranch = document.querySelector("#BankBranch");
 var alpha = document.querySelector("#alpha");
 var BankAccount = document.querySelector("#BankAccount");

 var findname = document.querySelector("#findname");
 var findClass = document.querySelector("#findClass");
 var findSection = document.querySelector("#findSection");
 var findfathername = document.querySelector("#findfathername");
 var findmothername = document.querySelector("#findmothername");
 var findbirthday = document.querySelector("#findbirthday");
 var findACN = document.querySelector("#findACN");
 var findContactNo = document.querySelector("#findContactNo");
 var findWPC = document.querySelector("#findWPC");
 var findaddress = document.querySelector("#findaddress");
 var findR = document.querySelector("#findR");
 var findCaste = document.querySelector("#findCaste");
 var findgender_details = document.querySelector("#findgender_details");
 var findfileInp = document.querySelector("#findfileInp");
 var findBankName = document.querySelector("#findBankName");
 var findBankBranch = document.querySelector("#findBankBranch");
 var findalpha = document.querySelector("#findalpha");
 var findBankAccount = document.querySelector("#findBankAccount");


 var Submit = document.querySelector("#Submit");

        var insertBtn = document.querySelector("#insert");
        var updateBtn = document.querySelector("#update");
        var removeBtn = document.querySelector("#remove");
        var findBtn = document.querySelector("#find");

       
        function InsertData() {
            set(ref(db, "School/" + name.value), {
                name: name.value,
                Class: _Class.value,
                Section: Section.value,
                fathername: fathername.value,
                mothername: mothername.value,
                birthday: birthday.value,
                ACN: ACN.value,
                ContactNo: ContactNo.value,
                WPC: WPC.value,
                address: address.value,
                R: R.value,
                Caste: Caste.value,
                gender_details: gender_details.value,

                // fileInp : fileInp.value,
                BankName: BankName.value,
                BankBranch: BankBranch.value,
                alpha: alpha.value,
                BankAccount: BankAccount.value

            })
                .then(() => {
                    alert("Data added successfully");
                })
                .catch((error) => {
                    alert(error);
                });
        }

        function FindData() {
            const dbref = ref(db);

            get(child(dbref, "School/" + name.value))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        findname.innerHTML = "Name: " + snapshot.val().name;
                        findClass.innerHTML = "Class: " + snapshot.val().Class;
                        findSection.innerHTML = "Sec: " + snapshot.val().Section;
                        findfathername.innerHTML = "Fname: " + snapshot.val().fathername;
                        findmothername.innerHTML = "Mname: " + snapshot.val().mothername;
                        findbirthday.innerHTML = "DOB: " + snapshot.val().birthday;
                        findACN.innerHTML = "ACN: " + snapshot.val().ACN;
                        findContactNo.innerHTML = "ContactNo: " + snapshot.val().ContactNo;
                        findWPC.innerHTML = "WPC: " + snapshot.val().WPC;
                        findaddress.innerHTML = "Address: " + snapshot.val().address;
                        findR.innerHTML = "Religion: " + snapshot.val().R;
                        findCaste.innerHTML = "Caste:" + snapshot.val().Caste;
                        findgender_details.innerHTML = "Gender:" + snapshot.val().gender_details;
                        //  findfileInp = "Image:"+snapshot.val().Caste;
                        findBankName.innerHTML = "Bank Name:" + snapshot.val().BankName;
                        findBankBranch.innerHTML = "Branch:" + snapshot.val().BankBranch;
                        findalpha.innerHTML = "IFSC code:" + snapshot.val().alpha;
                        findBankAccount.innerHTML = "BA No:" + snapshot.val().BankAccount;
                    } else {
                        alert("No data found");
                    }
                })
                .catch((error) => {
                    alert(error)
                })

        }


        function UpdateData(){
            update(ref(db, "People/"+ enterID.value),{
                Name: enterName.value,
                Age: enterAge.value
            })
            .then(()=>{
                alert("Data updated successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        function RemoveData(){
            remove(ref(db, "People/"+ enterID.value))
            .then(()=>{
                alert("Data deleted successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        Submit.addEventListener('click', InsertData);
        // updateBtn.addEventListener('click', UpdateData);
        // removeBtn.addEventListener('click', RemoveData);
        findBtn.addEventListener('click', FindData);
  