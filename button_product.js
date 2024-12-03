
        function clearInput() {
   
            const input = document.getElementById('price');
            const label = document.querySelector('.price-label');
     

            
            if (input.value === '0') {
                input.value = '';
            }
            
            label.style.opacity = '0';
           
        }

        function restorePriceLabel() {
            const input = document.getElementById('price');
            const label = document.querySelector('.price-label');
            
            if (input.value === '' || input.value === '0') {
                label.style.opacity = '1'; 
                input.value='0';
            }
        }

        function validateInput() {
            const input = document.getElementById('price');
            let value = input.value;

            value = value.replace(/[^0-9]/g, '');

            if (value === '') {
                value = '0';
            }

            input.value = value;
        }