import { Product, Clothing, Appliance } from "../../data/products.js";

describe('test suite: Product', () => {
    let product;

    beforeEach(() => {
        product = new Product({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: [
                "socks",
                "sports",
                "apparel"
            ]
        });
    });


    it('has the correct property', () => {
        expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(product.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(product.rating).toEqual({
            stars: 4.5,
            count: 87
        });
        expect(product.priceCents).toEqual(1090);

    });


    it('getStarsUrl method test', () => {
        expect(product.getStarsUrl()).toEqual(`images/ratings/rating-45.png`)
    });

    it('getPrice method test', () => {
        expect(product.getPrice()).toEqual('$10.90');
    });
});


describe('Test suite: Clothing', () => {
    let clothing;

    beforeEach(() => {
        clothing = new Clothing({
            id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
            rating: {
                stars: 4.5,
                count: 56
            },
            priceCents: 799,
            keywords: [
                "tshirts",
                "apparel",
                "mens"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
        });
    });


    it('has the correct property', () => {
        expect(clothing.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
        expect(clothing.image).toEqual("images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg");
        expect(clothing.name).toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
        expect(clothing.rating).toEqual({
            stars: 4.5,
            count: 56
        });
        expect(clothing.priceCents).toEqual(799);
        expect(clothing.sizeChartLink).toEqual("images/clothing-size-chart.png");
    });


    it('getStarsUrl method test', () => {
        expect(clothing.getStarsUrl()).toEqual(`images/ratings/rating-45.png`)
    });

    it('getPrice method test', () => {
        expect(clothing.getPrice()).toEqual('$7.99');
    });

    it('extraInfoHTML size chart test', () => {
        expect(clothing.extraInfoHTML()).toContain('<a href="images/clothing-size-chart.png" target="_blank">');
        expect(clothing.extraInfoHTML()).toContain('Size Chart');
    });
});


describe('Test suite: appliance', () => {
    let appliance;

    beforeEach(() => {
        appliance = new Appliance({
            id: "54e0eccd-8f36-462b-b68a-8182611d9add",
            image: "images/products/black-2-slot-toaster.jpg",
            name: "2 Slot Toaster - Black",
            rating: {
                stars: 5,
                count: 2197
            },
            priceCents: 1899,
            keywords: [
                "toaster",
                "kitchen",
                "appliances"
            ],
            type: "appliance",
            instructionLink: "images/appliance-instructions.png",
            warrantyLink: "images/appliance-warranty.png"
        });
    });


    it('has the correct property', () => {
        expect(appliance.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(appliance.image).toEqual("images/products/black-2-slot-toaster.jpg");
        expect(appliance.name).toEqual("2 Slot Toaster - Black");
        expect(appliance.rating).toEqual({
            stars: 5,
            count: 2197
        });
        expect(appliance.priceCents).toEqual(1899);
        expect(appliance.instructionLink).toEqual('images/appliance-instructions.png');
        expect(appliance.warrantyLink).toEqual('images/appliance-warranty.png');
    });


    it('getStarsUrl method test', () => {
        expect(appliance.getStarsUrl()).toEqual(`images/ratings/rating-50.png`)
    });

    it('getPrice method test', () => {
        expect(appliance.getPrice()).toEqual('$18.99');
    });

    it('displays instructions and warranty in extraInfoHTML', () => {
        expect(appliance.extraInfoHTML()).toContain(
            `<a href="images/appliance-instructions.png" target="_blank">`
        );
        expect(appliance.extraInfoHTML()).toContain('Instructions');

        expect(appliance.extraInfoHTML()).toContain(
            `<a href="images/appliance-warranty.png" target="_blank">`
        );
        expect(appliance.extraInfoHTML()).toContain('Warranty');
    });
});