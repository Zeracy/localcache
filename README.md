# localcache

## About
A localStorage wrapper that facilitates storing different types of data.

## Install
At the moment this isn't published so it can only be installed through the git url
```bash
yarn add https://github.com/Zeracy/localcache
```

## Usage

```
import localCache from 'localcache';

const myEntry = localCache('entryKey');
```
### Functions

#### get
Returns the current value of the entry.

```
myEntry.get();
```
#### set
Sets a new value to the instance (as well as saving it in the localStorage).

```
myEntry.set('value');
```
#### remove
Deletes the entry in the localStorage.

```
myEntry.remove();
```

## Handlers
It's possible to handle three types of data: string, array and object.
Simply import the handler you require along side localcache and pass it as an option.

```
import localCache, { HANDLE_ARRAY, HANDLE_OBJECT } from 'localcache';

const myArrayEntry = localCache('entryArrayKey', { handleAs: HANDLE_ARRAY });
const myObjectEntry = localCache('entryObjectKey', { handleAs: HANDLE_OBJECT });
```

