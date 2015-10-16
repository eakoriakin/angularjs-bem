describe('AngularJS.BEM', function () {
    var ajsBem;

    beforeEach(module('AngularJS.BEM'));

    beforeEach(inject(function (_ajsBem_) {
        ajsBem = _ajsBem_;
    }));

    describe('block method', function () {
        it('should create a CSS class of the block using the name of the block and a list of modifiers', function () {
            // Act & Assert.
            expect(ajsBem.block('product', { isSelected: '', isFocused: '', size: 'xs' }))
                .toEqual('product product_is-selected product_is-focused product_size_xs');
        });

        it('should create a CSS class of the block using the name of the block a list of modifiers and a list of CSS classes', function () {
            // Act & Assert.
            expect(ajsBem.block('product', { isSelected: '', isFocused: '', size: 'xs' }, ['clearfix']))
                .toEqual('product product_is-selected product_is-focused product_size_xs clearfix');
        });
    });

    describe('blockModifier method', function () {
        it('should create a CSS class of the block modifier using the name of the block and a list of modifiers', function () {
            // Act & Assert.
            expect(ajsBem.blockModifier('product', { isSelected: '', isFocused: '', size: 'xs' }))
                .toEqual('product_is-selected product_is-focused product_size_xs');
        });
    });

    describe('element method', function () {
        it('should create a CSS class of the element using the name of the block and the name of the element', function () {
            // Act & Assert.
            expect(ajsBem.element('product', 'name')).toEqual('product__name');
        });

        it('should create a CSS class of the element using the name of the block, the name of the element and a list of modifiers', function () {
            // Act & Assert.
            expect(ajsBem.element('product', 'name', { isSelected: '', isFocused: '', size: 'xs' }))
                .toEqual('product__name product__name_is-selected product__name_is-focused product__name_size_xs');
        });

        it('should create a CSS class of the element using the name of the block, the name of the element, a list of modifiers and a list of CSS classes', function () {
            // Act & Assert.
            expect(ajsBem.element('product', 'name', { isSelected: '', isFocused: '', size: 'xs' }, ['clearfix']))
                .toEqual('product__name product__name_is-selected product__name_is-focused product__name_size_xs clearfix');
        });
    });

    describe('elementModifier method', function () {
        it('should create a CSS class of the element modifier using the name of the block, the name of the element and a list of modifiers', function () {
            // Act & Assert.
            expect(ajsBem.elementModifier('product', 'name', { isSelected: '', isFocused: '', size: 'xs' }))
                .toEqual('product__name_is-selected product__name_is-focused product__name_size_xs');
        });
    });
});