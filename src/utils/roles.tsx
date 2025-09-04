export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MANAGER: 'manager',
  GUEST: 'guest',
};

export const PERMISSIONS = {
    VIEW_DASHBOARD: 'view_dashboard',
    VIEW_PRODUCTS: 'view_products',
    EDIT_PRODUCTS: 'edit_products',
    DELETE_PRODUCTS: 'delete_products',
};

export const ROLE_PERMISSIONS: Record<string, string[]> = {
    [ROLES.ADMIN]: [
        PERMISSIONS.VIEW_DASHBOARD,
        PERMISSIONS.VIEW_PRODUCTS,
        PERMISSIONS.EDIT_PRODUCTS,
        PERMISSIONS.DELETE_PRODUCTS,
    ],
    [ROLES.MANAGER]: [
        PERMISSIONS.VIEW_DASHBOARD,
        PERMISSIONS.VIEW_PRODUCTS,
        PERMISSIONS.EDIT_PRODUCTS,
    ],
    [ROLES.USER]: [
        PERMISSIONS.VIEW_DASHBOARD,
        PERMISSIONS.VIEW_PRODUCTS,
    ],
    [ROLES.GUEST]: [ PERMISSIONS.VIEW_DASHBOARD],
}