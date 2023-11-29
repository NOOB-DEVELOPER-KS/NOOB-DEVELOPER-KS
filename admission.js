var firebaseConfig = {
    apiKey: "AIzaSyCLfAwhZ03osnDbVfifj9zKgAOyY9qNq00",
    authDomain: "webcontactform-9d48b.firebaseapp.com",
    projectId: "webcontactform-9d48b",
    storageBucket: "webcontactform-9d48b.appspot.com",
    messagingSenderId: "79611818375",
    appId: "1:79611818375:web:7fe47c84493d75a708e322"
  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("admission");
  
  //Get Submit Form
  let submitButton = document.getElementById("submit");
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let Name = document.getElementById("name").value;
    let Stream = document.getElementById("stream").value;
    let Sslc = document.getElementById("sslc").value;
    let Hsc = document.getElementById("hsc").value;
    let Cutoff = document.getElementById("cutoff").value;
    let Dob = document.getElementById("dob").value;
    let Gender = document.getElementById("gender").value;
    let Phone = document.getElementById("phone").value;
  
    firestore
      .collection("admission")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const Phone = doc.data().phone;
          if (phone === Phone) {
            console.log("Already Exists");
          }
  
          // console.log("data", doc.data().fname);
        });
      });
    //Save Form Data To Firebase
    db.doc()
      .set({
        name: Name,
        stream: Stream,
        sslc: Sslc,
        hsc: Hsc,
        cutoff: Cutoff,
        dob: Dob,
        gender: Gender,
        fnaphoneme: Phone,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    alert("Your Form Has Been Submitted Successfully");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("admission").reset();
    }
    clearForm()
  });