const data = {
    gouv: {
        credit: 0,
        envelopes: {
            energie: 0, // satisfaction+production
            transports: 0, // satisfaction+production
            eau: 0, // satisfaction
            medical: 0, // satisfaction
            retraites: 0, // satisfaction
            police: 0, // contrer l'insatisfaction
        },
        impots: {
            tva: 0,
            energie: 0,
            carburants: 0,
            eau: 0,
            habitation: 0,
            revenu: 0,
            taxEntreprise: 0,
        }
    },
    country: {
        credit: 1000000000000,
        hab: 10000000,
        imposer: {
            tva: 0,
            energie: 0,
            carburants: 0,
            eau: 0,
            habitation: 0,
            revenu: 0,
            taxEntreprise: 0,
        },
        satisfaction: [{
                nom: 'tva',
                note: 0,
                coef: 3,
            },
            {
                nom: 'energie',
                note: 0,
                coef: 2,
            },
            {
                nom: 'carburants',
                note: 0,
                coef: 3,
            },
            {
                nom: 'eau',
                note: 0,
                coef: 1,
            },
            {
                nom: 'habitation',
                note: 0,
                coef: 2,
            },
            {
                nom: 'revenu',
                note: 0,
                coef: 3,
            },
            {
                nom: 'taxEntreprise',
                note: 0,
                coef: 1,
            },
            {
                nom: 'transports',
                note: 0,
                coef: 1,
            },
            {
                nom: 'medical',
                note: 0,
                coef: 2,
            },
            {
                nom: 'retraites',
                note: 0,
                coef: 1,
            },
        ],
    },
};

export { data };