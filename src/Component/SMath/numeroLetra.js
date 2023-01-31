export default class numeroLetra {

    Unidades(num) {

        switch (num) {
            case 1: return "UN";
            case 2: return "DOS";
            case 3: return "TRES";
            case 4: return "CUATRO";
            case 5: return "CINCO";
            case 6: return "SEIS";
            case 7: return "SIETE";
            case 8: return "OCHO";
            case 9: return "NUEVE";
        }

        return "";
    }//Unidades()

    Decenas(num) {

        this.decena = Math.floor(num / 10);
        this.unidad = num - (this.decena * 10);

        switch (this.decena) {
            case 1:
                switch (this.unidad) {
                    case 0: return "DIEZ";
                    case 1: return "ONCE";
                    case 2: return "DOCE";
                    case 3: return "TRECE";
                    case 4: return "CATORCE";
                    case 5: return "QUINCE";
                    default: return "DIECI" + this.Unidades(this.unidad);
                }
            case 2:
                switch (this.unidad) {
                    case 0: return "VEINTE";
                    default: return "VEINTI" + this.Unidades(this.unidad);
                }
            case 3: return this.DecenasY("TREINTA", this.unidad);
            case 4: return this.DecenasY("CUARENTA", this.unidad);
            case 5: return this.DecenasY("CINCUENTA", this.unidad);
            case 6: return this.DecenasY("SESENTA", this.unidad);
            case 7: return this.DecenasY("SETENTA", this.unidad);
            case 8: return this.DecenasY("OCHENTA", this.unidad);
            case 9: return this.DecenasY("NOVENTA", this.unidad);
            case 0: return this.Unidades(this.unidad);
        }
    }//Unidades()

    DecenasY(strSin, numUnidades) {
        if (numUnidades > 0)
            return strSin + " Y " + this.Unidades(numUnidades)

        return strSin;
    }//DecenasY()

    Centenas(num) {
        this.centenas = Math.floor(num / 100);
        this.decenas = num - (this.centenas * 100);

        switch (this.centenas) {
            case 1:
                if (this.decenas > 0)
                    return "CIENTO " + this.Decenas(this.decenas);
                return "CIEN";
            case 2: return "DOSCIENTOS " + this.Decenas(this.decenas);
            case 3: return "TRESCIENTOS " + this.Decenas(this.decenas);
            case 4: return "CUATROCIENTOS " + this.Decenas(this.decenas);
            case 5: return "QUINIENTOS " + this.Decenas(this.decenas);
            case 6: return "SEISCIENTOS " + this.Decenas(this.decenas);
            case 7: return "SETECIENTOS " + this.Decenas(this.decenas);
            case 8: return "OCHOCIENTOS " + this.Decenas(this.decenas);
            case 9: return "NOVECIENTOS " + this.Decenas(this.decenas);
        }

        return this.Decenas(this.decenas);
    }//Centenas()

    Seccion(num, divisor, strSingular, strPlural) {
        this.cientos = Math.floor(num / divisor)
        this.resto = num - (this.cientos * divisor)

        this.letras = "";

        if (this.cientos > 0)
            if (this.cientos > 1)
                this.letras = this.Centenas(this.cientos) + " " + strPlural;
            else
                this.etras = strSingular;

        if (this.resto > 0)
            this.letras += "";

        return this.letras;
    }//Seccion()

    Miles(num) {
        this.divisor = 1000;
        this.cientos = Math.floor(num / this.divisor)
        this.resto = num - (this.cientos * this.divisor)

        this.strMiles = this.Seccion(num, this.divisor, "UN MIL", "MIL");
        this.strCentenas = this.Centenas(this.resto);

        if (this.strMiles == "")
            return this.strCentenas;

        return this.strMiles + " " + this.strCentenas;
    }//Miles()

    Millones(num) {
        this.divisor = 1000000;
        this.cientos = Math.floor(num / this.divisor)
        this.resto = num - (this.cientos * this.divisor)

        this.strMillones = this.Seccion(num, this.divisor, "UN MILLON DE", "MILLONES DE");
        this.strMiles = this.Miles(this.resto);

        if (this.strMillones == "")
            return this.strMiles;

        return this.strMillones + " " + this.strMiles;
    }//Millones()

    NumeroALetras(num, moneda = { p: "BOLIVIANOS", s: "BOLIVIANO" }) {
        var data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            letrasCentavos: "",
            letrasMonedaPlural: moneda.p ?? 'BOLIVIANOS',//"PESOS", 'Dólares', 'Bolívares', 'etcs'
            letrasMonedaSingular: moneda.s ?? 'BOLIVIANO', //"PESO", 'Dólar', 'Bolivar', 'etc'
            letrasMonedaCentavoPlural: "CENTAVOS",
            letrasMonedaCentavoSingular: "CENTAVO"
        };

        if (data.centavos > 0) {
            data.letrasCentavos = "CON " + (() => {
                if (data?.centavos == 1)
                    return this.Millones(data?.centavos) + " " + data.letrasMonedaCentavoSingular;
                else
                    return this.Millones(data?.centavos) + " " + data.letrasMonedaCentavoPlural;
            })();
        };

        if (data.enteros == 0)
            return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
        if (data.enteros == 1)
            return this.Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
        else
            return this.Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    }//NumeroALetras()
}