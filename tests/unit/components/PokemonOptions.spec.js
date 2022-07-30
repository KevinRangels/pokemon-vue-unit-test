import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { mockPokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions test', () => {
    
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockPokemons
            }
        })
    })

    test('Debe de hacer match con el snapshot', () => { 

        expect(wrapper.html()).toMatchSnapshot()

     })

     test('Debe de mostrar las 4 opciones correctamente', () => { 
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)

        expect( liTags[0].text() ).toBe('bulbasaur')
        expect( liTags[1].text() ).toBe('ivysaur')
        expect( liTags[2].text() ).toBe('charmander')
        expect( liTags[3].text() ).toBe('venusaur')
     })

    test('Debe de emitir "selection" con sus respectivos parametros al hacer click', () => { 
        const [li1, li2, li3, li4] = wrapper.findAll('li')
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        expect(wrapper.emitted('selectionPokemon').length).toBe(4) // Probamos que se emitio una vez
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1])
    })
 })