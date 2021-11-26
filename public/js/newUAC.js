async function newUAChandler(event) {
  console.log("NewUAC.js");
  event.preventDefault();
  const a_number = document.querySelector("#a-number").value;
  const uacname = document.querySelector("#uac-name").value;
  const dob = document.querySelector("#dob").value;
  const coo = document.querySelector("#coo").value;
  const intake = document.querySelector("#date-admitted").value;
  const gender = document.querySelector("#gender").value;
  const newUACModal = document.querySelector("#new-uac-modal");

  const response = await fetch("/api/uac", {
    method: "post",
    body: JSON.stringify({
      a_number,
      uacname,
      dob,
      coo,
      intake,
      gender,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    newUACModal.classList.remove("is-active");
    document.location.replace("/table");
    console.log(response);
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector("#save-new-uac")
  .addEventListener("click", newUAChandler);
