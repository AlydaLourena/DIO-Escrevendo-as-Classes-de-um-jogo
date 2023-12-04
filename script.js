    class Heroi {
        constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        }
    
        atacar() {
        let ataque;

            switch(this.tipo){
                case 'Mago':
                    ataque = 'Magia';
                    break;
                case 'Guerreiro':
                    ataque = 'espada';
                    break;
                case 'Monje':
                    ataque = 'Artes Marciais';
                    break;
                case 'Ninja':
                    ataque = 'Shuriken';
                    break;
                default:
                    ataque = 'Não encontrado';
            }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
        }
    }
    
    // Ex:
    const heroi = new Heroi('nome', 0, 'Ninja');
    heroi.atacar();
    