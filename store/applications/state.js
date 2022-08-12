export default () => ({
  errors: {
    user: [],
    application: []
  },
  step: 1,
  message: null,
  connectsid: null,
  statusMap: {
    0: 'Черновик',
    1: 'Работа с анкетами',
    2: 'Работа с банками',
    3: 'Оформление кредитного договора',
    4: 'Оформление сделки',
    5: 'Закрыто'
  },
  applications: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 2,
    data: [
      {
        statusMap: {
          0: 'Черновик',
          1: 'Работа с анкетами',
          2: 'Работа с банками',
          3: 'Оформление кредитного договора',
          4: 'Оформление сделки'
        },
        id: 2,
        createdAt: '2021-09-25T12:42:46+00:00',
        updatedAt: '2021-09-25T12:42:46+00:00',
        status: 0,
        objectPrice: 15000000,
        firstPayment: 4000000,
        ownFunds: 0,
        creditAmount: 15000000,
        creditTerm: 120,
        enrollmentBorrowers: [
          {
            typeMap: {
              0: 'Основной заемщик',
              1: 'Созаемщик'
            },
            id: 1,
            borrower: {
              isAuthorized: false
            },
            type: 0,
            privateInfo: {
              name: 'Bruce'
            },
            files: [],
            requests: []
          }
        ]
      },
      {
        statusMap: {
          0: 'Черновик',
          1: 'Работа с анкетами',
          2: 'Работа с банками',
          3: 'Оформление кредитного договора',
          4: 'Оформление сделки'
        },
        id: 1,
        createdAt: '2021-09-25T12:42:46+00:00',
        updatedAt: '2021-09-25T12:42:46+00:00',
        status: 0,
        objectPrice: 15000000,
        firstPayment: 4000000,
        ownFunds: 0,
        creditAmount: 15000000,
        creditTerm: 120,
        enrollmentBorrowers: [
          {
            typeMap: {
              0: 'Основной заемщик',
              1: 'Созаемщик'
            },
            id: 2,
            borrower: {
              isAuthorized: false
            },
            type: 0,
            privateInfo: {
              name: 'иВан'
            },
            files: [
              {
                type: 'signature',
                id: 3
              }
            ],
            requests: [
              {
                statusMap: {
                  0: 'Ожидает отправки',
                  1: 'Отправлен',
                  2: 'Одобрен',
                  3: 'Отказ'
                },
                id: 1,
                proposal: {
                  id: 2,
                  bank: {
                    id: 1,
                    name: 'ДОМ.РФ'
                  },
                  name: 'Семейная ипотека',
                  rate: 8,
                  payment: 50000,
                  decisionTerm: null
                },
                status: 0,
                creditTerm: 120,
                objectPrice: 10000000,
                firstPayment: 60000,
                mothersCapital: true,
                ownFunds: 10000,
                secondaryBorrowers: []
              }
            ]
          }
        ]
      }
    ]

  }
  /*  applications: {
    currentPage: null,
    itemsPerPage: null,
    totalItems: null,
    data: [
      {
        id: '001',
        createdAt: '12 дек 2020',
        statusMap: 0,
        status: 0,
        landlord: {
          region: 'Казань',
          address: 'Казань, ЖК Дальние Дали, Авcтровского 80, корпус 3 кв. 45',
          s: '45 кв.м '
        },
        enrollmentBorrowers: {
          requests: [
            {
              id: '001-1',
              status: 'На рассмотрении',
              statusMap: null,
              proposal: {
                name: 'Алексей Блинов',
                bank: {
                  name: 'Магнит'
                }
              },
              rate: 5000
            }
          ]
        },
        creditAmount: 0,
        objectPrice: 0,
        firstPayment: 0,
        creditTerm: 0
      }
    ]
  } */
})
