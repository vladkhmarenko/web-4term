class THashStorage {
    constructor() {
        this.map = new Map;
    }

    map;

    AddValue(name, salary) {
        this.map.set(name, salary);
    }

    DeleteValue(name) {
        if (this.map.has(name)) {
            this.map.delete(name)
            alert("Deletion succesful");
        } else {
            alert("Does not exist");
        }
    }

    GetValueInfo(name) {
        if (this.map.has(name)) {
            console.log(this.map.get(name))
        } else {
            console.log("No information");
        }
    }

    ListValues() {
        for (let [name, salary] of this.map) {
            console.log(name + ": " + salary);
        }
    }

    Reset() {
        this.map.clear();
    }
}

Storage = new THashStorage();

function PromptAdd() {
    let name = prompt("Enter the name");
    let salary = prompt("Enter the salary");
    Storage.AddValue(name, salary);
}

function PromptDelete() {
    let name = prompt("Enter the name of an employee to delete");
    Storage.DeleteValue(name);
}

function PromptGet() {
    let name = prompt("Enter the name of an employee to check the salary");
    Storage.GetValueInfo(name);
}

function List() {
    Storage.ListValues();
}

function Clear() {
    Storage.Reset();
}