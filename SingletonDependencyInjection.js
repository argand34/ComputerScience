class DependencyContainer {
    constructor() {
        this.dependencies = {};
    }

    register(key, singletonInstance) {
        this.dependencies[key] = singletonInstance;
    }

    get(key) {
        return this.dependencies[key];
    }
}

//의존성 주입자인 DependencyContainer를 통해서 Singleton 클래스의 인스턴스를 사용

class Singleton {
    constructor(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const dependencyContainer = new DependencyContainer();
const singleton = new Singleton('Test');
dependencyContainer.register('singleton', singleton);

const singletonInstance = dependencyContainer.get('singleton');
console.log(singletonInstance.getData());  
