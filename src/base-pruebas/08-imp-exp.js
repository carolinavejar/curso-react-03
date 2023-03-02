import {heros} from '../data/heros';

export const getHeroeById = (id) => heros.find( (hero) => hero.id === id );
export const getHeroesByOwner = ( owner ) => heros.filter( (hero) => hero.owner === owner );



