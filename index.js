const { select } = require('@inquirer/prompts')


const start = async () => {

    while(true) {

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao){
            case "cadastrar": 
                console.log("Cadastro")
                break
            case "listar":
                console.log("listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return    
        }
    }
}

start()