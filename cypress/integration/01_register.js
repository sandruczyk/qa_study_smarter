describe('Register new user', function() {
    before(function() {
        // opens store front before set executin
        cy.visit('/')
    })
      
    it('Activates SignUp tab by default', function() {
      cy.get('a[data-cy = "AUTH.REGISTER.TABRoute"]')
      // validating if tab is activated
      .should('have.class', 'active')
    })

    it('Can provide new user name', function() {
        cy.fixture('registration').then((userFixture) => {
            cy.log(userFixture.email)
            cy.get('input[data-cy = email]').type(userFixture.email)
          })
    })

    it('Can submit', function() {
        cy.get('button[datacy = login]').click()
    })

    it('Displayes confirmation screen', function() {
        cy.get('div.guide-step-wrapper > p:nth-of-type(1)').then(($element) => {
            // validating if proper Welcome message
            // is presented in expected paragraph
            expect($element).to.have.text('Welcome to StudySmarter!')
        })
    })
  })
  