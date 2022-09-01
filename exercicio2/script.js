//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
    const numeros = [5, 21, 27]
    const texto = ["Bubbaloo", "Tiao", "Billy"]
    const misto = [23, "setembro", true]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
    console.log(numeros.lenght)
    console.log(texto.length)
    console.log(misto.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
    const primeiroItem = numeros[0]
    console.log(primeiroItem)

    const segundoItem = texto[1]
    console.log(segundoItem)

    const terceiroItem = misto[2]
    console.log(terceiroItem)


//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação 
    numeros.includes("21")

//booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
    texto.includes("Tobias")


