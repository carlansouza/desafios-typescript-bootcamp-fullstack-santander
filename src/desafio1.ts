interface employee  {
    code: number;
    name: string;
};

const employee1: employee = {
    code: 10,
    name: 'John'
}

function printEmployee(code: number, name: string) {
    return `Codigo: ${code} \nName: ${name}`;
}

console.log(printEmployee(employee1.code, employee1.name));
