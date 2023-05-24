function converterTemperaturas () {
    var temperatura = document.getElementById('temperatura').value
    if (temperatura == '') {
        alert('Você precisa digitar uma temperatura!');
        return;
    }

    var escalas = document.getElementsByName('escala');

    if(escalas[0].checked) {
        var temp_celsius = parseFloat(temperatura);
        var temp_farenheit = (1.8 * temp_celsius + 32).toFixed(2);
        var temp_kelvin = temp_celsius + 273;
    }
    else if(escalas[1].checked) {
        var temp_farenheit = parseFloat(temperatura);
        var temp_celsius = ((temp_farenheit - 32) / 1.8).toFixed(2);
        var temp_kelvin = temp_celsius + 273;
    }
    else if(escalas[2].checked) {
        var temp_kelvin = parseFloat(temperatura);
        var temp_celsius = temp_kelvin - 273;
        var temp_farenheit = (1.8 * temp_celsius + 32).toFixed(2);
    }

   document.getElementById('valor_celsius').innerText = temp_celsius + 'ºC';
   document.getElementById('valor_farenheit').innerText = temp_farenheit + 'ºF';
   document.getElementById('valor_kelvin').innerText = temp_kelvin;
}

function MostrarValor() {
    var elemento = document.getElementById('temp2')
    var valor = document.getElementById('temp2').value
    var texto = document.getElementById('temperatura')
    texto.value = valor

    converterTemperaturas ()

    var red = 65;
    var green = 245;
    var blue = 65;
    var alpha = 1;

    document.getElementById('corpo').style.backgroundColor = `rgba(${red + valor}, ${green - valor}, ${blue}, ${alpha})`;

    if (valor < '0') {
        var valor = document.getElementById('temp2').value

        var red = 236;
        var green = 245;
        var blue = 65;
        var alpha = 1;
        
        document.getElementById('corpo').style.backgroundColor = `rgba(${red - (-valor)}, ${green}, ${blue - valor}, ${alpha})`;
    }
}

function mudarRange() {
    var elemento = document.getElementById('temp2')
    var valor = document.getElementById('temperatura').value
    elemento.value = valor
}
