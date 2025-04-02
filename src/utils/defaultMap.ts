export function createDefaultMap<K, V>(defaultValueFactory: () => V): Map<K, V> & { getOrCreate(key: K): V } {
    const map = new Map<K, V>()

    function getOrCreate(key: K): V {
        if (!map.has(key)) {
            map.set(key, defaultValueFactory())
        }
        return map.get(key)!
    }

    return Object.assign(map, { getOrCreate })
}
