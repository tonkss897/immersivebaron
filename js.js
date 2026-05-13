let forms = document.querySelectorAll("form");

forms.forEach(function(form) {
  form.onsubmit = function(event) {
    event.preventDefault();
    alert("Заявка отправлена");
  };
});