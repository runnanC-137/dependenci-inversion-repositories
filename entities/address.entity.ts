interface IAddressProps {
    id: string
    rua: string
    bairro: string
    numero: string
    cidade: string
    estado: string
    createdAt?: Date
    updatedAt?: Date
}

export class Address {
    id: string
    rua: string
    bairro: string
    numero: string
    cidade: string
    estado: string
    createdAt?: Date
    updatedAt?: Date

    constructor(props: IAddressProps) {
        Object.assign(this, props)
    }
}