describe('Proyecto de Jhoseph', () => {

  before(() => {
    console.log("SOY BEFORE ALL")
  })

  beforeEach(() => {
    console.log("SOY BEFORE EACH GLOBAL")
  })

  afterEach(() => {
    console.log("SOY EL AFTER EACH GLOBAL")
  })

  it('Primer test', () => {
    console.log("SOY EL PRIMER TEST GLOBAL")
  })

  it('Segundo test', () => {
    console.log("SOY EL SEGUNDO TEST GLOBAL")
  })

  describe('Proyecto de Jhoseph contexto', () => {

    beforeEach(() => {
      console.log("SOY BEFORE EACH CONTEXTO")
    })

    afterEach(() => {
      console.log("SOY EL AFTER EACH CONTEXTO")
    })

    it('Primer test contexto', () => {
      console.log("SOY EL PRIMER TEST CONTEXTO")
    })

    it('Segundo test contexto', () => {
      console.log("SOY EL SEGUNDO TEST CONTEXTO")
    })

    after(() => {
      console.log("SOY AFTER ALL")
    })

  })

})