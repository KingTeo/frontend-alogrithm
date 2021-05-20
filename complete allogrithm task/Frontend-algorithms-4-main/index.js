const convertFahrToCelsius = (fahr) => {
    const celsius = ((fahr - 32) * (5/9)).toFixed(4);
    if (isNaN(fahr) == false && fahr != null) {
        return celsius;
    } else if (Array.isArray(fahr) == true){
        return `${JSON.stringify(fahr)} is not a valid number but a/an array`;
    } else {
        return `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}`;
    }
}

convertFahrToCelsius([1, 2]);


const checkYuGiOh = (n) => {
    let num = n - 0;
    if (isNaN(num) == false && num != null) {
        let items = [];
        for (let i = 1; i < num+1; i++) {
            items.push(i);
        }
        items.forEach((parameter) => {
            if (parameter%30 == 0) {
                let index = items.indexOf(parameter)
                if (index !== -1) {
                    items[index] = "yu-gi-ho";
                }
            } else if (parameter%15 == 0) {
                let index = items.indexOf(parameter)
                if (index !== -1) {
                    items[index] = "gi-ho";
                }
            } else if (parameter%10 == 0) {
                let index = items.indexOf(parameter)
                if (index !== -1) {
                    items[index] = "yu-ho";
                }
            } else if (parameter%6 == 0) {
                let index = items.indexOf(parameter)
                if (index !== -1) {
                    items[index] = "yu-gi";
                }
            } else if (parameter%2 == 0) {
                let index = items.indexOf(parameter)
                if (index !== -1) {
                    items[index] = "yu";
                }
            } else if (parameter%3 == 0) {
                let index = items.indexOf(parameter)
                if (index !== -1) {
                    items[index] = "gi";
                }
            } else if (parameter%5 == 0) {
                let index = items.indexOf(parameter)
                if (index !== -1) {
                    items[index] = "ho";
                }
            }
        })
        return items;
    } else {
        return `invalid parameter: ${JSON.stringify(n)}`;
    }
}

checkYuGiOh("5")