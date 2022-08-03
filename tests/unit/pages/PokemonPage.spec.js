import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { mockPokemons } from '../mocks/pokemons.mock'


describe('PokemonPage Component', () => {
    
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('Debe de hacer match con el Snapshot', () => { 
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe de llamar mixPokemonArray al montar', () => { 
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        shallowMount(PokemonPage)
        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    })
    
    test('Debe de hacer match con el snapshot cuando cargan los pokemons', () => { 
        const wrapper = shallowMount(PokemonPage, {  // Mount
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOption', () => {
        
        const wrapper = shallowMount(PokemonPage, {  // Mount
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        // PokemonPicture debe existir
        // PokemonOptions debe existir
        expect( picture.exists() ).toBeTruthy()
        expect( options.exists() ).toBeTruthy()

        // PokemonPicture attibute pokemonid === '5'
        expect( picture.attributes('pokemonid') ).toBe('1')

        // PokemonOptions attribute pokemon toBe true
        expect( options.attributes('pokemons') ).toBeTruthy()
     })
})