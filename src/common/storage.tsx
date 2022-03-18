import { LOCAL_STORAGE_NAME } from "../constants/common";

const getStorageData = () => {
    const storage = localStorage.getItem(LOCAL_STORAGE_NAME);
    const data = storage ? JSON.parse(storage) : {};
    return data;
};

const storage = {
    get: (key: string) => {
        return getStorageData()[key];
    },
    set: (key: string, value: any) => {
        const data = getStorageData();
        data[key] = value;
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data));
    },
};

export default storage;
