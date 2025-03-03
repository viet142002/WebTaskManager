const fs = require('fs');
const pathTrans = '../src/assets/langs';
const locations = ['vi', 'en', 'fr', 'jp', 'cn'];

const keys = new Map();
const files = {};
const result = {};

const TYPE_RESULT = {
    miss: 'miss',
    empty: 'empty',
    success: 'success',
};

const insertResult = (loc, type) => {
    if (!Object.hasOwn(result, loc)) {
        result[loc] = { miss: 0, empty: 0, success: 0 };
    }
    result[loc][type] += 1;
};

const logger = (loc) => ({
    log: (mess) => console.log(`${loc}: ${mess}`),
    empty: (mess) => console.warn(`${loc}_empty: ${mess}`),
    miss: (mess) => console.warn(`${loc}_miss: ${mess}`),
});

const insertKeys = (key, value, parentKey = '') => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    if (!keys.has(fullKey)) {
        keys.set(fullKey, Object.fromEntries(locations.map(loc => [loc, false])));
    }
    if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([subKey, subVal]) => insertKeys(subKey, subVal, fullKey));
    }
};

// Load translation files
locations.forEach((loc) => {
    try {
        files[loc] = require(`${pathTrans}/${loc}.json`) || {};
    } catch (error) {
        console.warn(`Cant found file: ${pathTrans}/${loc}.json`);
        files[loc] = {};
    }
    Object.entries(files[loc]).forEach(([key, val]) => insertKeys(key, val));
});

console.log("Lấy danh sách key thành công");

const checkEmptyMiss = (loc, key, value) => {
    const log = logger(loc);
    keys.get(key)[loc] = true;
    if (!value) {
        log.empty(`${key} is empty`);
        insertResult(loc, TYPE_RESULT.empty);
    } else {
        insertResult(loc, TYPE_RESULT.success);
    }
};

const checkMiss = (val, key) => {
    locations.forEach(loc => {
        if (!val[loc]) {
            insertResult(loc, TYPE_RESULT.miss);
            console.warn(`${loc}_miss: ${key} is missing`);
            const keyParts = key.split('.');
            let obj = files[loc];
            for (let i = 0; i < keyParts.length - 1; i++) {
                obj[keyParts[i]] = obj[keyParts[i]] || {};
                obj = obj[keyParts[i]];
            }
            obj[keyParts[keyParts.length - 1]] = ""; // Thêm key bị thiếu
        }
    });
};

// Kiểm tra key có tồn tại và giá trị có rỗng không
locations.forEach((loc) => {
    const traverse = (obj, parentKey = '') => {
        Object.entries(obj || {}).forEach(([key, val]) => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            checkEmptyMiss(loc, fullKey, val);
            if (typeof val === 'object' && val !== null) {
                traverse(val, fullKey);
            }
        });
    };
    traverse(files[loc]);
});

console.log("------------");

keys.forEach((val, key) => checkMiss(val, key));

console.log("\n========================================");
console.log("message: Verify success\nlang: success | miss | empty");
locations.forEach((loc) => {
    console.log(`${loc}:   ${result[loc]?.success || 0}  |  ${result[loc]?.empty || 0}  |  ${result[loc]?.miss || 0}`);
});
console.log("========================================");

// Ghi lại vào file JSON
locations.forEach((loc) => {
    const filePath = `${__dirname}/${pathTrans}/${loc}.json`;
    try {
        fs.writeFileSync(filePath, JSON.stringify(files[loc], null, 2), 'utf8');
        console.log(`Đã cập nhật file: ${filePath}`);
    } catch (error) {
        console.error(`Lỗi khi ghi file ${filePath}:`, error);
    }
});
