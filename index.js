let values = {};

const context = {
    setVariable: (key, value) => {
        values[key] = value;
    },
    getVariable: (key) => {
        if(typeof values[key] === 'undefined') {
            return "";
        }
        return values[key];
    },
    removeVariable: (key) => {
        if(typeof values[key] !== 'undefined') {
            delete values.key;
        }
    },
    import: context => (values = context),
    export: () => { return {...values} }
};

exports.context = context;