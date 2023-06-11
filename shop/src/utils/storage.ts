import merge from 'lodash/merge';
import omit from 'lodash/omit';

const APP_STORAGE_KEY = 'maynooth-store-key';

export const Storage = {
    get() {
        return JSON.parse(sessionStorage.getItem(APP_STORAGE_KEY) || '{}');
    },
    set<T>(key: string, value: T) {
        const current = this.get();
        const nextStore = merge(current, {[key]: value});

        sessionStorage.setItem(APP_STORAGE_KEY, JSON.stringify(nextStore));
    },
    removeKey(key: string) {
        return sessionStorage.set(APP_STORAGE_KEY, omit(this.get(), key));
    },
};
