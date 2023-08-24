import { FormItem } from './interfaces/FormItem';
// import { Validators } from '@angular/forms';

export const USER: string = 'user';
export const USERS: string = 'users';
export const USER_ADD: string = 'user/add';
export const USER_EDIT: string = 'user/edit';

export const USER_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  // se necesita ???
  {
    name: 'firstName',
    label: 'Primer Nombre',
    inputType: 'text',
    // validators: [Validators.required, Validators.email],
  },
  {
    name: 'lastName',
    label: 'Apellido',
    inputType: 'text',
  },
  {
    name: 'phoneNumber1',
    label: 'Numero Telefonico 1',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'phoneNumber2',
    label: 'Numero Telefonico 2',
    inputType: 'text',
  },
  {
    name: 'login',
    label: 'Login',
    inputType: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    inputType: 'password',
  },
  {
    name: 'isSystemAdmin',
    label: 'System Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isSecurityAdmin',
    label: 'Security Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isRestaurantAdmin',
    label: 'Restaurant Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isAccountsAdmin',
    label: 'Account Admin',
    inputType: 'checkbox',
  },
];

export const RESTAURANT = 'restaurant';
export const RESTAURANTS = 'restaurants';
export const RESTAURANT_ADD: string = 'restaurant/add';
export const RESTAURANT_EDIT: string = 'restaurant/edit';

export const RESTAURANT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  {
    name: 'address',
    label: 'Direccion',
    inputType: 'text',
    // validators: [Validators.required],
  },
  {
    name: 'phone',
    label: 'Telefono',
    inputType: 'text',
    // validators: [Validators.required],
  },
  {
    name: 'clientsAmount',
    label: 'Cantidad de clientes',
    inputType: 'text',
    // validators: [Validators.required],
  },
];

//ACCOUNT
export const ACCOUNT = 'account';
export const ACCOUNTS = 'accounts';
export const ACCOUNT_ADD: string = 'account/add';
export const ACCOUNT_EDIT: string = 'account/edit';

export const ACCOUNT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  // se necesita ???
  {
    name: 'firstName',
    label: 'Primer Nombre',
    inputType: 'text',
    // validators: [Validators.required, Validators.email],
  },
  {
    name: 'lastName',
    label: 'Apellido',
    inputType: 'text',
  },
  {
    name: 'phoneNumber1',
    label: 'Numero Telefonico 1',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'phoneNumber2',
    label: 'Numero Telefonico 2',
    inputType: 'text',
  },
  {
    name: 'login',
    label: 'Login',
    inputType: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    inputType: 'password',
  },
  {
    name: 'isSystemAdmin',
    label: 'System Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isSecurityAdmin',
    label: 'Security Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isRestaurantAdmin',
    label: 'Restaurant Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isAccountsAdmin',
    label: 'Account Admin',
    inputType: 'checkbox',
  },
];

//BRAND
export const BRAND = 'brand';
export const BRANDS = 'brands';
export const BRAND_ADD: string = 'brand/add';
export const BRAND_EDIT: string = 'brand/edit';

export const BRAND_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  // se necesita ???
  {
    name: 'Description',
    label: 'Descripcion',
    inputType: 'text',
    // validators: [Validators.required, Validators.email],
  },
  {
    name: 'country',
    label: 'Pais',
    inputType: 'text',
  },
  {
    name: 'company',
    label: 'compañia',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'phoneNumber',
    label: 'Numero Telefonico',
    inputType: 'text',
  },
];

//CASHIER

export const CASHIER = 'cashier';
export const CASHIERS = 'cashiers';
export const CASHIER_ADD: string = 'cashier/add';
export const CASHIER_EDIT: string = 'cashier/edit';

export const CASHIER_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'registrationDate',
    label: 'fecha de registro',
    inputType: 'text',
    // validators: [Validators.required],
  },
  // se necesita ???
  {
    name: 'description',
    label: 'Descripcion',
    inputType: 'text',
    // validators: [Validators.required, Validators.email],
  },
  {
    name: 'startingMoney',
    label: 'Dinero al iniciar',
    inputType: 'text',
  },
  {
    name: 'closingMoney',
    label: 'Dinero al cerrar',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'cashierOpeningDate',
    label: 'Fecha de apertura',
    inputType: 'text',
  },
  {
    name: 'cashierClosingDate',
    label: 'Fecha de cierre',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'restaurantId',
    label: 'Restaurante ID',
    inputType: 'text',
  },
];

//CLIENT

export const CLIENT = 'client';
export const CLIENTS = 'clients';
export const CLIENT_ADD: string = 'client/add';
export const CLIENT_EDIT: string = 'client/edit';

