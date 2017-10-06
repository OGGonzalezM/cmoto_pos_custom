odoo.define('pos_custom.discount_price', function (require) {
"use strict";

var models = require('point_of_sale.models');

var _super_orderline = models.Orderline.prototype;
models.Orderline = models.Orderline.extend({
    initialize: function(attr, options){
        _super_orderline.initialize.apply(this,arguments);
        if (options.json) {
            return;
        }
        this.price   = options.product.list_price;
    },
});

var _super_order = models.Order.prototype;
models.Order = models.Order.extend({
    add_product: function(product, options){
        _super_order.add_product.apply(this, arguments);
        options = options || {};
        var dis = product.list_price - product.price,
            dis_per = (100 * dis) / product.list_price;
        if(dis_per){
            dis_per += (options.discount || 0);
            this.selected_orderline.set_discount(dis_per.toFixed(this.pos.dp['Discount']));
        }
    },
    numletras: function(n)
    {
      var o=new Array("Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "Dieciseis", "Diecisiete", "Dieciocho", "Diecinueve", "Veinte", "Veintiuno", "Veintidos", "Veintitres", "Veinticuatro", "Veinticinco", "Veintiseis", "Veintisiete", "Veintiocho", "Veintinueve");
      var u=new Array("Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve");
      var d=new Array("", "", "", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa");
      var c=new Array("", "Ciento", "Doscientos", "Trescientos", "Cuatrocientos", "Quinientos", "Seiscientos", "Setecientos", "Ochocientos", "Novecientos");

      var n=parseFloat(n).toFixed(2); /*se limita a dos decimales, no sabía que existía toFixed() :)*/
      var p=n.toString().substring(n.toString().indexOf(".")+1); /*decimales*/
      var m=n.toString().substring(0,n.toString().indexOf(".")); /*número sin decimales*/
      var m=parseFloat(m).toString().split("").reverse(); /*tampoco que reverse() existía :D*/
      var t="";

      /*Se analiza cada 3 dígitos*/
      for (var i=0; i<m.length; i+=3)
      {
        var x=t;
        /*formamos un número de 2 dígitos*/
        var b=m[i+1]!=undefined?parseFloat(m[i+1].toString()+m[i].toString()):parseFloat(m[i].toString());
        /*analizamos el 3 dígito*/
        t=m[i+2]!=undefined?(c[m[i+2]]+" "):"";
        t+=b<10?u[b]:(b<30?o[b-10]:(d[m[i+1]]+(m[i]=='0'?"":(" y "+u[m[i]]))));
        t=t=="Ciento Cero"?"Cien":t;
        if (2<i&&i<6)
          t=t=="Uno"?"Mil ":(t.replace("Uno","Un")+" Mil ");
        if (5<i&&i<9)
          t=t=="Uno"?"Un Millón ":(t.replace("Uno","Un")+" Millones ");
        t+=x;
        //t=i<3?t:(i<6?((t=="uno"?"mil ":(t+" mil "))+x):((t=="uno"?"un millón ":(t+" millones "))+x));
      }

      t+=" Pesos "+p+"/100 M.N";
      /*correcciones*/
      t=t.replace("  "," ");
      t=t.replace(" Cero","");
      //t=t.replace("ciento y","cien y");
      //alert("Numero: "+n+"\nNº Dígitos: "+m.length+"\nDígitos: "+m+"\nDecimales: "+p+"\nt: "+t);
      //document.getElementById("esc").value=t;
      //console.log(t.toLowerCase());
      //console.log(t.toUpperCase());
      //var resto = t.slice(1);
      //console.log(t[0]);
      //console.log(resto);
      return t;
    },
});

});
