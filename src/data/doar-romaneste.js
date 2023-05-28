const doarRomaneste = {
  produs: [
    {
      denumire: 'Miere',
      brand: 'Apicola',
      url: 'https://www.apicola.ro/produse-apicola'
    },
    {
      denumire: 'Miere',
      brand: 'Apidava',
      url: 'https://www.apidava.ro/'
    }
  ],
  desfacere: [
    {
      oras: 'Tulcea',
      nume: 'Fraher',
      url: 'https://fraher.ro'
    },
    {
      oras: 'Tulcea',
      nume: 'Aless',
      url: 'https://goo.gl/maps/2RW2uZD3EE3fDoYP8?coh=178573&entry=tt'
    },
    {
      oras: 'Tulcea',
      nume: 'Mere',
      url: 'https://goo.gl/maps/MF2x6jrnFbeoRqr56?coh=178573&entry=tt'
    }
  ]
}

export const getProduse = () => {
  let produse = doarRomaneste.produs
  return { produse }
}

export const getDesfacere = () => {
  let desfacere = []
  return desfacere
}
