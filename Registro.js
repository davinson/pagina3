function ValidateRegistro(theForm)
{
   var regexp;
   regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
   if (!regexp.test(theForm.Editbox1.value))
   {
      alert("Solo puede contener letras");
      theForm.Editbox1.focus();
      return false;
   }
   if (theForm.Editbox1.value == "")
   {
      alert("Solo puede contener letras");
      theForm.Editbox1.focus();
      return false;
   }
   if (theForm.Editbox1.value.length > 20)
   {
      alert("Solo puede contener letras");
      theForm.Editbox1.focus();
      return false;
   }
   regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
   if (!regexp.test(theForm.Editbox2.value))
   {
      alert("Solo puede contener letras");
      theForm.Editbox2.focus();
      return false;
   }
   if (theForm.Editbox2.value == "")
   {
      alert("Solo puede contener letras");
      theForm.Editbox2.focus();
      return false;
   }
   if (theForm.Editbox2.value.length > 20)
   {
      alert("Solo puede contener letras");
      theForm.Editbox2.focus();
      return false;
   }
   regexp = /(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)[0-9]{2}/;
   if (!regexp.test(theForm.Editbox3.value))
   {
      alert("inserte en formato ddmmaaaa");
      theForm.Editbox3.focus();
      return false;
   }
   if (theForm.Editbox3.value == "")
   {
      alert("inserte en formato ddmmaaaa");
      theForm.Editbox3.focus();
      return false;
   }
   if (theForm.Editbox3.value.length < 8)
   {
      alert("inserte en formato ddmmaaaa");
      theForm.Editbox3.focus();
      return false;
   }
   if (theForm.Editbox3.value.length > 8)
   {
      alert("inserte en formato ddmmaaaa");
      theForm.Editbox3.focus();
      return false;
   }
   regexp = /^[-+]?\d*\.?\d*$/;
   if (!regexp.test(theForm.Editbox4.value))
   {
      alert("Introduzca un formato valido");
      theForm.Editbox4.focus();
      return false;
   }
   if (theForm.Editbox4.value == "")
   {
      alert("Introduzca un formato valido");
      theForm.Editbox4.focus();
      return false;
   }
   if (theForm.Editbox4.value.length < 11)
   {
      alert("Introduzca un formato valido");
      theForm.Editbox4.focus();
      return false;
   }
   if (theForm.Editbox4.value.length > 12)
   {
      alert("Introduzca un formato valido");
      theForm.Editbox4.focus();
      return false;
   }
   regexp = /^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i;
   if (theForm.Editbox5.value.length != 0 && !regexp.test(theForm.Editbox5.value))
   {
      alert("Introduzca un email valido");
      theForm.Editbox5.focus();
      return false;
   }
   if (theForm.Editbox6.value == "")
   {
      alert("Please enter a value for the \"Editbox6\" field.");
      theForm.Editbox6.focus();
      return false;
   }
   if (theForm.Editbox6.value.length < 3)
   {
      alert("Please enter at least 3 characters in the \"Editbox6\" field.");
      theForm.Editbox6.focus();
      return false;
   }
   if (theForm.Editbox6.value.length > 10)
   {
      alert("Please enter at most 10 characters in the \"Editbox6\" field.");
      theForm.Editbox6.focus();
      return false;
   }
   if (theForm.Editbox7.value == "")
   {
      alert("Introduzca una contraseña entre 8 y 15 digitos");
      theForm.Editbox7.focus();
      return false;
   }
   if (theForm.Editbox7.value.length < 8)
   {
      alert("Introduzca una contraseña entre 8 y 15 digitos");
      theForm.Editbox7.focus();
      return false;
   }
   if (theForm.Editbox7.value.length > 15)
   {
      alert("Introduzca una contraseña entre 8 y 15 digitos");
      theForm.Editbox7.focus();
      return false;
   }
   return true;
}
