function reverse(str: string): string {
    return str.split("").reverse().join("");
}

let maybeString: string | null;

if (Math.random() < 2) {
    maybeString = "hello world";
} else {
    maybeString = null
}

// compile error
reverse(maybeString)

// ok, you confirm is will not be null
reverse(maybeString!)
