import { assertNotNull } from '@subsquid/substrate-processor'
import { BlockHeader, Event } from '@subsquid/substrate-processor'

export abstract class BaseProcessor<
    State extends
        | Map<any, any>
        | Set<any>
        | { [key: string]: Map<any, any> | Set<any> },
> {
    constructor(protected _state: State) {}

    get state(): State {
        return assertNotNull(this.state)
    }

    abstract process(event: Event, block: BlockHeader): Promise<void>
}
