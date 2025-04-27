// ---------------------------------------------------------------------
// Generic Class

class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}

const stringBox = new Box<string>('Hello');
console.log(stringBox.getContent()); // 'Hello'

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // 42

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// Generic Interface

interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
    success: true,
    data: {
        id: 1,
        name: 'Chris'
    }
};

const idsResponse: ApiResponse<number[]> = {
    success: true,
    data: [1, 2, 3]
};

console.log(userResponse.data.name); // 'Chris'
console.log(idsResponse.data[0]);    // 1

// ---------------------------------------------------------------------
