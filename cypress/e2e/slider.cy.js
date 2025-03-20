describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function() {
  it('Checks if slider works on different devices', function () {
    cy.visit('http://localhost:3000');
    cy.viewport('ipad-2');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.viewport('iphone-6');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.viewport('macbook-15');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.viewport(1000, 660);
  });
});