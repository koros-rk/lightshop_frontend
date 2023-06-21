function product_list_loader() {
    return {'product': 'object'}
}

function single_product_loader({params}) {
    return {'params': params}
}

export {product_list_loader, single_product_loader}