export const CLIENT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  // se necesita ???
  {
    name: 'amountPayed',
    label: 'Total pagado',
    inputType: 'text',
    // validators: [Validators.required, Validators.email],
  },
  {
    name: 'products',
    label: 'Productos',
    inputType: 'text',
  },
  {
    name: 'productsPrice',
    label: 'Precio de productos',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'restaurantId',
    label: 'restaurante id',
    inputType: 'text',
  },
  {
    name: 'status',
    label: 'estatus',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
];

//COUNTRY

export const COUNTRY = 'country';
export const COUNTRYS = 'countrys';
export const COUNTRY_ADD: string = 'country/add';
export const COUNTRY_EDIT: string = 'country/edit';

export const COUNTRY_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
];

export const EMPLOYEE = 'employee';
export const EMPLOYEES = 'employees';
export const EMPLOYEE_ADD: string = 'employee/add';
export const EMPLOYEE_EDIT: string = 'employee/edit';

export const EMPLOYEE_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'idCardNumber',
    label: 'idCardNumber',
    inputType: 'text',
  },
  {
    name: 'name',
    label: 'name',
    inputType: 'text',
  },
  {
    name: 'fistName',
    label: 'fistName',
    inputType: 'text',
  },
  {
    name: 'lastName',
    label: 'lastName',
    inputType: 'text',
  },
  {
    name: 'phoneNumber1',
    label: 'phoneNumber1',
    inputType: 'text',
  },
  {
    name: 'phoneNumber2',
    label: 'phoneNumber2',
    inputType: 'text',
  },
  {
    name: 'restaurantId',
    label: 'restaurantId',
    inputType: 'text',
  },
  {
    name: 'positionId',
    label: 'positionId',
    inputType: 'text',
  },
];

//MEASUREMENTUNIT

export const MEASUREMENTUNIT = 'measurementunit';
export const MEASUREMENTUNITS = 'measurementunits';
export const MEASUREMENTUNIT_ADD: string = 'measurementunit/add';
export const MEASUREMENTUNIT_EDIT: string = 'measurementunit/edit';

export const MEASUREMENTUNIT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'address',
    label: 'address',
    inputType: 'text',
  },
  {
    name: 'phoneNumber',
    label: 'phoneNumber',
    inputType: 'text',
  },
  {
    name: 'clientsQuantity',
    label: 'clientsQuantity',
    inputType: 'text',
  },
];

//POSITION

export const POSITION = 'position';
export const POSITIONS = 'positions';
export const POSITION_ADD: string = 'position/add';
export const POSITION_EDIT: string = 'position/edit';

export const POSITION_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'name',
    inputType: 'text',
  },
  {
    name: 'roleId',
    label: 'roleId',
    inputType: 'text',
  },
  {
    name: 'userId',
    label: 'userId',
    inputType: 'text',
  },
  {
    name: 'isRestaurantInternal',
    label: 'isRestaurantInternal',
    inputType: 'text',
  },
];

//PRODUCT

export const PRODUCT = 'product';
export const PRODUCTS = 'products';
export const PRODUCT_ADD: string = 'product/add';
export const PRODUCT_EDIT: string = 'product/edit';

export const PRODUCT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'name',
    inputType: 'text',
  },
  {
    name: 'description',
    label: 'description',
    inputType: 'text',
  },
  {
    name: 'category',
    label: 'category',
    inputType: 'text',
  },
  {
    name: 'type',
    label: 'type',
    inputType: 'text',
  },
  {
    name: 'price',
    label: 'price',
    inputType: 'text',
  },
  {
    name: 'pricePerUnit',
    label: 'pricePerUnit',
    inputType: 'text',
  },
  {
    name: 'ingredients',
    label: 'ingredients',
    inputType: 'text',
  },
  {
    name: 'edibleLine',
    label: 'edibleLine',
    inputType: 'text',
  },
  {
    name: 'edibleClass',
    label: 'edibleClass',
    inputType: 'text',
  },
  {
    name: 'picture',
    label: 'picture',
    inputType: 'text',
  },
  {
    name: 'year',
    label: 'year',
    inputType: 'text',
  },
  {
    name: 'measurementUnit',
    label: 'measurementUnit',
    inputType: 'text',
  },
  {
    name: 'quantity',
    label: 'quantity',
    inputType: 'text',
  },
  {
    name: 'nationality',
    label: 'nationality',
    inputType: 'text',
  },
  {
    name: 'restaurantId',
    label: 'restaurantId',
    inputType: 'text',
  },
  {
    name: 'providerId',
    label: 'providerId',
    inputType: 'text',
  },
  {
    name: 'brandId',
    label: 'brandId',
    inputType: 'text',
  },
];

//PROVIDER

export const PROVIDER = 'provider';
export const PROVIDERS = 'providers';
export const PROVIDER_ADD: string = 'provider/add';
export const PROVIDER_EDIT: string = 'provider/edit';

