import { assertNotNull } from '@subsquid/substrate-processor'
import { Event } from '@subsquid/substrate-processor'
import { Block } from '../processor'

export abstract class BaseProcessor<
    State extends Map<any, any> | Set<any> | { [key: string]: Map<any, any> | Set<any> },
> {
    constructor(protected _state: State) {}

    get state(): State {
        return assertNotNull(this._state)
    }

    abstract process(event: Event, block: Block): Promise<void>
}
