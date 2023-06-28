function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

const getResults = async () => {
    try {
        const tinaDraw = await luckyDraw("Tina");
        console.log(tinaDraw);
        const jeorgeDraw = await luckyDraw("Jorge");
        console.log(jeorgeDraw);
        const julienDraw = await luckyDraw("Julien");
        console.log(julienDraw);
    } catch (error) {
        console.log(error);
    }
}

getResults();