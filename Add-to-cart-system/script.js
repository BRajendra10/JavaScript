async function get_Products() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // const product = await data.products[1];
    // console.log(product);
    await create_product(data.products);
}

get_Products();

function create_eliment(tag, class_name = [], tag_info){
    let el = document.createElement(tag);

    class_name.forEach((cls) => el.classList.add(cls));

    if (tag_info !== undefined) el.innerHTML = tag_info;

    return el;
}

function create_product(products){
    console.log(products);

    for(let product of products){
        console.log(product.price);

        let col_6 = create_eliment('div', ['col-6']);
        let card = create_eliment('div', ['card', 'mb-5']);
        card.style['max-width'] = '600px';

        let row = create_eliment('div', ['row', 'g-0']);
        let col_md_4 = create_eliment('div', ['col-md-4']);
        let image = create_eliment('img', ['img-fluid', 'rounded-start']);
        image.style['max-height'] = '260px';
        image.style['min-height'] = '190px';
        image.src = product.images[0];

        let col_md_8 = create_eliment('div', ['col-md-8']);
        let card_body = create_eliment('div', ['card-body']);
        let card_title = create_eliment('h5', ['card_title', 'fs-5'], product.title);

        let card_discription = create_eliment('p', ['card-text'], product.description);
        let card_price = create_eliment('b', ['card-text', 'text-dark', 'd-block', 'mb-3'], product.price);

        let cart_btn = create_eliment('button', ['btn', 'btn-primary'], "Add to cart");

        col_md_4.appendChild(image);
        row.appendChild(col_md_4);

        card_body.appendChild(card_title);
        card_body.appendChild(card_discription);
        card_body.appendChild(card_price);
        card_body.appendChild(cart_btn);

        col_md_8.appendChild(card_body);
        row.appendChild(col_md_8);

        card.appendChild(row);
        col_6.appendChild(card);

        document.querySelector('.container .row').appendChild(col_6);

    }
}