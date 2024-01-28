import { fromJs } from 'immutable';

export default function getImmutableObject(obj) {
    return fromJs(obj);
}