var data = {
    "urbanizaciones" : [
        {
            "id_residente": 1,
            "manzana": 1,
            "villa": 1,
            "telefono": "0959898085",
            "estado": "yellow"
        },
        {
            "id_residente": 2,
            "manzana": 1,
            "villa": 2,
            "telefono": "0959898088",
            "estado": "green"
        },
        {
            "id_residente": 3,
            "manzana": 1,
            "villa": 3,
            "telefono": "0959898090",
            "estado": "yellow"
        },
        {
            "id_residente": 4,
            "manzana": 1,
            "villa": 4,
            "telefono": "0959898060",
            "estado": "green"
        },
        {
            "id_residente": 5,
            "manzana": 2,
            "villa": 1,
            "telefono": "0959898189",
            "estado": "green"
        },
        {
            "id_residente": 6,
            "manzana": 2,
            "villa": 2,
            "telefono": "0959898235",
            "estado": "green"
        },
        {
            "id_residente": 7,
            "manzana": 2,
            "villa": 3,
            "telefono": "0959894523",
            "estado": "grey"
        },
        {
            "id_residente": 8,
            "manzana": 2,
            "villa": 4,
            "telefono": "0959823674",
            "estado": "green"
        },
        {
            "id_residente": 9,
            "manzana": 2,
            "villa": 5,
            "telefono": "0959891258",
            "estado": "yellow"
        },
        {
            "id_residente": 10,
            "manzana": 3,
            "villa": 1,
            "telefono": "0954566845",
            "estado": "yellow"
        },
        {
            "id_residente": 11,
            "manzana": 3,
            "villa": 2,
            "telefono": "0959894588",
            "estado": "red"
        },
        {
            "id_residente": 12,
            "manzana": 3,
            "villa": 3,
            "telefono": "0959889634",
            "estado": "green"
        },
        {
            "id_residente": 13,
            "manzana": 3,
            "villa": 4,
            "telefono": "0959898444",
            "estado": "green"
        },
        {
            "id_residente": 14,
            "manzana": 4,
            "villa": 1,
            "telefono": "0959898888",
            "estado": "yellow"
        },
        {
            "id_residente": 15,
            "manzana": 4,
            "villa": 2,
            "telefono": "0959895456",
            "estado": "green"
        },
        {
            "id_residente": 16,
            "manzana": 4,
            "villa": 3,
            "telefono": "0959821698",
            "estado": "green"
        },
        {
            "id_residente": 17,
            "manzana": 4,
            "villa": 4,
            "telefono": "0959898055",
            "estado": "grey"
        },
        {
            "id_residente": 18,
            "manzana": 4,
            "villa": 5,
            "telefono": "0959888887",
            "estado": "green"
        },
        {
            "id_residente": 19,
            "manzana": 4,
            "villa": 6,
            "telefono": "0959899222",
            "estado": "green"
        },
        {
            "id_residente": 20,
            "manzana": 5,
            "villa": 1,
            "telefono": "0959898036",
            "estado": "red"
        },
        {
            "id_residente": 21,
            "manzana": 5,
            "villa": 2,
            "telefono": "0959898147",
            "estado": "green"
        },
        {
            "id_residente": 22,
            "manzana": 5,
            "villa": 3,
            "telefono": "0959891598",
            "estado": "green"
        },
        {
            "id_residente": 23,
            "manzana": 5,
            "villa": 4,
            "telefono": "0959890145",
            "estado": "green"
        }
    ]
}


function traerDatos(){
    console.log("estoy dentrooo");
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'user.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var datos = JSON.parse(this.responseText);
            console.log(datos);
        }
    }

}
traerDatos();


