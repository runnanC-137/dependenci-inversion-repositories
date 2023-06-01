interface IGroupProps {
    id?: string
    name: string
    createdAt?: Date
    updatedAt?: Date

}

export class Group {
    id?: string
    name: string
    createdAt?: Date
    updatedAt?: Date

    constructor(props: IGroupProps) {
        Object.assign(this, props)
    }
}