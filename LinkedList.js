class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // add data to beginning
    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }

        this.size++;
    }

    // add data to end
    append(value) {
        const node = new Node(value, null);

        if (!this.head) {
            this.head = node;
        }

        if (!this.tail) {
            this.tail = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.size++;
    }

    find(value) {
        if (!this.head) return null;

        let node = this.head;
        while (node) {
            console.log(node);
            if (node.data === value) {
                return node;
            }
            node = node.next;
        }

        return null;
    }

    delete(value) {
        if (!this.head) return this.length;

        while (this.head.data === value) {
            this.head = this.head.next;
            this.size--;
        }

        let node = this.head;

        while (node.next) {
            if (node.next.data === value) {
                node.next = node.next.next;
                this.size--;
            }

            node = node.next;
        }

        if (this.tail && this.tail.data === value) {
            if (node) {
                node.next = null;
                this.tail = node;
            } else {
                this.tail = this.head;
            }
            this.size--;
        }

        return this.size;
    }

    getSize() {
        return this.size;
    }
}

class Node {
    constructor(value, next) {
        this.data = value;
        this.next = next;
    }
}
