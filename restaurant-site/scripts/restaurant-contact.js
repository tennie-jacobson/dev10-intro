function clearErrors() {
  for(var i = 0; i < document.forms["userInquiry"].elements.length; i++) {
    if(document.forms["userInquiry"].elements[i]
          .parentElement.className.indexOf("has-") != -1) {
      document.forms["userInquiry"].elements[i].parentElement.className = "form-group";
    }
  }
}

function validateForm() {
  clearErrors();

  var userName =  document.forms["userInquiry"]["userName"].value;
  var userEmail =  document.forms["userInquiry"]["userEmail"].value;
  var userPhone = document.forms["userInquiry"]["userPhone"].value;

  if(userName == isNaN(userName) || userName == "") {
    alert("Name is a required field.");
    document.forms["userInquiry"]["userName"].parentElement.className = "form-group has-error";
    document.forms["userInquiry"]["userName"].focus();
    return false;
  }
  if(userEmail == isNaN(userEmail) || userEmail == "") {
    alert("Email is a required field.");
    document.forms["userInquiry"]["userEmail"].parentElement.className = "form-group has-error";
    document.forms["userInquiry"]["userEmail"].focus();
    return false;
  }
  if(userPhone == isNaN(userPhone) || userPhone == "") {
    alert("Phone number is a required field.");
    document.forms["userInquiry"]["userPhone"].parentElement.className = "form-group has-error";
    document.forms["userInquiry"]["userPhone"].focus();
    return false;
  }
  alert("Form was successfully submitted");
  // return false to avoid submitting form.
  return false;
}
