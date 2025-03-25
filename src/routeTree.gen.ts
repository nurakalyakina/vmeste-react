/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PricesImport } from './routes/prices'
import { Route as DocumentsImport } from './routes/documents'
import { Route as ContactsImport } from './routes/contacts'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const PricesRoute = PricesImport.update({
  id: '/prices',
  path: '/prices',
  getParentRoute: () => rootRoute,
} as any)

const DocumentsRoute = DocumentsImport.update({
  id: '/documents',
  path: '/documents',
  getParentRoute: () => rootRoute,
} as any)

const ContactsRoute = ContactsImport.update({
  id: '/contacts',
  path: '/contacts',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contacts': {
      id: '/contacts'
      path: '/contacts'
      fullPath: '/contacts'
      preLoaderRoute: typeof ContactsImport
      parentRoute: typeof rootRoute
    }
    '/documents': {
      id: '/documents'
      path: '/documents'
      fullPath: '/documents'
      preLoaderRoute: typeof DocumentsImport
      parentRoute: typeof rootRoute
    }
    '/prices': {
      id: '/prices'
      path: '/prices'
      fullPath: '/prices'
      preLoaderRoute: typeof PricesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contacts': typeof ContactsRoute
  '/documents': typeof DocumentsRoute
  '/prices': typeof PricesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contacts': typeof ContactsRoute
  '/documents': typeof DocumentsRoute
  '/prices': typeof PricesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contacts': typeof ContactsRoute
  '/documents': typeof DocumentsRoute
  '/prices': typeof PricesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/contacts' | '/documents' | '/prices'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/contacts' | '/documents' | '/prices'
  id: '__root__' | '/' | '/about' | '/contacts' | '/documents' | '/prices'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ContactsRoute: typeof ContactsRoute
  DocumentsRoute: typeof DocumentsRoute
  PricesRoute: typeof PricesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ContactsRoute: ContactsRoute,
  DocumentsRoute: DocumentsRoute,
  PricesRoute: PricesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/contacts",
        "/documents",
        "/prices"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contacts": {
      "filePath": "contacts.tsx"
    },
    "/documents": {
      "filePath": "documents.tsx"
    },
    "/prices": {
      "filePath": "prices.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
