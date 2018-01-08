 class People {
    getName() {
        return "Linh";
    }
}

class Student extends People{
    constructor(){
        super()
    }

    getClass(){
        return "AI";
    }
}

export {People, Student};