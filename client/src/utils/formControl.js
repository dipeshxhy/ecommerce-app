
export const registerFormControls = [
    {
        label: "User Name",
        name: "userName",
        placeholder: "Enter your user name",
        type: "text",
        componentType: "input",
    },
   
    {
        label: "Email",
        name: "email",
        placeholder: "Enter your email",
        type: "email",
        componentType: "input",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        componentType: "input",
    }
   
]
export const loginFormControls = [
  
   
    {
        label: "Email",
        name: "email",
        placeholder: "Enter your email",
        type: "email",
        componentType: "input",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        componentType: "input",
    }
   
]


export const productFormControls = [
    {
        label: "Product Title",
        name: "title",
        placeholder: "Enter product title",
        type: "text",
        componentType: "input",
    },
    {
        label: "Description",
        name: "description",
        placeholder: "Enter product description",
        type: "text",
        componentType: "textarea",
    },
    {
        label: "Price",
        name: "price",
        placeholder: "Enter product price",
        type: "number",
        componentType: "input",
    },
    {
        label: "Category",
        name: "category",
        placeholder: "Select category",
        type: "select",
        componentType: "select",
        options: [
            { label: "Kids", value: "kids" },
            { label: "Men", value: "men" },
            { label: "Women", value: "women" },
            { label: "Footwear", value: "footwear" },
            { label: "Accessories", value: "accessories" }
        ]
    },
    {
        label: "Popular Brands",
        name: "brand",
        placeholder: "Select brand",
        type: "select",
        componentType: "select",
        options: [
            { label: "Nike", value: "nike" },
            { label: "Zara", value: "zara" },
            { label: "H&M", value: "h&m" },
            { label: "Adidas", value: "adidas" },
            { label: "Puma", value: "puma" },
            { label: "Levi's", value: "levis" },
            { label: "Under Armour", value: "under-armour" },
            { label: "Gap", value: "gap" }
        ]
    },
    {
        label: "Sales Price",
        name: "salesPrice",
        placeholder: "Enter sales price",
        type: "number",
        componentType: "input",
    },
    {
        label: "Total Stock",
        name: "totalStock",
        placeholder: "Enter total stock",
        type: "number",
        componentType: "input",
    }
];