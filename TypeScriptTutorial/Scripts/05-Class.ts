﻿interface Books {
    title: string;
    author: string;
    bookInfo: () => string;
}

class MyBook implements Books {
    title = 'Moby Dick';
    author = 'Herman Melville';
    bookInfo () {
        return this.title + " by : " + this.author;
    }
}

var b: Books = new MyBook();
alert(b.bookInfo())