function Residentes(){
//manzana 1
var datos = data.urbanizaciones 
var color1=document.getElementsByClassName("item2");
var color2=document.getElementsByClassName("item3");
var color3=document.getElementsByClassName("item4");
var color4=document.getElementsByClassName("item5");
var color5=document.getElementsByClassName("item6");
var color6=document.getElementsByClassName("item7");

for (var datos=0; datos<color1.length; datos++) {
    color1[datos].style.backgroundColor="green";
    
}
for (var datos=0; datos<color2.length; datos++){
    color2[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color3.length; datos++){
    color3[datos].style.backgroundColor="yellow";
}
for (var datos=0; datos<color4.length; datos++){
    color4[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color5.length; datos++){
    color5[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color6.length; datos++){
    color6[datos].style.backgroundColor="green";
}


//manzana2
var color7=document.getElementsByClassName("item1a");
var color8=document.getElementsByClassName("item2a");
var color9=document.getElementsByClassName("item3a");
var color10=document.getElementsByClassName("item4a");
var color11=document.getElementsByClassName("item5a");

for (var datos=0; datos<color7.length; datos++) {
    color7[datos].style.backgroundColor="grey"; 
}
for (var datos=0; datos<color8.length; datos++){
    color8[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color9.length; datos++){
    color9[datos].style.backgroundColor="yellow";
}
for (var datos=0; datos<color10.length; datos++){
    color10[datos].style.backgroundColor="yellow";
}
for (var datos=0; datos<color11.length; datos++){
    color11[datos].style.backgroundColor="red";
}

//manzana 3
var color12=document.getElementsByClassName("item1b");
var color13=document.getElementsByClassName("item2b");
var color14=document.getElementsByClassName("item3b");
var color15=document.getElementsByClassName("item4b");

for (var datos=0; datos<color12.length; datos++) {
    color12[datos].style.backgroundColor="green"; 
}
for (var datos=0; datos<color13.length; datos++){
    color13[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color14.length; datos++){
    color14[datos].style.backgroundColor="yellow";
}
for (var datos=0; datos<color15.length; datos++){
    color15[datos].style.backgroundColor="green";
}

//manzana 4
var color16=document.getElementsByClassName("item1c");
var color17=document.getElementsByClassName("item2c");
var color18=document.getElementsByClassName("item3c");
var color19=document.getElementsByClassName("item4c");

for (var datos=0; datos<color16.length; datos++) {
    color16[datos].style.backgroundColor="green"; 
}
for (var datos=0; datos<color17.length; datos++){
    color17[datos].style.backgroundColor="grey";
}
for (var datos=0; datos<color18.length; datos++){
    color18[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color19.length; datos++){
    color19[datos].style.backgroundColor="green";
}

//manzana 5
var color20=document.getElementsByClassName("item1d");
var color21=document.getElementsByClassName("item2d");
var color22=document.getElementsByClassName("item3d");
var color23=document.getElementsByClassName("item4d");

for (var datos=0; datos<color20.length; datos++) {
    color20[datos].style.backgroundColor="red"; 
}
for (var datos=0; datos<color21.length; datos++){
    color21[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color22.length; datos++){
    color22[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color23.length; datos++){
    color23[datos].style.backgroundColor="green";
}
}


function Residentes_sin_deudas(){
//manzana 1
var datos = data.urbanizaciones 
var color1=document.getElementsByClassName("item2");
var color2=document.getElementsByClassName("item3");
var color3=document.getElementsByClassName("item4");
var color4=document.getElementsByClassName("item5");
var color5=document.getElementsByClassName("item6");
var color6=document.getElementsByClassName("item7");

for (var datos=0; datos<color1.length; datos++) {
    color1[datos].style.backgroundColor="white"; 
}
for (var datos=0; datos<color2.length; datos++){
    color2[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color3.length; datos++){
    color3[datos].style.backgroundColor="white";
}
for (var datos=0; datos<color4.length; datos++){
    color4[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color5.length; datos++){
    color5[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color6.length; datos++){
    color6[datos].style.backgroundColor="green";
}

//manzana2
var color7=document.getElementsByClassName("item1a");
var color8=document.getElementsByClassName("item2a");
var color9=document.getElementsByClassName("item3a");
var color10=document.getElementsByClassName("item4a");
var color11=document.getElementsByClassName("item5a");

for (var datos=0; datos<color7.length; datos++) {
    color7[datos].style.backgroundColor="white"; 
}
for (var datos=0; datos<color8.length; datos++){
    color8[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color9.length; datos++){
    color9[datos].style.backgroundColor="white";
}
for (var datos=0; datos<color10.length; datos++){
    color10[datos].style.backgroundColor="white";
}
for (var datos=0; datos<color11.length; datos++){
    color11[datos].style.backgroundColor="white";
}

//manzana 3
var color12=document.getElementsByClassName("item1b");
var color13=document.getElementsByClassName("item2b");
var color14=document.getElementsByClassName("item3b");
var color15=document.getElementsByClassName("item4b");

for (var datos=0; datos<color12.length; datos++) {
    color12[datos].style.backgroundColor="green"; 
}
for (var datos=0; datos<color13.length; datos++){
    color13[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color14.length; datos++){
    color14[datos].style.backgroundColor="white";
}
for (var datos=0; datos<color15.length; datos++){
    color15[datos].style.backgroundColor="green";
}

//manzana 4
var color16=document.getElementsByClassName("item1c");
var color17=document.getElementsByClassName("item2c");
var color18=document.getElementsByClassName("item3c");
var color19=document.getElementsByClassName("item4c");

for (var datos=0; datos<color16.length; datos++) {
    color16[datos].style.backgroundColor="green"; 
}
for (var datos=0; datos<color17.length; datos++){
    color17[datos].style.backgroundColor="white";
}
for (var datos=0; datos<color18.length; datos++){
    color18[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color19.length; datos++){
    color19[datos].style.backgroundColor="green";
}

//manzana 5
var color20=document.getElementsByClassName("item1d");
var color21=document.getElementsByClassName("item2d");
var color22=document.getElementsByClassName("item3d");
var color23=document.getElementsByClassName("item4d");

for (var datos=0; datos<color20.length; datos++) {
    color20[datos].style.backgroundColor="white"; 
}
for (var datos=0; datos<color21.length; datos++){
    color21[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color22.length; datos++){
    color22[datos].style.backgroundColor="green";
}
for (var datos=0; datos<color23.length; datos++){
    color23[datos].style.backgroundColor="green";
}
}


function Residentes_con_deudas(){
    //manzana 1
    var datos = data.urbanizaciones 
    var color1=document.getElementsByClassName("item2");
    var color2=document.getElementsByClassName("item3");
    var color3=document.getElementsByClassName("item4");
    var color4=document.getElementsByClassName("item5");
    var color5=document.getElementsByClassName("item6");
    var color6=document.getElementsByClassName("item7");
    
    for (var datos=0; datos<color1.length; datos++) {
        color1[datos].style.backgroundColor="yellow"; 
    }
    for (var datos=0; datos<color2.length; datos++){
        color2[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color3.length; datos++){
        color3[datos].style.backgroundColor="yellow";
    }
    for (var datos=0; datos<color4.length; datos++){
        color4[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color5.length; datos++){
        color5[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color6.length; datos++){
        color6[datos].style.backgroundColor="white";
    }
    
    //manzana2
    var color7=document.getElementsByClassName("item1a");
    var color8=document.getElementsByClassName("item2a");
    var color9=document.getElementsByClassName("item3a");
    var color10=document.getElementsByClassName("item4a");
    var color11=document.getElementsByClassName("item5a");
    
    for (var datos=0; datos<color7.length; datos++) {
        color7[datos].style.backgroundColor="white"; 
    }
    for (var datos=0; datos<color8.length; datos++){
        color8[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color9.length; datos++){
        color9[datos].style.backgroundColor="yellow";
    }
    for (var datos=0; datos<color10.length; datos++){
        color10[datos].style.backgroundColor="yellow";
    }
    for (var datos=0; datos<color11.length; datos++){
        color11[datos].style.backgroundColor="red";
    }
    
    //manzana 3
    var color12=document.getElementsByClassName("item1b");
    var color13=document.getElementsByClassName("item2b");
    var color14=document.getElementsByClassName("item3b");
    var color15=document.getElementsByClassName("item4b");
    
    for (var datos=0; datos<color12.length; datos++) {
        color12[datos].style.backgroundColor="white"; 
    }
    for (var datos=0; datos<color13.length; datos++){
        color13[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color14.length; datos++){
        color14[datos].style.backgroundColor="yellow";
    }
    for (var datos=0; datos<color15.length; datos++){
        color15[datos].style.backgroundColor="white";
    }
    
    //manzana 4
    var color16=document.getElementsByClassName("item1c");
    var color17=document.getElementsByClassName("item2c");
    var color18=document.getElementsByClassName("item3c");
    var color19=document.getElementsByClassName("item4c");
    
    for (var datos=0; datos<color16.length; datos++) {
        color16[datos].style.backgroundColor="white"; 
    }
    for (var datos=0; datos<color17.length; datos++){
        color17[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color18.length; datos++){
        color18[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color19.length; datos++){
        color19[datos].style.backgroundColor="white";
    }
    
    //manzana 5
    var color20=document.getElementsByClassName("item1d");
    var color21=document.getElementsByClassName("item2d");
    var color22=document.getElementsByClassName("item3d");
    var color23=document.getElementsByClassName("item4d");
    
    for (var datos=0; datos<color20.length; datos++) {
        color20[datos].style.backgroundColor="red"; 
    }
    for (var datos=0; datos<color21.length; datos++){
        color21[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color22.length; datos++){
        color22[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color23.length; datos++){
        color23[datos].style.backgroundColor="white";
    }
}


function Residentes_sin_propietario(){
    //manzana 1
    var datos = data.urbanizaciones
    var color1=document.getElementsByClassName("item2");
    var color2=document.getElementsByClassName("item3");
    var color3=document.getElementsByClassName("item4");
    var color4=document.getElementsByClassName("item5");
    var color5=document.getElementsByClassName("item6");
    var color6=document.getElementsByClassName("item7");
    
    for (var datos=0; datos<color1.length; datos++) {
        color1[datos].style.backgroundColor="white"; 
    }
    for (var datos=0; datos<color2.length; datos++){
        color2[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color3.length; datos++){
        color3[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color4.length; datos++){
        color4[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color5.length; datos++){
        color5[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color6.length; datos++){
        color6[datos].style.backgroundColor="white";
    }
    
    //manzana2
    var color7=document.getElementsByClassName("item1a");
    var color8=document.getElementsByClassName("item2a");
    var color9=document.getElementsByClassName("item3a");
    var color10=document.getElementsByClassName("item4a");
    var color11=document.getElementsByClassName("item5a");
    
    for (var datos=0; datos<color7.length; datos++) {
        color7[datos].style.backgroundColor="grey"; 
    }
    for (var datos=0; datos<color8.length; datos++){
        color8[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color9.length; datos++){
        color9[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color10.length; datos++){
        color10[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color11.length; datos++){
        color11[datos].style.backgroundColor="white";
    }
    
    //manzana 3
    var color12=document.getElementsByClassName("item1b");
    var color13=document.getElementsByClassName("item2b");
    var color14=document.getElementsByClassName("item3b");
    var color15=document.getElementsByClassName("item4b");
    
    for (var datos=0; datos<color12.length; datos++) {
        color12[datos].style.backgroundColor="white"; 
    }
    for (var datos=0; datos<color13.length; datos++){
        color13[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color14.length; datos++){
        color14[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color15.length; datos++){
        color15[datos].style.backgroundColor="white";
    }
    
    //manzana 4
    var color16=document.getElementsByClassName("item1c");
    var color17=document.getElementsByClassName("item2c");
    var color18=document.getElementsByClassName("item3c");
    var color19=document.getElementsByClassName("item4c");
    
    for (var datos=0; datos<color16.length; datos++) {
        color16[datos].style.backgroundColor="white"; 
    }
    for (var datos=0; datos<color17.length; datos++){
        color17[datos].style.backgroundColor="grey";
    }
    for (var datos=0; datos<color18.length; datos++){
        color18[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color19.length; datos++){
        color19[datos].style.backgroundColor="white";
    }
    
    //manzana 5
    var color20=document.getElementsByClassName("item1d");
    var color21=document.getElementsByClassName("item2d");
    var color22=document.getElementsByClassName("item3d");
    var color23=document.getElementsByClassName("item4d");
    
    for (var datos=0; datos<color20.length; datos++) {
        color20[datos].style.backgroundColor="white"; 
    }
    for (var datos=0; datos<color21.length; datos++){
        color21[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color22.length; datos++){
        color22[datos].style.backgroundColor="white";
    }
    for (var datos=0; datos<color23.length; datos++){
        color23[datos].style.backgroundColor="white";
    }
}



