import PurchaseInterface from '~/src/classes/PurchaseInterface'

export default class Purchase implements PurchaseInterface {
  id: number = 0
  name: string = ''
  price: number = 0
  purchase_date: string = ''

  constructor (data: Partial<Purchase>) {
    Object.assign(this, data)
  }
}
