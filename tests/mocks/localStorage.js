export default class LocalStorageMock {
    /**
     * @constructor
     */
    constructor () {
        this.setFunctions();
    }

    /**
     * @returns {void}
     */
    setFunctions () {
        this.getItem = jest.fn(() => this.value);
        this.setItem = jest.fn((_, value) => {
            this.value = value;
        });
        this.removeItem = jest.fn();
    }

    /**
     * @returns {void}
     */
    reset () {
        this.resetFunctions();
        this.resetValue();
    }

    /**
     * @returns {void}
     */
    resetFunctions () {
        this.setFunctions();
    }

    /**
     * @returns {void}
     */
    resetValue () {
        this.setValue(null);
    }

    /**
     * @param {any} value
     * @returns {void}
     */
    setValue (value) {
        this.value = value;
    }

    /**
     * @returns {*}
     */
    getValue () {
        return this.value;
    }
}
