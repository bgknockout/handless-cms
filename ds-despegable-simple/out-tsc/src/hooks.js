import { useHost } from 'atomico';
function useSlots() {
    const host = useHost();
    /* istanbul ignore else*/
    if (!host.slots) {
        const children = [];
        const slots = { children };
        const { current } = host;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        Array.from(current.children).forEach((childNode) => {
            const slot = childNode.getAttribute('slot');
            /* istanbul ignore else*/
            if (slot)
                slots[slot] = childNode;
            children.push(childNode);
        });
        host.slots = slots;
    }
    return host.slots;
}
export { useSlots };
//# sourceMappingURL=hooks.js.map