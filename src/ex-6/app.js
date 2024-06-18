const numb1Input = document.getElementById('numb1');
        const numb2Input = document.getElementById('numb2');
        const numb3Input = document.getElementById('numb3');
        const parrafo = document.getElementById('resultado');

        function encontrarMayor() {
            const numb1 = parseInt(numb1Input.value);
            const numb2 = parseInt(numb2Input.value);
            const numb3 = parseInt(numb3Input.value);
            let mayor;

            if (isNaN(numb1) || isNaN(numb2) || isNaN(numb3)) {
                parrafo.innerText = 'Por favor, ingrese números válidos';
                return;
            }

            if (numb1 >= numb2 && numb1 >= numb3) {
                mayor = numb1;
            } else if (numb2 >= numb1 && numb2 >= numb3) {
                mayor = numb2;
            } else {
                mayor = numb3;
            }

            parrafo.innerText = `El mayor es ${mayor}`;
        }