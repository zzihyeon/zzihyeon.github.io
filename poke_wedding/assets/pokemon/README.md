# Decorative Pokémon sprites

Downloaded unedited on 2026-09-05 from the [PokéAPI sprites repository](https://github.com/PokeAPI/sprites). Each transparent PNG is 96 × 96 pixels. These local files are used instead of runtime hotlinks.

| Local file | Character | Source file |
|---|---|---|
| `pikachu.png` | 피카츄 | [25.png](https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/25.png) |
| `mimikyu.png` | 따라큐 | [778.png](https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/778.png) |
| `charmander.png` | 파이리 | [4.png](https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/4.png) |
| `squirtle.png` | 꼬부기 | [7.png](https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/7.png) |
| `bulbasaur.png` | 이상해씨 | [1.png](https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png) |

Image URLs follow `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{ID}.png` with the IDs above.

The [repository license](https://github.com/PokeAPI/sprites/blob/master/LICENCE.txt) states that image contents remain copyright The Pokémon Company. The repository's CC0 declaration must not be interpreted as a CC0 license for the character artwork. No separate unrestricted artwork license was verified.

Mimikyu is an established community Gen-5-style sprite, not an official Gold-era sprite. See [sprite contribution notes](https://github.com/PokeAPI/sprites/blob/master/CONTRIBUTING_SPRITES.md) for the later-generation sprite provenance.

## Placement and motion

The five sprites occupy the existing 72px top padding in the introduction, letter, date, Moments, and location sections. They are decorative (`aria-hidden`, empty alt text, no pointer events). Scroll position controls entry, small hops, and exit. Reduced-motion settings show still sprites. No photo frames, copy, or section spacing are changed.
