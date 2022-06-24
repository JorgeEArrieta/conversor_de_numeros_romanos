function convertToRoman(num) {

    // Definición de números.

    // Númeral.
    const numeral = (numero) => {
        
        if(numero < 4){

            let caracter = "";
            let n = 0;
            
            while(n < numero){
                caracter += 'I';
                n++;
            }

            return caracter
        }
        
        if(numero == 4){
            return "IV";
        }

        if(numero == 5){
            return "V";
        }

        if(numero == 6){
            return "VI";
        }

        if(numero > 6 && numero < 9){            

            let caracter = "VI";
            let n = 6;

            while(n < numero){
                caracter += "I";
                n++;
            }

            return caracter;
        }

        if(numero == 9){
            return "IX";
        }
    }

    //Decena
    const decena = (numero) => {
        
        if(numero < 4){

            let caracter = "";
            let n = 0;
            
            while(n < numero){
                caracter += 'X';
                n++;
            }

            return caracter
        }
        
        if(numero == 4){
            return "XL";
        }

        if(numero == 5){
            return "L";
        }

        if(numero == 6){
            return "LX";
        }

        if(numero > 6 && numero < 9){

            let caracter = "LX";
            let n = 6;

            while(n < numero){
                caracter += "X";
                n++;
            }

            return caracter;
        }

        if(numero == 9){
            return "XC";
        }
    }


        // Centena
        const centena = (numero) => {
        
            if(numero < 4){
    
                let caracter = "";
                let n = 0;
                
                while(n < numero){
                    caracter += 'C';
                    n++;
                }
    
                return caracter
            }
            
            if(numero == 4){
                return "CD";
            }
    
            if(numero == 5){
                return "D";
            }
    
            if(numero == 6){
                return "DC";
            }
    
            if(numero > 6 && numero < 9){
    
                let caracter = "DC";
                let n = 6;
    
                while(n < numero){
                    caracter += "C";
                    n++;
                }
    
                return caracter;
            }
    
            if(numero == 9){
                return "CM";
            }
        }

        // Millar
        const millar = (numero) => {
        
            if(numero < 4){
    
                let caracter = "";
                let n = 0;
                
                while(n < numero){
                    caracter += 'M';
                    n++;
                }
    
                return caracter
            }
            
        }


    if(num < 10){
        return numeral(num);
    }

    if(num >= 10 && num < 100){
        
        let numero = String(num);
        let d = Number.parseInt(numero[0]);
        let n = Number.parseInt(numero[1]);

        return decena(d)+numeral(n);

    }

    if(num >= 100 && num < 1000){
        
        let numero = String(num);
        let c = Number.parseInt(numero[0])
        let d = Number.parseInt(numero[1]);
        let n = Number.parseInt(numero[2]);
        

        return centena(c)+decena(d)+numeral(n);
    }

    if(num >= 1000 && num < 10000){
        let numero = String(num);
        let m = Number.parseInt(numero[0]);
        let c = Number.parseInt(numero[1]);
        let d = Number.parseInt(numero[2]);
        let n = Number.parseInt(numero[3]);
        
        return millar(m)+centena(c)+decena(d)+numeral(n);
    }

   }
   
   convertToRoman(3999);