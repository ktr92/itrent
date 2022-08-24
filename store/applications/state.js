export default () => ({
  errors: {
    user: [],
    application: []
  },
  currentRequest: null,
  step: 1,
  message: null,
  connectsid: null,
  statusMap: {
    0: 'На рассмотрении',
    1: 'Отказ',
    2: 'Завершен'
  },
  applications: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 2,
    data: [
      {
        statusMap: {
          0: 'На рассмотрении',
          1: 'Отказ',
          2: 'Завершен'
        },
        id: 1,
        createdAt: '2021-09-25T12:42:46+00:00',
        updatedAt: '2021-09-25T12:42:46+00:00',
        status: 0,
        objectPrice: 3000,
        s: 45,
        address: 'Казань, ЖК Дальние Дали, Австровского 80, корпус 3 кв. 45',
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
                  0: 'ожидает отправки',
                  1: 'на рассмотрении',
                  2: 'одобрен',
                  3: 'отказ'
                },
                id: 1,
                proposal: {
                  id: 2,
                  bank: {
                    id: 1,
                    name: 'Планета здоровья',
                    logo: 'https://rent-products-api.ipotech.su/storage/banks/logo/64/GYErvdhRJwZgEt32e8fN5Vi1Ry2DSsFVZX0SMlR7.png'
                  },
                  name: 'Иван Иванов',
                  payment: 5000
                },
                status: 1,
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
      },
      {
        statusMap: {
          0: 'На рассмотрении',
          1: 'Отказ',
          2: 'Завершен'
        },
        id: 3,
        createdAt: '2021-09-25T12:42:46+00:00',
        updatedAt: '2021-09-25T12:42:46+00:00',
        status: 0,
        objectPrice: 500,
        s: 45,
        address: 'Казань, ЖК Дальние Дали, Австровского 80, корпус 3 кв. 45',
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
              name: 'Ивае'
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
                  0: 'ожидает отправки',
                  1: 'на рассмотрении',
                  2: 'одобрен',
                  3: 'отказ'
                },
                id: 5,
                proposal: {
                  id: 2,
                  bank: {
                    id: 1,
                    name: 'Fix Price',
                    logo: 'https://rent-products-api.ipotech.su/storage/banks/logo/30/Wz2xHQyIIUKmLV5GmGdZc7Em1iET14SugnSSNWfD.jpg'
                  },
                  name: 'Иван Иванов',
                  payment: 3000
                },
                status: 1,
                creditTerm: 120,
                objectPrice: 10000000,
                firstPayment: 60000,
                mothersCapital: true,
                ownFunds: 10000,
                secondaryBorrowers: []
              },
              {
                statusMap: {
                  0: 'ожидает отправки',
                  1: 'на рассмотрении',
                  2: 'одобрен',
                  3: 'отказ'
                },
                id: 4,
                proposal: {
                  id: 2,
                  bank: {
                    id: 1,
                    name: 'Планета здоровья',
                    logo: 'https://rent-products-api.ipotech.su/storage/banks/logo/64/GYErvdhRJwZgEt32e8fN5Vi1Ry2DSsFVZX0SMlR7.png'
                  },
                  name: 'Иван Иванов',
                  payment: 5000
                },
                status: 2,
                creditTerm: 120,
                objectPrice: 10000000,
                firstPayment: 60000,
                mothersCapital: true,
                ownFunds: 10000,
                secondaryBorrowers: []
              },
              {
                statusMap: {
                  0: 'ожидает отправки',
                  1: 'на рассмотрении',
                  2: 'одобрен',
                  3: 'отказ'
                },
                id: 1,
                proposal: {
                  id: 3,
                  bank: {
                    id: 1,
                    name: 'Фармленд',
                    logo: 'https://rent-products-api.ipotech.su/storage/banks/logo/62/iZyeYz0OHBRjwSPhFteOvCgicxMGKrxEihItW9OO.png'
                  },
                  name: 'Иван Иванов',
                  payment: 4000
                },
                status: 1,
                creditTerm: 120,
                objectPrice: 10000000,
                firstPayment: 60000,
                mothersCapital: true,
                ownFunds: 10000,
                secondaryBorrowers: []
              },
              {
                statusMap: {
                  0: 'ожидает отправки',
                  1: 'на рассмотрении',
                  2: 'одобрен',
                  3: 'отказ'
                },
                id: 2,
                proposal: {
                  id: 2,
                  bank: {
                    id: 1,
                    name: 'Светофор',
                    logo: 'https://rent-products-api.ipotech.su/storage/banks/logo/37/v1QLh6Uc6IZrZfB8Kg4xzuOx2NT4YPF0oRrjEnA2.jpg'
                  },
                  name: 'Иван Иванов',
                  payment: 7000
                },
                status: 3,
                creditTerm: 120,
                objectPrice: 10000000,
                firstPayment: 60000,
                mothersCapital: true,
                ownFunds: 10000,
                secondaryBorrowers: []
              },
              {
                statusMap: {
                  0: 'ожидает отправки',
                  1: 'на рассмотрении',
                  2: 'одобрен',
                  3: 'отказ'
                },
                id: 3,
                proposal: {
                  id: 7,
                  bank: {
                    id: 1,
                    name: 'Пятёрочка',
                    logo: 'https://rent-products-api.ipotech.su/storage/banks/logo/32/WqcYJoHkWbAvFyqCOWbm8yduMea3uw60hWaGWXPc.png '
                  },
                  name: 'Иван Иванов',
                  payment: 4000
                },
                status: 1,
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
      },
      {
        statusMap: {
          0: 'На рассмотрении',
          1: 'Отказ',
          2: 'Одобрен'
        },
        id: 2,
        createdAt: '2022-07-25T12:42:46+00:00',
        updatedAt: '2022-07-25T12:42:46+00:00',
        status: 1,
        objectPrice: 5000,
        s: 45,
        address: 'Казань, ЖК Дальние Дали, корпус 3 кв. 220',
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
          0: 'На рассмотрении',
          1: 'Отказ',
          2: 'Одобрен'
        },
        id: 2,
        createdAt: '2022-07-25T12:42:46+00:00',
        updatedAt: '2022-07-25T12:42:46+00:00',
        status: 2,
        objectPrice: 5000,
        s: 45,
        address: 'Казань, ЖК Дальние Дали, корпус 3 кв. 220',
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