export const PROVIDER_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'name',
    inputType: 'text',
  },
  {
    name: 'firstName',
    label: 'firstName',
    inputType: 'text',
  },
  {
    name: 'lastName',
    label: 'lastName',
    inputType: 'text',
  },
  {
    name: 'officePhoneNumber',
    label: 'officePhoneNumber',
    inputType: 'text',
  },
  {
    name: 'fax',
    label: 'fax',
    inputType: 'text',
  },
  {
    name: 'mobileNumber',
    label: 'mobileNumber',
    inputType: 'text',
  },
  {
    name: 'picture',
    label: 'picture',
    inputType: 'text',
  },
  {
    name: 'address',
    label: 'address',
    inputType: 'text',
  },
  {
    name: 'brands',
    label: 'brands',
    inputType: 'text',
  },
];

//Report

export const REPORT = 'report';
export const REPORTS = 'reports';
export const REPORT_ADD: string = 'report/add';
export const REPORT_EDIT: string = 'report/edit';

export const REPORT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'description',
    label: 'description',
    inputType: 'text',
  },
  {
    name: 'registrationDate',
    label: 'registrationDate',
    inputType: 'text',
  },
  {
    name: 'userId',
    label: 'userId',
    inputType: 'text',
  },
];

//RESERVATION

export const RESERVATION = 'reservation';
export const RESERVATIONS = 'reservations';
export const RESERVATION_ADD: string = 'reservation/add';
export const RESERVATION_EDIT: string = 'reservation/edit';

export const RESERVATION_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'name',
    inputType: 'text',
  },
  {
    name: 'date',
    label: 'date',
    inputType: 'text',
  },
  {
    name: 'clientsQuantity',
    label: 'clientsQuantity',
    inputType: 'text',
  },
  {
    name: 'restaurantId',
    label: 'restaurantId',
    inputType: 'text',
  },
  {
    name: 'tableId',
    label: 'tableId',
    inputType: 'text',
  },
];

//ROLE

export const ROLE = 'role';
export const ROLES = 'roles';
export const ROLE_ADD: string = 'role/add';
export const ROLE_EDIT: string = 'role/edit';

export const ROLE_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'name',
    inputType: 'text',
  },
];

//TABLE

export const TABLE = 'table';
export const TABLES = 'tables';
export const TABLE_ADD: string = 'table/add';
export const TABLE_EDIT: string = 'table/edit';

export const TABLE_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'name',
    inputType: 'text',
  },
  {
    name: 'tableNumber',
    label: 'tableNumber',
    inputType: 'text',
  },
  {
    name: 'capacity',
    label: 'capacity',
    inputType: 'text',
  },
  {
    name: 'restaurantId',
    label: 'restaurantId',
    inputType: 'text',
  },
  {
    name: 'isAvailable',
    label: 'isAvailable',
    inputType: 'text',
  },
];

export const getHeaderStructure = () => {
  // lo dejo function para poder validar los campos basados en el rol

  return [
    {
      label: 'Usuarios',
      links: [
        {
          label: 'Lista Usuarios',
          value: USERS,
        },
        {
          label: 'Agregar Usuario',
          value: USER_ADD,
        },
      ],
    },
    {
      label: 'Restaurantes',
      links: [
        {
          label: 'Lista Restaurantes',
          value: RESTAURANTS,
        },
        {
          label: 'Agregar Restaurante',
          value: RESTAURANT_ADD,
        },
      ],
    },
    {
      label: 'Facturas',
      links: [
        {
          label: 'Lista Facturas',
          value: ACCOUNTS,
        },
        {
          label: 'Agregar Factura',
          value: ACCOUNT_ADD,
        },
        {
          label: 'Buscar Factura',
          value: ACCOUNT,
        },
      ],
    },
    {
      label: 'Clientes',
      links: [
        {
          label: 'Lista Clientes',
          value: CLIENTS,
        },
        {
          label: 'Agregar Cliente',
          value: CLIENT_ADD,
        },
      ],
    },
    {
      label: 'Productos',
      links: [
        {
          label: 'Lista Productos',
          value: PRODUCTS,
        },
        {
          label: 'Agregar Producto',
          value: PRODUCT_ADD,
        },
      ],
    },
    {
      label: 'Cajas',
      links: [
        {
          label: 'Lista Cajas',
          value: CASHIERS,
        },
        {
          label: 'Agregar Caja',
          value: CASHIER_ADD,
        },
      ],
    },
    {
      label: 'Provedores',
      links: [
        {
          label: 'Lista Provedores',
          value: PROVIDER,
        },
        {
          label: 'Agregar Provedor',
          value: PRODUCT_ADD,
        },
      ],
    },
    {
      label: 'Empleados',
      links: [
        {
          label: 'Lista Empleados',
          value: EMPLOYEES,
        },
        {
          label: 'Agregar Empleado',
          value: EMPLOYEE_ADD,
        },
      ],
    },
  ];
};