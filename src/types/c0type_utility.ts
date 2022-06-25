export function CloneType(T: C0Type<C0TypeClass>): C0Type<C0TypeClass> {
    switch (T.type) {
        case C0TypeClass.value:
            return {type: T.type, value: T.value};
        case C0TypeClass.ptr:
            if (T.kind === "struct") 
                return {type: T.type, kind: T.kind, value: T.value, offset: T.offset};
            else
                return {type: T.type, kind: T.kind, value: CloneType(T.value)};
        case C0TypeClass.string:
            return {type: T.type, value: T.value};
        case C0TypeClass.unknown:
            return {type: T.type};
    }
}

export function Type2String(T: C0Type<C0TypeClass>): string {
    switch (T.type) {
        case C0TypeClass.ptr:
            if (T.kind === "arr") return Type2String(T.value) + "[]";
            if (T.kind === "ptr") return Type2String(T.value) + "*";
            if (T.kind === "struct") return T.value + "*";
        case C0TypeClass.string: return "string";
        case C0TypeClass.unknown: return "<unknown>";
        case C0TypeClass.value: return T.value;
    }
}

export function String2Type(S: string): C0Type<C0TypeClass> {
    if (S.endsWith("*")) return { type: C0TypeClass.ptr, kind: "ptr", value: String2Type(S.slice(0, S.length - 1)) };
    else if (S.endsWith("[]")) return { type: C0TypeClass.ptr, kind: "arr", value: String2Type(S.slice(0, S.length - 2)) };
    else if (S === "string") return { type: C0TypeClass.string, value: "string" };
    else if (S === "int" || S === "char" || S === "bool") return { type: C0TypeClass.value, value: S };
    else if (S === "<unknown>") return { type: C0TypeClass.unknown };
    else return { type: C0TypeClass.ptr, kind: "struct", value: S, offset: 0 };
}

export function getType(T: C0Type<C0TypeClass>): C0Type<C0TypeClass> {
    if (T.type === C0TypeClass.ptr && T.kind === "struct") {
        const struct_fields = globalThis.C0_RUNTIME.state.TypeRecord.get(T.value);
        if (struct_fields === undefined) return { type: C0TypeClass.unknown }
        return struct_fields.get(T.offset) === undefined ? {type: C0TypeClass.unknown} : struct_fields.get(T.offset);
    } else return T;
}


// Explicit Type Narrowing. I don't know how to make the cosnt enum type as a parameter and 
// pass it to the result type as generic type argument. So I have to enumerate them manually here
export function maybeStringType(V: C0Value<C0TypeClass>): V is C0Value<Maybe<C0TypeClass.string>> {
    return V.type.type === C0TypeClass.string || V.type.type === C0TypeClass.unknown;
}

export function maybeValueType(V: C0Value<C0TypeClass>): V is C0Value<Maybe<C0TypeClass.value>> {
    return V.type.type === C0TypeClass.value || V.type.type === C0TypeClass.unknown;
}

export function maybePointerType(V: C0Value<C0TypeClass>): V is C0Value<Maybe<C0TypeClass.ptr>> {
    return V.type.type === C0TypeClass.ptr || V.type.type === C0TypeClass.unknown;
}

// export function maybeTypeOf<T extends C0TypeClass>(V: C0Value<C0TypeClass>): V is C0Value<Maybe<T>> {
//     return V.type.type === T || V.type.type === C0TypeClass.unknown;
// }
