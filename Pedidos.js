function ValidatePedido(theForm)
{
   var regexp;
   regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ0-9-]*$/;
   if (!regexp.test(theForm.Editbox1.value))
   {
      alert("Introduzca un nombre de usuario valido por favor");
      theForm.Editbox1.focus();
      return false;
   }
   if (theForm.Editbox1.value == "")
   {
      alert("Introduzca un nombre de usuario valido por favor");
      theForm.Editbox1.focus();
      return false;
   }
   if (theForm.Editbox1.value.length < 5)
   {
      alert("Introduzca un nombre de usuario valido por favor");
      theForm.Editbox1.focus();
      return false;
   }
   if (theForm.Editbox1.value.length > 15)
   {
      alert("Introduzca un nombre de usuario valido por favor");
      theForm.Editbox1.focus();
      return false;
   }
   if (theForm.Editbox2.value == "")
   {
      alert("Su contraseña de tener minimo 6 caracteres");
      theForm.Editbox2.focus();
      return false;
   }
   if (theForm.Editbox2.value.length < 6)
   {
      alert("Su contraseña de tener minimo 6 caracteres");
      theForm.Editbox2.focus();
      return false;
   }
   if (theForm.Editbox2.value.length > 15)
   {
      alert("Su contraseña de tener minimo 6 caracteres");
      theForm.Editbox2.focus();
      return false;
   }
   if (theForm.TextArea1.value.length > 100)
   {
      alert("Introduzca una direccion valida");
      theForm.TextArea1.focus();
      return false;
   }
   regexp = /^[-+]?\d*\.?\d*$/;
   if (!regexp.test(theForm.Editbox3.value))
   {
      alert("Introduzca un telefóno valido con formato 04241234567 o 584241234567 o 02819999999");
      theForm.Editbox3.focus();
      return false;
   }
   if (theForm.Editbox3.value == "")
   {
      alert("Introduzca un telefóno valido con formato 04241234567 o 584241234567 o 02819999999");
      theForm.Editbox3.focus();
      return false;
   }
   if (theForm.Editbox3.value.length < 11)
   {
      alert("Introduzca un telefóno valido con formato 04241234567 o 584241234567 o 02819999999");
      theForm.Editbox3.focus();
      return false;
   }
   if (theForm.Editbox3.value.length > 12)
   {
      alert("Introduzca un telefóno valido con formato 04241234567 o 584241234567 o 02819999999");
      theForm.Editbox3.focus();
      return false;
   }
   regexp = /^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i;
   if (theForm.Editbox4.value.length != 0 && !regexp.test(theForm.Editbox4.value))
   {
      alert("Introduzca una direccion de correo valida");
      theForm.Editbox4.focus();
      return false;
   }
   regexp = /^[-+]?\d*\.?\d*$/;
   if (!regexp.test(theForm.Editbox5.value))
   {
      alert("La cantidad minima es 1 y la maxima 99");
      theForm.Editbox5.focus();
      return false;
   }
   if (theForm.Editbox5.value == "")
   {
      alert("La cantidad minima es 1 y la maxima 99");
      theForm.Editbox5.focus();
      return false;
   }
   if (theForm.Editbox5.value.length < 1)
   {
      alert("La cantidad minima es 1 y la maxima 99");
      theForm.Editbox5.focus();
      return false;
   }
   if (theForm.Editbox5.value.length > 99)
   {
      alert("La cantidad minima es 1 y la maxima 99");
      theForm.Editbox5.focus();
      return false;
   }
   return true;
}
