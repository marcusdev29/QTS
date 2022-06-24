
let thanos = 'inevitavel'
let homemdeFerro = 'homemdeFerro'

Deno.test("Teste do Homen de ferro (NO API)", () => {
    if (thanos != "inevitavel") {
        throw new Error(`${thanos} não é homemdeFerro`);
    }
})

Deno.test("Não pode ser Homem de Ferro (NO API)", () => {
    if (homemdeFerro == "e eu... sou homem de ferro") {
        throw new Error(`${thanos}  é inevitável`);
    }
})
