
/* Testing titles and links */

const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}

const URL = 'pages/underwear-subscription-membership'

describe('Exit iframe', () => {

  const $el = '#btnMenuMobile';

  it('exit from iframe if any',() => {
    cy.visit(URL);
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
      // https://cdn.shopify.com/s/files/1/0313/4062/5964/files/logo-dark-22.svg?v=1666920606
  });
});

const size = {
  0:'XS',
  1:'S',
  2:'M',
  3:'L',
  4:'XL',
  5:'2X',
  6:'3X',
  7:'4X',
}

const formIds = {
  email: '#checkout_email',
  firstName: '#checkout_shipping_address_first_name',
  lastName: '#checkout_shipping_address_last_name',
  company: '#checkout_shipping_address_company',
  address: '#checkout_shipping_address_address1',
  apt: '#checkout_shipping_address_address2',
  city: '#checkout_shipping_address_city',
  country: '#checkout_shipping_address_country',
  state: '#checkout_shipping_address_province',
  zipcode: '#checkout_shipping_address_zip',
  phone:'#checkout_shipping_address_phone' 
}

const formField = {
  email: 'cassix@gmail.com',
  firstName: 'cassix',
  lastName: 'mendoza',
  company: 'Software INC',
  address: '5342 kannsas st',
  apt: 'A2',
  city: 'New York',
  country: 'United States',
  state: 'New York',
  zipcode: '11105',
  phone:'9293056854' 
}


const boxType = '.dash-boxChoiceOption.secOpt.curate.ab';
let index = 0

describe(`Subscription Funnel for ${boxType} size ${size[index]}`, () => {

  const subscriptionButton = '.membership-cols-2022 button.eby-membership-button.ebyMicroBtn';
  const cartIcon = '.eby-mobile-nav #hcw .cart-link.jsDrawerOpenRight';
  const sizes = 'ul.sizeOptListing > li.sortOpt.alt';
  const addToCart = '#ebyAddToCartPopupSaveBtn'
  // const naturlMixedColors = '#eby-subscriptionColor21';
  const naturlMixedColors = '#eby-subscriptionColor22';
  const checkoutButton = '.drawerButtonBox button.btnCheckout';

  const checkoutA = '#additional-mobile-cta'

  it(`Checks out Funnel`,{ scrollBehavior: false }, () => {
    cy.get(subscriptionButton).click()

    cy.wait(500)
    cy.get(boxType).click()
    cy.get(sizes).then( el => {
      cy.wrap(el[index]).click();
    })

    cy.wait(3000)
    cy.get(addToCart).click()

    cy.wait(5000)

    cy.scrollTo(0, 10);
    cy.scrollTo(0, 0);
    cy.get(cartIcon).click({ force: true });
    cy.wait(3000);
    
    cy.get(checkoutButton).click()
    cy.wait(3000);

    cy.get(formIds.email).type(formField.email);
    cy.get(formIds.firstName).type(formField.firstName);
    cy.get(formIds.lastName).type(formField.lastName);
    cy.get(formIds.company).type(formField.company);
    cy.get(formIds.address).type(formField.address);
    cy.get(formIds.apt).type(formField.apt);
    cy.get(formIds.city).type(formField.city);
    cy.scrollTo(0, 300);
    cy.get(formIds.country).select(formField.country);
    cy.get(formIds.state).select(formField.state);
    cy.get(formIds.zipcode).type(formField.zipcode);
    cy.get(formIds.phone).type(formField.phone);
    cy.scrollTo(0, 900);
    
    cy.get(checkoutA).click()
    
  });



  Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log('---------------------------------');
      console.log(err);
      console.log(runnable);
      console.log('---------------------------------');
      return false
  })



});








