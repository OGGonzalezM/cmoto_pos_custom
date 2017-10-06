function impolets(importe) {
var uni=new Array('','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve','veinte','ventiun','veintidos','veintitres','venticuatro','veinticinco','veintiseis','veintisiete','veintiocho','veintinueve');
var dece=new Array('cero', 'dieci', 'veinti', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa');
var cente=new Array('cero', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos');
var mile='mil';
var millo='millones';
var millo1='millon';
var resu='';
enteros=Math.floor(importe);
xx='' + enteros;
var digitos=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
for (var i=2, j=xx.length; i<=j; i++) digitos=Math.floor((importe / Math.pow(10,(i-1))) %10);
digitos[1]=Math.floor(Math.floor(importe)%10);
digitos[0]=((importe-Math.floor(importe))*100);
if (enteros<31) resu=uni(enteros);
else {
for (var i=xx.length, j=1; i>=j; i--) {
nume=digitos;
switch (i) {
case 0:
break;
case 1:
if (digitos[2]>2) resu+=uni[nume]+' ';
break;
case 2:
uni[21]='veintiuno';
dgg=(digitos[2]*10)+digitos[1];
if (nume<3) resu+=uni[dgg] + ' ';
else {
resu+=dece[nume];
if (digitos[1]>0) resu+= ' y ';
}
break;
case 3:
if ((!digitos[2]) && (!digitos[1]) && (nume==1)) resu+="cien ";
else if (nume>0) resu+=cente[nume]+' ';
break;
case 4:
if ((digitos[5]>2) || (digitos[5]<1) && (digitos[4]>0)) {
if (nume>1) resu+=uni[nume];
if ((nume==1) && (digitos[5]>2)) resu+=' un ';
resu+=' mil ';
}
break;
case 5:
dgg=(digitos[5]*10)+digitos[4];
if (nume>0) {
if ((nume<3) && (dgg!=0)) resu+= uni[dgg] + ' mil ';
else {
if (dgg!=0) resu+=dece[nume];
if (digitos[4]>0) resu+=' y ';
}
}
break;
case 6:
if ((!digitos[5]) && (digitos[4]) && (nume==1)) resu+='cien ';
else if (nume>0) resu+=cente[nume] + ' ';
break;
case 7:
if ((digitos[8]>2) || (digitos[8]<1)) {
if (nume>1) resu+=uni[nume];
else if ((nume==1) && (digitos[8]>2)) resu+=' un ';
else if ((nume==1) && (digitos[8]==0)) resu+= ' un millon' ;
else resu+=' millones ';
}
break;
case 8:
dgg=(digitos[8]*10)+digitos[7];
if ((nume<3) && (dgg!=0)) resu+=uni[dgg] + ' millones ';
else {
if (dgg!=0) resu+=dece[nume];
if (digitos[7]>0) resu+=' y ';
}
break;
case 9:
if (nume>0) resu+=cente[nume] + ' ';
break;
default:
break;
}
}
}
if (digitos[0]>0) resu+='C/' + Math.round(digitos[0]) + '/100';
return resu;
}