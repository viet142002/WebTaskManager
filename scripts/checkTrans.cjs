const pathTrans = '../src/utils/langs';
const locations = ['vi', 'en', 'fr']

const keys = new Map();
const files = {};
const result = {};

const TYPE_RESULT = {
    miss: 'miss',
    empty: 'empty',
    success: 'success',
}

const insertResult = (loc, type) => {
    if (!Object.hasOwn(result, loc)) {
        Object.assign(result, {
            [loc]: Object.keys(TYPE_RESULT).reduce((prev, cur) =>
                ({ ...prev, [cur]: 0 })
                , {})
        })
    }
    result[loc][type] = result[loc][type] + 1;
}

const logger = (loc) => {
    return {
        log: (mess) => {
            console.log(`${loc}: ${mess}`);
        },
        empty: (mess) => {
            console.warn(`${loc}_empty: ${mess}`);
        },
        miss: (mess) => {
            console.warn(`${loc}_mise: ${mess}`);
        }
    }
}

const insertKeys = (key, value) => {
    if (!keys.has(key)) {
        keys.set(key, locations.reduce((prev, cur) =>
            ({ ...prev, [cur]: false })
            , {}));
    }
    if (typeof value === 'object' && value !== null) {
        for (const [subKey, subVal] of Object.entries(value)) {
            insertKeys(subKey, subVal);
        }
    }
}

// Lấy danh sách các key
locations.forEach((loc) => {
    let fileTrans = {};
    try {
        fileTrans = require(`${pathTrans}/${loc}.json`) || {};
    } catch (error) {
        console.warn(`
****************************************

Cant found file: ${pathTrans}/${loc}.json

****************************************`);
    }
    files[loc] = fileTrans;
    for (const [key, val] of Object.entries(fileTrans)) {
        insertKeys(key, val);
    }
})
console.log(`
========================================
Lấy ds key thành công
`);

const checkEmptyMiss = (loc, key, value) => {
    const log = logger(loc);
    const itemKey = keys.get(key);
    itemKey[loc] = true;
    if (!value) {
        log.empty(`${key} is empty`);
        insertResult(loc, TYPE_RESULT.empty);
    } else {
        insertResult(loc, TYPE_RESULT.success);
    }
}

const checkMiss = (val, key) => {
    locations.forEach(loc => {
        if (!val[loc]) {
            insertResult(loc, TYPE_RESULT.miss);
            console.warn(`${loc}_miss: ${key} is missing`);
        }
    })
}

// Kiểm tra key có tồn tại và value có rỗng hay không
locations.forEach((loc) => {
    const fileTrans = files[loc] || {};
    for (const [key, val] of Object.entries(fileTrans)) {
        checkEmptyMiss(loc, key, val)
    }
})

console.log("------------");

keys.forEach((val, key) => {
    checkMiss(val, key);
})

console.log(`
========================================
message: Verify success

lang: success | miss | empty`);
locations.forEach((loc) => {
    const item = result[loc];
    console.log(`${loc}:   ${item[TYPE_RESULT.success]}  |  ${item[TYPE_RESULT.empty]}  |  ${item[TYPE_RESULT.miss]}`);
})
console.log('========================================');
