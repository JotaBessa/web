function t()
{
  var nm = "c";
  var n = 1;
  for (i = 1; i<=10; i++)
  {
    var linha = "<div id =" + nm + n + ">";

    linha += "<table><tr><th colspan = '2'>Produtos de "+ i + "</th></tr>";

        for (j=1; j<=10; j++)
        {
            linha += "<tr><td>";
            linha += i + " x " + j +  "\n";
            linha += "</td><td>"+(j*i)+"</td></tr>";
        }
        linha+="</table></div>";
        n++;
        document.write(linha);
    }
}