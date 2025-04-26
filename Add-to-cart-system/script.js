(async function get_Products() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    await create_product(data.products);
})();

function create_element(tag, class_name = [], tag_info){
    let el = document.createElement(tag);
    class_name.forEach((cls) => el.classList.add(cls));
    if (tag_info !== undefined) el.innerHTML = tag_info;

    return el;
}

function create_product(products){
    let index = 0;
    for(let product of products){
        let col_6 = create_element('div', ['col-6', `product-index${index}`]);
        let card = create_element('div', ['card', 'mb-5']);
        card.style['max-width'] = '600px';

        let row = create_element('div', ['row', 'g-0']);
        let col_md_4 = create_element('div', ['col-md-4']);
        let image = create_element('img', ['img-fluid', 'rounded-start']);
        image.style['max-height'] = '260px';
        image.style['min-height'] = '190px';
        image.src = product.images[0];

        let col_md_8 = create_element('div', ['col-md-8']);
        let card_body = create_element('div', ['card-body']);
        let card_title = create_element('h5', ['card-title', 'fs-5'], product.title);

        let card_discription = create_element('p', ['card-text'], product.description);
        let card_price = create_element('b', ['card-text', 'text-dark', 'd-block', 'mb-3'], `${product.price} $`);

        let cart_btn = create_element('button', ['btn', 'btn-primary', `product${index}`], "Add to cart");

        index++;

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

    add_to_cart(document.querySelectorAll('.btn'));
}


function add_to_cart(btns) {
    const cart_body = document.querySelector('.offcanvas-body');

    btns.forEach(btn => {
        btn.addEventListener('click', ({ currentTarget }) => {
            const className = [...currentTarget.classList].find(c => c.startsWith('product'));
            const index = className?.replace('product', '');
            const product = document.querySelector(`.product-index${index}`);

            product.querySelector('.card-title').classList.add('display-4', 'fs-6');
            product.querySelector('.card-text').remove();
            
            product.querySelector('.col-md-4').className = "col-md-6";
            product.querySelector('.col-md-8').className = "col-md-6";

            product.querySelector('.card').classList.remove('mb-5');
            product.querySelector('.card').classList.add('mb-3');
            product.querySelector('.card').style['height'] = "fit-content";

            const card_button = product.querySelector('.btn');
            card_button.classList.remove('btn-primary');
            card_button.classList.add('btn-danger');
            card_button.innerHTML = 'remove product';
            
            product.classList.remove('col-6');
            cart_body.appendChild(product);
        });
    });
}
