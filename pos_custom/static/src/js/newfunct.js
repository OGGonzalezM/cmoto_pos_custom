if(a.length>3)
{
x--;
var um=a.substr(x-1,1);
//alert("um="+um)
  switch (um)
    {
    case "1":
    var pcm="mil";
    switch (l)
      {
      case "cero": l="mil";
      break;
      default: l= l + "mil ";
      }
    break;
    case "2":
    switch (l)
      {
      case "cero": l="dos mil";
      break;
      default: l="dos mil "+l;
      }
    break;
    case "3":
    switch (l)
      {
      case "cero": l="tres mil";
      break;
      default: l="tres mil "+l;
      }
    break;
    case "4":
    switch (l)
      {
      case "cero": l="cuatro mil";
      break;
      default: l="cuatro mil "+l;
      }
    break;
    case "5":
    switch (l)
      {
      case "cero": l="cinco mil";
      break;
      default: l="cinco mil "+l
      }
    break;
    case "6":
    switch (l)
      {
      case "cero": l="seis mil";
      break;
      default: l="seis mil "+l
      }
    break;
    case "7":
    switch (l)
      {
      case "cero": l="siete mil";
      break;
      default: l="siete mil "+l
      }
    break;
    case "8":
    switch (l)
      {
      case "cero": l="ocho mil";
      break;
      default: l="ocho mil "+l
      }
    break;
    case "9":
    switch (l)
      {
      case "cero": l="nueve mil";
      break;
      default: l="nueve mil "+l
      }
    break;
    }
}
//******************************* decenas de millar ----------------------------------------------------
if(a.length>4)
{
x--;
var dm=a.substr(x-1,1);
if (l=="cero"){l="";}
//alert("d="+d)
  switch (dm)
    {
    case "1":
    switch (um)
      {
      case "0": l="diez mil "+l;
      break;
      case "1": l=l.replace("mil","once mil");
      break;
      case "2": l=l.replace("dos mil","doce mil");
      break;
      case "3": l=l.replace("tres mil","trece mil");
      break;
      case "4": l=l.replace("cuatro mil","catorce mil");
      break;
      case "5": l=l.replace("cinco mil","quince mil");
      break;
      default: l="dieci"+l;
      }
    break;
    case "2":
    switch (um)
      {
      case "0": l="veinte mil "+l;
      break;
      case "1": if (ax==0){l="veintiun "+l;}else{l="veintiun "+l;}
      break;
      default: l="veinti"+l;
      }
    break;
    case "3":
    switch (um)
      {
      case "0": l="treinta mil "+l;
      break;
      case "1": if (ax==0){l="treinta y un "+l;}else{l="treinta y un "+l;}
      break;
      default: l="treinta y "+l;
      }
    break;
    case "4":
    switch (um)
      {
      case "0": l="cuarenta mil "+l;
      break;
      case "1": if (ax==0){l="cuarenta y un "+l;}else{l="cuarenta y un "+l;}
      break;
      default: l="cuarenta y "+l;
      }
    break;
    case "5":
    switch (um)
      {
      case "0": l="cincuenta mil "+l;
      break;
      case "1": if (ax==0){l="cincuenta y un "+l;}else{l="cincuenta y un "+l;}
      break;
      default: l="cincuenta y "+l;
      }
    break;
    case "6":
    switch (um)
      {
      case "0": l="sesenta mil "+l;
      break;
      case "1": if (ax==0){l="sesenta y un "+l;}else{l="sesenta y un "+l;}
      break;
      default: l="sesenta y "+l;
      }
    break;
    case "7":
    switch (um)
      {
      case "0": l="setenta mil "+l;
      break;
      case "1": if (ax==0){l="setenta y un "+l;}else{l="setenta y un "+l}
      break;
      default: l="setenta y "+l;
      }
    break;
    case "8":
    switch (um)
      {
      case "0": l="ochenta mil "+l;
      break;
      case "1": if (ax==0){l="ochenta y un "+l;}else{l="ochenta y un "+l;}
      break;
      default: l="ochenta y "+l;
      }
    break;
    case "9":
    switch (um)
      {
      case "0": l="noventa mil "+l;
      break;
      case "1": if (ax==0){l="noventa y un "+l;}else{l="noventa y un "+l;}
      break;
      default: l="noventa y "+l;
      }
    break;
    }
}
