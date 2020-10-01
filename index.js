const axios = require('axios')

async function getData() {
    try {
        const resp = await axios.get('https://www.iwillfearnoevil.com/screen/string.txt');
        return Promise.resolve(resp.data);
    } catch (err) {
        console.error(err);
    }
}

(async function main() {
    const  data = await getData()
    const dataList = data.split(/\n/)
    const numericData = dataList.reduce((acc, elem) => {
        if (Number(elem)) {
            elem = Number(elem)
        } else if (elem == "0") {
            elem = 0
        } else {
            return acc
        }

        if (!acc.includes(elem) && !isNaN(parseFloat(elem)) && isFinite(elem)) {
            acc.push(elem)
        }
        return acc
    }, []) // Javascript Arrays are Objects with their values stored in a Hash Table.

    numericData.sort((a, b) => {return a - b})
    
    console.log(numericData.slice(0,3))
})();
