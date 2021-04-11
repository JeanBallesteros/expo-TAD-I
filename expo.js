class NodeClass {

    constructor(data, next, prev) {

        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class listaDobleEnlazada {
    constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
    }
    
    /* Métodos de la lista: añadir, eliminar, buscar, actualizar valor */
    añadirNodoF(data) {
        const newNode = new NodeClass(data, null, this.tail);

        if(this.tail){
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }else{
            this.tail = newNode;
            this.head = newNode;
        }
        this.length++;

    }

    añadirNodoI(data) {
        const newNode = new NodeClass(data, this.head, null);

        if(this.head){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;

    }

    eliminarNodoF() {
        if(!this.tail) return undefined;
        
        const valueToReturn = this.tail.data;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;

        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return valueToReturn;


    }
    eliminarNodoI() {
        if (!this.head) return undefined;
        let valueReturn = this.head.data;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return valueReturn;

    }

    removerNodoPorValor(data) {
        let current = this.head;
        let previous = null;

        while(current !== null){
            if(current.data === data){
                if(!previous){
                    return this.eliminarNodoI();
                }else if(!current.next){
                    return this.eliminarNodoF();
                }else{
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                this.length--;
                return current.next;
            }
            previous = current;
            current = current.next;
        }

        return null;

    }

    
    imprimirList() {
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + ' <-> ';
            current = current.next;
        }

        return result += ' X ';
    }
}


let instClass = new listaDobleEnlazada();
instClass.añadirNodoF(5);
instClass.añadirNodoI(4);
instClass.añadirNodoI(3);
instClass.añadirNodoI(2);
instClass.añadirNodoI(1);
instClass.añadirNodoI(7);
instClass.añadirNodoI(8);
instClass.añadirNodoI(9);
instClass.eliminarNodoI();
instClass.eliminarNodoF();
instClass.removerNodoPorValor(1);
console.log(instClass);
console.log(instClass.imprimirList());
console.log("Ya");
/* instClass.imprimirArrayList(); */

