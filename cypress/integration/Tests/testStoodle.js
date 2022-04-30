describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://stoodle.bhsi.xyz/')
    })

    it('create products can be opened and a new product can be uploaded', () => {
        const p = 'pic.svg'
        cy.contains('Sell').click()
        cy.get('input[name=title]').type('CypressTestTitle')
        cy.get('textarea[name=description]').type('CypressTestDesc')
        cy.get('input[name=price]').type('1337')
        cy.get('select[name=cond]').select('great')
        cy.get('select[name=lang]').select('danish')
        cy.get('input[name=topic]').type('CypressTestTopic')
        cy.get('input[name=university]').type('CypressTestUni')
        cy.get('input[name=publisher]').type('CypressTestPublisher')
        cy.get('input[name=author]').type('CypressTestAuthor')
        cy.get('input[name=image]').attachFile(p);
        cy.contains('Submit').click()
    })

    it('buy tab for books can be opened', () => {
        cy.contains('Buy').click()
    })
    it('buy tab can be opened and a book can be accessed', () => {
        cy.contains('Buy').click()
        cy.contains('Jane Eyre').parent().click()
    })
    it('buy tab change filter price and access a book', () => {
        cy.contains('Buy').click()
        cy.get('input[id=pMax]').type('200',{force: true})
        cy.contains('The Theory of Moral Sentiments').parent().click()
    })
    it('access profile', () => {
        cy.contains('Profil').click()
    })

    it('access profile, go to favorites', () => {
        cy.contains('Profil').click()
        cy.contains('Favorites').click()
    })
    
})