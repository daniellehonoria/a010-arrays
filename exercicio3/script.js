//Agora, vamos manipular os arrays, adicionando ou removendo informações. 
//Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

    const aniversariosOriginal = [27, 21, 9, 5, 23]
    const familiaOriginal = ["Dani", "Well", "Dessa ", "Biel"]
    const petsOriginal = ["Tião ", "Bubbaloo", "Billy"]

// Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
    const aniversariosOriginalCopia = aniversariosOriginal.push("5")
    console.log(aniversariosOriginalCopia + aniversariosOriginal)

// Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
    const familiaOriginalCopia = familiaOriginal.pop()
    console.log(familiaOriginal + familiaOriginalCopia)

// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
    const petsOriginalCopia = petsOriginal.splice(1, 2)
    console.log(petsOriginal + petsOriginalCopia)