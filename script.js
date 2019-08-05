const books = [
    {
        title: 'mansfield park',
        author: 'jane austen',
        blurb: `Fanny Price's rich relatives offer her a place in their home so that she can
                be properly brought up. However, Fanny's childhood is a lonely one as she is
                never allowed to forget her position. Her only ally is her cousin Edmund.
                When her cousins befriend two glamorous new young people who have arrived
                in the area, Henry and Mary Crawford, Edmund starts to grow close to Mary
                and Fanny finds herself dealing with feelings she has never experienced before.`,
    },
    {
        title: 'persuasion',
        author: 'jane austen',
        blurb: `Eight years ago Anne Elliot bowed to pressure from her family and made the
                decision not to marry the man she loved, Captain Wentworth. Now circumstances
                have conspired to bring him back into her social circle and Anne finds her old
                feelings for him reignited. However, when they meet again Wentworth behaves as
                if they are strangers and seems more interested in her friend Louisa. In this,
                her final novel, Jane Austen tells the story of a love that endures the tests
                of time and society with humour, insight and tenderness.`,
    },
    {
        title: 'pride and prejudice',
        author: 'jane austen',
        blurb: `Mrs Bennet is seeking a husband for each of her five daughters in order to secure
                their future. But as the Bennet's soon discover, love is rarely straightforward and their
                world is turned upside down in this tale of love, marriage and society in Georgian England.`,
    },
    {
        title: 'emma',
        author: 'jane austen',
        blurb: `Beautiful, clever, rich-and single-Emma Woodhouse is perfectly content with her
                life and sees no need for either love or marriage. Nothing, however, delights her more
                than interfering in the romantic lives of others. But when she ignores the warnings of
                her good friend Mr. Knightley and attempts to arrange a suitable match for her protégée
                Harriet Smith, her carefully laid plans soon unravel and have consequences that she
                never expected.`
    },
];

// var ul = document.createElement('ul')
// document.getElementById('list').appendChild(ul);

// // Create markup
// books.forEach(book => {
//     var li = document.createElement('li');
//     ul.appendChild(li);
//     li.innerHTML = li.innerHTML + book;
//    // // li.innerHTML += book;
// });

var container = $('.card-group')

books.forEach(function (book) {
    container.append(`
        <div class="card">
            <h1 class="card-title">${book.title}</h1>
            <div class="card-body hidden">
                <p class="card-text"> ${book.blurb}</p>
            </div>
            <p class="card-author"> ${book.author}</p>
        </div>
    `)
});


$('.card').on('click', function() {
    $(this).find('.card-body').fadeIn('active');
});

