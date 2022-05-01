describe('example to-do app', () => {
    const email = 'cypress@test.dk'
    const password = 'Cypress'
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('create a book post and submit it to the database', () => {
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
    it('login to account', () => {
        cy.contains('Login').click()
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('.inputLogin').get('form').submit()
    })

    it('comment on a book', () => {
        cy.wait(1000)
        cy.contains('Buy').click()
        cy.wait(1000)
        cy.contains('Jane Eyre').parent().click()
        cy.wait(1000)
        cy.get('input[name=commentInput]').type('Cypress Hell')
        cy.get('Button[id=commentSub]').click()
    })

    it('Edit comment', () => {
        cy.contains('Buy').click()
        cy.wait(1000)
        cy.contains('Jane Eyre').parent().click()
        cy.get('.edit-button').click()
        cy.get('input[name=editingInput]').type(" and Heaven")
        cy.get('button[name=confirm]').click()
    })

    it('Delete comment', () => {
        cy.contains('Buy').click()
        cy.wait(1000)
        cy.contains('Jane Eyre').parent().click()
        cy.get('.delete-button').click()
    })


    it('access profile, then logout', () => {
        cy.contains('Profile').click()
        cy.contains('Logout').click({position:'bottom'})
    })
})