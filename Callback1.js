let name;

const getName = (cb) => {
    setTimeout(() => {
        name = "DhanalakshmiPrabhakaran";
        cb();
    },2000);
};

const greet = () => {
    console.log(`Hello ${name}`);
};

getName(greet);