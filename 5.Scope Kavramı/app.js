

var a = 10; // global scope - ram üzerinde her yerden erişilebilir. ram' de çok büyük bir alan kaplar.

function method1() {
    var a = 5; // function scope

    if (true) {
        var b = 10; // block scope (aslında var ile tanımlandığı için yine function scope olur)
    }

    while (true) {
        
    }

    for (let i = 0; i <= 10; i++) {
        
    }
}
