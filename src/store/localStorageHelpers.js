const getValueFromLocalStorage = (key, parseObject = false) => {
    if ('string' !== typeof key) {
      throw new Error('key must be string');
    }

    let item = localStorage.getItem(key);
    if (parseObject) {
     
        return JSON.parse(item);
    }

    return item;
};

const setValueToLocalStorage = (key, value) => {
    if ('string' !== typeof key) {
      throw new Error('key must be string');
    }

    if ('object' === typeof value) {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
};

export {getValueFromLocalStorage, setValueToLocalStorage};
