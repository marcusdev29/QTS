import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let heroi = 'shazam'
let vilao = ['adao negro', 'charada', 'coringa', 'duas caras']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(heroi, "shazam"); 
    assertStringIncludes(heroi, "shazam");    
})

Deno.test("Testando array  dos vilao (API)", ()=> {
    assertArrayIncludes(vilao, 
        ["thanos", "charada", "ultron"],
        "deu ruim!");
})