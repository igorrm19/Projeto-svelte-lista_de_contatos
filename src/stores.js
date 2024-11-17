import { writable } from 'svelte/store';

export const contador = writable(0); //contador começa sem valor

export const buscar = writable('');

export let usuarios = writable([]);