
const handleBlur = (handler) => {
    const handle = (e) => {
        handler(e.target.value)
    }
    return handle
}

export function handleChange(handler, ref){
    const handle = (e) => {
        e.target.value = handler(e.target.value);
        ref.current = e.target.value;
    }
    return handle
}
export default handleBlur;