	function calcularIMC() {
			var peso = parseFloat(document.getElementById("peso").value);
			var altura = parseFloat(document.getElementById("altura").value);
			var imc = peso / (altura * altura);
			document.getElementById("resultado").innerHTML = "Su indice de masa corporal (IMC) es: " + imc.toFixed(2);
			if (imc < 18.5) {
				document.getElementById("clasificacion").innerHTML = "Estas bajo de peso";
			} else if (imc >= 18.5 && imc < 25) {
				document.getElementById("clasificacion").innerHTML = "Tu peso es normal";
			} else if (imc >= 25 && imc < 30) {
				document.getElementById("clasificacion").innerHTML = "Tienes sobrepeso";
			} else {
				document.getElementById("clasificacion").innerHTML = "Tienes obesidad";
			}
		}