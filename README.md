# Angular-Module-Admin

This module helps you to manage the site properties, such as roles, permissions, users, categories, languages, menus

**Required Packages**
*--no required packages--*

**Required Modules**
1. fmblog-frontend-navigation
2. fmblog-frontend-shared
3. Angular-Module-Core

**Functionalities**
1. Manage roles
2. Manage permissions
3. Manage users
4. Manage categories
5. Manage languages
6. Manage menus

**Installation**
1. Add the module to Angular Project as a submodule. 
`git submodule add https://github.com/bwqr/Angular-Module-Admin src/app/admin`
2. Import `AdminModule` from inside `AppModule`.
3. Add following routes to `src/app/routes.ts`  
`   
admin: {
    url: 'admin/',
    languages: { url: 'languages/' },
    categories: { url: 'categories/' },
    menus: { url: 'menus/' },
    users: { url: 'users/' },
    user: { url: 'user/'},
    roles: { url: 'roles/' },
    role: { url: 'role/' },
    permissions: { url: 'permissions/' },
    permission: { url: 'permission/' }
}
`