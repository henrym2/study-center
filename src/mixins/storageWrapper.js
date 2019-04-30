export const storage = {
    data: () => {
        return {
            dataToStore: {}
        }
    },
    methods: {
        addItem: (key, item) => {
            this.dataToStore[key] = item;
        }
    }
}