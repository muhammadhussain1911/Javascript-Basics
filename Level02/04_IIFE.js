// Immediately Invoked Function Expression (IIFE)

(function connectionDB() { // Named IIFE
    console.log("DB connected via named IIFE");
})(); // Semicolon is necessary here for defining context of function execution

(function () { // Anonymous IIFE
    console.log("DB connected via anonymous IIFE");
})();

(() => { // Arrow IIFE
    console.log("DB connected via arrow IIFE");
})();